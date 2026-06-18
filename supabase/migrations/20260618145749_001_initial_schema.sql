
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles table (extends auth.users)
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  avatar_url TEXT,
  phone TEXT,
  role TEXT DEFAULT 'student' CHECK (role IN ('student', 'teacher', 'admin', 'school')),
  referral_code TEXT UNIQUE,
  referred_by UUID REFERENCES profiles(id),
  plan TEXT DEFAULT 'free' CHECK (plan IN ('free', 'student_premium', 'excellence_premium', 'school')),
  plan_expires_at TIMESTAMPTZ,
  language TEXT DEFAULT 'fr' CHECK (language IN ('fr', 'en')),
  theme TEXT DEFAULT 'light' CHECK (theme IN ('light', 'dark', 'economy')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Subjects table
CREATE TABLE IF NOT EXISTS subjects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_fr TEXT NOT NULL,
  name_en TEXT NOT NULL,
  level TEXT NOT NULL CHECK (level IN ('bac', 'gce_alevel', 'both')),
  description_fr TEXT,
  description_en TEXT,
  icon TEXT,
  color TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Chapters table
CREATE TABLE IF NOT EXISTS chapters (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  subject_id UUID REFERENCES subjects(id) ON DELETE CASCADE,
  title_fr TEXT NOT NULL,
  title_en TEXT NOT NULL,
  description_fr TEXT,
  description_en TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Lessons table
CREATE TABLE IF NOT EXISTS lessons (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  chapter_id UUID REFERENCES chapters(id) ON DELETE CASCADE,
  title_fr TEXT NOT NULL,
  title_en TEXT NOT NULL,
  content_fr TEXT,
  content_en TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Quizzes table
CREATE TABLE IF NOT EXISTS quizzes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  subject_id UUID REFERENCES subjects(id) ON DELETE CASCADE,
  chapter_id UUID REFERENCES chapters(id) ON DELETE SET NULL,
  lesson_id UUID REFERENCES lessons(id) ON DELETE SET NULL,
  title_fr TEXT NOT NULL,
  title_en TEXT NOT NULL,
  difficulty TEXT DEFAULT 'medium' CHECK (difficulty IN ('easy', 'medium', 'hard')),
  ai_generated BOOLEAN DEFAULT FALSE,
  created_by UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Quiz questions table
CREATE TABLE IF NOT EXISTS quiz_questions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  quiz_id UUID REFERENCES quizzes(id) ON DELETE CASCADE,
  question_fr TEXT NOT NULL,
  question_en TEXT NOT NULL,
  options JSONB NOT NULL,
  correct_answer INTEGER NOT NULL,
  explanation_fr TEXT,
  explanation_en TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Quiz attempts table
CREATE TABLE IF NOT EXISTS quiz_attempts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  quiz_id UUID REFERENCES quizzes(id) ON DELETE CASCADE,
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  time_spent_seconds INTEGER,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Quiz answers table
CREATE TABLE IF NOT EXISTS quiz_answers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  attempt_id UUID REFERENCES quiz_attempts(id) ON DELETE CASCADE,
  question_id UUID REFERENCES quiz_questions(id) ON DELETE CASCADE,
  selected_answer INTEGER,
  is_correct BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- AI sessions table
CREATE TABLE IF NOT EXISTS ai_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('chat', 'quiz_generation', 'explanation', 'study_plan', 'summary', 'coaching')),
  title TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- AI messages table
CREATE TABLE IF NOT EXISTS ai_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id UUID REFERENCES ai_sessions(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Progress records table
CREATE TABLE IF NOT EXISTS progress_records (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  subject_id UUID REFERENCES subjects(id) ON DELETE CASCADE,
  chapter_id UUID REFERENCES chapters(id) ON DELETE SET NULL,
  completion_percent INTEGER DEFAULT 0,
  quiz_average INTEGER DEFAULT 0,
  weak_topics JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Study plans table
CREATE TABLE IF NOT EXISTS study_plans (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  start_date DATE,
  end_date DATE,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'paused')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Study plan items table
CREATE TABLE IF NOT EXISTS study_plan_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  plan_id UUID REFERENCES study_plans(id) ON DELETE CASCADE,
  subject_id UUID REFERENCES subjects(id) ON DELETE CASCADE,
  chapter_id UUID REFERENCES chapters(id) ON DELETE SET NULL,
  lesson_id UUID REFERENCES lessons(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  scheduled_date DATE,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Notifications table
CREATE TABLE IF NOT EXISTS notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('system', 'pedagogical', 'ai', 'push')),
  title_fr TEXT NOT NULL,
  title_en TEXT NOT NULL,
  message_fr TEXT NOT NULL,
  message_en TEXT NOT NULL,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Referrals table
CREATE TABLE IF NOT EXISTS referrals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  referrer_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  referred_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed')),
  reward_days INTEGER DEFAULT 7,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Subscriptions table
CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  plan TEXT NOT NULL CHECK (plan IN ('free', 'student_premium', 'excellence_premium', 'school')),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'cancelled', 'expired')),
  payment_method TEXT CHECK (payment_method IN ('mtn_momo', 'orange_money', 'card')),
  payment_reference TEXT,
  amount INTEGER,
  starts_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- User settings table
CREATE TABLE IF NOT EXISTS user_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  email_notifications BOOLEAN DEFAULT TRUE,
  push_notifications BOOLEAN DEFAULT TRUE,
  study_reminders BOOLEAN DEFAULT TRUE,
  ai_usage_count INTEGER DEFAULT 0,
  ai_daily_limit INTEGER DEFAULT 10,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE chapters ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE progress_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE study_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE study_plan_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE referrals ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_settings ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "select_own_profile" ON profiles FOR SELECT
  TO authenticated USING (auth.uid() = id);
CREATE POLICY "insert_own_profile" ON profiles FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = id);
CREATE POLICY "update_own_profile" ON profiles FOR UPDATE
  TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);
