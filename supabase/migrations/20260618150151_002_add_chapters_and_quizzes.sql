
-- Insert chapters for Mathematics
INSERT INTO chapters (subject_id, title_fr, title_en, description_fr, description_en, order_index) VALUES
  ((SELECT id FROM subjects WHERE name_fr = 'Mathematiques'), 'Algebre', 'Algebra', 'Equations, polynomes, fonctions', 'Equations, polynomials, functions', 1),
  ((SELECT id FROM subjects WHERE name_fr = 'Mathematiques'), 'Geometrie', 'Geometry', 'Plans, espaces, transformations', 'Planes, spaces, transformations', 2),
  ((SELECT id FROM subjects WHERE name_fr = 'Mathematiques'), 'Analyse', 'Calculus', 'Limites, derivees, integrales', 'Limits, derivatives, integrals', 3),
  ((SELECT id FROM subjects WHERE name_fr = 'Mathematiques'), 'Probabilites', 'Probability', 'Denombrement, lois de probabilite', 'Counting, probability laws', 4);

-- Insert chapters for Physics
INSERT INTO chapters (subject_id, title_fr, title_en, description_fr, description_en, order_index) VALUES
  ((SELECT id FROM subjects WHERE name_fr = 'Physique'), 'Mecanique', 'Mechanics', 'Cinematique, dynamique, energie', 'Kinematics, dynamics, energy', 1),
  ((SELECT id FROM subjects WHERE name_fr = 'Physique'), 'Electricite', 'Electricity', 'Circuits, electrostatique, magnetisme', 'Circuits, electrostatics, magnetism', 2),
  ((SELECT id FROM subjects WHERE name_fr = 'Physique'), 'Optique', 'Optics', 'Reflexion, refraction, lentilles', 'Reflection, refraction, lenses', 3),
  ((SELECT id FROM subjects WHERE name_fr = 'Physique'), 'Thermodynamique', 'Thermodynamics', 'Chaleur, entropie, machines thermiques', 'Heat, entropy, heat engines', 4);

-- Insert chapters for Chemistry
INSERT INTO chapters (subject_id, title_fr, title_en, description_fr, description_en, order_index) VALUES
  ((SELECT id FROM subjects WHERE name_fr = 'Chimie'), 'Chimie generale', 'General Chemistry', 'Atomistique, liaisons, reactions', 'Atomic theory, bonds, reactions', 1),
  ((SELECT id FROM subjects WHERE name_fr = 'Chimie'), 'Chimie organique', 'Organic Chemistry', 'Hydrocarbures, fonctions, synthese', 'Hydrocarbons, functional groups, synthesis', 2),
  ((SELECT id FROM subjects WHERE name_fr = 'Chimie'), 'Chimie minerale', 'Inorganic Chemistry', 'Acides, bases, oxydoreduction', 'Acids, bases, redox', 3),
  ((SELECT id FROM subjects WHERE name_fr = 'Chimie'), 'Cinetique chimique', 'Chemical Kinetics', 'Vitesse, catalyse, equilibre', 'Rate, catalysis, equilibrium', 4);

-- Insert a sample quiz for Mathematics
INSERT INTO quizzes (subject_id, chapter_id, title_fr, title_en, difficulty, created_at) VALUES
  ((SELECT id FROM subjects WHERE name_fr = 'Mathematiques'),
   (SELECT id FROM chapters WHERE title_fr = 'Algebre'),
   'Quiz Algebre - Niveau debutant',
   'Algebra Quiz - Beginner Level',
   'easy',
   NOW());

-- Insert sample quiz questions
INSERT INTO quiz_questions (quiz_id, question_fr, question_en, options, correct_answer, explanation_fr, explanation_en, order_index) VALUES
  ((SELECT id FROM quizzes WHERE title_fr = 'Quiz Algebre - Niveau debutant'),
   'Quelle est la solution de l''equation 2x + 4 = 12 ?',
   'What is the solution of the equation 2x + 4 = 12?',
   '["x = 2", "x = 4", "x = 6", "x = 8"]',
   1,
   '2x + 4 = 12 => 2x = 8 => x = 4',
   '2x + 4 = 12 => 2x = 8 => x = 4',
   0),
  ((SELECT id FROM quizzes WHERE title_fr = 'Quiz Algebre - Niveau debutant'),
   'Quel est le discriminant de x2 + 5x + 6 = 0 ?',
   'What is the discriminant of x2 + 5x + 6 = 0?',
   '["1", "25", "49", "0"]',
   0,
   'Delta = b2 - 4ac = 25 - 24 = 1',
   'Delta = b2 - 4ac = 25 - 24 = 1',
   1),
  ((SELECT id FROM quizzes WHERE title_fr = 'Quiz Algebre - Niveau debutant'),
   'Quelle est la factorisation de x2 - 9 ?',
   'What is the factorization of x2 - 9?',
   '["(x-3)(x+3)", "(x-3)2", "(x+3)2", "(x-9)(x+1)"]',
   0,
   'C''est une difference de carres: a2 - b2 = (a-b)(a+b)',
   'It is a difference of squares: a2 - b2 = (a-b)(a+b)',
   2),
  ((SELECT id FROM quizzes WHERE title_fr = 'Quiz Algebre - Niveau debutant'),
   'Si f(x) = 3x + 2, que vaut f(4) ?',
   'If f(x) = 3x + 2, what is f(4)?',
   '["10", "12", "14", "16"]',
   2,
   'f(4) = 3(4) + 2 = 12 + 2 = 14',
   'f(4) = 3(4) + 2 = 12 + 2 = 14',
   3);

-- Insert a sample quiz for Physics
INSERT INTO quizzes (subject_id, chapter_id, title_fr, title_en, difficulty, created_at) VALUES
  ((SELECT id FROM subjects WHERE name_fr = 'Physique'),
   (SELECT id FROM chapters WHERE title_fr = 'Mecanique'),
   'Quiz Mecanique - Cinematique',
   'Mechanics Quiz - Kinematics',
   'medium',
   NOW());

INSERT INTO quiz_questions (quiz_id, question_fr, question_en, options, correct_answer, explanation_fr, explanation_en, order_index) VALUES
  ((SELECT id FROM quizzes WHERE title_fr = 'Quiz Mecanique - Cinematique'),
   'Quelle est la formule de la vitesse moyenne ?',
   'What is the formula for average velocity?',
   '["v = d/t", "v = t/d", "v = d*t", "v = d+t"]',
   0,
   'La vitesse moyenne est egale a la distance parcourue divisee par le temps ecoule.',
   'Average velocity equals distance traveled divided by time elapsed.',
   0),
  ((SELECT id FROM quizzes WHERE title_fr = 'Quiz Mecanique - Cinematique'),
   'Quelle est l''unite de la force dans le SI ?',
   'What is the SI unit of force?',
   '["Joule", "Newton", "Watt", "Pascal"]',
   1,
   'La force s''exprime en Newton (N), ou 1 N = 1 kg.m/s2',
   'Force is expressed in Newton (N), where 1 N = 1 kg.m/s2',
   1);
