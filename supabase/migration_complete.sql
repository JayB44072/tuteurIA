-- ═══════════════════════════════════════════════════════════════════════════════
-- TuteurIA — Migration complète et finale
-- Coller dans SQL Editor Supabase → Run
-- ATTENTION : supprime et recrée tout depuis zéro
-- ═══════════════════════════════════════════════════════════════════════════════


-- ── 0. NETTOYAGE COMPLET ──────────────────────────────────────────────────────

DROP VIEW  IF EXISTS admin_users_view CASCADE;
DROP TABLE IF EXISTS quiz_results       CASCADE;
DROP TABLE IF EXISTS profiles           CASCADE;

DROP TRIGGER  IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS handle_new_user()    CASCADE;


-- ── 1. TABLE profiles ─────────────────────────────────────────────────────────

CREATE TABLE profiles (
  id           UUID        PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name    TEXT,
  level        TEXT        NOT NULL DEFAULT 'Baccalauréat',
  is_admin     BOOLEAN     NOT NULL DEFAULT FALSE,
  is_blocked   BOOLEAN     NOT NULL DEFAULT FALSE,
  blocked_at   TIMESTAMPTZ,
  block_reason TEXT,
  preferences  JSONB       NOT NULL DEFAULT '{}',
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);


-- ── 2. TABLE quiz_results ─────────────────────────────────────────────────────

CREATE TABLE quiz_results (
  id           UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID        NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  quiz_id      TEXT        NOT NULL,
  subject_id   TEXT,
  score        INTEGER     NOT NULL CHECK (score >= 0 AND score <= 100),
  total_q      INTEGER     NOT NULL DEFAULT 0,
  correct_q    INTEGER     NOT NULL DEFAULT 0,
  time_taken   INTEGER,
  completed_at TIMESTAMPTZ NOT NULL DEFAULT now()
);


-- ── 3. TRIGGER : créer profil automatiquement à l'inscription ────────────────

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

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();


-- ── 4. VUE admin_users_view ───────────────────────────────────────────────────

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
  COALESCE(q.total_quizzes, 0) AS total_quizzes,
  q.avg_score
FROM profiles p
JOIN auth.users u ON u.id = p.id
LEFT JOIN (
  SELECT
    user_id,
    COUNT(*)          AS total_quizzes,
    ROUND(AVG(score)) AS avg_score
  FROM quiz_results
  GROUP BY user_id
) q ON q.user_id = p.id
ORDER BY p.created_at DESC;


-- ── 5. RLS ────────────────────────────────────────────────────────────────────

ALTER TABLE profiles     ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;

-- profiles : SELECT (soi-même ou admin)
CREATE POLICY "profiles_select" ON profiles FOR SELECT
  USING (
    auth.uid() = id
    OR EXISTS (SELECT 1 FROM profiles a WHERE a.id = auth.uid() AND a.is_admin = TRUE)
  );

-- profiles : INSERT (soi-même uniquement, via trigger)
CREATE POLICY "profiles_insert" ON profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- profiles : UPDATE (soi-même ou admin)
CREATE POLICY "profiles_update" ON profiles FOR UPDATE
  USING (
    auth.uid() = id
    OR EXISTS (SELECT 1 FROM profiles a WHERE a.id = auth.uid() AND a.is_admin = TRUE)
  );

-- profiles : DELETE (admin uniquement)
CREATE POLICY "profiles_delete" ON profiles FOR DELETE
  USING (EXISTS (SELECT 1 FROM profiles a WHERE a.id = auth.uid() AND a.is_admin = TRUE));

-- quiz_results : INSERT (soi-même)
CREATE POLICY "quiz_results_insert" ON quiz_results FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- quiz_results : SELECT (soi-même ou admin)
CREATE POLICY "quiz_results_select" ON quiz_results FOR SELECT
  USING (
    auth.uid() = user_id
    OR EXISTS (SELECT 1 FROM profiles a WHERE a.id = auth.uid() AND a.is_admin = TRUE)
  );

-- quiz_results : DELETE (admin uniquement)
CREATE POLICY "quiz_results_delete" ON quiz_results FOR DELETE
  USING (EXISTS (SELECT 1 FROM profiles a WHERE a.id = auth.uid() AND a.is_admin = TRUE));


-- ── 6. DROITS SUR LA VUE (pour que les admins puissent la lire) ──────────────

GRANT SELECT ON admin_users_view TO authenticated;


-- ── 7. ADMIN : accorder les droits à lekaneange@gmail.com ────────────────────
--   (à exécuter UNE FOIS que ce compte existe dans auth.users)

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM auth.users WHERE email = 'lekaneange@gmail.com') THEN
    UPDATE profiles
    SET is_admin = TRUE
    WHERE id = (SELECT id FROM auth.users WHERE email = 'lekaneange@gmail.com' LIMIT 1);
    RAISE NOTICE 'Admin accordé à lekaneange@gmail.com';
  ELSE
    RAISE NOTICE 'Compte lekaneange@gmail.com introuvable — inscris-toi dabord puis relance le bloc 7';
  END IF;
END;
$$;