CREATE POLICY "delete_own_profile" ON profiles FOR DELETE
  TO authenticated USING (auth.uid() = id);

-- Public read for subjects
CREATE POLICY "select_subjects" ON subjects FOR SELECT
  TO authenticated USING (true);

-- Public read for chapters
CREATE POLICY "select_chapters" ON chapters FOR SELECT
  TO authenticated USING (true);

-- Public read for lessons
CREATE POLICY "select_lessons" ON lessons FOR SELECT
  TO authenticated USING (true);

-- Quizzes policies
CREATE POLICY "select_quizzes" ON quizzes FOR SELECT
  TO authenticated USING (true);
CREATE POLICY "insert_quizzes" ON quizzes FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = created_by);

-- Quiz questions policies
CREATE POLICY "select_quiz_questions" ON quiz_questions FOR SELECT
  TO authenticated USING (true);

-- Quiz attempts policies
CREATE POLICY "select_own_attempts" ON quiz_attempts FOR SELECT
  TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "insert_own_attempts" ON quiz_attempts FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

-- Quiz answers policies
CREATE POLICY "select_own_answers" ON quiz_answers FOR SELECT
  TO authenticated USING (EXISTS (
    SELECT 1 FROM quiz_attempts WHERE quiz_attempts.id = quiz_answers.attempt_id AND quiz_attempts.user_id = auth.uid()
  ));
CREATE POLICY "insert_own_answers" ON quiz_answers FOR INSERT
  TO authenticated WITH CHECK (EXISTS (
    SELECT 1 FROM quiz_attempts WHERE quiz_attempts.id = quiz_answers.attempt_id AND quiz_attempts.user_id = auth.uid()
  ));

-- AI sessions policies
CREATE POLICY "select_own_ai_sessions" ON ai_sessions FOR SELECT
  TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "insert_own_ai_sessions" ON ai_sessions FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "update_own_ai_sessions" ON ai_sessions FOR UPDATE
  TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "delete_own_ai_sessions" ON ai_sessions FOR DELETE
  TO authenticated USING (auth.uid() = user_id);

-- AI messages policies
CREATE POLICY "select_own_ai_messages" ON ai_messages FOR SELECT
  TO authenticated USING (EXISTS (
    SELECT 1 FROM ai_sessions WHERE ai_sessions.id = ai_messages.session_id AND ai_sessions.user_id = auth.uid()
  ));
CREATE POLICY "insert_own_ai_messages" ON ai_messages FOR INSERT
  TO authenticated WITH CHECK (EXISTS (
    SELECT 1 FROM ai_sessions WHERE ai_sessions.id = ai_messages.session_id AND ai_sessions.user_id = auth.uid()
  ));

