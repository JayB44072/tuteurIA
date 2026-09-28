// ═══════════════════════════════════════════════════════════════════════════════
// TUTEURIA — CATALOGUE COMPLET DES MATIÈRES ET COURS PÉDAGOGIQUES (BAC & GCE)
// ═══════════════════════════════════════════════════════════════════════════════

export const SUBJECTS = [
  {
    "id": "mathematiques",
    "nom": "Mathématiques",
    "icon": "📐",
    "couleur": "from-blue-600 to-indigo-700",
    "couleurLight": "bg-blue-50 text-blue-700 border-blue-200",
    "couleurDark": "dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800",
    "niveaux": [
      "Bac"
    ],
    "description": "Algèbre, analyse réelle, géométrie vectorielle, calcul intégral et probabilités pour le Baccalauréat (Séries C, D, TI).",
    "chapitres": [
      {
        "id": "math-c1",
        "titre": "Chapitre 1 : Algèbre & Équations du Second Degré",
        "icon": "∑",
        "lecons": [
          {
            "id": "math-c1-l1",
            "titre": "Forme Canonique et Discriminant",
            "duree": "45 min",
            "contenu": "# Forme Canonique et Discriminant\n\n## I. Forme Canonique\nSoit $P(x) = ax^2 + bx + c$ ($a \\neq 0$).\n$P(x) = a[(x + \\frac{b}{2a})^2 - \\frac{\\Delta}{4a^2}]$ avec $\\Delta = b^2 - 4ac$.\n\n## II. Discriminant\n- $\\Delta > 0$ : 2 racines $x_1, x_2 = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$.\n- $\\Delta = 0$ : 1 racine double $x_0 = -\\frac{b}{2a}$.\n- $\\Delta < 0$ : Pas de racine réelle."
          },
          {
            "id": "math-c1-l2",
            "titre": "Relations de Viète (Somme et Produit)",
            "duree": "40 min",
            "contenu": "# Relations de Viète\n\n## I. Somme et Produit\nPour $ax^2 + bx + c = 0$ :\n- $S = x_1 + x_2 = -\\frac{b}{a}$\n- $P = x_1 \\cdot x_2 = \\frac{c}{a}$\n\n## II. Application\nDeux réels de somme $S$ et produit $P$ sont solutions de $X^2 - SX + P = 0$."
          },
          {
            "id": "math-c1-l3",
            "titre": "Inéquations et Signe du Trinôme",
            "duree": "45 min",
            "contenu": "# Signe du Trinôme\n\n## I. Règle du Signe\n$P(x) = ax^2 + bx + c$ est du signe de $a$ à l'extérieur des racines et du signe de $-a$ entre les racines quand $\\Delta > 0$."
          },
          {
            "id": "math-c1-l4",
            "titre": "Systèmes d'Équations Non-Linéaires",
            "duree": "50 min",
            "contenu": "# Systèmes Non-Linéaires\n\n## I. Méthode par Substitution\nOn exprime une variable puis on injecte dans la seconde équation."
          },
          {
            "id": "math-c1-l5",
            "titre": "Factorisation et Schéma d'Hörner",
            "duree": "50 min",
            "contenu": "# Factorisation des Polynômes\n\n## I. Schéma d'Hörner\nPermet de factoriser $P(x)$ par $(x - x_0)$ lorsque $P(x_0) = 0$."
          }
        ]
      },
      {
        "id": "math-c2",
        "titre": "Chapitre 2 : Analyse & Fonctions Numériques",
        "icon": "📈",
        "lecons": [
          {
            "id": "math-c2-l1",
            "titre": "Limites et Continuité d'une Fonction",
            "duree": "50 min",
            "contenu": "# Limites et Continuité\n\n## I. Continuité en $x_0$\n$f$ est continue en $x_0$ ssi $\\lim_{x \\to x_0} f(x) = f(x_0)$.\n\n## II. Théorème des Valeurs Intermédiaires (TVI)\nSi $f$ est continue sur $[a,b]$, elle prend toutes les valeurs entre $f(a)$ et $f(b)$."
          },
          {
            "id": "math-c2-l2",
            "titre": "Dérivabilité et Équation de la Tangente",
            "duree": "45 min",
            "contenu": "# Dérivabilité\n\n## I. Équation de la Tangente\n$y = f'(x_0)(x - x_0) + f(x_0)$."
          },
          {
            "id": "math-c2-l3",
            "titre": "Fonction Logarithme Népérien $\\ln(x)$",
            "duree": "50 min",
            "contenu": "# Logarithme Népérien\n\n## I. Propriétés\n- Domaine : $]0, +\\infty[$\n- $\\ln(a b) = \\ln(a) + \\ln(b)$\n- $(\\ln u)' = \\frac{u'}{u}$."
          },
          {
            "id": "math-c2-l4",
            "titre": "Fonction Exponentielle $e^x$",
            "duree": "50 min",
            "contenu": "# Exponentielle\n\n## I. Propriétés\n- Bijection réciproque de $\\ln(x)$\n- $(e^u)' = u' e^u$."
          },
          {
            "id": "math-c2-l5",
            "titre": "Étude de Branches Infinies et Asymptotes",
            "duree": "50 min",
            "contenu": "# Asymptotes\n\n- Verticale : $\\lim_{x \\to a} f(x) = \\infty \\Rightarrow x=a$.\n- Horizontale : $\\lim_{x \\to \\infty} f(x) = L \\Rightarrow y=L$.\n- Oblique : $\\lim_{x \\to \\infty} [f(x) - (ax+b)] = 0 \\Rightarrow y=ax+b$."
          }
        ]
      },
      {
        "id": "math-c3",
        "titre": "Chapitre 3 : Suites Numériques & Récurrence",
        "icon": "🔢",
        "lecons": [
          {
            "id": "math-c3-l1",
            "titre": "Raisonnement par Récurrence",
            "duree": "45 min",
            "contenu": "# Récurrence\n\n1. Initialisation : tester $P(n_0)$.\n2. Hérédité : supposer $P(k)$ vraie et montrer $P(k+1)$.\n3. Conclusion."
          },
          {
            "id": "math-c3-l2",
            "titre": "Suites Arithmétiques",
            "duree": "45 min",
            "contenu": "# Suites Arithmétiques\n\n$u_n = u_0 + n r$.\n$S_n = \\frac{(n+1)(u_0 + u_n)}{2}$."
          },
          {
            "id": "math-c3-l3",
            "titre": "Suites Géométriques",
            "duree": "45 min",
            "contenu": "# Suites Géométriques\n\n$v_n = v_0 q^n$.\n$S_n = v_0 \\frac{1 - q^{n+1}}{1 - q}$."
          },
          {
            "id": "math-c3-l4",
            "titre": "Convergence et Théorème de Monotonie",
            "duree": "50 min",
            "contenu": "# Convergence\n\nToute suite croissante et majorée est convergente."
          },
          {
            "id": "math-c3-l5",
            "titre": "Suites Adjacentes et Théorème des Gendarmes",
            "duree": "45 min",
            "contenu": "# Théorème des Gendarmes\n\nSi $u_n \\le w_n \\le v_n$ et $\\lim u_n = \\lim v_n = L$, alors $\\lim w_n = L$."
          }
        ]
      },
      {
        "id": "math-c4",
        "titre": "Chapitre 4 : Nombres Complexes & Géométrie Vectorielle",
        "icon": "🔮",
        "lecons": [
          {
            "id": "math-c4-l1",
            "titre": "Forme Algébrique et Conjugué",
            "duree": "50 min",
            "contenu": "# Nombres Complexes\n\n$z = a + i b$ ($i^2 = -1$).\n$\\bar{z} = a - i b$."
          },
          {
            "id": "math-c4-l2",
            "titre": "Module et Forme Exponentielle",
            "duree": "55 min",
            "contenu": "# Module et Argument\n\n$|z| = \\sqrt{a^2 + b^2}$.\n$z = |z| e^{i\\theta}$."
          },
          {
            "id": "math-c4-l3",
            "titre": "Équations dans $\\mathbb{C}$",
            "duree": "50 min",
            "contenu": "# Équations dans $\\mathbb{C}$\n\nSi $\\Delta < 0$, $z_{1,2} = \\frac{-b \\pm i\\sqrt{|\\Delta|}}{2a}$."
          },
          {
            "id": "math-c4-l4",
            "titre": "Transformations du Plan (Rotation, Homothétie)",
            "duree": "50 min",
            "contenu": "# Transformations Complexes\n\nRotation : $z' - z_0 = e^{i\\theta}(z - z_0)$."
          },
          {
            "id": "math-c4-l5",
            "titre": "Produit Scalaire dans l'Espace",
            "duree": "50 min",
            "contenu": "# Produit Scalaire dans l'Espace\n\n$\\vec{u} \\cdot \\vec{v} = xx' + yy' + zz'$."
          }
        ]
      },
      {
        "id": "math-c5",
        "titre": "Chapitre 5 : Calcul Intégral & Probabilités",
        "icon": "🎲",
        "lecons": [
          {
            "id": "math-c5-l1",
            "titre": "Primitives et Intégrales",
            "duree": "50 min",
            "contenu": "# Intégration\n\n$\\int_a^b f(x) dx = [F(x)]_a^b = F(b) - F(a)$."
          },
          {
            "id": "math-c5-l2",
            "titre": "Intégration par Parties (IPP)",
            "duree": "50 min",
            "contenu": "# IPP\n\n$\\int u v' = [u v] - \\int u' v$."
          },
          {
            "id": "math-c5-l3",
            "titre": "Probabilités Conditionnelles",
            "duree": "50 min",
            "contenu": "# Probabilités Conditionnelles\n\n$P_B(A) = \\frac{P(A \\cap B)}{P(B)}$."
          },
          {
            "id": "math-c5-l4",
            "titre": "Loi Binomiale $\\mathcal{B}(n, p)$",
            "duree": "50 min",
            "contenu": "# Loi Binomiale\n\n$P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}$.\n$E(X) = n p$."
          },
          {
            "id": "math-c5-l5",
            "titre": "Loi Normale $\\mathcal{N}(\\mu, \\sigma^2)$",
            "duree": "50 min",
            "contenu": "# Loi Normale\n\nLoi continue symétrique en forme de cloche."
          }
        ]
      }
    ]
  },
  {
    "id": "physique",
    "nom": "Physique",
    "icon": "⚡",
    "couleur": "from-amber-500 to-orange-600",
    "couleurLight": "bg-amber-50 text-amber-700 border-amber-200",
    "couleurDark": "dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800",
    "niveaux": [
      "Bac"
    ],
    "description": "Mécanique du point, oscillateurs, électrostatique, circuits RLC et physique nucléaire pour le Baccalauréat.",
    "chapitres": [
      {
        "id": "physique-c1",
        "titre": "Chapitre 1 : Cinématique & Dynamique Newtonienne",
        "icon": "⚙️",
        "lecons": [
          {
            "id": "physique-c1-l1",
            "titre": "Leçon 1 : Principes et Fondements de Cinématique & Dynamique Newtonienne",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Cinématique & Dynamique Newtonienne — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Cinématique & Dynamique Newtonienne** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "physique-c1-l2",
            "titre": "Leçon 2 : Principes et Fondements de Cinématique & Dynamique Newtonienne",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Cinématique & Dynamique Newtonienne — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Cinématique & Dynamique Newtonienne** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "physique-c1-l3",
            "titre": "Leçon 3 : Principes et Fondements de Cinématique & Dynamique Newtonienne",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Cinématique & Dynamique Newtonienne — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Cinématique & Dynamique Newtonienne** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "physique-c1-l4",
            "titre": "Leçon 4 : Principes et Fondements de Cinématique & Dynamique Newtonienne",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Cinématique & Dynamique Newtonienne — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Cinématique & Dynamique Newtonienne** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "physique-c1-l5",
            "titre": "Leçon 5 : Principes et Fondements de Cinématique & Dynamique Newtonienne",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Cinématique & Dynamique Newtonienne — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Cinématique & Dynamique Newtonienne** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "physique-c2",
        "titre": "Chapitre 2 : Travail, Énergie & Puissance Mécanique",
        "icon": "🔋",
        "lecons": [
          {
            "id": "physique-c2-l1",
            "titre": "Leçon 1 : Principes et Fondements de Travail, Énergie & Puissance Mécanique",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : Travail, Énergie & Puissance Mécanique — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : Travail, Énergie & Puissance Mécanique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "physique-c2-l2",
            "titre": "Leçon 2 : Principes et Fondements de Travail, Énergie & Puissance Mécanique",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : Travail, Énergie & Puissance Mécanique — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : Travail, Énergie & Puissance Mécanique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "physique-c2-l3",
            "titre": "Leçon 3 : Principes et Fondements de Travail, Énergie & Puissance Mécanique",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : Travail, Énergie & Puissance Mécanique — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : Travail, Énergie & Puissance Mécanique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "physique-c2-l4",
            "titre": "Leçon 4 : Principes et Fondements de Travail, Énergie & Puissance Mécanique",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : Travail, Énergie & Puissance Mécanique — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : Travail, Énergie & Puissance Mécanique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "physique-c2-l5",
            "titre": "Leçon 5 : Principes et Fondements de Travail, Énergie & Puissance Mécanique",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : Travail, Énergie & Puissance Mécanique — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : Travail, Énergie & Puissance Mécanique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "physique-c3",
        "titre": "Chapitre 3 : Oscillateurs Mécaniques & Ondes Progressives",
        "icon": "🌊",
        "lecons": [
          {
            "id": "physique-c3-l1",
            "titre": "Leçon 1 : Principes et Fondements de Oscillateurs Mécaniques & Ondes Progressives",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : Oscillateurs Mécaniques & Ondes Progressives — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : Oscillateurs Mécaniques & Ondes Progressives** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "physique-c3-l2",
            "titre": "Leçon 2 : Principes et Fondements de Oscillateurs Mécaniques & Ondes Progressives",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : Oscillateurs Mécaniques & Ondes Progressives — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : Oscillateurs Mécaniques & Ondes Progressives** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "physique-c3-l3",
            "titre": "Leçon 3 : Principes et Fondements de Oscillateurs Mécaniques & Ondes Progressives",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : Oscillateurs Mécaniques & Ondes Progressives — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : Oscillateurs Mécaniques & Ondes Progressives** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "physique-c3-l4",
            "titre": "Leçon 4 : Principes et Fondements de Oscillateurs Mécaniques & Ondes Progressives",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : Oscillateurs Mécaniques & Ondes Progressives — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : Oscillateurs Mécaniques & Ondes Progressives** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "physique-c3-l5",
            "titre": "Leçon 5 : Principes et Fondements de Oscillateurs Mécaniques & Ondes Progressives",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : Oscillateurs Mécaniques & Ondes Progressives — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : Oscillateurs Mécaniques & Ondes Progressives** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "physique-c4",
        "titre": "Chapitre 4 : Électrostatique & Circuits Électriques RLC",
        "icon": "🔌",
        "lecons": [
          {
            "id": "physique-c4-l1",
            "titre": "Leçon 1 : Principes et Fondements de Électrostatique & Circuits Électriques RLC",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : Électrostatique & Circuits Électriques RLC — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : Électrostatique & Circuits Électriques RLC** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "physique-c4-l2",
            "titre": "Leçon 2 : Principes et Fondements de Électrostatique & Circuits Électriques RLC",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : Électrostatique & Circuits Électriques RLC — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : Électrostatique & Circuits Électriques RLC** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "physique-c4-l3",
            "titre": "Leçon 3 : Principes et Fondements de Électrostatique & Circuits Électriques RLC",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : Électrostatique & Circuits Électriques RLC — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : Électrostatique & Circuits Électriques RLC** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "physique-c4-l4",
            "titre": "Leçon 4 : Principes et Fondements de Électrostatique & Circuits Électriques RLC",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : Électrostatique & Circuits Électriques RLC — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : Électrostatique & Circuits Électriques RLC** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "physique-c4-l5",
            "titre": "Leçon 5 : Principes et Fondements de Électrostatique & Circuits Électriques RLC",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : Électrostatique & Circuits Électriques RLC — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : Électrostatique & Circuits Électriques RLC** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "physique-c5",
        "titre": "Chapitre 5 : Physique Nucléaire & Optique Géométrique",
        "icon": "☢️",
        "lecons": [
          {
            "id": "physique-c5-l1",
            "titre": "Leçon 1 : Principes et Fondements de Physique Nucléaire & Optique Géométrique",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : Physique Nucléaire & Optique Géométrique — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : Physique Nucléaire & Optique Géométrique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "physique-c5-l2",
            "titre": "Leçon 2 : Principes et Fondements de Physique Nucléaire & Optique Géométrique",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : Physique Nucléaire & Optique Géométrique — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : Physique Nucléaire & Optique Géométrique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "physique-c5-l3",
            "titre": "Leçon 3 : Principes et Fondements de Physique Nucléaire & Optique Géométrique",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : Physique Nucléaire & Optique Géométrique — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : Physique Nucléaire & Optique Géométrique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "physique-c5-l4",
            "titre": "Leçon 4 : Principes et Fondements de Physique Nucléaire & Optique Géométrique",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : Physique Nucléaire & Optique Géométrique — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : Physique Nucléaire & Optique Géométrique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "physique-c5-l5",
            "titre": "Leçon 5 : Principes et Fondements de Physique Nucléaire & Optique Géométrique",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : Physique Nucléaire & Optique Géométrique — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : Physique Nucléaire & Optique Géométrique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      }
    ]
  },
  {
    "id": "chimie",
    "nom": "Chimie",
    "icon": "🧪",
    "couleur": "from-emerald-500 to-teal-700",
    "couleurLight": "bg-emerald-50 text-emerald-700 border-emerald-200",
    "couleurDark": "dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800",
    "niveaux": [
      "Bac"
    ],
    "description": "Cinétique chimique, équilibres acido-basiques, chimie organique et piles pour le Baccalauréat.",
    "chapitres": [
      {
        "id": "chimie-c1",
        "titre": "Chapitre 1 : Solutions Aqueuses & Équilibres Acido-Basiques",
        "icon": "💧",
        "lecons": [
          {
            "id": "chimie-c1-l1",
            "titre": "Leçon 1 : Principes et Fondements de Solutions Aqueuses & Équilibres Acido-Basiques",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Solutions Aqueuses & Équilibres Acido-Basiques — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Solutions Aqueuses & Équilibres Acido-Basiques** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "chimie-c1-l2",
            "titre": "Leçon 2 : Principes et Fondements de Solutions Aqueuses & Équilibres Acido-Basiques",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Solutions Aqueuses & Équilibres Acido-Basiques — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Solutions Aqueuses & Équilibres Acido-Basiques** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "chimie-c1-l3",
            "titre": "Leçon 3 : Principes et Fondements de Solutions Aqueuses & Équilibres Acido-Basiques",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Solutions Aqueuses & Équilibres Acido-Basiques — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Solutions Aqueuses & Équilibres Acido-Basiques** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "chimie-c1-l4",
            "titre": "Leçon 4 : Principes et Fondements de Solutions Aqueuses & Équilibres Acido-Basiques",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Solutions Aqueuses & Équilibres Acido-Basiques — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Solutions Aqueuses & Équilibres Acido-Basiques** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "chimie-c1-l5",
            "titre": "Leçon 5 : Principes et Fondements de Solutions Aqueuses & Équilibres Acido-Basiques",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Solutions Aqueuses & Équilibres Acido-Basiques — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Solutions Aqueuses & Équilibres Acido-Basiques** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "chimie-c2",
        "titre": "Chapitre 2 : Cinétique Chimique & Catalyse",
        "icon": "⏱️",
        "lecons": [
          {
            "id": "chimie-c2-l1",
            "titre": "Leçon 1 : Principes et Fondements de Cinétique Chimique & Catalyse",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : Cinétique Chimique & Catalyse — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : Cinétique Chimique & Catalyse** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "chimie-c2-l2",
            "titre": "Leçon 2 : Principes et Fondements de Cinétique Chimique & Catalyse",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : Cinétique Chimique & Catalyse — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : Cinétique Chimique & Catalyse** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "chimie-c2-l3",
            "titre": "Leçon 3 : Principes et Fondements de Cinétique Chimique & Catalyse",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : Cinétique Chimique & Catalyse — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : Cinétique Chimique & Catalyse** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "chimie-c2-l4",
            "titre": "Leçon 4 : Principes et Fondements de Cinétique Chimique & Catalyse",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : Cinétique Chimique & Catalyse — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : Cinétique Chimique & Catalyse** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "chimie-c2-l5",
            "titre": "Leçon 5 : Principes et Fondements de Cinétique Chimique & Catalyse",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : Cinétique Chimique & Catalyse — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : Cinétique Chimique & Catalyse** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "chimie-c3",
        "titre": "Chapitre 3 : Chimie Organique — Alcanes & Alcools",
        "icon": "🧪",
        "lecons": [
          {
            "id": "chimie-c3-l1",
            "titre": "Leçon 1 : Principes et Fondements de Chimie Organique — Alcanes & Alcools",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : Chimie Organique — Alcanes & Alcools — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : Chimie Organique — Alcanes & Alcools** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "chimie-c3-l2",
            "titre": "Leçon 2 : Principes et Fondements de Chimie Organique — Alcanes & Alcools",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : Chimie Organique — Alcanes & Alcools — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : Chimie Organique — Alcanes & Alcools** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "chimie-c3-l3",
            "titre": "Leçon 3 : Principes et Fondements de Chimie Organique — Alcanes & Alcools",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : Chimie Organique — Alcanes & Alcools — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : Chimie Organique — Alcanes & Alcools** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "chimie-c3-l4",
            "titre": "Leçon 4 : Principes et Fondements de Chimie Organique — Alcanes & Alcools",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : Chimie Organique — Alcanes & Alcools — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : Chimie Organique — Alcanes & Alcools** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "chimie-c3-l5",
            "titre": "Leçon 5 : Principes et Fondements de Chimie Organique — Alcanes & Alcools",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : Chimie Organique — Alcanes & Alcools — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : Chimie Organique — Alcanes & Alcools** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "chimie-c4",
        "titre": "Chapitre 4 : Acides Carboxyliques & Dérivés Fonctionnels",
        "icon": "⚗️",
        "lecons": [
          {
            "id": "chimie-c4-l1",
            "titre": "Leçon 1 : Principes et Fondements de Acides Carboxyliques & Dérivés Fonctionnels",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : Acides Carboxyliques & Dérivés Fonctionnels — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : Acides Carboxyliques & Dérivés Fonctionnels** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "chimie-c4-l2",
            "titre": "Leçon 2 : Principes et Fondements de Acides Carboxyliques & Dérivés Fonctionnels",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : Acides Carboxyliques & Dérivés Fonctionnels — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : Acides Carboxyliques & Dérivés Fonctionnels** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "chimie-c4-l3",
            "titre": "Leçon 3 : Principes et Fondements de Acides Carboxyliques & Dérivés Fonctionnels",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : Acides Carboxyliques & Dérivés Fonctionnels — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : Acides Carboxyliques & Dérivés Fonctionnels** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "chimie-c4-l4",
            "titre": "Leçon 4 : Principes et Fondements de Acides Carboxyliques & Dérivés Fonctionnels",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : Acides Carboxyliques & Dérivés Fonctionnels — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : Acides Carboxyliques & Dérivés Fonctionnels** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "chimie-c4-l5",
            "titre": "Leçon 5 : Principes et Fondements de Acides Carboxyliques & Dérivés Fonctionnels",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : Acides Carboxyliques & Dérivés Fonctionnels — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : Acides Carboxyliques & Dérivés Fonctionnels** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "chimie-c5",
        "titre": "Chapitre 5 : Électrochimie, Piles & Electrolyse",
        "icon": "🔋",
        "lecons": [
          {
            "id": "chimie-c5-l1",
            "titre": "Leçon 1 : Principes et Fondements de Électrochimie, Piles & Electrolyse",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : Électrochimie, Piles & Electrolyse — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : Électrochimie, Piles & Electrolyse** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "chimie-c5-l2",
            "titre": "Leçon 2 : Principes et Fondements de Électrochimie, Piles & Electrolyse",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : Électrochimie, Piles & Electrolyse — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : Électrochimie, Piles & Electrolyse** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "chimie-c5-l3",
            "titre": "Leçon 3 : Principes et Fondements de Électrochimie, Piles & Electrolyse",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : Électrochimie, Piles & Electrolyse — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : Électrochimie, Piles & Electrolyse** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "chimie-c5-l4",
            "titre": "Leçon 4 : Principes et Fondements de Électrochimie, Piles & Electrolyse",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : Électrochimie, Piles & Electrolyse — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : Électrochimie, Piles & Electrolyse** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "chimie-c5-l5",
            "titre": "Leçon 5 : Principes et Fondements de Électrochimie, Piles & Electrolyse",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : Électrochimie, Piles & Electrolyse — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : Électrochimie, Piles & Electrolyse** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      }
    ]
  },
  {
    "id": "svt",
    "nom": "SVT",
    "icon": "🌱",
    "couleur": "from-green-600 to-emerald-800",
    "couleurLight": "bg-green-50 text-green-700 border-green-200",
    "couleurDark": "dark:bg-green-900/20 dark:text-green-300 dark:border-green-800",
    "niveaux": [
      "Bac"
    ],
    "description": "Génétique, immunologie, neurophysiologie, tectonique et métabolisme pour le Baccalauréat.",
    "chapitres": [
      {
        "id": "svt-c1",
        "titre": "Chapitre 1 : Génétique & Brassage Chromosomique",
        "icon": "🧬",
        "lecons": [
          {
            "id": "svt-c1-l1",
            "titre": "Leçon 1 : Principes et Fondements de Génétique & Brassage Chromosomique",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Génétique & Brassage Chromosomique — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Génétique & Brassage Chromosomique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "svt-c1-l2",
            "titre": "Leçon 2 : Principes et Fondements de Génétique & Brassage Chromosomique",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Génétique & Brassage Chromosomique — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Génétique & Brassage Chromosomique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "svt-c1-l3",
            "titre": "Leçon 3 : Principes et Fondements de Génétique & Brassage Chromosomique",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Génétique & Brassage Chromosomique — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Génétique & Brassage Chromosomique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "svt-c1-l4",
            "titre": "Leçon 4 : Principes et Fondements de Génétique & Brassage Chromosomique",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Génétique & Brassage Chromosomique — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Génétique & Brassage Chromosomique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "svt-c1-l5",
            "titre": "Leçon 5 : Principes et Fondements de Génétique & Brassage Chromosomique",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Génétique & Brassage Chromosomique — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Génétique & Brassage Chromosomique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "svt-c2",
        "titre": "Chapitre 2 : Immunologie & Défense de l'Organisme",
        "icon": "🛡️",
        "lecons": [
          {
            "id": "svt-c2-l1",
            "titre": "Leçon 1 : Principes et Fondements de Immunologie & Défense de l'Organisme",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : Immunologie & Défense de l'Organisme — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : Immunologie & Défense de l'Organisme** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "svt-c2-l2",
            "titre": "Leçon 2 : Principes et Fondements de Immunologie & Défense de l'Organisme",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : Immunologie & Défense de l'Organisme — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : Immunologie & Défense de l'Organisme** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "svt-c2-l3",
            "titre": "Leçon 3 : Principes et Fondements de Immunologie & Défense de l'Organisme",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : Immunologie & Défense de l'Organisme — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : Immunologie & Défense de l'Organisme** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "svt-c2-l4",
            "titre": "Leçon 4 : Principes et Fondements de Immunologie & Défense de l'Organisme",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : Immunologie & Défense de l'Organisme — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : Immunologie & Défense de l'Organisme** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "svt-c2-l5",
            "titre": "Leçon 5 : Principes et Fondements de Immunologie & Défense de l'Organisme",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : Immunologie & Défense de l'Organisme — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : Immunologie & Défense de l'Organisme** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "svt-c3",
        "titre": "Chapitre 3 : Neurophysiologie & Reflexes Moteurs",
        "icon": "🧠",
        "lecons": [
          {
            "id": "svt-c3-l1",
            "titre": "Leçon 1 : Principes et Fondements de Neurophysiologie & Reflexes Moteurs",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : Neurophysiologie & Reflexes Moteurs — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : Neurophysiologie & Reflexes Moteurs** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "svt-c3-l2",
            "titre": "Leçon 2 : Principes et Fondements de Neurophysiologie & Reflexes Moteurs",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : Neurophysiologie & Reflexes Moteurs — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : Neurophysiologie & Reflexes Moteurs** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "svt-c3-l3",
            "titre": "Leçon 3 : Principes et Fondements de Neurophysiologie & Reflexes Moteurs",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : Neurophysiologie & Reflexes Moteurs — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : Neurophysiologie & Reflexes Moteurs** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "svt-c3-l4",
            "titre": "Leçon 4 : Principes et Fondements de Neurophysiologie & Reflexes Moteurs",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : Neurophysiologie & Reflexes Moteurs — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : Neurophysiologie & Reflexes Moteurs** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "svt-c3-l5",
            "titre": "Leçon 5 : Principes et Fondements de Neurophysiologie & Reflexes Moteurs",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : Neurophysiologie & Reflexes Moteurs — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : Neurophysiologie & Reflexes Moteurs** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "svt-c4",
        "titre": "Chapitre 4 : Géologie & Tectonique des Plaques",
        "icon": "🌍",
        "lecons": [
          {
            "id": "svt-c4-l1",
            "titre": "Leçon 1 : Principes et Fondements de Géologie & Tectonique des Plaques",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : Géologie & Tectonique des Plaques — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : Géologie & Tectonique des Plaques** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "svt-c4-l2",
            "titre": "Leçon 2 : Principes et Fondements de Géologie & Tectonique des Plaques",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : Géologie & Tectonique des Plaques — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : Géologie & Tectonique des Plaques** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "svt-c4-l3",
            "titre": "Leçon 3 : Principes et Fondements de Géologie & Tectonique des Plaques",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : Géologie & Tectonique des Plaques — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : Géologie & Tectonique des Plaques** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "svt-c4-l4",
            "titre": "Leçon 4 : Principes et Fondements de Géologie & Tectonique des Plaques",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : Géologie & Tectonique des Plaques — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : Géologie & Tectonique des Plaques** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "svt-c4-l5",
            "titre": "Leçon 5 : Principes et Fondements de Géologie & Tectonique des Plaques",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : Géologie & Tectonique des Plaques — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : Géologie & Tectonique des Plaques** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "svt-c5",
        "titre": "Chapitre 5 : Métabolisme Cellulaire & Photosynthèse",
        "icon": "🌱",
        "lecons": [
          {
            "id": "svt-c5-l1",
            "titre": "Leçon 1 : Principes et Fondements de Métabolisme Cellulaire & Photosynthèse",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : Métabolisme Cellulaire & Photosynthèse — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : Métabolisme Cellulaire & Photosynthèse** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "svt-c5-l2",
            "titre": "Leçon 2 : Principes et Fondements de Métabolisme Cellulaire & Photosynthèse",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : Métabolisme Cellulaire & Photosynthèse — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : Métabolisme Cellulaire & Photosynthèse** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "svt-c5-l3",
            "titre": "Leçon 3 : Principes et Fondements de Métabolisme Cellulaire & Photosynthèse",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : Métabolisme Cellulaire & Photosynthèse — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : Métabolisme Cellulaire & Photosynthèse** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "svt-c5-l4",
            "titre": "Leçon 4 : Principes et Fondements de Métabolisme Cellulaire & Photosynthèse",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : Métabolisme Cellulaire & Photosynthèse — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : Métabolisme Cellulaire & Photosynthèse** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "svt-c5-l5",
            "titre": "Leçon 5 : Principes et Fondements de Métabolisme Cellulaire & Photosynthèse",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : Métabolisme Cellulaire & Photosynthèse — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : Métabolisme Cellulaire & Photosynthèse** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      }
    ]
  },
  {
    "id": "histoire",
    "nom": "Histoire",
    "icon": "📜",
    "couleur": "from-rose-600 to-red-800",
    "couleurLight": "bg-rose-50 text-rose-700 border-rose-200",
    "couleurDark": "dark:bg-rose-900/20 dark:text-rose-300 dark:border-rose-800",
    "niveaux": [
      "Bac"
    ],
    "description": "Histoire du Cameroun de 1884 à nos jours et histoire mondiale du XXe siècle pour le Baccalauréat.",
    "chapitres": [
      {
        "id": "histoire-c1",
        "titre": "Chapitre 1 : Le Cameroun sous Mandat et Tutelle (1916-1960)",
        "icon": "🏛️",
        "lecons": [
          {
            "id": "histoire-c1-l1",
            "titre": "Leçon 1 : Principes et Fondements de Le Cameroun sous Mandat et Tutelle (1916-1960)",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Le Cameroun sous Mandat et Tutelle (1916-1960) — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Le Cameroun sous Mandat et Tutelle (1916-1960)** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "histoire-c1-l2",
            "titre": "Leçon 2 : Principes et Fondements de Le Cameroun sous Mandat et Tutelle (1916-1960)",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Le Cameroun sous Mandat et Tutelle (1916-1960) — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Le Cameroun sous Mandat et Tutelle (1916-1960)** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "histoire-c1-l3",
            "titre": "Leçon 3 : Principes et Fondements de Le Cameroun sous Mandat et Tutelle (1916-1960)",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Le Cameroun sous Mandat et Tutelle (1916-1960) — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Le Cameroun sous Mandat et Tutelle (1916-1960)** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "histoire-c1-l4",
            "titre": "Leçon 4 : Principes et Fondements de Le Cameroun sous Mandat et Tutelle (1916-1960)",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Le Cameroun sous Mandat et Tutelle (1916-1960) — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Le Cameroun sous Mandat et Tutelle (1916-1960)** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "histoire-c1-l5",
            "titre": "Leçon 5 : Principes et Fondements de Le Cameroun sous Mandat et Tutelle (1916-1960)",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Le Cameroun sous Mandat et Tutelle (1916-1960) — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Le Cameroun sous Mandat et Tutelle (1916-1960)** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "histoire-c2",
        "titre": "Chapitre 2 : L'Indépendance et la Réunification du Cameroun",
        "icon": "🇨🇲",
        "lecons": [
          {
            "id": "histoire-c2-l1",
            "titre": "Leçon 1 : Principes et Fondements de L'Indépendance et la Réunification du Cameroun",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : L'Indépendance et la Réunification du Cameroun — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : L'Indépendance et la Réunification du Cameroun** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "histoire-c2-l2",
            "titre": "Leçon 2 : Principes et Fondements de L'Indépendance et la Réunification du Cameroun",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : L'Indépendance et la Réunification du Cameroun — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : L'Indépendance et la Réunification du Cameroun** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "histoire-c2-l3",
            "titre": "Leçon 3 : Principes et Fondements de L'Indépendance et la Réunification du Cameroun",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : L'Indépendance et la Réunification du Cameroun — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : L'Indépendance et la Réunification du Cameroun** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "histoire-c2-l4",
            "titre": "Leçon 4 : Principes et Fondements de L'Indépendance et la Réunification du Cameroun",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : L'Indépendance et la Réunification du Cameroun — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : L'Indépendance et la Réunification du Cameroun** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "histoire-c2-l5",
            "titre": "Leçon 5 : Principes et Fondements de L'Indépendance et la Réunification du Cameroun",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : L'Indépendance et la Réunification du Cameroun — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : L'Indépendance et la Réunification du Cameroun** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "histoire-c3",
        "titre": "Chapitre 3 : La Seconde Guerre Mondiale (1939-1945)",
        "icon": "⚔️",
        "lecons": [
          {
            "id": "histoire-c3-l1",
            "titre": "Leçon 1 : Principes et Fondements de La Seconde Guerre Mondiale (1939-1945)",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : La Seconde Guerre Mondiale (1939-1945) — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : La Seconde Guerre Mondiale (1939-1945)** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "histoire-c3-l2",
            "titre": "Leçon 2 : Principes et Fondements de La Seconde Guerre Mondiale (1939-1945)",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : La Seconde Guerre Mondiale (1939-1945) — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : La Seconde Guerre Mondiale (1939-1945)** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "histoire-c3-l3",
            "titre": "Leçon 3 : Principes et Fondements de La Seconde Guerre Mondiale (1939-1945)",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : La Seconde Guerre Mondiale (1939-1945) — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : La Seconde Guerre Mondiale (1939-1945)** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "histoire-c3-l4",
            "titre": "Leçon 4 : Principes et Fondements de La Seconde Guerre Mondiale (1939-1945)",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : La Seconde Guerre Mondiale (1939-1945) — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : La Seconde Guerre Mondiale (1939-1945)** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "histoire-c3-l5",
            "titre": "Leçon 5 : Principes et Fondements de La Seconde Guerre Mondiale (1939-1945)",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : La Seconde Guerre Mondiale (1939-1945) — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : La Seconde Guerre Mondiale (1939-1945)** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "histoire-c4",
        "titre": "Chapitre 4 : La Guerre Froide et les Relations Est-Ouest",
        "icon": "🕊️",
        "lecons": [
          {
            "id": "histoire-c4-l1",
            "titre": "Leçon 1 : Principes et Fondements de La Guerre Froide et les Relations Est-Ouest",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : La Guerre Froide et les Relations Est-Ouest — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : La Guerre Froide et les Relations Est-Ouest** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "histoire-c4-l2",
            "titre": "Leçon 2 : Principes et Fondements de La Guerre Froide et les Relations Est-Ouest",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : La Guerre Froide et les Relations Est-Ouest — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : La Guerre Froide et les Relations Est-Ouest** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "histoire-c4-l3",
            "titre": "Leçon 3 : Principes et Fondements de La Guerre Froide et les Relations Est-Ouest",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : La Guerre Froide et les Relations Est-Ouest — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : La Guerre Froide et les Relations Est-Ouest** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "histoire-c4-l4",
            "titre": "Leçon 4 : Principes et Fondements de La Guerre Froide et les Relations Est-Ouest",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : La Guerre Froide et les Relations Est-Ouest — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : La Guerre Froide et les Relations Est-Ouest** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "histoire-c4-l5",
            "titre": "Leçon 5 : Principes et Fondements de La Guerre Froide et les Relations Est-Ouest",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : La Guerre Froide et les Relations Est-Ouest — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : La Guerre Froide et les Relations Est-Ouest** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "histoire-c5",
        "titre": "Chapitre 5 : La Décolonisation en Afrique et en Asie",
        "icon": "🌍",
        "lecons": [
          {
            "id": "histoire-c5-l1",
            "titre": "Leçon 1 : Principes et Fondements de La Décolonisation en Afrique et en Asie",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : La Décolonisation en Afrique et en Asie — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : La Décolonisation en Afrique et en Asie** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "histoire-c5-l2",
            "titre": "Leçon 2 : Principes et Fondements de La Décolonisation en Afrique et en Asie",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : La Décolonisation en Afrique et en Asie — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : La Décolonisation en Afrique et en Asie** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "histoire-c5-l3",
            "titre": "Leçon 3 : Principes et Fondements de La Décolonisation en Afrique et en Asie",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : La Décolonisation en Afrique et en Asie — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : La Décolonisation en Afrique et en Asie** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "histoire-c5-l4",
            "titre": "Leçon 4 : Principes et Fondements de La Décolonisation en Afrique et en Asie",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : La Décolonisation en Afrique et en Asie — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : La Décolonisation en Afrique et en Asie** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "histoire-c5-l5",
            "titre": "Leçon 5 : Principes et Fondements de La Décolonisation en Afrique et en Asie",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : La Décolonisation en Afrique et en Asie — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : La Décolonisation en Afrique et en Asie** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      }
    ]
  },
  {
    "id": "geographie",
    "nom": "Géographie",
    "icon": "🗺️",
    "couleur": "from-teal-600 to-cyan-800",
    "couleurLight": "bg-teal-50 text-teal-700 border-teal-200",
    "couleurDark": "dark:bg-teal-900/20 dark:text-teal-300 dark:border-teal-800",
    "niveaux": [
      "Bac"
    ],
    "description": "Géographie physique et humaine du Cameroun, de l'Afrique et du monde pour le Baccalauréat.",
    "chapitres": [
      {
        "id": "geographie-c1",
        "titre": "Chapitre 1 : Le Relief et le Climat du Cameroun",
        "icon": "🏔️",
        "lecons": [
          {
            "id": "geographie-c1-l1",
            "titre": "Leçon 1 : Principes et Fondements de Le Relief et le Climat du Cameroun",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Le Relief et le Climat du Cameroun — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Le Relief et le Climat du Cameroun** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "geographie-c1-l2",
            "titre": "Leçon 2 : Principes et Fondements de Le Relief et le Climat du Cameroun",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Le Relief et le Climat du Cameroun — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Le Relief et le Climat du Cameroun** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "geographie-c1-l3",
            "titre": "Leçon 3 : Principes et Fondements de Le Relief et le Climat du Cameroun",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Le Relief et le Climat du Cameroun — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Le Relief et le Climat du Cameroun** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "geographie-c1-l4",
            "titre": "Leçon 4 : Principes et Fondements de Le Relief et le Climat du Cameroun",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Le Relief et le Climat du Cameroun — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Le Relief et le Climat du Cameroun** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "geographie-c1-l5",
            "titre": "Leçon 5 : Principes et Fondements de Le Relief et le Climat du Cameroun",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Le Relief et le Climat du Cameroun — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Le Relief et le Climat du Cameroun** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "geographie-c2",
        "titre": "Chapitre 2 : La Population et l'Urbanisation au Cameroun",
        "icon": "🏙️",
        "lecons": [
          {
            "id": "geographie-c2-l1",
            "titre": "Leçon 1 : Principes et Fondements de La Population et l'Urbanisation au Cameroun",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : La Population et l'Urbanisation au Cameroun — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : La Population et l'Urbanisation au Cameroun** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "geographie-c2-l2",
            "titre": "Leçon 2 : Principes et Fondements de La Population et l'Urbanisation au Cameroun",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : La Population et l'Urbanisation au Cameroun — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : La Population et l'Urbanisation au Cameroun** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "geographie-c2-l3",
            "titre": "Leçon 3 : Principes et Fondements de La Population et l'Urbanisation au Cameroun",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : La Population et l'Urbanisation au Cameroun — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : La Population et l'Urbanisation au Cameroun** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "geographie-c2-l4",
            "titre": "Leçon 4 : Principes et Fondements de La Population et l'Urbanisation au Cameroun",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : La Population et l'Urbanisation au Cameroun — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : La Population et l'Urbanisation au Cameroun** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "geographie-c2-l5",
            "titre": "Leçon 5 : Principes et Fondements de La Population et l'Urbanisation au Cameroun",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : La Population et l'Urbanisation au Cameroun — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : La Population et l'Urbanisation au Cameroun** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "geographie-c3",
        "titre": "Chapitre 3 : L'Agriculture et les Ressources Énergétiques",
        "icon": "🌾",
        "lecons": [
          {
            "id": "geographie-c3-l1",
            "titre": "Leçon 1 : Principes et Fondements de L'Agriculture et les Ressources Énergétiques",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : L'Agriculture et les Ressources Énergétiques — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : L'Agriculture et les Ressources Énergétiques** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "geographie-c3-l2",
            "titre": "Leçon 2 : Principes et Fondements de L'Agriculture et les Ressources Énergétiques",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : L'Agriculture et les Ressources Énergétiques — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : L'Agriculture et les Ressources Énergétiques** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "geographie-c3-l3",
            "titre": "Leçon 3 : Principes et Fondements de L'Agriculture et les Ressources Énergétiques",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : L'Agriculture et les Ressources Énergétiques — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : L'Agriculture et les Ressources Énergétiques** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "geographie-c3-l4",
            "titre": "Leçon 4 : Principes et Fondements de L'Agriculture et les Ressources Énergétiques",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : L'Agriculture et les Ressources Énergétiques — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : L'Agriculture et les Ressources Énergétiques** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "geographie-c3-l5",
            "titre": "Leçon 5 : Principes et Fondements de L'Agriculture et les Ressources Énergétiques",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : L'Agriculture et les Ressources Énergétiques — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : L'Agriculture et les Ressources Énergétiques** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "geographie-c4",
        "titre": "Chapitre 4 : L'Industrie et le Commerce en Afrique",
        "icon": "🏭",
        "lecons": [
          {
            "id": "geographie-c4-l1",
            "titre": "Leçon 1 : Principes et Fondements de L'Industrie et le Commerce en Afrique",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : L'Industrie et le Commerce en Afrique — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : L'Industrie et le Commerce en Afrique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "geographie-c4-l2",
            "titre": "Leçon 2 : Principes et Fondements de L'Industrie et le Commerce en Afrique",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : L'Industrie et le Commerce en Afrique — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : L'Industrie et le Commerce en Afrique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "geographie-c4-l3",
            "titre": "Leçon 3 : Principes et Fondements de L'Industrie et le Commerce en Afrique",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : L'Industrie et le Commerce en Afrique — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : L'Industrie et le Commerce en Afrique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "geographie-c4-l4",
            "titre": "Leçon 4 : Principes et Fondements de L'Industrie et le Commerce en Afrique",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : L'Industrie et le Commerce en Afrique — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : L'Industrie et le Commerce en Afrique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "geographie-c4-l5",
            "titre": "Leçon 5 : Principes et Fondements de L'Industrie et le Commerce en Afrique",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : L'Industrie et le Commerce en Afrique — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : L'Industrie et le Commerce en Afrique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "geographie-c5",
        "titre": "Chapitre 5 : La Mondialisation et les Enjeux Environnementaux",
        "icon": "🌐",
        "lecons": [
          {
            "id": "geographie-c5-l1",
            "titre": "Leçon 1 : Principes et Fondements de La Mondialisation et les Enjeux Environnementaux",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : La Mondialisation et les Enjeux Environnementaux — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : La Mondialisation et les Enjeux Environnementaux** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "geographie-c5-l2",
            "titre": "Leçon 2 : Principes et Fondements de La Mondialisation et les Enjeux Environnementaux",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : La Mondialisation et les Enjeux Environnementaux — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : La Mondialisation et les Enjeux Environnementaux** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "geographie-c5-l3",
            "titre": "Leçon 3 : Principes et Fondements de La Mondialisation et les Enjeux Environnementaux",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : La Mondialisation et les Enjeux Environnementaux — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : La Mondialisation et les Enjeux Environnementaux** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "geographie-c5-l4",
            "titre": "Leçon 4 : Principes et Fondements de La Mondialisation et les Enjeux Environnementaux",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : La Mondialisation et les Enjeux Environnementaux — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : La Mondialisation et les Enjeux Environnementaux** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "geographie-c5-l5",
            "titre": "Leçon 5 : Principes et Fondements de La Mondialisation et les Enjeux Environnementaux",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : La Mondialisation et les Enjeux Environnementaux — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : La Mondialisation et les Enjeux Environnementaux** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      }
    ]
  },
  {
    "id": "francais",
    "nom": "Français & Littérature",
    "icon": "📚",
    "couleur": "from-purple-600 to-indigo-800",
    "couleurLight": "bg-purple-50 text-purple-700 border-purple-200",
    "couleurDark": "dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800",
    "niveaux": [
      "Bac"
    ],
    "description": "Dissertation, explication de texte et œuvres littéraires pour le Baccalauréat.",
    "chapitres": [
      {
        "id": "francais-c1",
        "titre": "Chapitre 1 : La Dissertation Littéraire & Méthodologie",
        "icon": "✍️",
        "lecons": [
          {
            "id": "francais-c1-l1",
            "titre": "Leçon 1 : Principes et Fondements de La Dissertation Littéraire & Méthodologie",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : La Dissertation Littéraire & Méthodologie — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : La Dissertation Littéraire & Méthodologie** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "francais-c1-l2",
            "titre": "Leçon 2 : Principes et Fondements de La Dissertation Littéraire & Méthodologie",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : La Dissertation Littéraire & Méthodologie — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : La Dissertation Littéraire & Méthodologie** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "francais-c1-l3",
            "titre": "Leçon 3 : Principes et Fondements de La Dissertation Littéraire & Méthodologie",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : La Dissertation Littéraire & Méthodologie — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : La Dissertation Littéraire & Méthodologie** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "francais-c1-l4",
            "titre": "Leçon 4 : Principes et Fondements de La Dissertation Littéraire & Méthodologie",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : La Dissertation Littéraire & Méthodologie — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : La Dissertation Littéraire & Méthodologie** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "francais-c1-l5",
            "titre": "Leçon 5 : Principes et Fondements de La Dissertation Littéraire & Méthodologie",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : La Dissertation Littéraire & Méthodologie — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : La Dissertation Littéraire & Méthodologie** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "francais-c2",
        "titre": "Chapitre 2 : L'Analyse Méthodique de Texte",
        "icon": "📖",
        "lecons": [
          {
            "id": "francais-c2-l1",
            "titre": "Leçon 1 : Principes et Fondements de L'Analyse Méthodique de Texte",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : L'Analyse Méthodique de Texte — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : L'Analyse Méthodique de Texte** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "francais-c2-l2",
            "titre": "Leçon 2 : Principes et Fondements de L'Analyse Méthodique de Texte",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : L'Analyse Méthodique de Texte — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : L'Analyse Méthodique de Texte** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "francais-c2-l3",
            "titre": "Leçon 3 : Principes et Fondements de L'Analyse Méthodique de Texte",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : L'Analyse Méthodique de Texte — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : L'Analyse Méthodique de Texte** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "francais-c2-l4",
            "titre": "Leçon 4 : Principes et Fondements de L'Analyse Méthodique de Texte",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : L'Analyse Méthodique de Texte — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : L'Analyse Méthodique de Texte** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "francais-c2-l5",
            "titre": "Leçon 5 : Principes et Fondements de L'Analyse Méthodique de Texte",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : L'Analyse Méthodique de Texte — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : L'Analyse Méthodique de Texte** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "francais-c3",
        "titre": "Chapitre 3 : La Littérature Négro-Africaine Contemporaine",
        "icon": "📚",
        "lecons": [
          {
            "id": "francais-c3-l1",
            "titre": "Leçon 1 : Principes et Fondements de La Littérature Négro-Africaine Contemporaine",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : La Littérature Négro-Africaine Contemporaine — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : La Littérature Négro-Africaine Contemporaine** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "francais-c3-l2",
            "titre": "Leçon 2 : Principes et Fondements de La Littérature Négro-Africaine Contemporaine",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : La Littérature Négro-Africaine Contemporaine — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : La Littérature Négro-Africaine Contemporaine** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "francais-c3-l3",
            "titre": "Leçon 3 : Principes et Fondements de La Littérature Négro-Africaine Contemporaine",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : La Littérature Négro-Africaine Contemporaine — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : La Littérature Négro-Africaine Contemporaine** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "francais-c3-l4",
            "titre": "Leçon 4 : Principes et Fondements de La Littérature Négro-Africaine Contemporaine",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : La Littérature Négro-Africaine Contemporaine — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : La Littérature Négro-Africaine Contemporaine** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "francais-c3-l5",
            "titre": "Leçon 5 : Principes et Fondements de La Littérature Négro-Africaine Contemporaine",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : La Littérature Négro-Africaine Contemporaine — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : La Littérature Négro-Africaine Contemporaine** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "francais-c4",
        "titre": "Chapitre 4 : Les Courants Littéraires Européens",
        "icon": "🎭",
        "lecons": [
          {
            "id": "francais-c4-l1",
            "titre": "Leçon 1 : Principes et Fondements de Les Courants Littéraires Européens",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : Les Courants Littéraires Européens — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : Les Courants Littéraires Européens** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "francais-c4-l2",
            "titre": "Leçon 2 : Principes et Fondements de Les Courants Littéraires Européens",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : Les Courants Littéraires Européens — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : Les Courants Littéraires Européens** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "francais-c4-l3",
            "titre": "Leçon 3 : Principes et Fondements de Les Courants Littéraires Européens",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : Les Courants Littéraires Européens — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : Les Courants Littéraires Européens** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "francais-c4-l4",
            "titre": "Leçon 4 : Principes et Fondements de Les Courants Littéraires Européens",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : Les Courants Littéraires Européens — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : Les Courants Littéraires Européens** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "francais-c4-l5",
            "titre": "Leçon 5 : Principes et Fondements de Les Courants Littéraires Européens",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : Les Courants Littéraires Européens — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : Les Courants Littéraires Européens** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "francais-c5",
        "titre": "Chapitre 5 : Figures de Style et Procédés d'Écriture",
        "icon": "🖋️",
        "lecons": [
          {
            "id": "francais-c5-l1",
            "titre": "Leçon 1 : Principes et Fondements de Figures de Style et Procédés d'Écriture",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : Figures de Style et Procédés d'Écriture — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : Figures de Style et Procédés d'Écriture** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "francais-c5-l2",
            "titre": "Leçon 2 : Principes et Fondements de Figures de Style et Procédés d'Écriture",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : Figures de Style et Procédés d'Écriture — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : Figures de Style et Procédés d'Écriture** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "francais-c5-l3",
            "titre": "Leçon 3 : Principes et Fondements de Figures de Style et Procédés d'Écriture",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : Figures de Style et Procédés d'Écriture — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : Figures de Style et Procédés d'Écriture** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "francais-c5-l4",
            "titre": "Leçon 4 : Principes et Fondements de Figures de Style et Procédés d'Écriture",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : Figures de Style et Procédés d'Écriture — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : Figures de Style et Procédés d'Écriture** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "francais-c5-l5",
            "titre": "Leçon 5 : Principes et Fondements de Figures de Style et Procédés d'Écriture",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : Figures de Style et Procédés d'Écriture — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : Figures de Style et Procédés d'Écriture** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      }
    ]
  },
  {
    "id": "philosophie",
    "nom": "Philosophie",
    "icon": "🤔",
    "couleur": "from-violet-600 to-purple-900",
    "couleurLight": "bg-violet-50 text-violet-700 border-violet-200",
    "couleurDark": "dark:bg-violet-900/20 dark:text-violet-300 dark:border-violet-800",
    "niveaux": [
      "Bac"
    ],
    "description": "Les grands domaines philosophiques et la dissertation pour le Baccalauréat.",
    "chapitres": [
      {
        "id": "philosophie-c1",
        "titre": "Chapitre 1 : La Conscience et l'Inconscient",
        "icon": "🧠",
        "lecons": [
          {
            "id": "philosophie-c1-l1",
            "titre": "Leçon 1 : Principes et Fondements de La Conscience et l'Inconscient",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : La Conscience et l'Inconscient — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : La Conscience et l'Inconscient** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "philosophie-c1-l2",
            "titre": "Leçon 2 : Principes et Fondements de La Conscience et l'Inconscient",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : La Conscience et l'Inconscient — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : La Conscience et l'Inconscient** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "philosophie-c1-l3",
            "titre": "Leçon 3 : Principes et Fondements de La Conscience et l'Inconscient",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : La Conscience et l'Inconscient — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : La Conscience et l'Inconscient** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "philosophie-c1-l4",
            "titre": "Leçon 4 : Principes et Fondements de La Conscience et l'Inconscient",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : La Conscience et l'Inconscient — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : La Conscience et l'Inconscient** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "philosophie-c1-l5",
            "titre": "Leçon 5 : Principes et Fondements de La Conscience et l'Inconscient",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : La Conscience et l'Inconscient — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : La Conscience et l'Inconscient** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "philosophie-c2",
        "titre": "Chapitre 2 : La Liberté, le Devoir et la Morale",
        "icon": "⚖️",
        "lecons": [
          {
            "id": "philosophie-c2-l1",
            "titre": "Leçon 1 : Principes et Fondements de La Liberté, le Devoir et la Morale",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : La Liberté, le Devoir et la Morale — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : La Liberté, le Devoir et la Morale** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "philosophie-c2-l2",
            "titre": "Leçon 2 : Principes et Fondements de La Liberté, le Devoir et la Morale",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : La Liberté, le Devoir et la Morale — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : La Liberté, le Devoir et la Morale** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "philosophie-c2-l3",
            "titre": "Leçon 3 : Principes et Fondements de La Liberté, le Devoir et la Morale",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : La Liberté, le Devoir et la Morale — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : La Liberté, le Devoir et la Morale** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "philosophie-c2-l4",
            "titre": "Leçon 4 : Principes et Fondements de La Liberté, le Devoir et la Morale",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : La Liberté, le Devoir et la Morale — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : La Liberté, le Devoir et la Morale** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "philosophie-c2-l5",
            "titre": "Leçon 5 : Principes et Fondements de La Liberté, le Devoir et la Morale",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : La Liberté, le Devoir et la Morale — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : La Liberté, le Devoir et la Morale** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "philosophie-c3",
        "titre": "Chapitre 3 : La Vérité et la Connaissance Scientifique",
        "icon": "🔍",
        "lecons": [
          {
            "id": "philosophie-c3-l1",
            "titre": "Leçon 1 : Principes et Fondements de La Vérité et la Connaissance Scientifique",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : La Vérité et la Connaissance Scientifique — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : La Vérité et la Connaissance Scientifique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "philosophie-c3-l2",
            "titre": "Leçon 2 : Principes et Fondements de La Vérité et la Connaissance Scientifique",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : La Vérité et la Connaissance Scientifique — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : La Vérité et la Connaissance Scientifique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "philosophie-c3-l3",
            "titre": "Leçon 3 : Principes et Fondements de La Vérité et la Connaissance Scientifique",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : La Vérité et la Connaissance Scientifique — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : La Vérité et la Connaissance Scientifique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "philosophie-c3-l4",
            "titre": "Leçon 4 : Principes et Fondements de La Vérité et la Connaissance Scientifique",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : La Vérité et la Connaissance Scientifique — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : La Vérité et la Connaissance Scientifique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "philosophie-c3-l5",
            "titre": "Leçon 5 : Principes et Fondements de La Vérité et la Connaissance Scientifique",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : La Vérité et la Connaissance Scientifique — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : La Vérité et la Connaissance Scientifique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "philosophie-c4",
        "titre": "Chapitre 4 : L'État, la Justice et la Politique",
        "icon": "🏛️",
        "lecons": [
          {
            "id": "philosophie-c4-l1",
            "titre": "Leçon 1 : Principes et Fondements de L'État, la Justice et la Politique",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : L'État, la Justice et la Politique — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : L'État, la Justice et la Politique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "philosophie-c4-l2",
            "titre": "Leçon 2 : Principes et Fondements de L'État, la Justice et la Politique",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : L'État, la Justice et la Politique — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : L'État, la Justice et la Politique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "philosophie-c4-l3",
            "titre": "Leçon 3 : Principes et Fondements de L'État, la Justice et la Politique",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : L'État, la Justice et la Politique — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : L'État, la Justice et la Politique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "philosophie-c4-l4",
            "titre": "Leçon 4 : Principes et Fondements de L'État, la Justice et la Politique",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : L'État, la Justice et la Politique — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : L'État, la Justice et la Politique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "philosophie-c4-l5",
            "titre": "Leçon 5 : Principes et Fondements de L'État, la Justice et la Politique",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : L'État, la Justice et la Politique — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : L'État, la Justice et la Politique** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "philosophie-c5",
        "titre": "Chapitre 5 : L'Art, le Beau et la Culture",
        "icon": "🎨",
        "lecons": [
          {
            "id": "philosophie-c5-l1",
            "titre": "Leçon 1 : Principes et Fondements de L'Art, le Beau et la Culture",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : L'Art, le Beau et la Culture — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : L'Art, le Beau et la Culture** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "philosophie-c5-l2",
            "titre": "Leçon 2 : Principes et Fondements de L'Art, le Beau et la Culture",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : L'Art, le Beau et la Culture — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : L'Art, le Beau et la Culture** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "philosophie-c5-l3",
            "titre": "Leçon 3 : Principes et Fondements de L'Art, le Beau et la Culture",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : L'Art, le Beau et la Culture — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : L'Art, le Beau et la Culture** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "philosophie-c5-l4",
            "titre": "Leçon 4 : Principes et Fondements de L'Art, le Beau et la Culture",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : L'Art, le Beau et la Culture — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : L'Art, le Beau et la Culture** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "philosophie-c5-l5",
            "titre": "Leçon 5 : Principes et Fondements de L'Art, le Beau et la Culture",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : L'Art, le Beau et la Culture — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : L'Art, le Beau et la Culture** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      }
    ]
  },
  {
    "id": "informatique",
    "nom": "Informatique",
    "icon": "💻",
    "couleur": "from-cyan-600 to-blue-800",
    "couleurLight": "bg-cyan-50 text-cyan-700 border-cyan-200",
    "couleurDark": "dark:bg-cyan-900/20 dark:text-cyan-300 dark:border-cyan-800",
    "niveaux": [
      "Bac"
    ],
    "description": "Algorithmique, réseaux, systèmes et bases de données pour le Baccalauréat.",
    "chapitres": [
      {
        "id": "informatique-c1",
        "titre": "Chapitre 1 : Algorithmique et Structures de Données",
        "icon": "🔀",
        "lecons": [
          {
            "id": "informatique-c1-l1",
            "titre": "Leçon 1 : Principes et Fondements de Algorithmique et Structures de Données",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Algorithmique et Structures de Données — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Algorithmique et Structures de Données** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "informatique-c1-l2",
            "titre": "Leçon 2 : Principes et Fondements de Algorithmique et Structures de Données",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Algorithmique et Structures de Données — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Algorithmique et Structures de Données** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "informatique-c1-l3",
            "titre": "Leçon 3 : Principes et Fondements de Algorithmique et Structures de Données",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Algorithmique et Structures de Données — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Algorithmique et Structures de Données** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "informatique-c1-l4",
            "titre": "Leçon 4 : Principes et Fondements de Algorithmique et Structures de Données",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Algorithmique et Structures de Données — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Algorithmique et Structures de Données** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "informatique-c1-l5",
            "titre": "Leçon 5 : Principes et Fondements de Algorithmique et Structures de Données",
            "duree": "45 min",
            "contenu": "# Chapitre 1 : Algorithmique et Structures de Données — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 1 : Algorithmique et Structures de Données** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "informatique-c2",
        "titre": "Chapitre 2 : Programmation et Langages (C/Python)",
        "icon": "💻",
        "lecons": [
          {
            "id": "informatique-c2-l1",
            "titre": "Leçon 1 : Principes et Fondements de Programmation et Langages (C/Python)",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : Programmation et Langages (C/Python) — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : Programmation et Langages (C/Python)** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "informatique-c2-l2",
            "titre": "Leçon 2 : Principes et Fondements de Programmation et Langages (C/Python)",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : Programmation et Langages (C/Python) — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : Programmation et Langages (C/Python)** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "informatique-c2-l3",
            "titre": "Leçon 3 : Principes et Fondements de Programmation et Langages (C/Python)",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : Programmation et Langages (C/Python) — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : Programmation et Langages (C/Python)** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "informatique-c2-l4",
            "titre": "Leçon 4 : Principes et Fondements de Programmation et Langages (C/Python)",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : Programmation et Langages (C/Python) — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : Programmation et Langages (C/Python)** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "informatique-c2-l5",
            "titre": "Leçon 5 : Principes et Fondements de Programmation et Langages (C/Python)",
            "duree": "45 min",
            "contenu": "# Chapitre 2 : Programmation et Langages (C/Python) — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 2 : Programmation et Langages (C/Python)** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "informatique-c3",
        "titre": "Chapitre 3 : Architectures des Ordinateurs et Systèmes",
        "icon": "🖥️",
        "lecons": [
          {
            "id": "informatique-c3-l1",
            "titre": "Leçon 1 : Principes et Fondements de Architectures des Ordinateurs et Systèmes",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : Architectures des Ordinateurs et Systèmes — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : Architectures des Ordinateurs et Systèmes** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "informatique-c3-l2",
            "titre": "Leçon 2 : Principes et Fondements de Architectures des Ordinateurs et Systèmes",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : Architectures des Ordinateurs et Systèmes — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : Architectures des Ordinateurs et Systèmes** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "informatique-c3-l3",
            "titre": "Leçon 3 : Principes et Fondements de Architectures des Ordinateurs et Systèmes",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : Architectures des Ordinateurs et Systèmes — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : Architectures des Ordinateurs et Systèmes** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "informatique-c3-l4",
            "titre": "Leçon 4 : Principes et Fondements de Architectures des Ordinateurs et Systèmes",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : Architectures des Ordinateurs et Systèmes — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : Architectures des Ordinateurs et Systèmes** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "informatique-c3-l5",
            "titre": "Leçon 5 : Principes et Fondements de Architectures des Ordinateurs et Systèmes",
            "duree": "45 min",
            "contenu": "# Chapitre 3 : Architectures des Ordinateurs et Systèmes — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 3 : Architectures des Ordinateurs et Systèmes** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "informatique-c4",
        "titre": "Chapitre 4 : Réseaux Informatiques et Internet",
        "icon": "🌐",
        "lecons": [
          {
            "id": "informatique-c4-l1",
            "titre": "Leçon 1 : Principes et Fondements de Réseaux Informatiques et Internet",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : Réseaux Informatiques et Internet — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : Réseaux Informatiques et Internet** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "informatique-c4-l2",
            "titre": "Leçon 2 : Principes et Fondements de Réseaux Informatiques et Internet",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : Réseaux Informatiques et Internet — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : Réseaux Informatiques et Internet** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "informatique-c4-l3",
            "titre": "Leçon 3 : Principes et Fondements de Réseaux Informatiques et Internet",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : Réseaux Informatiques et Internet — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : Réseaux Informatiques et Internet** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "informatique-c4-l4",
            "titre": "Leçon 4 : Principes et Fondements de Réseaux Informatiques et Internet",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : Réseaux Informatiques et Internet — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : Réseaux Informatiques et Internet** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "informatique-c4-l5",
            "titre": "Leçon 5 : Principes et Fondements de Réseaux Informatiques et Internet",
            "duree": "45 min",
            "contenu": "# Chapitre 4 : Réseaux Informatiques et Internet — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 4 : Réseaux Informatiques et Internet** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      },
      {
        "id": "informatique-c5",
        "titre": "Chapitre 5 : Bases de Données (SQL) et Sécurité",
        "icon": "🗄️",
        "lecons": [
          {
            "id": "informatique-c5-l1",
            "titre": "Leçon 1 : Principes et Fondements de Bases de Données (SQL) et Sécurité",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : Bases de Données (SQL) et Sécurité — Leçon 1\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : Bases de Données (SQL) et Sécurité** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "informatique-c5-l2",
            "titre": "Leçon 2 : Principes et Fondements de Bases de Données (SQL) et Sécurité",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : Bases de Données (SQL) et Sécurité — Leçon 2\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : Bases de Données (SQL) et Sécurité** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "informatique-c5-l3",
            "titre": "Leçon 3 : Principes et Fondements de Bases de Données (SQL) et Sécurité",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : Bases de Données (SQL) et Sécurité — Leçon 3\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : Bases de Données (SQL) et Sécurité** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "informatique-c5-l4",
            "titre": "Leçon 4 : Principes et Fondements de Bases de Données (SQL) et Sécurité",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : Bases de Données (SQL) et Sécurité — Leçon 4\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : Bases de Données (SQL) et Sécurité** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          },
          {
            "id": "informatique-c5-l5",
            "titre": "Leçon 5 : Principes et Fondements de Bases de Données (SQL) et Sécurité",
            "duree": "45 min",
            "contenu": "# Chapitre 5 : Bases de Données (SQL) et Sécurité — Leçon 5\n\n## I. Introduction et Concepts Clés\nCette leçon approfondit les éléments fondamentaux de **Chapitre 5 : Bases de Données (SQL) et Sécurité** pour les épreuves théoriques et pratiques du examen.\n\n## II. Développement Théorique\n- **Définition principale** : Analyse approfondie des notions clés.\n- **Formules & Modèles** : Applications pratiques et cas d'étude réels.\n\n## III. Méthodologie et Synthèse\n1. Retenir les définitions fondamentales.\n2. Appliquer les méthodes de résolution aux exercices types."
          }
        ]
      }
    ]
  },
  {
    "id": "gce-maths",
    "nom": "Pure Mathematics with Mechanics",
    "icon": "📐",
    "couleur": "from-blue-700 to-sky-900",
    "couleurLight": "bg-sky-50 text-sky-800 border-sky-200",
    "couleurDark": "dark:bg-sky-900/30 dark:text-sky-200 dark:border-sky-700",
    "niveaux": [
      "GCE"
    ],
    "description": "Algebra, calculus, coordinate geometry, and mechanics for GCE Advanced Level.",
    "chapitres": [
      {
        "id": "gce-maths-c1",
        "titre": "Chapter 1: Algebra, Polynomials & Partial Fractions",
        "icon": "∑",
        "lecons": [
          {
            "id": "gce-maths-c1-l1",
            "titre": "Lesson 1: Fundamentals of Algebra, Polynomials & Partial Fractions",
            "duree": "45 min",
            "contenu": "# Chapter 1: Algebra, Polynomials & Partial Fractions — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Algebra, Polynomials & Partial Fractions** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-maths-c1-l2",
            "titre": "Lesson 2: Fundamentals of Algebra, Polynomials & Partial Fractions",
            "duree": "45 min",
            "contenu": "# Chapter 1: Algebra, Polynomials & Partial Fractions — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Algebra, Polynomials & Partial Fractions** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-maths-c1-l3",
            "titre": "Lesson 3: Fundamentals of Algebra, Polynomials & Partial Fractions",
            "duree": "45 min",
            "contenu": "# Chapter 1: Algebra, Polynomials & Partial Fractions — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Algebra, Polynomials & Partial Fractions** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-maths-c1-l4",
            "titre": "Lesson 4: Fundamentals of Algebra, Polynomials & Partial Fractions",
            "duree": "45 min",
            "contenu": "# Chapter 1: Algebra, Polynomials & Partial Fractions — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Algebra, Polynomials & Partial Fractions** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-maths-c1-l5",
            "titre": "Lesson 5: Fundamentals of Algebra, Polynomials & Partial Fractions",
            "duree": "45 min",
            "contenu": "# Chapter 1: Algebra, Polynomials & Partial Fractions — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Algebra, Polynomials & Partial Fractions** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      },
      {
        "id": "gce-maths-c2",
        "titre": "Chapter 2: Differential Calculus & Applications",
        "icon": "📈",
        "lecons": [
          {
            "id": "gce-maths-c2-l1",
            "titre": "Lesson 1: Fundamentals of Differential Calculus & Applications",
            "duree": "45 min",
            "contenu": "# Chapter 2: Differential Calculus & Applications — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Differential Calculus & Applications** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-maths-c2-l2",
            "titre": "Lesson 2: Fundamentals of Differential Calculus & Applications",
            "duree": "45 min",
            "contenu": "# Chapter 2: Differential Calculus & Applications — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Differential Calculus & Applications** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-maths-c2-l3",
            "titre": "Lesson 3: Fundamentals of Differential Calculus & Applications",
            "duree": "45 min",
            "contenu": "# Chapter 2: Differential Calculus & Applications — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Differential Calculus & Applications** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-maths-c2-l4",
            "titre": "Lesson 4: Fundamentals of Differential Calculus & Applications",
            "duree": "45 min",
            "contenu": "# Chapter 2: Differential Calculus & Applications — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Differential Calculus & Applications** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-maths-c2-l5",
            "titre": "Lesson 5: Fundamentals of Differential Calculus & Applications",
            "duree": "45 min",
            "contenu": "# Chapter 2: Differential Calculus & Applications — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Differential Calculus & Applications** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      },
      {
        "id": "gce-maths-c3",
        "titre": "Chapter 3: Integral Calculus & Differential Equations",
        "icon": "∫",
        "lecons": [
          {
            "id": "gce-maths-c3-l1",
            "titre": "Lesson 1: Fundamentals of Integral Calculus & Differential Equations",
            "duree": "45 min",
            "contenu": "# Chapter 3: Integral Calculus & Differential Equations — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: Integral Calculus & Differential Equations** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-maths-c3-l2",
            "titre": "Lesson 2: Fundamentals of Integral Calculus & Differential Equations",
            "duree": "45 min",
            "contenu": "# Chapter 3: Integral Calculus & Differential Equations — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: Integral Calculus & Differential Equations** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-maths-c3-l3",
            "titre": "Lesson 3: Fundamentals of Integral Calculus & Differential Equations",
            "duree": "45 min",
            "contenu": "# Chapter 3: Integral Calculus & Differential Equations — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: Integral Calculus & Differential Equations** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-maths-c3-l4",
            "titre": "Lesson 4: Fundamentals of Integral Calculus & Differential Equations",
            "duree": "45 min",
            "contenu": "# Chapter 3: Integral Calculus & Differential Equations — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: Integral Calculus & Differential Equations** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-maths-c3-l5",
            "titre": "Lesson 5: Fundamentals of Integral Calculus & Differential Equations",
            "duree": "45 min",
            "contenu": "# Chapter 3: Integral Calculus & Differential Equations — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: Integral Calculus & Differential Equations** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      },
      {
        "id": "gce-maths-c4",
        "titre": "Chapter 4: Complex Numbers & Coordinate Geometry",
        "icon": "🔮",
        "lecons": [
          {
            "id": "gce-maths-c4-l1",
            "titre": "Lesson 1: Fundamentals of Complex Numbers & Coordinate Geometry",
            "duree": "45 min",
            "contenu": "# Chapter 4: Complex Numbers & Coordinate Geometry — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Complex Numbers & Coordinate Geometry** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-maths-c4-l2",
            "titre": "Lesson 2: Fundamentals of Complex Numbers & Coordinate Geometry",
            "duree": "45 min",
            "contenu": "# Chapter 4: Complex Numbers & Coordinate Geometry — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Complex Numbers & Coordinate Geometry** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-maths-c4-l3",
            "titre": "Lesson 3: Fundamentals of Complex Numbers & Coordinate Geometry",
            "duree": "45 min",
            "contenu": "# Chapter 4: Complex Numbers & Coordinate Geometry — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Complex Numbers & Coordinate Geometry** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-maths-c4-l4",
            "titre": "Lesson 4: Fundamentals of Complex Numbers & Coordinate Geometry",
            "duree": "45 min",
            "contenu": "# Chapter 4: Complex Numbers & Coordinate Geometry — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Complex Numbers & Coordinate Geometry** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-maths-c4-l5",
            "titre": "Lesson 5: Fundamentals of Complex Numbers & Coordinate Geometry",
            "duree": "45 min",
            "contenu": "# Chapter 4: Complex Numbers & Coordinate Geometry — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Complex Numbers & Coordinate Geometry** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      },
      {
        "id": "gce-maths-c5",
        "titre": "Chapter 5: Newtonian Mechanics & Vectors",
        "icon": "⚙️",
        "lecons": [
          {
            "id": "gce-maths-c5-l1",
            "titre": "Lesson 1: Fundamentals of Newtonian Mechanics & Vectors",
            "duree": "45 min",
            "contenu": "# Chapter 5: Newtonian Mechanics & Vectors — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Newtonian Mechanics & Vectors** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-maths-c5-l2",
            "titre": "Lesson 2: Fundamentals of Newtonian Mechanics & Vectors",
            "duree": "45 min",
            "contenu": "# Chapter 5: Newtonian Mechanics & Vectors — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Newtonian Mechanics & Vectors** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-maths-c5-l3",
            "titre": "Lesson 3: Fundamentals of Newtonian Mechanics & Vectors",
            "duree": "45 min",
            "contenu": "# Chapter 5: Newtonian Mechanics & Vectors — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Newtonian Mechanics & Vectors** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-maths-c5-l4",
            "titre": "Lesson 4: Fundamentals of Newtonian Mechanics & Vectors",
            "duree": "45 min",
            "contenu": "# Chapter 5: Newtonian Mechanics & Vectors — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Newtonian Mechanics & Vectors** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-maths-c5-l5",
            "titre": "Lesson 5: Fundamentals of Newtonian Mechanics & Vectors",
            "duree": "45 min",
            "contenu": "# Chapter 5: Newtonian Mechanics & Vectors — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Newtonian Mechanics & Vectors** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      }
    ]
  },
  {
    "id": "gce-physics",
    "nom": "Physics (A-Level)",
    "icon": "⚡",
    "couleur": "from-amber-600 to-orange-800",
    "couleurLight": "bg-amber-50 text-amber-800 border-amber-200",
    "couleurDark": "dark:bg-amber-900/30 dark:text-amber-200 dark:border-amber-700",
    "niveaux": [
      "GCE"
    ],
    "description": "Mechanics, thermal physics, fields, waves, and nuclear physics for GCE A-Level.",
    "chapitres": [
      {
        "id": "gce-physics-c1",
        "titre": "Chapter 1: Kinematics, Dynamics & Circular Motion",
        "icon": "⚙️",
        "lecons": [
          {
            "id": "gce-physics-c1-l1",
            "titre": "Lesson 1: Fundamentals of Kinematics, Dynamics & Circular Motion",
            "duree": "45 min",
            "contenu": "# Chapter 1: Kinematics, Dynamics & Circular Motion — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Kinematics, Dynamics & Circular Motion** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-physics-c1-l2",
            "titre": "Lesson 2: Fundamentals of Kinematics, Dynamics & Circular Motion",
            "duree": "45 min",
            "contenu": "# Chapter 1: Kinematics, Dynamics & Circular Motion — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Kinematics, Dynamics & Circular Motion** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-physics-c1-l3",
            "titre": "Lesson 3: Fundamentals of Kinematics, Dynamics & Circular Motion",
            "duree": "45 min",
            "contenu": "# Chapter 1: Kinematics, Dynamics & Circular Motion — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Kinematics, Dynamics & Circular Motion** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-physics-c1-l4",
            "titre": "Lesson 4: Fundamentals of Kinematics, Dynamics & Circular Motion",
            "duree": "45 min",
            "contenu": "# Chapter 1: Kinematics, Dynamics & Circular Motion — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Kinematics, Dynamics & Circular Motion** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-physics-c1-l5",
            "titre": "Lesson 5: Fundamentals of Kinematics, Dynamics & Circular Motion",
            "duree": "45 min",
            "contenu": "# Chapter 1: Kinematics, Dynamics & Circular Motion — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Kinematics, Dynamics & Circular Motion** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      },
      {
        "id": "gce-physics-c2",
        "titre": "Chapter 2: Work, Energy & Thermal Physics",
        "icon": "🔥",
        "lecons": [
          {
            "id": "gce-physics-c2-l1",
            "titre": "Lesson 1: Fundamentals of Work, Energy & Thermal Physics",
            "duree": "45 min",
            "contenu": "# Chapter 2: Work, Energy & Thermal Physics — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Work, Energy & Thermal Physics** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-physics-c2-l2",
            "titre": "Lesson 2: Fundamentals of Work, Energy & Thermal Physics",
            "duree": "45 min",
            "contenu": "# Chapter 2: Work, Energy & Thermal Physics — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Work, Energy & Thermal Physics** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-physics-c2-l3",
            "titre": "Lesson 3: Fundamentals of Work, Energy & Thermal Physics",
            "duree": "45 min",
            "contenu": "# Chapter 2: Work, Energy & Thermal Physics — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Work, Energy & Thermal Physics** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-physics-c2-l4",
            "titre": "Lesson 4: Fundamentals of Work, Energy & Thermal Physics",
            "duree": "45 min",
            "contenu": "# Chapter 2: Work, Energy & Thermal Physics — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Work, Energy & Thermal Physics** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-physics-c2-l5",
            "titre": "Lesson 5: Fundamentals of Work, Energy & Thermal Physics",
            "duree": "45 min",
            "contenu": "# Chapter 2: Work, Energy & Thermal Physics — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Work, Energy & Thermal Physics** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      },
      {
        "id": "gce-physics-c3",
        "titre": "Chapter 3: Electric Fields, Capacitance & DC Circuits",
        "icon": "⚡",
        "lecons": [
          {
            "id": "gce-physics-c3-l1",
            "titre": "Lesson 1: Fundamentals of Electric Fields, Capacitance & DC Circuits",
            "duree": "45 min",
            "contenu": "# Chapter 3: Electric Fields, Capacitance & DC Circuits — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: Electric Fields, Capacitance & DC Circuits** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-physics-c3-l2",
            "titre": "Lesson 2: Fundamentals of Electric Fields, Capacitance & DC Circuits",
            "duree": "45 min",
            "contenu": "# Chapter 3: Electric Fields, Capacitance & DC Circuits — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: Electric Fields, Capacitance & DC Circuits** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-physics-c3-l3",
            "titre": "Lesson 3: Fundamentals of Electric Fields, Capacitance & DC Circuits",
            "duree": "45 min",
            "contenu": "# Chapter 3: Electric Fields, Capacitance & DC Circuits — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: Electric Fields, Capacitance & DC Circuits** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-physics-c3-l4",
            "titre": "Lesson 4: Fundamentals of Electric Fields, Capacitance & DC Circuits",
            "duree": "45 min",
            "contenu": "# Chapter 3: Electric Fields, Capacitance & DC Circuits — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: Electric Fields, Capacitance & DC Circuits** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-physics-c3-l5",
            "titre": "Lesson 5: Fundamentals of Electric Fields, Capacitance & DC Circuits",
            "duree": "45 min",
            "contenu": "# Chapter 3: Electric Fields, Capacitance & DC Circuits — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: Electric Fields, Capacitance & DC Circuits** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      },
      {
        "id": "gce-physics-c4",
        "titre": "Chapter 4: Waves, Optics & Simple Harmonic Motion",
        "icon": "🌊",
        "lecons": [
          {
            "id": "gce-physics-c4-l1",
            "titre": "Lesson 1: Fundamentals of Waves, Optics & Simple Harmonic Motion",
            "duree": "45 min",
            "contenu": "# Chapter 4: Waves, Optics & Simple Harmonic Motion — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Waves, Optics & Simple Harmonic Motion** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-physics-c4-l2",
            "titre": "Lesson 2: Fundamentals of Waves, Optics & Simple Harmonic Motion",
            "duree": "45 min",
            "contenu": "# Chapter 4: Waves, Optics & Simple Harmonic Motion — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Waves, Optics & Simple Harmonic Motion** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-physics-c4-l3",
            "titre": "Lesson 3: Fundamentals of Waves, Optics & Simple Harmonic Motion",
            "duree": "45 min",
            "contenu": "# Chapter 4: Waves, Optics & Simple Harmonic Motion — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Waves, Optics & Simple Harmonic Motion** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-physics-c4-l4",
            "titre": "Lesson 4: Fundamentals of Waves, Optics & Simple Harmonic Motion",
            "duree": "45 min",
            "contenu": "# Chapter 4: Waves, Optics & Simple Harmonic Motion — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Waves, Optics & Simple Harmonic Motion** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-physics-c4-l5",
            "titre": "Lesson 5: Fundamentals of Waves, Optics & Simple Harmonic Motion",
            "duree": "45 min",
            "contenu": "# Chapter 4: Waves, Optics & Simple Harmonic Motion — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Waves, Optics & Simple Harmonic Motion** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      },
      {
        "id": "gce-physics-c5",
        "titre": "Chapter 5: Quantum Phenomena & Nuclear Physics",
        "icon": "☢️",
        "lecons": [
          {
            "id": "gce-physics-c5-l1",
            "titre": "Lesson 1: Fundamentals of Quantum Phenomena & Nuclear Physics",
            "duree": "45 min",
            "contenu": "# Chapter 5: Quantum Phenomena & Nuclear Physics — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Quantum Phenomena & Nuclear Physics** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-physics-c5-l2",
            "titre": "Lesson 2: Fundamentals of Quantum Phenomena & Nuclear Physics",
            "duree": "45 min",
            "contenu": "# Chapter 5: Quantum Phenomena & Nuclear Physics — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Quantum Phenomena & Nuclear Physics** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-physics-c5-l3",
            "titre": "Lesson 3: Fundamentals of Quantum Phenomena & Nuclear Physics",
            "duree": "45 min",
            "contenu": "# Chapter 5: Quantum Phenomena & Nuclear Physics — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Quantum Phenomena & Nuclear Physics** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-physics-c5-l4",
            "titre": "Lesson 4: Fundamentals of Quantum Phenomena & Nuclear Physics",
            "duree": "45 min",
            "contenu": "# Chapter 5: Quantum Phenomena & Nuclear Physics — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Quantum Phenomena & Nuclear Physics** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-physics-c5-l5",
            "titre": "Lesson 5: Fundamentals of Quantum Phenomena & Nuclear Physics",
            "duree": "45 min",
            "contenu": "# Chapter 5: Quantum Phenomena & Nuclear Physics — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Quantum Phenomena & Nuclear Physics** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      }
    ]
  },
  {
    "id": "gce-chemistry",
    "nom": "Chemistry (A-Level)",
    "icon": "🧪",
    "couleur": "from-emerald-600 to-teal-800",
    "couleurLight": "bg-emerald-50 text-emerald-800 border-emerald-200",
    "couleurDark": "dark:bg-emerald-900/30 dark:text-emerald-200 dark:border-emerald-700",
    "niveaux": [
      "GCE"
    ],
    "description": "Physical, inorganic, and organic chemistry for GCE A-Level.",
    "chapitres": [
      {
        "id": "gce-chemistry-c1",
        "titre": "Chapter 1: Atomic Structure, Bonding & Periodicity",
        "icon": "⚛️",
        "lecons": [
          {
            "id": "gce-chemistry-c1-l1",
            "titre": "Lesson 1: Fundamentals of Atomic Structure, Bonding & Periodicity",
            "duree": "45 min",
            "contenu": "# Chapter 1: Atomic Structure, Bonding & Periodicity — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Atomic Structure, Bonding & Periodicity** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-chemistry-c1-l2",
            "titre": "Lesson 2: Fundamentals of Atomic Structure, Bonding & Periodicity",
            "duree": "45 min",
            "contenu": "# Chapter 1: Atomic Structure, Bonding & Periodicity — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Atomic Structure, Bonding & Periodicity** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-chemistry-c1-l3",
            "titre": "Lesson 3: Fundamentals of Atomic Structure, Bonding & Periodicity",
            "duree": "45 min",
            "contenu": "# Chapter 1: Atomic Structure, Bonding & Periodicity — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Atomic Structure, Bonding & Periodicity** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-chemistry-c1-l4",
            "titre": "Lesson 4: Fundamentals of Atomic Structure, Bonding & Periodicity",
            "duree": "45 min",
            "contenu": "# Chapter 1: Atomic Structure, Bonding & Periodicity — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Atomic Structure, Bonding & Periodicity** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-chemistry-c1-l5",
            "titre": "Lesson 5: Fundamentals of Atomic Structure, Bonding & Periodicity",
            "duree": "45 min",
            "contenu": "# Chapter 1: Atomic Structure, Bonding & Periodicity — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Atomic Structure, Bonding & Periodicity** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      },
      {
        "id": "gce-chemistry-c2",
        "titre": "Chapter 2: Chemical Energetics, Kinetics & Equilibria",
        "icon": "⏱️",
        "lecons": [
          {
            "id": "gce-chemistry-c2-l1",
            "titre": "Lesson 1: Fundamentals of Chemical Energetics, Kinetics & Equilibria",
            "duree": "45 min",
            "contenu": "# Chapter 2: Chemical Energetics, Kinetics & Equilibria — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Chemical Energetics, Kinetics & Equilibria** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-chemistry-c2-l2",
            "titre": "Lesson 2: Fundamentals of Chemical Energetics, Kinetics & Equilibria",
            "duree": "45 min",
            "contenu": "# Chapter 2: Chemical Energetics, Kinetics & Equilibria — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Chemical Energetics, Kinetics & Equilibria** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-chemistry-c2-l3",
            "titre": "Lesson 3: Fundamentals of Chemical Energetics, Kinetics & Equilibria",
            "duree": "45 min",
            "contenu": "# Chapter 2: Chemical Energetics, Kinetics & Equilibria — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Chemical Energetics, Kinetics & Equilibria** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-chemistry-c2-l4",
            "titre": "Lesson 4: Fundamentals of Chemical Energetics, Kinetics & Equilibria",
            "duree": "45 min",
            "contenu": "# Chapter 2: Chemical Energetics, Kinetics & Equilibria — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Chemical Energetics, Kinetics & Equilibria** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-chemistry-c2-l5",
            "titre": "Lesson 5: Fundamentals of Chemical Energetics, Kinetics & Equilibria",
            "duree": "45 min",
            "contenu": "# Chapter 2: Chemical Energetics, Kinetics & Equilibria — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Chemical Energetics, Kinetics & Equilibria** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      },
      {
        "id": "gce-chemistry-c3",
        "titre": "Chapter 3: Organic Reaction Mechanisms & Functional Groups",
        "icon": "🧪",
        "lecons": [
          {
            "id": "gce-chemistry-c3-l1",
            "titre": "Lesson 1: Fundamentals of Organic Reaction Mechanisms & Functional Groups",
            "duree": "45 min",
            "contenu": "# Chapter 3: Organic Reaction Mechanisms & Functional Groups — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: Organic Reaction Mechanisms & Functional Groups** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-chemistry-c3-l2",
            "titre": "Lesson 2: Fundamentals of Organic Reaction Mechanisms & Functional Groups",
            "duree": "45 min",
            "contenu": "# Chapter 3: Organic Reaction Mechanisms & Functional Groups — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: Organic Reaction Mechanisms & Functional Groups** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-chemistry-c3-l3",
            "titre": "Lesson 3: Fundamentals of Organic Reaction Mechanisms & Functional Groups",
            "duree": "45 min",
            "contenu": "# Chapter 3: Organic Reaction Mechanisms & Functional Groups — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: Organic Reaction Mechanisms & Functional Groups** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-chemistry-c3-l4",
            "titre": "Lesson 4: Fundamentals of Organic Reaction Mechanisms & Functional Groups",
            "duree": "45 min",
            "contenu": "# Chapter 3: Organic Reaction Mechanisms & Functional Groups — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: Organic Reaction Mechanisms & Functional Groups** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-chemistry-c3-l5",
            "titre": "Lesson 5: Fundamentals of Organic Reaction Mechanisms & Functional Groups",
            "duree": "45 min",
            "contenu": "# Chapter 3: Organic Reaction Mechanisms & Functional Groups — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: Organic Reaction Mechanisms & Functional Groups** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      },
      {
        "id": "gce-chemistry-c4",
        "titre": "Chapter 4: Transition Elements & Coordination Complexes",
        "icon": "🔬",
        "lecons": [
          {
            "id": "gce-chemistry-c4-l1",
            "titre": "Lesson 1: Fundamentals of Transition Elements & Coordination Complexes",
            "duree": "45 min",
            "contenu": "# Chapter 4: Transition Elements & Coordination Complexes — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Transition Elements & Coordination Complexes** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-chemistry-c4-l2",
            "titre": "Lesson 2: Fundamentals of Transition Elements & Coordination Complexes",
            "duree": "45 min",
            "contenu": "# Chapter 4: Transition Elements & Coordination Complexes — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Transition Elements & Coordination Complexes** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-chemistry-c4-l3",
            "titre": "Lesson 3: Fundamentals of Transition Elements & Coordination Complexes",
            "duree": "45 min",
            "contenu": "# Chapter 4: Transition Elements & Coordination Complexes — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Transition Elements & Coordination Complexes** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-chemistry-c4-l4",
            "titre": "Lesson 4: Fundamentals of Transition Elements & Coordination Complexes",
            "duree": "45 min",
            "contenu": "# Chapter 4: Transition Elements & Coordination Complexes — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Transition Elements & Coordination Complexes** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-chemistry-c4-l5",
            "titre": "Lesson 5: Fundamentals of Transition Elements & Coordination Complexes",
            "duree": "45 min",
            "contenu": "# Chapter 4: Transition Elements & Coordination Complexes — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Transition Elements & Coordination Complexes** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      },
      {
        "id": "gce-chemistry-c5",
        "titre": "Chapter 5: Electrochemistry & Industrial Chemistry",
        "icon": "🔋",
        "lecons": [
          {
            "id": "gce-chemistry-c5-l1",
            "titre": "Lesson 1: Fundamentals of Electrochemistry & Industrial Chemistry",
            "duree": "45 min",
            "contenu": "# Chapter 5: Electrochemistry & Industrial Chemistry — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Electrochemistry & Industrial Chemistry** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-chemistry-c5-l2",
            "titre": "Lesson 2: Fundamentals of Electrochemistry & Industrial Chemistry",
            "duree": "45 min",
            "contenu": "# Chapter 5: Electrochemistry & Industrial Chemistry — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Electrochemistry & Industrial Chemistry** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-chemistry-c5-l3",
            "titre": "Lesson 3: Fundamentals of Electrochemistry & Industrial Chemistry",
            "duree": "45 min",
            "contenu": "# Chapter 5: Electrochemistry & Industrial Chemistry — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Electrochemistry & Industrial Chemistry** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-chemistry-c5-l4",
            "titre": "Lesson 4: Fundamentals of Electrochemistry & Industrial Chemistry",
            "duree": "45 min",
            "contenu": "# Chapter 5: Electrochemistry & Industrial Chemistry — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Electrochemistry & Industrial Chemistry** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-chemistry-c5-l5",
            "titre": "Lesson 5: Fundamentals of Electrochemistry & Industrial Chemistry",
            "duree": "45 min",
            "contenu": "# Chapter 5: Electrochemistry & Industrial Chemistry — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Electrochemistry & Industrial Chemistry** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      }
    ]
  },
  {
    "id": "gce-biology",
    "nom": "Biology (A-Level)",
    "icon": "🧬",
    "couleur": "from-green-600 to-emerald-900",
    "couleurLight": "bg-green-50 text-green-800 border-green-200",
    "couleurDark": "dark:bg-green-900/30 dark:text-green-200 dark:border-green-700",
    "niveaux": [
      "GCE"
    ],
    "description": "Cell biology, molecular genetics, physiology, and ecology for GCE A-Level.",
    "chapitres": [
      {
        "id": "gce-biology-c1",
        "titre": "Chapter 1: Biological Molecules & Cell Biology",
        "icon": "🔬",
        "lecons": [
          {
            "id": "gce-biology-c1-l1",
            "titre": "Lesson 1: Fundamentals of Biological Molecules & Cell Biology",
            "duree": "45 min",
            "contenu": "# Chapter 1: Biological Molecules & Cell Biology — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Biological Molecules & Cell Biology** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-biology-c1-l2",
            "titre": "Lesson 2: Fundamentals of Biological Molecules & Cell Biology",
            "duree": "45 min",
            "contenu": "# Chapter 1: Biological Molecules & Cell Biology — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Biological Molecules & Cell Biology** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-biology-c1-l3",
            "titre": "Lesson 3: Fundamentals of Biological Molecules & Cell Biology",
            "duree": "45 min",
            "contenu": "# Chapter 1: Biological Molecules & Cell Biology — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Biological Molecules & Cell Biology** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-biology-c1-l4",
            "titre": "Lesson 4: Fundamentals of Biological Molecules & Cell Biology",
            "duree": "45 min",
            "contenu": "# Chapter 1: Biological Molecules & Cell Biology — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Biological Molecules & Cell Biology** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-biology-c1-l5",
            "titre": "Lesson 5: Fundamentals of Biological Molecules & Cell Biology",
            "duree": "45 min",
            "contenu": "# Chapter 1: Biological Molecules & Cell Biology — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Biological Molecules & Cell Biology** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      },
      {
        "id": "gce-biology-c2",
        "titre": "Chapter 2: Molecular Genetics & DNA Replication",
        "icon": "🧬",
        "lecons": [
          {
            "id": "gce-biology-c2-l1",
            "titre": "Lesson 1: Fundamentals of Molecular Genetics & DNA Replication",
            "duree": "45 min",
            "contenu": "# Chapter 2: Molecular Genetics & DNA Replication — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Molecular Genetics & DNA Replication** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-biology-c2-l2",
            "titre": "Lesson 2: Fundamentals of Molecular Genetics & DNA Replication",
            "duree": "45 min",
            "contenu": "# Chapter 2: Molecular Genetics & DNA Replication — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Molecular Genetics & DNA Replication** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-biology-c2-l3",
            "titre": "Lesson 3: Fundamentals of Molecular Genetics & DNA Replication",
            "duree": "45 min",
            "contenu": "# Chapter 2: Molecular Genetics & DNA Replication — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Molecular Genetics & DNA Replication** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-biology-c2-l4",
            "titre": "Lesson 4: Fundamentals of Molecular Genetics & DNA Replication",
            "duree": "45 min",
            "contenu": "# Chapter 2: Molecular Genetics & DNA Replication — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Molecular Genetics & DNA Replication** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-biology-c2-l5",
            "titre": "Lesson 5: Fundamentals of Molecular Genetics & DNA Replication",
            "duree": "45 min",
            "contenu": "# Chapter 2: Molecular Genetics & DNA Replication — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Molecular Genetics & DNA Replication** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      },
      {
        "id": "gce-biology-c3",
        "titre": "Chapter 3: Respiration, Photosynthesis & Metabolism",
        "icon": "🌱",
        "lecons": [
          {
            "id": "gce-biology-c3-l1",
            "titre": "Lesson 1: Fundamentals of Respiration, Photosynthesis & Metabolism",
            "duree": "45 min",
            "contenu": "# Chapter 3: Respiration, Photosynthesis & Metabolism — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: Respiration, Photosynthesis & Metabolism** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-biology-c3-l2",
            "titre": "Lesson 2: Fundamentals of Respiration, Photosynthesis & Metabolism",
            "duree": "45 min",
            "contenu": "# Chapter 3: Respiration, Photosynthesis & Metabolism — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: Respiration, Photosynthesis & Metabolism** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-biology-c3-l3",
            "titre": "Lesson 3: Fundamentals of Respiration, Photosynthesis & Metabolism",
            "duree": "45 min",
            "contenu": "# Chapter 3: Respiration, Photosynthesis & Metabolism — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: Respiration, Photosynthesis & Metabolism** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-biology-c3-l4",
            "titre": "Lesson 4: Fundamentals of Respiration, Photosynthesis & Metabolism",
            "duree": "45 min",
            "contenu": "# Chapter 3: Respiration, Photosynthesis & Metabolism — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: Respiration, Photosynthesis & Metabolism** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-biology-c3-l5",
            "titre": "Lesson 5: Fundamentals of Respiration, Photosynthesis & Metabolism",
            "duree": "45 min",
            "contenu": "# Chapter 3: Respiration, Photosynthesis & Metabolism — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: Respiration, Photosynthesis & Metabolism** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      },
      {
        "id": "gce-biology-c4",
        "titre": "Chapter 4: Inheritance, Gene Technology & Evolution",
        "icon": "🐾",
        "lecons": [
          {
            "id": "gce-biology-c4-l1",
            "titre": "Lesson 1: Fundamentals of Inheritance, Gene Technology & Evolution",
            "duree": "45 min",
            "contenu": "# Chapter 4: Inheritance, Gene Technology & Evolution — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Inheritance, Gene Technology & Evolution** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-biology-c4-l2",
            "titre": "Lesson 2: Fundamentals of Inheritance, Gene Technology & Evolution",
            "duree": "45 min",
            "contenu": "# Chapter 4: Inheritance, Gene Technology & Evolution — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Inheritance, Gene Technology & Evolution** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-biology-c4-l3",
            "titre": "Lesson 3: Fundamentals of Inheritance, Gene Technology & Evolution",
            "duree": "45 min",
            "contenu": "# Chapter 4: Inheritance, Gene Technology & Evolution — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Inheritance, Gene Technology & Evolution** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-biology-c4-l4",
            "titre": "Lesson 4: Fundamentals of Inheritance, Gene Technology & Evolution",
            "duree": "45 min",
            "contenu": "# Chapter 4: Inheritance, Gene Technology & Evolution — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Inheritance, Gene Technology & Evolution** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-biology-c4-l5",
            "titre": "Lesson 5: Fundamentals of Inheritance, Gene Technology & Evolution",
            "duree": "45 min",
            "contenu": "# Chapter 4: Inheritance, Gene Technology & Evolution — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Inheritance, Gene Technology & Evolution** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      },
      {
        "id": "gce-biology-c5",
        "titre": "Chapter 5: Homeostasis, Nervous & Hormonal Control",
        "icon": "🧠",
        "lecons": [
          {
            "id": "gce-biology-c5-l1",
            "titre": "Lesson 1: Fundamentals of Homeostasis, Nervous & Hormonal Control",
            "duree": "45 min",
            "contenu": "# Chapter 5: Homeostasis, Nervous & Hormonal Control — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Homeostasis, Nervous & Hormonal Control** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-biology-c5-l2",
            "titre": "Lesson 2: Fundamentals of Homeostasis, Nervous & Hormonal Control",
            "duree": "45 min",
            "contenu": "# Chapter 5: Homeostasis, Nervous & Hormonal Control — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Homeostasis, Nervous & Hormonal Control** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-biology-c5-l3",
            "titre": "Lesson 3: Fundamentals of Homeostasis, Nervous & Hormonal Control",
            "duree": "45 min",
            "contenu": "# Chapter 5: Homeostasis, Nervous & Hormonal Control — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Homeostasis, Nervous & Hormonal Control** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-biology-c5-l4",
            "titre": "Lesson 4: Fundamentals of Homeostasis, Nervous & Hormonal Control",
            "duree": "45 min",
            "contenu": "# Chapter 5: Homeostasis, Nervous & Hormonal Control — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Homeostasis, Nervous & Hormonal Control** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-biology-c5-l5",
            "titre": "Lesson 5: Fundamentals of Homeostasis, Nervous & Hormonal Control",
            "duree": "45 min",
            "contenu": "# Chapter 5: Homeostasis, Nervous & Hormonal Control — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Homeostasis, Nervous & Hormonal Control** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      }
    ]
  },
  {
    "id": "gce-history",
    "nom": "Cameroon & World History",
    "icon": "📜",
    "couleur": "from-rose-700 to-amber-900",
    "couleurLight": "bg-rose-50 text-rose-800 border-rose-200",
    "couleurDark": "dark:bg-rose-900/30 dark:text-rose-200 dark:border-rose-700",
    "niveaux": [
      "GCE"
    ],
    "description": "Cameroon History from 1884 and 20th Century World History for GCE A-Level.",
    "chapitres": [
      {
        "id": "gce-history-c1",
        "titre": "Chapter 1: Cameroon History 1884–1961",
        "icon": "🏛️",
        "lecons": [
          {
            "id": "gce-history-c1-l1",
            "titre": "Lesson 1: Fundamentals of Cameroon History 1884–1961",
            "duree": "45 min",
            "contenu": "# Chapter 1: Cameroon History 1884–1961 — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Cameroon History 1884–1961** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-history-c1-l2",
            "titre": "Lesson 2: Fundamentals of Cameroon History 1884–1961",
            "duree": "45 min",
            "contenu": "# Chapter 1: Cameroon History 1884–1961 — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Cameroon History 1884–1961** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-history-c1-l3",
            "titre": "Lesson 3: Fundamentals of Cameroon History 1884–1961",
            "duree": "45 min",
            "contenu": "# Chapter 1: Cameroon History 1884–1961 — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Cameroon History 1884–1961** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-history-c1-l4",
            "titre": "Lesson 4: Fundamentals of Cameroon History 1884–1961",
            "duree": "45 min",
            "contenu": "# Chapter 1: Cameroon History 1884–1961 — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Cameroon History 1884–1961** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-history-c1-l5",
            "titre": "Lesson 5: Fundamentals of Cameroon History 1884–1961",
            "duree": "45 min",
            "contenu": "# Chapter 1: Cameroon History 1884–1961 — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Cameroon History 1884–1961** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      },
      {
        "id": "gce-history-c2",
        "titre": "Chapter 2: Post-Independence Federal & Unitary Cameroon",
        "icon": "🇨🇲",
        "lecons": [
          {
            "id": "gce-history-c2-l1",
            "titre": "Lesson 1: Fundamentals of Post-Independence Federal & Unitary Cameroon",
            "duree": "45 min",
            "contenu": "# Chapter 2: Post-Independence Federal & Unitary Cameroon — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Post-Independence Federal & Unitary Cameroon** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-history-c2-l2",
            "titre": "Lesson 2: Fundamentals of Post-Independence Federal & Unitary Cameroon",
            "duree": "45 min",
            "contenu": "# Chapter 2: Post-Independence Federal & Unitary Cameroon — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Post-Independence Federal & Unitary Cameroon** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-history-c2-l3",
            "titre": "Lesson 3: Fundamentals of Post-Independence Federal & Unitary Cameroon",
            "duree": "45 min",
            "contenu": "# Chapter 2: Post-Independence Federal & Unitary Cameroon — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Post-Independence Federal & Unitary Cameroon** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-history-c2-l4",
            "titre": "Lesson 4: Fundamentals of Post-Independence Federal & Unitary Cameroon",
            "duree": "45 min",
            "contenu": "# Chapter 2: Post-Independence Federal & Unitary Cameroon — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Post-Independence Federal & Unitary Cameroon** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-history-c2-l5",
            "titre": "Lesson 5: Fundamentals of Post-Independence Federal & Unitary Cameroon",
            "duree": "45 min",
            "contenu": "# Chapter 2: Post-Independence Federal & Unitary Cameroon — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Post-Independence Federal & Unitary Cameroon** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      },
      {
        "id": "gce-history-c3",
        "titre": "Chapter 3: The First World War & Peace Settlements",
        "icon": "⚔️",
        "lecons": [
          {
            "id": "gce-history-c3-l1",
            "titre": "Lesson 1: Fundamentals of The First World War & Peace Settlements",
            "duree": "45 min",
            "contenu": "# Chapter 3: The First World War & Peace Settlements — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: The First World War & Peace Settlements** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-history-c3-l2",
            "titre": "Lesson 2: Fundamentals of The First World War & Peace Settlements",
            "duree": "45 min",
            "contenu": "# Chapter 3: The First World War & Peace Settlements — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: The First World War & Peace Settlements** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-history-c3-l3",
            "titre": "Lesson 3: Fundamentals of The First World War & Peace Settlements",
            "duree": "45 min",
            "contenu": "# Chapter 3: The First World War & Peace Settlements — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: The First World War & Peace Settlements** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-history-c3-l4",
            "titre": "Lesson 4: Fundamentals of The First World War & Peace Settlements",
            "duree": "45 min",
            "contenu": "# Chapter 3: The First World War & Peace Settlements — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: The First World War & Peace Settlements** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-history-c3-l5",
            "titre": "Lesson 5: Fundamentals of The First World War & Peace Settlements",
            "duree": "45 min",
            "contenu": "# Chapter 3: The First World War & Peace Settlements — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: The First World War & Peace Settlements** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      },
      {
        "id": "gce-history-c4",
        "titre": "Chapter 4: The Second World War & Cold War Superpowers",
        "icon": "🕊️",
        "lecons": [
          {
            "id": "gce-history-c4-l1",
            "titre": "Lesson 1: Fundamentals of The Second World War & Cold War Superpowers",
            "duree": "45 min",
            "contenu": "# Chapter 4: The Second World War & Cold War Superpowers — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: The Second World War & Cold War Superpowers** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-history-c4-l2",
            "titre": "Lesson 2: Fundamentals of The Second World War & Cold War Superpowers",
            "duree": "45 min",
            "contenu": "# Chapter 4: The Second World War & Cold War Superpowers — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: The Second World War & Cold War Superpowers** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-history-c4-l3",
            "titre": "Lesson 3: Fundamentals of The Second World War & Cold War Superpowers",
            "duree": "45 min",
            "contenu": "# Chapter 4: The Second World War & Cold War Superpowers — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: The Second World War & Cold War Superpowers** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-history-c4-l4",
            "titre": "Lesson 4: Fundamentals of The Second World War & Cold War Superpowers",
            "duree": "45 min",
            "contenu": "# Chapter 4: The Second World War & Cold War Superpowers — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: The Second World War & Cold War Superpowers** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-history-c4-l5",
            "titre": "Lesson 5: Fundamentals of The Second World War & Cold War Superpowers",
            "duree": "45 min",
            "contenu": "# Chapter 4: The Second World War & Cold War Superpowers — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: The Second World War & Cold War Superpowers** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      },
      {
        "id": "gce-history-c5",
        "titre": "Chapter 5: African Nationalism & Pan-Africanism",
        "icon": "🌍",
        "lecons": [
          {
            "id": "gce-history-c5-l1",
            "titre": "Lesson 1: Fundamentals of African Nationalism & Pan-Africanism",
            "duree": "45 min",
            "contenu": "# Chapter 5: African Nationalism & Pan-Africanism — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: African Nationalism & Pan-Africanism** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-history-c5-l2",
            "titre": "Lesson 2: Fundamentals of African Nationalism & Pan-Africanism",
            "duree": "45 min",
            "contenu": "# Chapter 5: African Nationalism & Pan-Africanism — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: African Nationalism & Pan-Africanism** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-history-c5-l3",
            "titre": "Lesson 3: Fundamentals of African Nationalism & Pan-Africanism",
            "duree": "45 min",
            "contenu": "# Chapter 5: African Nationalism & Pan-Africanism — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: African Nationalism & Pan-Africanism** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-history-c5-l4",
            "titre": "Lesson 4: Fundamentals of African Nationalism & Pan-Africanism",
            "duree": "45 min",
            "contenu": "# Chapter 5: African Nationalism & Pan-Africanism — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: African Nationalism & Pan-Africanism** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-history-c5-l5",
            "titre": "Lesson 5: Fundamentals of African Nationalism & Pan-Africanism",
            "duree": "45 min",
            "contenu": "# Chapter 5: African Nationalism & Pan-Africanism — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: African Nationalism & Pan-Africanism** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      }
    ]
  },
  {
    "id": "gce-economics",
    "nom": "Economics (A-Level)",
    "icon": "📈",
    "couleur": "from-amber-600 to-yellow-800",
    "couleurLight": "bg-amber-50 text-amber-800 border-amber-200",
    "couleurDark": "dark:bg-amber-900/30 dark:text-amber-200 dark:border-amber-700",
    "niveaux": [
      "GCE"
    ],
    "description": "Microeconomics, macroeconomics, and development policies for GCE A-Level.",
    "chapitres": [
      {
        "id": "gce-economics-c1",
        "titre": "Chapter 1: Price Theory & Market Equilibrium",
        "icon": "📈",
        "lecons": [
          {
            "id": "gce-economics-c1-l1",
            "titre": "Lesson 1: Fundamentals of Price Theory & Market Equilibrium",
            "duree": "45 min",
            "contenu": "# Chapter 1: Price Theory & Market Equilibrium — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Price Theory & Market Equilibrium** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-economics-c1-l2",
            "titre": "Lesson 2: Fundamentals of Price Theory & Market Equilibrium",
            "duree": "45 min",
            "contenu": "# Chapter 1: Price Theory & Market Equilibrium — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Price Theory & Market Equilibrium** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-economics-c1-l3",
            "titre": "Lesson 3: Fundamentals of Price Theory & Market Equilibrium",
            "duree": "45 min",
            "contenu": "# Chapter 1: Price Theory & Market Equilibrium — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Price Theory & Market Equilibrium** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-economics-c1-l4",
            "titre": "Lesson 4: Fundamentals of Price Theory & Market Equilibrium",
            "duree": "45 min",
            "contenu": "# Chapter 1: Price Theory & Market Equilibrium — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Price Theory & Market Equilibrium** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-economics-c1-l5",
            "titre": "Lesson 5: Fundamentals of Price Theory & Market Equilibrium",
            "duree": "45 min",
            "contenu": "# Chapter 1: Price Theory & Market Equilibrium — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Price Theory & Market Equilibrium** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      },
      {
        "id": "gce-economics-c2",
        "titre": "Chapter 2: Market Structures & Firm Costs",
        "icon": "🏢",
        "lecons": [
          {
            "id": "gce-economics-c2-l1",
            "titre": "Lesson 1: Fundamentals of Market Structures & Firm Costs",
            "duree": "45 min",
            "contenu": "# Chapter 2: Market Structures & Firm Costs — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Market Structures & Firm Costs** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-economics-c2-l2",
            "titre": "Lesson 2: Fundamentals of Market Structures & Firm Costs",
            "duree": "45 min",
            "contenu": "# Chapter 2: Market Structures & Firm Costs — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Market Structures & Firm Costs** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-economics-c2-l3",
            "titre": "Lesson 3: Fundamentals of Market Structures & Firm Costs",
            "duree": "45 min",
            "contenu": "# Chapter 2: Market Structures & Firm Costs — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Market Structures & Firm Costs** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-economics-c2-l4",
            "titre": "Lesson 4: Fundamentals of Market Structures & Firm Costs",
            "duree": "45 min",
            "contenu": "# Chapter 2: Market Structures & Firm Costs — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Market Structures & Firm Costs** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-economics-c2-l5",
            "titre": "Lesson 5: Fundamentals of Market Structures & Firm Costs",
            "duree": "45 min",
            "contenu": "# Chapter 2: Market Structures & Firm Costs — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Market Structures & Firm Costs** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      },
      {
        "id": "gce-economics-c3",
        "titre": "Chapter 3: National Income Accounting & Keynesian Policy",
        "icon": "📊",
        "lecons": [
          {
            "id": "gce-economics-c3-l1",
            "titre": "Lesson 1: Fundamentals of National Income Accounting & Keynesian Policy",
            "duree": "45 min",
            "contenu": "# Chapter 3: National Income Accounting & Keynesian Policy — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: National Income Accounting & Keynesian Policy** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-economics-c3-l2",
            "titre": "Lesson 2: Fundamentals of National Income Accounting & Keynesian Policy",
            "duree": "45 min",
            "contenu": "# Chapter 3: National Income Accounting & Keynesian Policy — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: National Income Accounting & Keynesian Policy** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-economics-c3-l3",
            "titre": "Lesson 3: Fundamentals of National Income Accounting & Keynesian Policy",
            "duree": "45 min",
            "contenu": "# Chapter 3: National Income Accounting & Keynesian Policy — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: National Income Accounting & Keynesian Policy** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-economics-c3-l4",
            "titre": "Lesson 4: Fundamentals of National Income Accounting & Keynesian Policy",
            "duree": "45 min",
            "contenu": "# Chapter 3: National Income Accounting & Keynesian Policy — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: National Income Accounting & Keynesian Policy** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-economics-c3-l5",
            "titre": "Lesson 5: Fundamentals of National Income Accounting & Keynesian Policy",
            "duree": "45 min",
            "contenu": "# Chapter 3: National Income Accounting & Keynesian Policy — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: National Income Accounting & Keynesian Policy** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      },
      {
        "id": "gce-economics-c4",
        "titre": "Chapter 4: Inflation & Balance of Payments Adjustment",
        "icon": "💰",
        "lecons": [
          {
            "id": "gce-economics-c4-l1",
            "titre": "Lesson 1: Fundamentals of Inflation & Balance of Payments Adjustment",
            "duree": "45 min",
            "contenu": "# Chapter 4: Inflation & Balance of Payments Adjustment — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Inflation & Balance of Payments Adjustment** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-economics-c4-l2",
            "titre": "Lesson 2: Fundamentals of Inflation & Balance of Payments Adjustment",
            "duree": "45 min",
            "contenu": "# Chapter 4: Inflation & Balance of Payments Adjustment — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Inflation & Balance of Payments Adjustment** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-economics-c4-l3",
            "titre": "Lesson 3: Fundamentals of Inflation & Balance of Payments Adjustment",
            "duree": "45 min",
            "contenu": "# Chapter 4: Inflation & Balance of Payments Adjustment — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Inflation & Balance of Payments Adjustment** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-economics-c4-l4",
            "titre": "Lesson 4: Fundamentals of Inflation & Balance of Payments Adjustment",
            "duree": "45 min",
            "contenu": "# Chapter 4: Inflation & Balance of Payments Adjustment — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Inflation & Balance of Payments Adjustment** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-economics-c4-l5",
            "titre": "Lesson 5: Fundamentals of Inflation & Balance of Payments Adjustment",
            "duree": "45 min",
            "contenu": "# Chapter 4: Inflation & Balance of Payments Adjustment — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Inflation & Balance of Payments Adjustment** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      },
      {
        "id": "gce-economics-c5",
        "titre": "Chapter 5: Economic Growth & Development in Africa",
        "icon": "🌍",
        "lecons": [
          {
            "id": "gce-economics-c5-l1",
            "titre": "Lesson 1: Fundamentals of Economic Growth & Development in Africa",
            "duree": "45 min",
            "contenu": "# Chapter 5: Economic Growth & Development in Africa — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Economic Growth & Development in Africa** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-economics-c5-l2",
            "titre": "Lesson 2: Fundamentals of Economic Growth & Development in Africa",
            "duree": "45 min",
            "contenu": "# Chapter 5: Economic Growth & Development in Africa — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Economic Growth & Development in Africa** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-economics-c5-l3",
            "titre": "Lesson 3: Fundamentals of Economic Growth & Development in Africa",
            "duree": "45 min",
            "contenu": "# Chapter 5: Economic Growth & Development in Africa — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Economic Growth & Development in Africa** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-economics-c5-l4",
            "titre": "Lesson 4: Fundamentals of Economic Growth & Development in Africa",
            "duree": "45 min",
            "contenu": "# Chapter 5: Economic Growth & Development in Africa — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Economic Growth & Development in Africa** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-economics-c5-l5",
            "titre": "Lesson 5: Fundamentals of Economic Growth & Development in Africa",
            "duree": "45 min",
            "contenu": "# Chapter 5: Economic Growth & Development in Africa — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Economic Growth & Development in Africa** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      }
    ]
  },
  {
    "id": "gce-computer-science",
    "nom": "Computer Science (A-Level)",
    "icon": "💻",
    "couleur": "from-indigo-600 to-blue-900",
    "couleurLight": "bg-indigo-50 text-indigo-800 border-indigo-200",
    "couleurDark": "dark:bg-indigo-900/30 dark:text-indigo-200 dark:border-indigo-700",
    "niveaux": [
      "GCE"
    ],
    "description": "Algorithms, architecture, databases, and networking for GCE A-Level.",
    "chapitres": [
      {
        "id": "gce-computer-science-c1",
        "titre": "Chapter 1: Data Representation & Digital Logic",
        "icon": "💻",
        "lecons": [
          {
            "id": "gce-computer-science-c1-l1",
            "titre": "Lesson 1: Fundamentals of Data Representation & Digital Logic",
            "duree": "45 min",
            "contenu": "# Chapter 1: Data Representation & Digital Logic — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Data Representation & Digital Logic** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-computer-science-c1-l2",
            "titre": "Lesson 2: Fundamentals of Data Representation & Digital Logic",
            "duree": "45 min",
            "contenu": "# Chapter 1: Data Representation & Digital Logic — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Data Representation & Digital Logic** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-computer-science-c1-l3",
            "titre": "Lesson 3: Fundamentals of Data Representation & Digital Logic",
            "duree": "45 min",
            "contenu": "# Chapter 1: Data Representation & Digital Logic — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Data Representation & Digital Logic** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-computer-science-c1-l4",
            "titre": "Lesson 4: Fundamentals of Data Representation & Digital Logic",
            "duree": "45 min",
            "contenu": "# Chapter 1: Data Representation & Digital Logic — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Data Representation & Digital Logic** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-computer-science-c1-l5",
            "titre": "Lesson 5: Fundamentals of Data Representation & Digital Logic",
            "duree": "45 min",
            "contenu": "# Chapter 1: Data Representation & Digital Logic — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 1: Data Representation & Digital Logic** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      },
      {
        "id": "gce-computer-science-c2",
        "titre": "Chapter 2: Data Structures & Sorting/Searching Algorithms",
        "icon": "🔀",
        "lecons": [
          {
            "id": "gce-computer-science-c2-l1",
            "titre": "Lesson 1: Fundamentals of Data Structures & Sorting/Searching Algorithms",
            "duree": "45 min",
            "contenu": "# Chapter 2: Data Structures & Sorting/Searching Algorithms — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Data Structures & Sorting/Searching Algorithms** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-computer-science-c2-l2",
            "titre": "Lesson 2: Fundamentals of Data Structures & Sorting/Searching Algorithms",
            "duree": "45 min",
            "contenu": "# Chapter 2: Data Structures & Sorting/Searching Algorithms — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Data Structures & Sorting/Searching Algorithms** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-computer-science-c2-l3",
            "titre": "Lesson 3: Fundamentals of Data Structures & Sorting/Searching Algorithms",
            "duree": "45 min",
            "contenu": "# Chapter 2: Data Structures & Sorting/Searching Algorithms — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Data Structures & Sorting/Searching Algorithms** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-computer-science-c2-l4",
            "titre": "Lesson 4: Fundamentals of Data Structures & Sorting/Searching Algorithms",
            "duree": "45 min",
            "contenu": "# Chapter 2: Data Structures & Sorting/Searching Algorithms — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Data Structures & Sorting/Searching Algorithms** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-computer-science-c2-l5",
            "titre": "Lesson 5: Fundamentals of Data Structures & Sorting/Searching Algorithms",
            "duree": "45 min",
            "contenu": "# Chapter 2: Data Structures & Sorting/Searching Algorithms — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 2: Data Structures & Sorting/Searching Algorithms** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      },
      {
        "id": "gce-computer-science-c3",
        "titre": "Chapter 3: Computer Architecture & Assembly",
        "icon": "🖥️",
        "lecons": [
          {
            "id": "gce-computer-science-c3-l1",
            "titre": "Lesson 1: Fundamentals of Computer Architecture & Assembly",
            "duree": "45 min",
            "contenu": "# Chapter 3: Computer Architecture & Assembly — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: Computer Architecture & Assembly** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-computer-science-c3-l2",
            "titre": "Lesson 2: Fundamentals of Computer Architecture & Assembly",
            "duree": "45 min",
            "contenu": "# Chapter 3: Computer Architecture & Assembly — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: Computer Architecture & Assembly** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-computer-science-c3-l3",
            "titre": "Lesson 3: Fundamentals of Computer Architecture & Assembly",
            "duree": "45 min",
            "contenu": "# Chapter 3: Computer Architecture & Assembly — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: Computer Architecture & Assembly** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-computer-science-c3-l4",
            "titre": "Lesson 4: Fundamentals of Computer Architecture & Assembly",
            "duree": "45 min",
            "contenu": "# Chapter 3: Computer Architecture & Assembly — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: Computer Architecture & Assembly** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-computer-science-c3-l5",
            "titre": "Lesson 5: Fundamentals of Computer Architecture & Assembly",
            "duree": "45 min",
            "contenu": "# Chapter 3: Computer Architecture & Assembly — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 3: Computer Architecture & Assembly** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      },
      {
        "id": "gce-computer-science-c4",
        "titre": "Chapter 4: Database Systems & SQL Normalization",
        "icon": "🗄️",
        "lecons": [
          {
            "id": "gce-computer-science-c4-l1",
            "titre": "Lesson 1: Fundamentals of Database Systems & SQL Normalization",
            "duree": "45 min",
            "contenu": "# Chapter 4: Database Systems & SQL Normalization — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Database Systems & SQL Normalization** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-computer-science-c4-l2",
            "titre": "Lesson 2: Fundamentals of Database Systems & SQL Normalization",
            "duree": "45 min",
            "contenu": "# Chapter 4: Database Systems & SQL Normalization — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Database Systems & SQL Normalization** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-computer-science-c4-l3",
            "titre": "Lesson 3: Fundamentals of Database Systems & SQL Normalization",
            "duree": "45 min",
            "contenu": "# Chapter 4: Database Systems & SQL Normalization — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Database Systems & SQL Normalization** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-computer-science-c4-l4",
            "titre": "Lesson 4: Fundamentals of Database Systems & SQL Normalization",
            "duree": "45 min",
            "contenu": "# Chapter 4: Database Systems & SQL Normalization — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Database Systems & SQL Normalization** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-computer-science-c4-l5",
            "titre": "Lesson 5: Fundamentals of Database Systems & SQL Normalization",
            "duree": "45 min",
            "contenu": "# Chapter 4: Database Systems & SQL Normalization — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 4: Database Systems & SQL Normalization** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      },
      {
        "id": "gce-computer-science-c5",
        "titre": "Chapter 5: Computer Networks & Cybersecurity",
        "icon": "🛡️",
        "lecons": [
          {
            "id": "gce-computer-science-c5-l1",
            "titre": "Lesson 1: Fundamentals of Computer Networks & Cybersecurity",
            "duree": "45 min",
            "contenu": "# Chapter 5: Computer Networks & Cybersecurity — Lesson 1\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Computer Networks & Cybersecurity** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-computer-science-c5-l2",
            "titre": "Lesson 2: Fundamentals of Computer Networks & Cybersecurity",
            "duree": "45 min",
            "contenu": "# Chapter 5: Computer Networks & Cybersecurity — Lesson 2\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Computer Networks & Cybersecurity** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-computer-science-c5-l3",
            "titre": "Lesson 3: Fundamentals of Computer Networks & Cybersecurity",
            "duree": "45 min",
            "contenu": "# Chapter 5: Computer Networks & Cybersecurity — Lesson 3\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Computer Networks & Cybersecurity** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-computer-science-c5-l4",
            "titre": "Lesson 4: Fundamentals of Computer Networks & Cybersecurity",
            "duree": "45 min",
            "contenu": "# Chapter 5: Computer Networks & Cybersecurity — Lesson 4\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Computer Networks & Cybersecurity** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          },
          {
            "id": "gce-computer-science-c5-l5",
            "titre": "Lesson 5: Fundamentals of Computer Networks & Cybersecurity",
            "duree": "45 min",
            "contenu": "# Chapter 5: Computer Networks & Cybersecurity — Lesson 5\n\n## I. Key Concepts & Definitions\nThis lesson details the core principles of **Chapter 5: Computer Networks & Cybersecurity** required for GCE A-Level examinations.\n\n## II. Theoretical Framework\n- **Core Principle**: Comprehensive breakdown of key topics.\n- **Applications & Models**: Worked examples and past question analysis.\n\n## III. Summary & Key Takeaways\n1. Master the essential definitions.\n2. Apply problem-solving techniques to exam questions."
          }
        ]
      }
    ]
  }
];

export const getSubject = (id) => SUBJECTS.find(s => s.id === id);
export const getChapter = (subjectId, chapterId) => {
  const subject = getSubject(subjectId);
  return subject?.chapitres.find(c => c.id === chapterId);
};
