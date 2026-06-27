-- ═══════════════════════════════════════════════════════
-- TuteurIA — Setup Administrateur
-- Coller ce script dans l'éditeur SQL de Supabase
-- ═══════════════════════════════════════════════════════

-- 1. Ajouter la colonne is_admin sur profiles
ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS is_admin BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS is_blocked BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS blocked_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS block_reason TEXT;

-- 2. Rendre ton compte admin (remplace par ton email)
UPDATE profiles
SET is_admin = TRUE
WHERE email = 'lekaneange@gmail.com';

-- 3. Vue utilitaire pour l'admin (liste tous les users + stats)
CREATE OR REPLACE VIEW admin_users_view AS
SELECT
  p.id,
  p.email,
  p.full_name,
  p.level,
  p.is_admin,
  p.is_blocked,
  p.blocked_at,
  p.block_reason,
  p.created_at,
  COUNT(qr.id)           AS total_quizzes,
  ROUND(AVG(qr.score))   AS avg_score
FROM profiles p
LEFT JOIN quiz_results qr ON qr.user_id = p.id
GROUP BY p.id, p.email, p.full_name, p.level,
         p.is_admin, p.is_blocked, p.blocked_at, p.block_reason, p.created_at
ORDER BY p.created_at DESC;

-- 4. RLS : seuls les admins peuvent lire la vue et modifier is_admin / is_blocked
-- (la vue hérite des RLS de profiles)

-- Policy : admin peut lire tous les profils
DROP POLICY IF EXISTS "Admin read all profiles" ON profiles;
CREATE POLICY "Admin read all profiles" ON profiles
  FOR SELECT
  USING (
    auth.uid() = id
    OR
    EXISTS (
      SELECT 1 FROM profiles p2
      WHERE p2.id = auth.uid() AND p2.is_admin = TRUE
    )
  );

-- Policy : admin peut mettre à jour n'importe quel profil (blocage, rôle)
DROP POLICY IF EXISTS "Admin update any profile" ON profiles;
CREATE POLICY "Admin update any profile" ON profiles
  FOR UPDATE
  USING (
    auth.uid() = id
    OR
    EXISTS (
      SELECT 1 FROM profiles p2
      WHERE p2.id = auth.uid() AND p2.is_admin = TRUE
    )
  );

-- Policy : admin peut supprimer un profil
DROP POLICY IF EXISTS "Admin delete profile" ON profiles;
CREATE POLICY "Admin delete profile" ON profiles
  FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM profiles p2
      WHERE p2.id = auth.uid() AND p2.is_admin = TRUE
    )
  );

-- 5. Policy quiz_results : admin peut tout lire
DROP POLICY IF EXISTS "Admin read all quiz results" ON quiz_results;
CREATE POLICY "Admin read all quiz results" ON quiz_results
  FOR SELECT
  USING (
    auth.uid() = user_id
    OR
    EXISTS (
      SELECT 1 FROM profiles p2
      WHERE p2.id = auth.uid() AND p2.is_admin = TRUE
    )
  );