-- Progress records policies
CREATE POLICY "select_own_progress" ON progress_records FOR SELECT
  TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "insert_own_progress" ON progress_records FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "update_own_progress" ON progress_records FOR UPDATE
  TO authenticated USING (auth.uid() = user_id);

-- Study plans policies
CREATE POLICY "select_own_plans" ON study_plans FOR SELECT
  TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "insert_own_plans" ON study_plans FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "update_own_plans" ON study_plans FOR UPDATE
  TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "delete_own_plans" ON study_plans FOR DELETE
  TO authenticated USING (auth.uid() = user_id);

-- Study plan items policies
CREATE POLICY "select_own_plan_items" ON study_plan_items FOR SELECT
  TO authenticated USING (EXISTS (
    SELECT 1 FROM study_plans WHERE study_plans.id = study_plan_items.plan_id AND study_plans.user_id = auth.uid()
  ));
CREATE POLICY "insert_own_plan_items" ON study_plan_items FOR INSERT
  TO authenticated WITH CHECK (EXISTS (
    SELECT 1 FROM study_plans WHERE study_plans.id = study_plan_items.plan_id AND study_plans.user_id = auth.uid()
  ));

-- Notifications policies
CREATE POLICY "select_own_notifications" ON notifications FOR SELECT
  TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "update_own_notifications" ON notifications FOR UPDATE
  TO authenticated USING (auth.uid() = user_id);

-- Referrals policies
CREATE POLICY "select_own_referrals" ON referrals FOR SELECT
  TO authenticated USING (auth.uid() = referrer_id OR auth.uid() = referred_id);

-- Subscriptions policies
CREATE POLICY "select_own_subscriptions" ON subscriptions FOR SELECT
  TO authenticated USING (auth.uid() = user_id);

-- User settings policies
CREATE POLICY "select_own_settings" ON user_settings FOR SELECT
  TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "insert_own_settings" ON user_settings FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "update_own_settings" ON user_settings FOR UPDATE
  TO authenticated USING (auth.uid() = user_id);

-- Function to create user profile after signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, referral_code, plan, created_at, updated_at)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', NEW.email),
    'REF' || SUBSTRING(MD5(NEW.id::text) FROM 1 FOR 8),
    'free',
    NOW(),
    NOW()
  );
  INSERT INTO public.user_settings (user_id, ai_daily_limit)
  VALUES (NEW.id, 10);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert initial subjects
INSERT INTO subjects (name_fr, name_en, level, description_fr, description_en, icon, color) VALUES
  ('Mathematiques', 'Mathematics', 'both', 'Algebre, Geometrie, Analyse, Probabilites', 'Algebra, Geometry, Calculus, Probability', 'Calculator', 'blue'),
  ('Physique', 'Physics', 'both', 'Mecanique, Electricite, Optique, Thermodynamique', 'Mechanics, Electricity, Optics, Thermodynamics', 'Atom', 'emerald'),
  ('Chimie', 'Chemistry', 'both', 'Chimie organique, inorganique, reactions', 'Organic, Inorganic Chemistry, Reactions', 'FlaskConical', 'amber'),
  ('Biologie', 'Biology', 'both', 'Zoologie, Botanique, Genetique, Ecologie', 'Zoology, Botany, Genetics, Ecology', 'Dna', 'rose'),
  ('Histoire', 'History', 'both', 'Histoire du monde, Afrique, Europe', 'World History, Africa, Europe', 'BookOpen', 'orange'),
  ('Geographie', 'Geography', 'both', 'Geographie physique, humaine, cartographie', 'Physical, Human Geography, Cartography', 'Globe', 'teal'),
  ('Francais', 'French', 'both', 'Litterature, Grammaire, Expression ecrite', 'Literature, Grammar, Written Expression', 'PenTool', 'indigo'),
  ('Anglais', 'English', 'both', 'Literature, Grammar, Comprehension', 'Literature, Grammar, Comprehension', 'Languages', 'cyan'),
  ('Philosophie', 'Philosophy', 'bac', 'Logique, Ethique, Metaphysique', 'Logic, Ethics, Metaphysics', 'Brain', 'violet'),
  ('Economie', 'Economics', 'both', 'Microeconomie, Macroeconomie, Economie du developpement', 'Micro, Macro Economics, Development', 'TrendingUp', 'green');

