-- ═══════════════════════════════════════════════════════════════════
-- TuteurIA — Migration complète base de données
-- Coller dans l'éditeur SQL Supabase et exécuter UNE SEULE FOIS
-- ═══════════════════════════════════════════════════════════════════

-- ── 1. Table profiles (créée par Supabase Auth trigger normalement,
--       on s'assure juste que les colonnes admin existent) ──────────
CREATE TABLE IF NOT EXISTS profiles (
  id         UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name  TEXT,
  level      TEXT DEFAULT 'Baccalauréat',
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS level        TEXT        DEFAULT 'Baccalauréat',
  ADD COLUMN IF NOT EXISTS is_admin     BOOLEAN     DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS is_blocked   BOOLEAN     DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS blocked_at   TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS block_reason TEXT,
  ADD COLUMN IF NOT EXISTS preferences  JSONB       DEFAULT '{}'::jsonb;

-- ── 2. Table quiz_results ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS quiz_results (
  id           UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID        NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  quiz_id      TEXT        NOT NULL,
  subject_id   TEXT,
  score        INTEGER     NOT NULL CHECK (score >= 0 AND score <= 100),
  total_q      INTEGER     NOT NULL DEFAULT 0,
  correct_q    INTEGER     NOT NULL DEFAULT 0,
  time_taken   INTEGER,
  completed_at TIMESTAMPTZ DEFAULT now()
);

-- ── 3. Trigger : créer un profil automatiquement à l'inscription ──
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO profiles (id, full_name, level)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'level', 'Baccalauréat')
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- ── 4. Accorder les droits admin à lekaneange@gmail.com ───────────
UPDATE profiles
SET is_admin = TRUE
WHERE id = (
  SELECT id FROM auth.users
  WHERE email = 'lekaneange@gmail.com'
  LIMIT 1
);

-- ── 5. Vue admin (joint auth.users pour l'email) ──────────────────
DROP VIEW IF EXISTS admin_users_view;
CREATE VIEW admin_users_view AS
SELECT
  p.id,
  u.email,
  p.full_name,
  p.level,
  p.is_admin,
  p.is_blocked,
  p.blocked_at,
  p.block_reason,
  p.created_at,
  COALESCE(q.total_quizzes, 0)  AS total_quizzes,
  q.avg_score
FROM profiles p
JOIN  auth.users u  ON u.id = p.id
LEFT JOIN (
  SELECT
    user_id,
    COUNT(*)             AS total_quizzes,
    ROUND(AVG(score))    AS avg_score
  FROM quiz_results
  GROUP BY user_id
) q ON q.user_id = p.id
ORDER BY p.created_at DESC;

-- ── 6. RLS ────────────────────────────────────────────────────────
ALTER TABLE profiles     ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;

-- profiles : lecture
DROP POLICY IF EXISTS "profiles_select" ON profiles;
CREATE POLICY "profiles_select" ON profiles FOR SELECT
  USING (
    auth.uid() = id
    OR EXISTS (SELECT 1 FROM profiles adm WHERE adm.id = auth.uid() AND adm.is_admin = TRUE)
  );

-- profiles : mise à jour
DROP POLICY IF EXISTS "profiles_update" ON profiles;
CREATE POLICY "profiles_update" ON profiles FOR UPDATE
  USING (
    auth.uid() = id
    OR EXISTS (SELECT 1 FROM profiles adm WHERE adm.id = auth.uid() AND adm.is_admin = TRUE)
  );

-- profiles : suppression (admin uniquement)
DROP POLICY IF EXISTS "profiles_delete" ON profiles;
CREATE POLICY "profiles_delete" ON profiles FOR DELETE
  USING (EXISTS (SELECT 1 FROM profiles adm WHERE adm.id = auth.uid() AND adm.is_admin = TRUE));

-- profiles : insertion (trigger auto, ou direct)
DROP POLICY IF EXISTS "profiles_insert" ON profiles;
CREATE POLICY "profiles_insert" ON profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- quiz_results : insertion (utilisateur lui-même)
DROP POLICY IF EXISTS "quiz_results_insert" ON quiz_results;
CREATE POLICY "quiz_results_insert" ON quiz_results FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- quiz_results : lecture (soi-même ou admin)
DROP POLICY IF EXISTS "quiz_results_select" ON quiz_results;
CREATE POLICY "quiz_results_select" ON quiz_results FOR SELECT
  USING (
    auth.uid() = user_id
    OR EXISTS (SELECT 1 FROM profiles adm WHERE adm.id = auth.uid() AND adm.is_admin = TRUE)
  );
