// ═══════════════════════════════════════════════════════════════════════════════
// TUTEURIA — BANQUE DE QCM ET EXERCICES D'ÉVALUATION (BAC & GCE)
// ═══════════════════════════════════════════════════════════════════════════════

export const QUIZZES = [
  {
    "id": "mathematiques-math-c1-qcm",
    "subjectId": "mathematiques",
    "chapterId": "math-c1",
    "titre": "Chapitre 1 : Algèbre & Équations du Second Degré — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Discriminant de $x^2 - 7x + 10 = 0$ ?",
        "options": [
          "9",
          "49",
          "1",
          "25"
        ],
        "correct": 0,
        "explication": "$\\Delta = 49 - 40 = 9$."
      },
      {
        "id": 2,
        "question": "Racines de $x^2 - 7x + 10 = 0$ :",
        "options": [
          "2 et 5",
          "-2 et -5",
          "1 et 10",
          "Aucune"
        ],
        "correct": 0,
        "explication": "$x = (7 \\pm 3)/2$, donc 2 et 5."
      },
      {
        "id": 3,
        "question": "Somme des racines de $3x^2 - 12x + 5 = 0$ :",
        "options": [
          "4",
          "-4",
          "5/3",
          "12"
        ],
        "correct": 0,
        "explication": "$S = -b/a = 12/3 = 4$."
      },
      {
        "id": 4,
        "question": "Produit des racines de $2x^2 + 6x - 8 = 0$ :",
        "options": [
          "-4",
          "4",
          "-3",
          "8"
        ],
        "correct": 0,
        "explication": "$P = c/a = -8/2 = -4$."
      },
      {
        "id": 5,
        "question": "Si $\\Delta < 0$, le trinôme est :",
        "options": [
          "Du signe de a",
          "Toujours positif",
          "Toujours négatif",
          "Nul"
        ],
        "correct": 0,
        "explication": "Le signe reste constant égal à $a$."
      }
    ]
  },
  {
    "id": "mathematiques-math-c2-qcm",
    "subjectId": "mathematiques",
    "chapterId": "math-c2",
    "titre": "Chapitre 2 : Analyse & Fonctions Numériques — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Dérivée de $f(x) = \\ln(x^2 + 1)$ :",
        "options": [
          "2x / (x² + 1)",
          "1 / (x² + 1)",
          "2x",
          "x / (x² + 1)"
        ],
        "correct": 0,
        "explication": "$(\\ln u)' = u'/u = 2x / (x^2+1)$."
      },
      {
        "id": 2,
        "question": "$\\lim_{x \\to 0} \\frac{e^x - 1}{x} =$ ?",
        "options": [
          "1",
          "0",
          "e",
          "\\infty"
        ],
        "correct": 0,
        "explication": "Nombre dérivé de $e^x$ en 0."
      },
      {
        "id": 3,
        "question": "Tangente à $e^x$ en $x=0$ :",
        "options": [
          "y = x + 1",
          "y = x",
          "y = e x",
          "y = 1"
        ],
        "correct": 0,
        "explication": "$y = 1(x-0)+1 = x+1$."
      },
      {
        "id": 4,
        "question": "Si $\\lim_{x \\to 2} f(x) = \\infty$, alors $x=2$ est :",
        "options": [
          "Asymptote verticale",
          "Asymptote horizontale",
          "Tangente",
          "Asymptote oblique"
        ],
        "correct": 0,
        "explication": "Limite infinie en un point = asymptote verticale."
      },
      {
        "id": 5,
        "question": "La fonction $f(x) = e^{-x}$ est :",
        "options": [
          "Strictement décroissante",
          "Strictement croissante",
          "Constante",
          "Non dérivable"
        ],
        "correct": 0,
        "explication": "$f'(x) = -e^{-x} < 0$."
      }
    ]
  },
  {
    "id": "mathematiques-math-c3-qcm",
    "subjectId": "mathematiques",
    "chapterId": "math-c3",
    "titre": "Chapitre 3 : Suites Numériques & Récurrence — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Somme des $n$ premiers entiers $1 + ... + n$ :",
        "options": [
          "n(n+1)/2",
          "n²",
          "n(n-1)/2",
          "2n+1"
        ],
        "correct": 0,
        "explication": "Somme arithmétique de raison 1."
      },
      {
        "id": 2,
        "question": "Si $v_0 = 3$ et $q = 2$, alors $v_4 =$ ?",
        "options": [
          "48",
          "24",
          "96",
          "12"
        ],
        "correct": 0,
        "explication": "$v_4 = 3 \\cdot 2^4 = 48$."
      },
      {
        "id": 3,
        "question": "Une suite croissante majorée est :",
        "options": [
          "Convergente",
          "Divergente",
          "Nulle",
          "Infinie"
        ],
        "correct": 0,
        "explication": "Théorème de convergence monotone."
      },
      {
        "id": 4,
        "question": "Si $q = 0,5$, alors $\\lim q^n =$ ?",
        "options": [
          "0",
          "1",
          "∞",
          "0.5"
        ],
        "correct": 0,
        "explication": "Pour $|q| < 1$, $\\lim q^n = 0$."
      },
      {
        "id": 5,
        "question": "Première étape de la récurrence :",
        "options": [
          "Initialisation",
          "Hérédité",
          "Conclusion",
          "Hypothèse"
        ],
        "correct": 0,
        "explication": "Vérification au premier rang."
      }
    ]
  },
  {
    "id": "mathematiques-math-c4-qcm",
    "subjectId": "mathematiques",
    "chapterId": "math-c4",
    "titre": "Chapitre 4 : Nombres Complexes & Géométrie Vectorielle — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Module de $z = 3 + 4i$ :",
        "options": [
          "5",
          "7",
          "25",
          "1"
        ],
        "correct": 0,
        "explication": "$\\sqrt{9+16} = 5$."
      },
      {
        "id": 2,
        "question": "Si $z = e^{i \\pi/2}$, $z =$ ?",
        "options": [
          "i",
          "1",
          "-1",
          "-i"
        ],
        "correct": 0,
        "explication": "$\\cos(\\pi/2) + i \\sin(\\pi/2) = i$."
      },
      {
        "id": 3,
        "question": "Conjugué de $2 - 5i$ :",
        "options": [
          "2 + 5i",
          "-2 + 5i",
          "-2 - 5i",
          "5 - 2i"
        ],
        "correct": 0,
        "explication": "Changer le signe imaginaire."
      },
      {
        "id": 4,
        "question": "Rotation d'angle $\\pi/3$ centrée à l'origine :",
        "options": [
          "z' = e^(i π/3) z",
          "z' = z + π/3",
          "z' = 3z",
          "z' = e^(-i π/3) z"
        ],
        "correct": 0,
        "explication": "$z' = e^{i\\theta} z$."
      },
      {
        "id": 5,
        "question": "Si $\\vec{u} \\cdot \\vec{v} = 0$, les vecteurs sont :",
        "options": [
          "Orthogonaux",
          "Colinéaires",
          "Égaux",
          "Opposés"
        ],
        "correct": 0,
        "explication": "Produit scalaire nul = orthogonalité."
      }
    ]
  },
  {
    "id": "mathematiques-math-c5-qcm",
    "subjectId": "mathematiques",
    "chapterId": "math-c5",
    "titre": "Chapitre 5 : Calcul Intégral & Probabilités — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "$\\int_0^1 2x dx =$ ?",
        "options": [
          "1",
          "2",
          "0.5",
          "0"
        ],
        "correct": 0,
        "explication": "$[x^2]_0^1 = 1$."
      },
      {
        "id": 2,
        "question": "Primitive de $e^{2x}$ :",
        "options": [
          "1/2 e^(2x)",
          "2 e^(2x)",
          "e^(2x)",
          "e^x"
        ],
        "correct": 0,
        "explication": "$(1/2 e^{2x})' = e^{2x}$."
      },
      {
        "id": 3,
        "question": "Si $P(A)=0.4$ et $P_A(B)=0.5$, $P(A \\cap B) =$ ?",
        "options": [
          "0.2",
          "0.9",
          "0.1",
          "0.8"
        ],
        "correct": 0,
        "explication": "$0.4 \\times 0.5 = 0.2$."
      },
      {
        "id": 4,
        "question": "Espérance de $X \\sim \\mathcal{B}(10, 0.3)$ :",
        "options": [
          "3",
          "0.3",
          "7",
          "2.1"
        ],
        "correct": 0,
        "explication": "$E(X) = 10 \\times 0.3 = 3$."
      },
      {
        "id": 5,
        "question": "Valeur de $\\binom{n}{0}$ :",
        "options": [
          "1",
          "0",
          "n",
          "p"
        ],
        "correct": 0,
        "explication": "Toujours égal à 1."
      }
    ]
  },
  {
    "id": "physique-physique-c1-qcm",
    "subjectId": "physique",
    "chapterId": "physique-c1",
    "titre": "Chapitre 1 : Cinématique & Dynamique Newtonienne — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Cinématique & Dynamique Newtonienne) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (Cinématique & Dynamique Newtonienne) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (Cinématique & Dynamique Newtonienne) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (Cinématique & Dynamique Newtonienne) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (Cinématique & Dynamique Newtonienne) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "physique-physique-c2-qcm",
    "subjectId": "physique",
    "chapterId": "physique-c2",
    "titre": "Chapitre 2 : Travail, Énergie & Puissance Mécanique — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Travail, Énergie & Puissance Mécanique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (Travail, Énergie & Puissance Mécanique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (Travail, Énergie & Puissance Mécanique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (Travail, Énergie & Puissance Mécanique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (Travail, Énergie & Puissance Mécanique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "physique-physique-c3-qcm",
    "subjectId": "physique",
    "chapterId": "physique-c3",
    "titre": "Chapitre 3 : Oscillateurs Mécaniques & Ondes Progressives — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Oscillateurs Mécaniques & Ondes Progressives) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (Oscillateurs Mécaniques & Ondes Progressives) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (Oscillateurs Mécaniques & Ondes Progressives) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (Oscillateurs Mécaniques & Ondes Progressives) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (Oscillateurs Mécaniques & Ondes Progressives) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "physique-physique-c4-qcm",
    "subjectId": "physique",
    "chapterId": "physique-c4",
    "titre": "Chapitre 4 : Électrostatique & Circuits Électriques RLC — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Électrostatique & Circuits Électriques RLC) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (Électrostatique & Circuits Électriques RLC) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (Électrostatique & Circuits Électriques RLC) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (Électrostatique & Circuits Électriques RLC) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (Électrostatique & Circuits Électriques RLC) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "physique-physique-c5-qcm",
    "subjectId": "physique",
    "chapterId": "physique-c5",
    "titre": "Chapitre 5 : Physique Nucléaire & Optique Géométrique — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Physique Nucléaire & Optique Géométrique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (Physique Nucléaire & Optique Géométrique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (Physique Nucléaire & Optique Géométrique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (Physique Nucléaire & Optique Géométrique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (Physique Nucléaire & Optique Géométrique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "chimie-chimie-c1-qcm",
    "subjectId": "chimie",
    "chapterId": "chimie-c1",
    "titre": "Chapitre 1 : Solutions Aqueuses & Équilibres Acido-Basiques — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Solutions Aqueuses & Équilibres Acido-Basiques) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (Solutions Aqueuses & Équilibres Acido-Basiques) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (Solutions Aqueuses & Équilibres Acido-Basiques) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (Solutions Aqueuses & Équilibres Acido-Basiques) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (Solutions Aqueuses & Équilibres Acido-Basiques) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "chimie-chimie-c2-qcm",
    "subjectId": "chimie",
    "chapterId": "chimie-c2",
    "titre": "Chapitre 2 : Cinétique Chimique & Catalyse — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Cinétique Chimique & Catalyse) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (Cinétique Chimique & Catalyse) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (Cinétique Chimique & Catalyse) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (Cinétique Chimique & Catalyse) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (Cinétique Chimique & Catalyse) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "chimie-chimie-c3-qcm",
    "subjectId": "chimie",
    "chapterId": "chimie-c3",
    "titre": "Chapitre 3 : Chimie Organique — Alcanes & Alcools — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Chimie Organique — Alcanes & Alcools) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (Chimie Organique — Alcanes & Alcools) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (Chimie Organique — Alcanes & Alcools) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (Chimie Organique — Alcanes & Alcools) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (Chimie Organique — Alcanes & Alcools) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "chimie-chimie-c4-qcm",
    "subjectId": "chimie",
    "chapterId": "chimie-c4",
    "titre": "Chapitre 4 : Acides Carboxyliques & Dérivés Fonctionnels — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Acides Carboxyliques & Dérivés Fonctionnels) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (Acides Carboxyliques & Dérivés Fonctionnels) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (Acides Carboxyliques & Dérivés Fonctionnels) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (Acides Carboxyliques & Dérivés Fonctionnels) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (Acides Carboxyliques & Dérivés Fonctionnels) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "chimie-chimie-c5-qcm",
    "subjectId": "chimie",
    "chapterId": "chimie-c5",
    "titre": "Chapitre 5 : Électrochimie, Piles & Electrolyse — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Électrochimie, Piles & Electrolyse) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (Électrochimie, Piles & Electrolyse) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (Électrochimie, Piles & Electrolyse) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (Électrochimie, Piles & Electrolyse) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (Électrochimie, Piles & Electrolyse) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "svt-svt-c1-qcm",
    "subjectId": "svt",
    "chapterId": "svt-c1",
    "titre": "Chapitre 1 : Génétique & Brassage Chromosomique — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Génétique & Brassage Chromosomique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (Génétique & Brassage Chromosomique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (Génétique & Brassage Chromosomique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (Génétique & Brassage Chromosomique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (Génétique & Brassage Chromosomique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "svt-svt-c2-qcm",
    "subjectId": "svt",
    "chapterId": "svt-c2",
    "titre": "Chapitre 2 : Immunologie & Défense de l'Organisme — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Immunologie & Défense de l'Organisme) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (Immunologie & Défense de l'Organisme) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (Immunologie & Défense de l'Organisme) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (Immunologie & Défense de l'Organisme) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (Immunologie & Défense de l'Organisme) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "svt-svt-c3-qcm",
    "subjectId": "svt",
    "chapterId": "svt-c3",
    "titre": "Chapitre 3 : Neurophysiologie & Reflexes Moteurs — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Neurophysiologie & Reflexes Moteurs) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (Neurophysiologie & Reflexes Moteurs) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (Neurophysiologie & Reflexes Moteurs) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (Neurophysiologie & Reflexes Moteurs) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (Neurophysiologie & Reflexes Moteurs) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "svt-svt-c4-qcm",
    "subjectId": "svt",
    "chapterId": "svt-c4",
    "titre": "Chapitre 4 : Géologie & Tectonique des Plaques — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Géologie & Tectonique des Plaques) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (Géologie & Tectonique des Plaques) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (Géologie & Tectonique des Plaques) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (Géologie & Tectonique des Plaques) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (Géologie & Tectonique des Plaques) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "svt-svt-c5-qcm",
    "subjectId": "svt",
    "chapterId": "svt-c5",
    "titre": "Chapitre 5 : Métabolisme Cellulaire & Photosynthèse — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Métabolisme Cellulaire & Photosynthèse) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (Métabolisme Cellulaire & Photosynthèse) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (Métabolisme Cellulaire & Photosynthèse) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (Métabolisme Cellulaire & Photosynthèse) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (Métabolisme Cellulaire & Photosynthèse) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "histoire-histoire-c1-qcm",
    "subjectId": "histoire",
    "chapterId": "histoire-c1",
    "titre": "Chapitre 1 : Le Cameroun sous Mandat et Tutelle (1916-1960) — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Le Cameroun sous Mandat et Tutelle (1916-1960)) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (Le Cameroun sous Mandat et Tutelle (1916-1960)) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (Le Cameroun sous Mandat et Tutelle (1916-1960)) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (Le Cameroun sous Mandat et Tutelle (1916-1960)) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (Le Cameroun sous Mandat et Tutelle (1916-1960)) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "histoire-histoire-c2-qcm",
    "subjectId": "histoire",
    "chapterId": "histoire-c2",
    "titre": "Chapitre 2 : L'Indépendance et la Réunification du Cameroun — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (L'Indépendance et la Réunification du Cameroun) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (L'Indépendance et la Réunification du Cameroun) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (L'Indépendance et la Réunification du Cameroun) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (L'Indépendance et la Réunification du Cameroun) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (L'Indépendance et la Réunification du Cameroun) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "histoire-histoire-c3-qcm",
    "subjectId": "histoire",
    "chapterId": "histoire-c3",
    "titre": "Chapitre 3 : La Seconde Guerre Mondiale (1939-1945) — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (La Seconde Guerre Mondiale (1939-1945)) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (La Seconde Guerre Mondiale (1939-1945)) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (La Seconde Guerre Mondiale (1939-1945)) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (La Seconde Guerre Mondiale (1939-1945)) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (La Seconde Guerre Mondiale (1939-1945)) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "histoire-histoire-c4-qcm",
    "subjectId": "histoire",
    "chapterId": "histoire-c4",
    "titre": "Chapitre 4 : La Guerre Froide et les Relations Est-Ouest — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (La Guerre Froide et les Relations Est-Ouest) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (La Guerre Froide et les Relations Est-Ouest) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (La Guerre Froide et les Relations Est-Ouest) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (La Guerre Froide et les Relations Est-Ouest) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (La Guerre Froide et les Relations Est-Ouest) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "histoire-histoire-c5-qcm",
    "subjectId": "histoire",
    "chapterId": "histoire-c5",
    "titre": "Chapitre 5 : La Décolonisation en Afrique et en Asie — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (La Décolonisation en Afrique et en Asie) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (La Décolonisation en Afrique et en Asie) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (La Décolonisation en Afrique et en Asie) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (La Décolonisation en Afrique et en Asie) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (La Décolonisation en Afrique et en Asie) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "geographie-geographie-c1-qcm",
    "subjectId": "geographie",
    "chapterId": "geographie-c1",
    "titre": "Chapitre 1 : Le Relief et le Climat du Cameroun — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Le Relief et le Climat du Cameroun) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (Le Relief et le Climat du Cameroun) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (Le Relief et le Climat du Cameroun) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (Le Relief et le Climat du Cameroun) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (Le Relief et le Climat du Cameroun) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "geographie-geographie-c2-qcm",
    "subjectId": "geographie",
    "chapterId": "geographie-c2",
    "titre": "Chapitre 2 : La Population et l'Urbanisation au Cameroun — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (La Population et l'Urbanisation au Cameroun) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (La Population et l'Urbanisation au Cameroun) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (La Population et l'Urbanisation au Cameroun) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (La Population et l'Urbanisation au Cameroun) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (La Population et l'Urbanisation au Cameroun) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "geographie-geographie-c3-qcm",
    "subjectId": "geographie",
    "chapterId": "geographie-c3",
    "titre": "Chapitre 3 : L'Agriculture et les Ressources Énergétiques — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (L'Agriculture et les Ressources Énergétiques) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (L'Agriculture et les Ressources Énergétiques) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (L'Agriculture et les Ressources Énergétiques) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (L'Agriculture et les Ressources Énergétiques) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (L'Agriculture et les Ressources Énergétiques) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "geographie-geographie-c4-qcm",
    "subjectId": "geographie",
    "chapterId": "geographie-c4",
    "titre": "Chapitre 4 : L'Industrie et le Commerce en Afrique — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (L'Industrie et le Commerce en Afrique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (L'Industrie et le Commerce en Afrique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (L'Industrie et le Commerce en Afrique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (L'Industrie et le Commerce en Afrique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (L'Industrie et le Commerce en Afrique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "geographie-geographie-c5-qcm",
    "subjectId": "geographie",
    "chapterId": "geographie-c5",
    "titre": "Chapitre 5 : La Mondialisation et les Enjeux Environnementaux — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (La Mondialisation et les Enjeux Environnementaux) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (La Mondialisation et les Enjeux Environnementaux) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (La Mondialisation et les Enjeux Environnementaux) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (La Mondialisation et les Enjeux Environnementaux) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (La Mondialisation et les Enjeux Environnementaux) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "francais-francais-c1-qcm",
    "subjectId": "francais",
    "chapterId": "francais-c1",
    "titre": "Chapitre 1 : La Dissertation Littéraire & Méthodologie — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (La Dissertation Littéraire & Méthodologie) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (La Dissertation Littéraire & Méthodologie) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (La Dissertation Littéraire & Méthodologie) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (La Dissertation Littéraire & Méthodologie) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (La Dissertation Littéraire & Méthodologie) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "francais-francais-c2-qcm",
    "subjectId": "francais",
    "chapterId": "francais-c2",
    "titre": "Chapitre 2 : L'Analyse Méthodique de Texte — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (L'Analyse Méthodique de Texte) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (L'Analyse Méthodique de Texte) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (L'Analyse Méthodique de Texte) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (L'Analyse Méthodique de Texte) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (L'Analyse Méthodique de Texte) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "francais-francais-c3-qcm",
    "subjectId": "francais",
    "chapterId": "francais-c3",
    "titre": "Chapitre 3 : La Littérature Négro-Africaine Contemporaine — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (La Littérature Négro-Africaine Contemporaine) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (La Littérature Négro-Africaine Contemporaine) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (La Littérature Négro-Africaine Contemporaine) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (La Littérature Négro-Africaine Contemporaine) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (La Littérature Négro-Africaine Contemporaine) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "francais-francais-c4-qcm",
    "subjectId": "francais",
    "chapterId": "francais-c4",
    "titre": "Chapitre 4 : Les Courants Littéraires Européens — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Les Courants Littéraires Européens) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (Les Courants Littéraires Européens) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (Les Courants Littéraires Européens) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (Les Courants Littéraires Européens) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (Les Courants Littéraires Européens) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "francais-francais-c5-qcm",
    "subjectId": "francais",
    "chapterId": "francais-c5",
    "titre": "Chapitre 5 : Figures de Style et Procédés d'Écriture — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Figures de Style et Procédés d'Écriture) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (Figures de Style et Procédés d'Écriture) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (Figures de Style et Procédés d'Écriture) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (Figures de Style et Procédés d'Écriture) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (Figures de Style et Procédés d'Écriture) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "philosophie-philosophie-c1-qcm",
    "subjectId": "philosophie",
    "chapterId": "philosophie-c1",
    "titre": "Chapitre 1 : La Conscience et l'Inconscient — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (La Conscience et l'Inconscient) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (La Conscience et l'Inconscient) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (La Conscience et l'Inconscient) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (La Conscience et l'Inconscient) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (La Conscience et l'Inconscient) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "philosophie-philosophie-c2-qcm",
    "subjectId": "philosophie",
    "chapterId": "philosophie-c2",
    "titre": "Chapitre 2 : La Liberté, le Devoir et la Morale — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (La Liberté, le Devoir et la Morale) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (La Liberté, le Devoir et la Morale) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (La Liberté, le Devoir et la Morale) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (La Liberté, le Devoir et la Morale) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (La Liberté, le Devoir et la Morale) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "philosophie-philosophie-c3-qcm",
    "subjectId": "philosophie",
    "chapterId": "philosophie-c3",
    "titre": "Chapitre 3 : La Vérité et la Connaissance Scientifique — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (La Vérité et la Connaissance Scientifique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (La Vérité et la Connaissance Scientifique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (La Vérité et la Connaissance Scientifique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (La Vérité et la Connaissance Scientifique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (La Vérité et la Connaissance Scientifique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "philosophie-philosophie-c4-qcm",
    "subjectId": "philosophie",
    "chapterId": "philosophie-c4",
    "titre": "Chapitre 4 : L'État, la Justice et la Politique — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (L'État, la Justice et la Politique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (L'État, la Justice et la Politique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (L'État, la Justice et la Politique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (L'État, la Justice et la Politique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (L'État, la Justice et la Politique) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "philosophie-philosophie-c5-qcm",
    "subjectId": "philosophie",
    "chapterId": "philosophie-c5",
    "titre": "Chapitre 5 : L'Art, le Beau et la Culture — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (L'Art, le Beau et la Culture) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (L'Art, le Beau et la Culture) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (L'Art, le Beau et la Culture) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (L'Art, le Beau et la Culture) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (L'Art, le Beau et la Culture) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "informatique-informatique-c1-qcm",
    "subjectId": "informatique",
    "chapterId": "informatique-c1",
    "titre": "Chapitre 1 : Algorithmique et Structures de Données — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Algorithmique et Structures de Données) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (Algorithmique et Structures de Données) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (Algorithmique et Structures de Données) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (Algorithmique et Structures de Données) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (Algorithmique et Structures de Données) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 1 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "informatique-informatique-c2-qcm",
    "subjectId": "informatique",
    "chapterId": "informatique-c2",
    "titre": "Chapitre 2 : Programmation et Langages (C/Python) — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Programmation et Langages (C/Python)) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (Programmation et Langages (C/Python)) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (Programmation et Langages (C/Python)) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (Programmation et Langages (C/Python)) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (Programmation et Langages (C/Python)) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 2 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "informatique-informatique-c3-qcm",
    "subjectId": "informatique",
    "chapterId": "informatique-c3",
    "titre": "Chapitre 3 : Architectures des Ordinateurs et Systèmes — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Architectures des Ordinateurs et Systèmes) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (Architectures des Ordinateurs et Systèmes) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (Architectures des Ordinateurs et Systèmes) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (Architectures des Ordinateurs et Systèmes) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (Architectures des Ordinateurs et Systèmes) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 3 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "informatique-informatique-c4-qcm",
    "subjectId": "informatique",
    "chapterId": "informatique-c4",
    "titre": "Chapitre 4 : Réseaux Informatiques et Internet — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Réseaux Informatiques et Internet) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (Réseaux Informatiques et Internet) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (Réseaux Informatiques et Internet) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (Réseaux Informatiques et Internet) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (Réseaux Informatiques et Internet) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 4 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "informatique-informatique-c5-qcm",
    "subjectId": "informatique",
    "chapterId": "informatique-c5",
    "titre": "Chapitre 5 : Bases de Données (SQL) et Sécurité — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Bases de Données (SQL) et Sécurité) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 1 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 2,
        "question": "Question 2 (Bases de Données (SQL) et Sécurité) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 2 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 3,
        "question": "Question 3 (Bases de Données (SQL) et Sécurité) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 3 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 4,
        "question": "Question 4 (Bases de Données (SQL) et Sécurité) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 4 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      },
      {
        "id": 5,
        "question": "Question 5 (Bases de Données (SQL) et Sécurité) : Quel est le principe fondamental ?",
        "options": [
          "Option exacte et conforme au cours",
          "Option incorrecte 1",
          "Option incorrecte 2",
          "Option incorrecte 3"
        ],
        "correct": 0,
        "explication": "Explication pour la question 5 du chapitre 5 : l'option 1 est exacte d'après les définitions du cours."
      }
    ]
  },
  {
    "id": "gce-maths-gce-maths-c1-qcm",
    "subjectId": "gce-maths",
    "chapterId": "gce-maths-c1",
    "titre": "Chapter 1: Algebra, Polynomials & Partial Fractions — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Algebra, Polynomials & Partial Fractions): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Algebra, Polynomials & Partial Fractions): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Algebra, Polynomials & Partial Fractions): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Algebra, Polynomials & Partial Fractions): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Algebra, Polynomials & Partial Fractions): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-maths-gce-maths-c2-qcm",
    "subjectId": "gce-maths",
    "chapterId": "gce-maths-c2",
    "titre": "Chapter 2: Differential Calculus & Applications — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Differential Calculus & Applications): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Differential Calculus & Applications): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Differential Calculus & Applications): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Differential Calculus & Applications): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Differential Calculus & Applications): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-maths-gce-maths-c3-qcm",
    "subjectId": "gce-maths",
    "chapterId": "gce-maths-c3",
    "titre": "Chapter 3: Integral Calculus & Differential Equations — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Integral Calculus & Differential Equations): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Integral Calculus & Differential Equations): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Integral Calculus & Differential Equations): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Integral Calculus & Differential Equations): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Integral Calculus & Differential Equations): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-maths-gce-maths-c4-qcm",
    "subjectId": "gce-maths",
    "chapterId": "gce-maths-c4",
    "titre": "Chapter 4: Complex Numbers & Coordinate Geometry — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Complex Numbers & Coordinate Geometry): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Complex Numbers & Coordinate Geometry): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Complex Numbers & Coordinate Geometry): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Complex Numbers & Coordinate Geometry): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Complex Numbers & Coordinate Geometry): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-maths-gce-maths-c5-qcm",
    "subjectId": "gce-maths",
    "chapterId": "gce-maths-c5",
    "titre": "Chapter 5: Newtonian Mechanics & Vectors — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Newtonian Mechanics & Vectors): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Newtonian Mechanics & Vectors): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Newtonian Mechanics & Vectors): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Newtonian Mechanics & Vectors): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Newtonian Mechanics & Vectors): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-physics-gce-physics-c1-qcm",
    "subjectId": "gce-physics",
    "chapterId": "gce-physics-c1",
    "titre": "Chapter 1: Kinematics, Dynamics & Circular Motion — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Kinematics, Dynamics & Circular Motion): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Kinematics, Dynamics & Circular Motion): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Kinematics, Dynamics & Circular Motion): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Kinematics, Dynamics & Circular Motion): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Kinematics, Dynamics & Circular Motion): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-physics-gce-physics-c2-qcm",
    "subjectId": "gce-physics",
    "chapterId": "gce-physics-c2",
    "titre": "Chapter 2: Work, Energy & Thermal Physics — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Work, Energy & Thermal Physics): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Work, Energy & Thermal Physics): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Work, Energy & Thermal Physics): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Work, Energy & Thermal Physics): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Work, Energy & Thermal Physics): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-physics-gce-physics-c3-qcm",
    "subjectId": "gce-physics",
    "chapterId": "gce-physics-c3",
    "titre": "Chapter 3: Electric Fields, Capacitance & DC Circuits — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Electric Fields, Capacitance & DC Circuits): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Electric Fields, Capacitance & DC Circuits): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Electric Fields, Capacitance & DC Circuits): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Electric Fields, Capacitance & DC Circuits): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Electric Fields, Capacitance & DC Circuits): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-physics-gce-physics-c4-qcm",
    "subjectId": "gce-physics",
    "chapterId": "gce-physics-c4",
    "titre": "Chapter 4: Waves, Optics & Simple Harmonic Motion — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Waves, Optics & Simple Harmonic Motion): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Waves, Optics & Simple Harmonic Motion): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Waves, Optics & Simple Harmonic Motion): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Waves, Optics & Simple Harmonic Motion): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Waves, Optics & Simple Harmonic Motion): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-physics-gce-physics-c5-qcm",
    "subjectId": "gce-physics",
    "chapterId": "gce-physics-c5",
    "titre": "Chapter 5: Quantum Phenomena & Nuclear Physics — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Quantum Phenomena & Nuclear Physics): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Quantum Phenomena & Nuclear Physics): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Quantum Phenomena & Nuclear Physics): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Quantum Phenomena & Nuclear Physics): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Quantum Phenomena & Nuclear Physics): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-chemistry-gce-chemistry-c1-qcm",
    "subjectId": "gce-chemistry",
    "chapterId": "gce-chemistry-c1",
    "titre": "Chapter 1: Atomic Structure, Bonding & Periodicity — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Atomic Structure, Bonding & Periodicity): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Atomic Structure, Bonding & Periodicity): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Atomic Structure, Bonding & Periodicity): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Atomic Structure, Bonding & Periodicity): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Atomic Structure, Bonding & Periodicity): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-chemistry-gce-chemistry-c2-qcm",
    "subjectId": "gce-chemistry",
    "chapterId": "gce-chemistry-c2",
    "titre": "Chapter 2: Chemical Energetics, Kinetics & Equilibria — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Chemical Energetics, Kinetics & Equilibria): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Chemical Energetics, Kinetics & Equilibria): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Chemical Energetics, Kinetics & Equilibria): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Chemical Energetics, Kinetics & Equilibria): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Chemical Energetics, Kinetics & Equilibria): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-chemistry-gce-chemistry-c3-qcm",
    "subjectId": "gce-chemistry",
    "chapterId": "gce-chemistry-c3",
    "titre": "Chapter 3: Organic Reaction Mechanisms & Functional Groups — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Organic Reaction Mechanisms & Functional Groups): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Organic Reaction Mechanisms & Functional Groups): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Organic Reaction Mechanisms & Functional Groups): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Organic Reaction Mechanisms & Functional Groups): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Organic Reaction Mechanisms & Functional Groups): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-chemistry-gce-chemistry-c4-qcm",
    "subjectId": "gce-chemistry",
    "chapterId": "gce-chemistry-c4",
    "titre": "Chapter 4: Transition Elements & Coordination Complexes — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Transition Elements & Coordination Complexes): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Transition Elements & Coordination Complexes): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Transition Elements & Coordination Complexes): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Transition Elements & Coordination Complexes): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Transition Elements & Coordination Complexes): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-chemistry-gce-chemistry-c5-qcm",
    "subjectId": "gce-chemistry",
    "chapterId": "gce-chemistry-c5",
    "titre": "Chapter 5: Electrochemistry & Industrial Chemistry — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Electrochemistry & Industrial Chemistry): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Electrochemistry & Industrial Chemistry): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Electrochemistry & Industrial Chemistry): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Electrochemistry & Industrial Chemistry): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Electrochemistry & Industrial Chemistry): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-biology-gce-biology-c1-qcm",
    "subjectId": "gce-biology",
    "chapterId": "gce-biology-c1",
    "titre": "Chapter 1: Biological Molecules & Cell Biology — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Biological Molecules & Cell Biology): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Biological Molecules & Cell Biology): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Biological Molecules & Cell Biology): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Biological Molecules & Cell Biology): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Biological Molecules & Cell Biology): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-biology-gce-biology-c2-qcm",
    "subjectId": "gce-biology",
    "chapterId": "gce-biology-c2",
    "titre": "Chapter 2: Molecular Genetics & DNA Replication — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Molecular Genetics & DNA Replication): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Molecular Genetics & DNA Replication): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Molecular Genetics & DNA Replication): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Molecular Genetics & DNA Replication): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Molecular Genetics & DNA Replication): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-biology-gce-biology-c3-qcm",
    "subjectId": "gce-biology",
    "chapterId": "gce-biology-c3",
    "titre": "Chapter 3: Respiration, Photosynthesis & Metabolism — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Respiration, Photosynthesis & Metabolism): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Respiration, Photosynthesis & Metabolism): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Respiration, Photosynthesis & Metabolism): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Respiration, Photosynthesis & Metabolism): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Respiration, Photosynthesis & Metabolism): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-biology-gce-biology-c4-qcm",
    "subjectId": "gce-biology",
    "chapterId": "gce-biology-c4",
    "titre": "Chapter 4: Inheritance, Gene Technology & Evolution — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Inheritance, Gene Technology & Evolution): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Inheritance, Gene Technology & Evolution): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Inheritance, Gene Technology & Evolution): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Inheritance, Gene Technology & Evolution): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Inheritance, Gene Technology & Evolution): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-biology-gce-biology-c5-qcm",
    "subjectId": "gce-biology",
    "chapterId": "gce-biology-c5",
    "titre": "Chapter 5: Homeostasis, Nervous & Hormonal Control — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Homeostasis, Nervous & Hormonal Control): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Homeostasis, Nervous & Hormonal Control): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Homeostasis, Nervous & Hormonal Control): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Homeostasis, Nervous & Hormonal Control): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Homeostasis, Nervous & Hormonal Control): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-history-gce-history-c1-qcm",
    "subjectId": "gce-history",
    "chapterId": "gce-history-c1",
    "titre": "Chapter 1: Cameroon History 1884–1961 — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Cameroon History 1884–1961): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Cameroon History 1884–1961): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Cameroon History 1884–1961): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Cameroon History 1884–1961): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Cameroon History 1884–1961): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-history-gce-history-c2-qcm",
    "subjectId": "gce-history",
    "chapterId": "gce-history-c2",
    "titre": "Chapter 2: Post-Independence Federal & Unitary Cameroon — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Post-Independence Federal & Unitary Cameroon): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Post-Independence Federal & Unitary Cameroon): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Post-Independence Federal & Unitary Cameroon): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Post-Independence Federal & Unitary Cameroon): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Post-Independence Federal & Unitary Cameroon): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-history-gce-history-c3-qcm",
    "subjectId": "gce-history",
    "chapterId": "gce-history-c3",
    "titre": "Chapter 3: The First World War & Peace Settlements — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (The First World War & Peace Settlements): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (The First World War & Peace Settlements): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (The First World War & Peace Settlements): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (The First World War & Peace Settlements): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (The First World War & Peace Settlements): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-history-gce-history-c4-qcm",
    "subjectId": "gce-history",
    "chapterId": "gce-history-c4",
    "titre": "Chapter 4: The Second World War & Cold War Superpowers — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (The Second World War & Cold War Superpowers): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (The Second World War & Cold War Superpowers): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (The Second World War & Cold War Superpowers): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (The Second World War & Cold War Superpowers): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (The Second World War & Cold War Superpowers): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-history-gce-history-c5-qcm",
    "subjectId": "gce-history",
    "chapterId": "gce-history-c5",
    "titre": "Chapter 5: African Nationalism & Pan-Africanism — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (African Nationalism & Pan-Africanism): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (African Nationalism & Pan-Africanism): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (African Nationalism & Pan-Africanism): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (African Nationalism & Pan-Africanism): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (African Nationalism & Pan-Africanism): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-economics-gce-economics-c1-qcm",
    "subjectId": "gce-economics",
    "chapterId": "gce-economics-c1",
    "titre": "Chapter 1: Price Theory & Market Equilibrium — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Price Theory & Market Equilibrium): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Price Theory & Market Equilibrium): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Price Theory & Market Equilibrium): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Price Theory & Market Equilibrium): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Price Theory & Market Equilibrium): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-economics-gce-economics-c2-qcm",
    "subjectId": "gce-economics",
    "chapterId": "gce-economics-c2",
    "titre": "Chapter 2: Market Structures & Firm Costs — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Market Structures & Firm Costs): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Market Structures & Firm Costs): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Market Structures & Firm Costs): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Market Structures & Firm Costs): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Market Structures & Firm Costs): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-economics-gce-economics-c3-qcm",
    "subjectId": "gce-economics",
    "chapterId": "gce-economics-c3",
    "titre": "Chapter 3: National Income Accounting & Keynesian Policy — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (National Income Accounting & Keynesian Policy): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (National Income Accounting & Keynesian Policy): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (National Income Accounting & Keynesian Policy): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (National Income Accounting & Keynesian Policy): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (National Income Accounting & Keynesian Policy): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-economics-gce-economics-c4-qcm",
    "subjectId": "gce-economics",
    "chapterId": "gce-economics-c4",
    "titre": "Chapter 4: Inflation & Balance of Payments Adjustment — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Inflation & Balance of Payments Adjustment): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Inflation & Balance of Payments Adjustment): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Inflation & Balance of Payments Adjustment): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Inflation & Balance of Payments Adjustment): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Inflation & Balance of Payments Adjustment): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-economics-gce-economics-c5-qcm",
    "subjectId": "gce-economics",
    "chapterId": "gce-economics-c5",
    "titre": "Chapter 5: Economic Growth & Development in Africa — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Economic Growth & Development in Africa): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Economic Growth & Development in Africa): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Economic Growth & Development in Africa): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Economic Growth & Development in Africa): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Economic Growth & Development in Africa): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-computer-science-gce-computer-science-c1-qcm",
    "subjectId": "gce-computer-science",
    "chapterId": "gce-computer-science-c1",
    "titre": "Chapter 1: Data Representation & Digital Logic — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Data Representation & Digital Logic): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Data Representation & Digital Logic): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Data Representation & Digital Logic): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Data Representation & Digital Logic): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Data Representation & Digital Logic): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 1: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-computer-science-gce-computer-science-c2-qcm",
    "subjectId": "gce-computer-science",
    "chapterId": "gce-computer-science-c2",
    "titre": "Chapter 2: Data Structures & Sorting/Searching Algorithms — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Data Structures & Sorting/Searching Algorithms): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Data Structures & Sorting/Searching Algorithms): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Data Structures & Sorting/Searching Algorithms): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Data Structures & Sorting/Searching Algorithms): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Data Structures & Sorting/Searching Algorithms): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 2: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-computer-science-gce-computer-science-c3-qcm",
    "subjectId": "gce-computer-science",
    "chapterId": "gce-computer-science-c3",
    "titre": "Chapter 3: Computer Architecture & Assembly — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Computer Architecture & Assembly): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Computer Architecture & Assembly): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Computer Architecture & Assembly): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Computer Architecture & Assembly): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Computer Architecture & Assembly): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 3: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-computer-science-gce-computer-science-c4-qcm",
    "subjectId": "gce-computer-science",
    "chapterId": "gce-computer-science-c4",
    "titre": "Chapter 4: Database Systems & SQL Normalization — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Database Systems & SQL Normalization): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Database Systems & SQL Normalization): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Database Systems & SQL Normalization): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Database Systems & SQL Normalization): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Database Systems & SQL Normalization): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 4: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  },
  {
    "id": "gce-computer-science-gce-computer-science-c5-qcm",
    "subjectId": "gce-computer-science",
    "chapterId": "gce-computer-science-c5",
    "titre": "Chapter 5: Computer Networks & Cybersecurity — QCM d'Évaluation",
    "difficulte": "moyen",
    "duree": 15,
    "questions": [
      {
        "id": 1,
        "question": "Question 1 (Computer Networks & Cybersecurity): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 1 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 2,
        "question": "Question 2 (Computer Networks & Cybersecurity): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 2 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 3,
        "question": "Question 3 (Computer Networks & Cybersecurity): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 3 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 4,
        "question": "Question 4 (Computer Networks & Cybersecurity): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 4 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      },
      {
        "id": 5,
        "question": "Question 5 (Computer Networks & Cybersecurity): Which statement is correct?",
        "options": [
          "Correct statement as per course principles",
          "Incorrect option 1",
          "Incorrect option 2",
          "Incorrect option 3"
        ],
        "correct": 0,
        "explication": "Explanation for question 5 of chapter 5: Option 1 is correct based on GCE A-Level standards."
      }
    ]
  }
];

export const getQuizzesBySubject = (subjectId) =>
  QUIZZES.filter(q => q.subjectId === subjectId)

export const getQuiz = (id) => QUIZZES.find(q => q.id === id)

export const DIFFICULTE_COLORS = {
  facile: 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400',
  moyen: 'text-amber-600 bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400',
  difficile: 'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400'
}
