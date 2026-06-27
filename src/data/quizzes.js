export const QUIZZES = [
  // ─── MATHÉMATIQUES ───────────────────────────────────────────────
  {
    id: 'maths-algebre-1',
    subjectId: 'mathematiques',
    titre: 'Algèbre — Équations du 2nd degré',
    difficulte: 'facile',
    duree: 15,
    questions: [
      {
        id: 1,
        question: 'Quel est le discriminant de l\'équation x² - 5x + 6 = 0 ?',
        options: ['1', '25', '49', '11'],
        correct: 0,
        explication: 'Δ = b² - 4ac = (-5)² - 4×1×6 = 25 - 24 = 1'
      },
      {
        id: 2,
        question: 'Les solutions de x² - 5x + 6 = 0 sont :',
        options: ['x = 2 et x = 3', 'x = -2 et x = -3', 'x = 1 et x = 6', 'x = -1 et x = -6'],
        correct: 0,
        explication: 'x = (5 ± 1) / 2, donc x₁ = 3 et x₂ = 2'
      },
      {
        id: 3,
        question: 'Si Δ < 0, l\'équation ax² + bx + c = 0 possède :',
        options: ['Aucune solution réelle', 'Une solution double', 'Deux solutions réelles distinctes', 'Une infinité de solutions'],
        correct: 0,
        explication: 'Quand Δ < 0, la racine carrée n\'existe pas dans ℝ, donc pas de solution réelle.'
      },
      {
        id: 4,
        question: 'La somme des racines de ax² + bx + c = 0 vaut :',
        options: ['-b/a', 'b/a', 'c/a', '-c/a'],
        correct: 0,
        explication: 'Par les relations de Viète : x₁ + x₂ = -b/a et x₁ × x₂ = c/a'
      },
      {
        id: 5,
        question: 'Résoudre 2x² - 8 = 0. Les solutions sont :',
        options: ['x = 2 et x = -2', 'x = 4 et x = -4', 'x = √2 et x = -√2', 'x = 8 et x = -8'],
        correct: 0,
        explication: '2x² = 8 → x² = 4 → x = ±2'
      },
      {
        id: 6,
        question: 'Le produit des racines de 3x² - 12x + 9 = 0 vaut :',
        options: ['3', '4', '-4', '12'],
        correct: 0,
        explication: 'Produit = c/a = 9/3 = 3'
      },
      {
        id: 7,
        question: 'Quelle est la forme factorisée de x² - 9 ?',
        options: ['(x-3)(x+3)', '(x-3)²', '(x+9)(x-1)', '(x-9)(x+1)'],
        correct: 0,
        explication: 'Identité remarquable : a² - b² = (a-b)(a+b), ici a=x, b=3'
      },
      {
        id: 8,
        question: 'L\'équation x² + 1 = 0 a pour solutions dans ℝ :',
        options: ['Pas de solution', 'x = 1', 'x = -1', 'x = ±i'],
        correct: 0,
        explication: 'Δ = 0 - 4 = -4 < 0 → pas de solution réelle'
      },
      {
        id: 9,
        question: 'Résoudre x² - 4x + 4 = 0 :',
        options: ['x = 2 (solution double)', 'x = 2 et x = -2', 'x = 4', 'Pas de solution'],
        correct: 0,
        explication: 'Δ = 16 - 16 = 0 → solution double : x = 4/2 = 2. C\'est (x-2)².'
      },
      {
        id: 10,
        question: 'Pour quelle valeur de k l\'équation x² + kx + 9 = 0 a une solution double ?',
        options: ['k = 6 ou k = -6', 'k = 3 ou k = -3', 'k = 9', 'k = 0'],
        correct: 0,
        explication: 'Pour solution double : Δ = 0 → k² - 36 = 0 → k = ±6'
      }
    ]
  },
  {
    id: 'maths-fonctions-1',
    subjectId: 'mathematiques',
    titre: 'Dérivées et étude de fonctions',
    difficulte: 'moyen',
    duree: 20,
    questions: [
      {
        id: 1,
        question: 'La dérivée de f(x) = x³ - 3x + 2 est :',
        options: ['3x² - 3', '3x² - 3x', 'x³ - 3', '3x³ - 3'],
        correct: 0,
        explication: '(xⁿ)\' = nxⁿ⁻¹, donc (x³)\' = 3x², (-3x)\' = -3, (2)\' = 0'
      },
      {
        id: 2,
        question: 'f(x) = sin(x) → f\'(x) = ?',
        options: ['cos(x)', '-cos(x)', '-sin(x)', 'tan(x)'],
        correct: 0,
        explication: 'La dérivée de sin(x) est cos(x). C\'est une formule fondamentale.'
      },
      {
        id: 3,
        question: 'Si f\'(x) > 0 sur un intervalle, alors f est :',
        options: ['Croissante', 'Décroissante', 'Constante', 'Négative'],
        correct: 0,
        explication: 'Un signe positif de la dérivée signifie que la fonction monte.'
      },
      {
        id: 4,
        question: 'La dérivée de eˣ est :',
        options: ['eˣ', 'xeˣ', 'e^(x-1)', '1'],
        correct: 0,
        explication: 'La fonction exponentielle est sa propre dérivée : (eˣ)\' = eˣ'
      },
      {
        id: 5,
        question: 'La dérivée de ln(x) est :',
        options: ['1/x', 'x', 'ln(x)/x', 'e^x'],
        correct: 0,
        explication: '(ln x)\' = 1/x pour x > 0'
      },
      {
        id: 6,
        question: 'Dériver f(x) = (2x+1)³ en utilisant la règle de la chaîne :',
        options: ['6(2x+1)²', '3(2x+1)²', '2(2x+1)³', '3(2x+1)'],
        correct: 0,
        explication: 'f\'(x) = 3(2x+1)² × 2 = 6(2x+1)²'
      },
      {
        id: 7,
        question: 'f\'(a) = 0 et f\'\'(a) > 0 indique que f a en a :',
        options: ['Un minimum local', 'Un maximum local', 'Un point d\'inflexion', 'Un zéro'],
        correct: 0,
        explication: 'Si f\' s\'annule et f\'\' > 0, la fonction est concave vers le haut → minimum.'
      },
      {
        id: 8,
        question: 'La dérivée de f(x) = √x est :',
        options: ['1/(2√x)', '2√x', '√x/2', '1/√x'],
        correct: 0,
        explication: '√x = x^(1/2), donc (x^(1/2))\' = (1/2)x^(-1/2) = 1/(2√x)'
      }
    ]
  },
  {
    id: 'maths-proba-1',
    subjectId: 'mathematiques',
    titre: 'Probabilités — Calcul et loi binomiale',
    difficulte: 'difficile',
    duree: 25,
    questions: [
      {
        id: 1,
        question: 'On lance un dé équilibré. Quelle est la probabilité d\'obtenir un nombre pair ?',
        options: ['1/2', '1/3', '2/3', '1/6'],
        correct: 0,
        explication: 'Nombres pairs : 2, 4, 6 → 3 issues sur 6. P = 3/6 = 1/2'
      },
      {
        id: 2,
        question: 'A et B sont indépendants, P(A) = 0,3, P(B) = 0,4. P(A∩B) = ?',
        options: ['0,12', '0,7', '0,58', '0,1'],
        correct: 0,
        explication: 'Indépendants → P(A∩B) = P(A) × P(B) = 0,3 × 0,4 = 0,12'
      },
      {
        id: 3,
        question: 'P(A) = 0,6, P(B) = 0,5, P(A∪B) = 0,8. P(A∩B) = ?',
        options: ['0,3', '0,2', '0,4', '0,1'],
        correct: 0,
        explication: 'P(A∪B) = P(A) + P(B) - P(A∩B) → 0,8 = 0,6 + 0,5 - x → x = 0,3'
      },
      {
        id: 4,
        question: 'P(Ā) = 0,25. P(A) = ?',
        options: ['0,75', '0,25', '0,5', '1,25'],
        correct: 0,
        explication: 'P(A) + P(Ā) = 1 → P(A) = 1 - 0,25 = 0,75'
      },
      {
        id: 5,
        question: 'Dans une urne : 3 boules rouges et 5 bleues. P(rouge) = ?',
        options: ['3/8', '5/8', '3/5', '1/3'],
        correct: 0,
        explication: 'P(rouge) = 3/(3+5) = 3/8'
      }
    ]
  },
  {
    id: 'maths-suites-1',
    subjectId: 'mathematiques',
    titre: 'Suites arithmétiques et géométriques',
    difficulte: 'moyen',
    duree: 20,
    questions: [
      {
        id: 1,
        question: 'La suite (uₙ) est arithmétique avec u₀ = 5 et r = 3. u₄ = ?',
        options: ['17', '20', '12', '15'],
        correct: 0,
        explication: 'u₄ = u₀ + 4r = 5 + 4×3 = 5 + 12 = 17'
      },
      {
        id: 2,
        question: 'La suite 2, 6, 18, 54... est :',
        options: ['Géométrique de raison 3', 'Arithmétique de raison 4', 'Géométrique de raison 2', 'Ni l\'une ni l\'autre'],
        correct: 0,
        explication: '6/2 = 3, 18/6 = 3, 54/18 = 3 → géométrique, raison q = 3'
      },
      {
        id: 3,
        question: 'Somme des 5 premiers termes de 1, 2, 4, 8, 16... ?',
        options: ['31', '32', '15', '30'],
        correct: 0,
        explication: 'S = u₀(qⁿ-1)/(q-1) = 1×(2⁵-1)/(2-1) = 32-1 = 31'
      },
      {
        id: 4,
        question: 'Somme des entiers de 1 à 100 :',
        options: ['5050', '5000', '4950', '10100'],
        correct: 0,
        explication: 'S = n(n+1)/2 = 100×101/2 = 5050 (formule de Gauss)'
      },
      {
        id: 5,
        question: 'Si uₙ = 3n + 2, la raison de cette suite arithmétique est :',
        options: ['3', '2', '5', '1'],
        correct: 0,
        explication: 'uₙ₊₁ - uₙ = 3(n+1)+2 - (3n+2) = 3 → raison r = 3'
      }
    ]
  },

  // ─── PHYSIQUE ────────────────────────────────────────────────────
  {
    id: 'physique-mecanique-1',
    subjectId: 'physique',
    titre: 'Mécanique — Lois de Newton',
    difficulte: 'moyen',
    duree: 20,
    questions: [
      {
        id: 1,
        question: 'Un objet de 5 kg subit une force de 20 N. Son accélération est :',
        options: ['4 m/s²', '100 m/s²', '0,25 m/s²', '25 m/s²'],
        correct: 0,
        explication: '2ème loi de Newton : F = ma → a = F/m = 20/5 = 4 m/s²'
      },
      {
        id: 2,
        question: 'Un objet en MRU signifie que la somme des forces est :',
        options: ['Nulle', 'Maximale', 'Égale à mg', 'Positive'],
        correct: 0,
        explication: 'En MRU, a = 0 → ΣF = ma = 0 (1ère loi de Newton)'
      },
      {
        id: 3,
        question: 'Le poids d\'un objet de 2 kg sur Terre (g = 9,8 m/s²) est :',
        options: ['19,6 N', '2 N', '9,8 N', '4,9 N'],
        correct: 0,
        explication: 'P = mg = 2 × 9,8 = 19,6 N'
      },
      {
        id: 4,
        question: 'La 3ème loi de Newton (action-réaction) dit que :',
        options: ['Toute force exercée sur un objet a une force opposée sur l\'objet qui l\'exerce', 'L\'accélération est proportionnelle à la force', 'Un objet reste au repos si aucune force agit', 'La masse est proportionnelle au poids'],
        correct: 0,
        explication: 'F_A→B = -F_B→A : même norme, même droite d\'action, sens opposés.'
      },
      {
        id: 5,
        question: 'En chute libre depuis le repos, après 3 s, la vitesse est (g = 10 m/s²) :',
        options: ['30 m/s', '15 m/s', '45 m/s', '10 m/s'],
        correct: 0,
        explication: 'v = g·t = 10 × 3 = 30 m/s'
      },
      {
        id: 6,
        question: 'La distance parcourue en chute libre après 2 s est :',
        options: ['20 m', '40 m', '10 m', '4 m'],
        correct: 0,
        explication: 'h = ½gt² = ½ × 10 × 4 = 20 m'
      },
      {
        id: 7,
        question: 'Un objet lancé horizontalement à 10 m/s depuis 5 m de haut atterrit après :',
        options: ['1 s', '0,5 s', '2 s', '√5 s'],
        correct: 0,
        explication: 'Verticalement : h = ½gt² → 5 = ½×10×t² → t² = 1 → t = 1 s'
      },
      {
        id: 8,
        question: 'La force de frottement f = μN avec μ = 0,3 et N = 50 N vaut :',
        options: ['15 N', '50,3 N', '0,006 N', '150 N'],
        correct: 0,
        explication: 'f = μN = 0,3 × 50 = 15 N'
      }
    ]
  },
  {
    id: 'physique-electricite-1',
    subjectId: 'physique',
    titre: 'Électricité — Circuits et lois',
    difficulte: 'facile',
    duree: 15,
    questions: [
      {
        id: 1,
        question: 'Dans un circuit série, deux résistances R₁ = 10 Ω et R₂ = 20 Ω. La résistance équivalente est :',
        options: ['30 Ω', '6,7 Ω', '200 Ω', '15 Ω'],
        correct: 0,
        explication: 'En série : R_eq = R₁ + R₂ = 10 + 20 = 30 Ω'
      },
      {
        id: 2,
        question: 'En utilisant la loi d\'Ohm, si U = 12 V et R = 4 Ω, I = ?',
        options: ['3 A', '48 A', '0,33 A', '8 A'],
        correct: 0,
        explication: 'U = RI → I = U/R = 12/4 = 3 A'
      },
      {
        id: 3,
        question: 'La puissance dissipée dans une résistance R = 5 Ω traversée par I = 2 A est :',
        options: ['20 W', '10 W', '2,5 W', '40 W'],
        correct: 0,
        explication: 'P = RI² = 5 × 2² = 5 × 4 = 20 W'
      },
      {
        id: 4,
        question: 'Deux résistances 10 Ω en parallèle donnent :',
        options: ['5 Ω', '20 Ω', '10 Ω', '100 Ω'],
        correct: 0,
        explication: '1/R_eq = 1/10 + 1/10 = 2/10 → R_eq = 5 Ω'
      },
      {
        id: 5,
        question: 'La loi des nœuds dit que la somme des courants entrant dans un nœud est :',
        options: ['Égale à la somme des courants sortants', 'Nulle', 'Maximale', 'Égale à la tension'],
        correct: 0,
        explication: 'La conservation de la charge impose : ΣI_entrants = ΣI_sortants'
      },
      {
        id: 6,
        question: 'L\'énergie consommée par un appareil de 100 W pendant 2 heures est :',
        options: ['720 000 J', '200 J', '50 J', '100 J'],
        correct: 0,
        explication: 'E = P × t = 100 W × 7200 s = 720 000 J = 0,2 kWh'
      }
    ]
  },
  {
    id: 'physique-optique-1',
    subjectId: 'physique',
    titre: 'Optique — Réflexion et réfraction',
    difficulte: 'moyen',
    duree: 20,
    questions: [
      {
        id: 1,
        question: 'Un rayon passe de l\'eau (n=1,33) à l\'air (n=1). Il est réfracté. La loi de Snell-Descartes est :',
        options: ['n₁ sin θ₁ = n₂ sin θ₂', 'n₁ cos θ₁ = n₂ cos θ₂', 'θ₁ = θ₂', 'n₁ θ₁ = n₂ θ₂'],
        correct: 0,
        explication: 'Loi de Snell-Descartes : n₁ sin θ₁ = n₂ sin θ₂'
      },
      {
        id: 2,
        question: 'La réflexion totale se produit quand :',
        options: ['L\'angle d\'incidence dépasse l\'angle critique', 'L\'angle d\'incidence est nul', 'n₁ < n₂', 'Le rayon est perpendiculaire à la surface'],
        correct: 0,
        explication: 'Réflexion totale : θ₁ > θ_c, avec sin θ_c = n₂/n₁ (n₁ > n₂)'
      },
      {
        id: 3,
        question: 'Une lentille convergente de focale f = 10 cm. Un objet à 20 cm. L\'image est à :',
        options: ['20 cm', '10 cm', '30 cm', '40 cm'],
        correct: 0,
        explication: '1/v - 1/u = 1/f → 1/v = 1/10 + 1/(-20) = 2/20 - 1/20 = 1/20 → v = 20 cm'
      }
    ]
  },

  // ─── CHIMIE ───────────────────────────────────────────────────────
  {
    id: 'chimie-atome-1',
    subjectId: 'chimie',
    titre: 'Structure de l\'atome et tableau périodique',
    difficulte: 'facile',
    duree: 15,
    questions: [
      {
        id: 1,
        question: 'Un atome de carbone (Z=6, A=12) contient combien de neutrons ?',
        options: ['6', '12', '18', '0'],
        correct: 0,
        explication: 'N = A - Z = 12 - 6 = 6 neutrons'
      },
      {
        id: 2,
        question: 'La configuration électronique du sodium Na (Z=11) est :',
        options: ['2, 8, 1', '2, 9', '3, 8', '2, 8, 2'],
        correct: 0,
        explication: 'K(2), L(8), M(1) → 2 + 8 + 1 = 11 électrons ✓'
      },
      {
        id: 3,
        question: 'L\'ion Na⁺ a perdu :',
        options: ['1 électron', '1 proton', '1 neutron', '2 électrons'],
        correct: 0,
        explication: 'Na → Na⁺ + e⁻ : le sodium perd 1 électron pour atteindre la structure du néon.'
      },
      {
        id: 4,
        question: 'Les éléments d\'une même colonne du tableau périodique ont :',
        options: ['Le même nombre d\'électrons de valence', 'Le même nombre de protons', 'La même masse atomique', 'Le même nombre de couches'],
        correct: 0,
        explication: 'Une même colonne = même famille = même nombre d\'électrons de valence = propriétés similaires.'
      },
      {
        id: 5,
        question: 'Quelle est la charge d\'un proton ?',
        options: ['+1,6 × 10⁻¹⁹ C', '-1,6 × 10⁻¹⁹ C', '0', '+1'],
        correct: 0,
        explication: 'Le proton porte une charge élémentaire positive : +e = +1,6 × 10⁻¹⁹ C'
      },
      {
        id: 6,
        question: 'Le nombre de masse A représente :',
        options: ['Le nombre de protons + neutrons', 'Le nombre de protons seulement', 'Le nombre d\'électrons', 'La masse en grammes'],
        correct: 0,
        explication: 'A = Z (protons) + N (neutrons) : c\'est la masse atomique en unités de masse atomique.'
      },
      {
        id: 7,
        question: 'Deux atomes isotopes ont :',
        options: ['Le même Z mais des A différents', 'Le même A mais des Z différents', 'La même masse et le même Z', 'Des nombres d\'électrons différents'],
        correct: 0,
        explication: 'Les isotopes sont des atomes du même élément (même Z) avec des nombres de neutrons différents (A différents).'
      }
    ]
  },
  {
    id: 'chimie-organique-1',
    subjectId: 'chimie',
    titre: 'Chimie organique — Hydrocarbures',
    difficulte: 'moyen',
    duree: 20,
    questions: [
      {
        id: 1,
        question: 'La formule générale des alcanes est :',
        options: ['CₙH₂ₙ₊₂', 'CₙH₂ₙ', 'CₙH₂ₙ₋₂', 'CₙHₙ'],
        correct: 0,
        explication: 'Les alcanes sont des hydrocarbures saturés (liaisons simples) : CₙH₂ₙ₊₂'
      },
      {
        id: 2,
        question: 'Le groupe fonctionnel -OH correspond à :',
        options: ['Alcool', 'Acide carboxylique', 'Aldéhyde', 'Amine'],
        correct: 0,
        explication: 'Le groupe hydroxyle -OH caractérise la fonction alcool.'
      },
      {
        id: 3,
        question: 'La formule brute de l\'éthanol est :',
        options: ['C₂H₅OH (ou C₂H₆O)', 'CH₃OH', 'C₃H₇OH', 'C₂H₄O'],
        correct: 0,
        explication: 'Éthanol = alcool éthylique : CH₃-CH₂-OH = C₂H₆O'
      },
      {
        id: 4,
        question: 'L\'isomérie de fonction concerne des molécules qui :',
        options: ['Ont la même formule brute mais des fonctions différentes', 'Ont des formules brutes différentes', 'Ont les mêmes propriétés', 'Diffèrent par la position d\'un groupe'],
        correct: 0,
        explication: 'Ex : éthanol (alcool) et méthoxyméthane (éther) ont tous deux C₂H₆O mais des fonctions différentes.'
      },
      {
        id: 5,
        question: 'La saponification est :',
        options: ['La réaction d\'un ester avec NaOH en milieu aqueux', 'L\'oxydation d\'un alcool', 'La réduction d\'un acide', 'Une réaction d\'estérification'],
        correct: 0,
        explication: 'Saponification : ester + NaOH → sel d\'acide carboxylique + alcool (totale, rapide)'
      },
      {
        id: 6,
        question: 'Le benzène (C₆H₆) appartient à la famille :',
        options: ['Hydrocarbures aromatiques', 'Alcanes', 'Alcènes', 'Alcynes'],
        correct: 0,
        explication: 'Le benzène est le composé aromatique de référence, avec son cycle hexagonal conjugué.'
      }
    ]
  },

  // ─── SVT ───────────────────────────────────────────────────────────
  {
    id: 'svt-genetique-1',
    subjectId: 'svt',
    titre: 'Génétique — ADN et hérédité',
    difficulte: 'moyen',
    duree: 20,
    questions: [
      {
        id: 1,
        question: 'La réplication de l\'ADN est dite "semi-conservative" car :',
        options: ['Chaque nouvelle molécule contient un ancien brin et un nouveau brin', 'Les deux brins sont conservés intacts', 'L\'ADN est conservé tel quel', 'Un seul brin est conservé'],
        correct: 0,
        explication: 'Chaque brin parental sert de matrice. La nouvelle molécule = 1 brin ancien + 1 brin nouveau.'
      },
      {
        id: 2,
        question: 'L\'ARN messager est synthétisé lors de :',
        options: ['La transcription', 'La traduction', 'La réplication', 'La mitose'],
        correct: 0,
        explication: 'La transcription est le processus ADN → ARNm dans le noyau.'
      },
      {
        id: 3,
        question: 'Un codon stop sur l\'ARNm signifie :',
        options: ['La traduction s\'arrête', 'La transcription commence', 'Un acide aminé est ajouté', 'L\'ADN se réplique'],
        correct: 0,
        explication: 'Les codons stop (UAA, UAG, UGA) signalent la fin de la synthèse protéique.'
      },
      {
        id: 4,
        question: 'Le génotype AA désigne un individu :',
        options: ['Homozygote dominant', 'Hétérozygote', 'Homozygote récessif', 'Hemizygote'],
        correct: 0,
        explication: 'AA = deux allèles identiques dominants → homozygote dominant.'
      },
      {
        id: 5,
        question: 'Croisement Aa × Aa. Proportion d\'homozygotes récessifs aa :',
        options: ['1/4', '1/2', '3/4', '0'],
        correct: 0,
        explication: 'Tableau de Punnett : AA (1/4), Aa (2/4), aa (1/4) → aa = 25%'
      },
      {
        id: 6,
        question: 'La mitose produit :',
        options: ['2 cellules diploïdes identiques', '4 cellules haploïdes', '2 cellules haploïdes', '4 cellules diploïdes'],
        correct: 0,
        explication: 'Mitose = division cellulaire qui donne 2 cellules filles identiques à la cellule mère (2n).'
      },
      {
        id: 7,
        question: 'La méiose est nécessaire pour :',
        options: ['La formation des gamètes', 'La croissance des tissus', 'La cicatrisation', 'La division des neurones'],
        correct: 0,
        explication: 'La méiose réduit le nombre de chromosomes de moitié (2n → n) pour former les gamètes.'
      },
      {
        id: 8,
        question: 'Quelle base azotée est présente dans l\'ARN mais pas dans l\'ADN ?',
        options: ['Uracile (U)', 'Thymine (T)', 'Adénine (A)', 'Guanine (G)'],
        correct: 0,
        explication: 'L\'ARN contient U (Uracile) à la place de T (Thymine) présente dans l\'ADN.'
      }
    ]
  },
  {
    id: 'svt-ecologie-1',
    subjectId: 'svt',
    titre: 'Écologie et environnement',
    difficulte: 'facile',
    duree: 15,
    questions: [
      {
        id: 1,
        question: 'Dans une chaîne alimentaire, les organismes au premier niveau sont :',
        options: ['Les producteurs (végétaux)', 'Les consommateurs primaires', 'Les décomposeurs', 'Les consommateurs secondaires'],
        correct: 0,
        explication: 'Les plantes et algues (producteurs) forment la base de toute chaîne alimentaire par photosynthèse.'
      },
      {
        id: 2,
        question: 'L\'effet de serre est principalement dû à :',
        options: ['CO₂ et CH₄', 'O₂ et N₂', 'H₂ et He', 'O₃ uniquement'],
        correct: 0,
        explication: 'Le CO₂ (dioxyde de carbone) et le CH₄ (méthane) sont les principaux gaz à effet de serre.'
      },
      {
        id: 3,
        question: 'La photosynthèse produit :',
        options: ['Glucose et O₂', 'CO₂ et H₂O', 'ATP uniquement', 'N₂ et glucides'],
        correct: 0,
        explication: '6CO₂ + 6H₂O + lumière → C₆H₁₂O₆ (glucose) + 6O₂'
      },
      {
        id: 4,
        question: 'Un écosystème est composé de :',
        options: ['Biocénose + biotope', 'Flore + faune uniquement', 'Sol + eau', 'Producteurs + consommateurs'],
        correct: 0,
        explication: 'Écosystème = biocénose (communauté d\'êtres vivants) + biotope (milieu physique).'
      },
      {
        id: 5,
        question: 'La biodiversité désigne :',
        options: ['La variété du vivant à tous les niveaux (gènes, espèces, écosystèmes)', 'Le nombre d\'espèces uniquement', 'La diversité génétique d\'une espèce', 'Le nombre d\'écosystèmes'],
        correct: 0,
        explication: 'La biodiversité englobe 3 niveaux : diversité génétique, spécifique (espèces) et écosystémique.'
      },
      {
        id: 6,
        question: 'La respiration cellulaire se déroule principalement dans :',
        options: ['Les mitochondries', 'Les chloroplastes', 'Le noyau', 'Le réticulum endoplasmique'],
        correct: 0,
        explication: 'Les mitochondries sont le siège de la respiration cellulaire (production d\'ATP par oxydation du glucose).'
      }
    ]
  },

  // ─── HISTOIRE ──────────────────────────────────────────────────────
  {
    id: 'histoire-afrique-1',
    subjectId: 'histoire',
    titre: 'Afrique précoloniale — Grands empires',
    difficulte: 'facile',
    duree: 15,
    questions: [
      {
        id: 1,
        question: 'Quel empire africain fut dirigé par Mansa Moussa ?',
        options: ['Empire du Mali', 'Empire du Ghana', 'Empire Songhaï', 'Royaume du Kongo'],
        correct: 0,
        explication: 'Mansa Moussa régna sur l\'Empire du Mali (1312-1337) et fit un célèbre pèlerinage à La Mecque en 1324.'
      },
      {
        id: 2,
        question: 'La Conférence de Berlin (1884-1885) a abouti à :',
        options: ['Le partage de l\'Afrique entre puissances européennes', 'L\'indépendance de plusieurs pays africains', 'La création de l\'Union Africaine', 'La fin de la traite des esclaves'],
        correct: 0,
        explication: 'La Conférence de Berlin a organisé le "scramble for Africa" en définissant les règles du partage colonial.'
      },
      {
        id: 3,
        question: 'Le Ghana est devenu indépendant le 6 mars 1957 sous la direction de :',
        options: ['Kwame Nkrumah', 'Léopold Sédar Senghor', 'Jomo Kenyatta', 'Patrice Lumumba'],
        correct: 0,
        explication: 'Kwame Nkrumah a conduit le Ghana à l\'indépendance, premier pays d\'Afrique subsaharienne à se libérer.'
      },
      {
        id: 4,
        question: 'La traite transatlantique des esclaves a principalement concerné :',
        options: ['L\'Afrique de l\'Ouest', 'L\'Afrique du Nord', 'L\'Afrique orientale', 'L\'Afrique australe'],
        correct: 0,
        explication: 'La traite atlantique (XVIe-XIXe s.) déporta principalement des Africains de l\'Ouest vers les Amériques.'
      },
      {
        id: 5,
        question: 'L\'année 1960 est appelée "Année africaine" parce que :',
        options: ['17 pays africains ont accédé à l\'indépendance', '10 pays ont été colonisés', 'L\'OUA a été fondée', 'La Conférence de Bandung a eu lieu'],
        correct: 0,
        explication: 'En 1960, 17 colonies africaines sont devenues indépendantes, dont le Cameroun, le Sénégal, le Congo...'
      },
      {
        id: 6,
        question: 'Soundiata Keita est connu pour :',
        options: ['Avoir fondé l\'Empire du Mali en battant Soumaoro Kanté à Kirina (1235)', 'Avoir fondé l\'Empire Songhaï', 'Avoir été roi d\'Aksoum', 'Avoir dirigé le Royaume du Bénin'],
        correct: 0,
        explication: 'Soundiata Keita, le "Lion du Mali", vainquit Soumaoro Kanté à la bataille de Kirina et fonda l\'Empire du Mali.'
      }
    ]
  },
  {
    id: 'histoire-guerres-1',
    subjectId: 'histoire',
    titre: 'Guerres mondiales et relations internationales',
    difficulte: 'moyen',
    duree: 20,
    questions: [
      {
        id: 1,
        question: 'L\'assassinat déclenchant la Première Guerre mondiale est celui de :',
        options: ['L\'archiduc François-Ferdinand à Sarajevo', 'Le président Wilson aux USA', 'Le roi de Belgique', 'Le tsar Nicolas II'],
        correct: 0,
        explication: 'L\'assassinat de l\'archiduc François-Ferdinand d\'Autriche le 28 juin 1914 à Sarajevo déclencha la 1ère GM.'
      },
      {
        id: 2,
        question: 'La Seconde Guerre mondiale a pris fin en :',
        options: ['1945', '1944', '1946', '1943'],
        correct: 0,
        explication: 'La 2ème GM a pris fin en Europe le 8 mai 1945 et au Pacifique le 2 septembre 1945.'
      },
      {
        id: 3,
        question: 'L\'ONU a été créée en :',
        options: ['1945', '1919', '1939', '1955'],
        correct: 0,
        explication: 'L\'ONU (Organisation des Nations Unies) a été fondée le 24 octobre 1945 pour maintenir la paix mondiale.'
      },
      {
        id: 4,
        question: 'La "Guerre froide" s\'est déroulée entre :',
        options: ['Les États-Unis et l\'URSS (1947-1991)', 'L\'Allemagne et la France', 'La Chine et le Japon', 'Les USA et la Chine'],
        correct: 0,
        explication: 'La Guerre Froide est l\'affrontement idéologique (capitalisme vs communisme) USA-URSS de 1947 à 1991.'
      },
      {
        id: 5,
        question: 'Le plan Marshall (1947) était :',
        options: ['Un plan américain d\'aide économique à l\'Europe', 'Un plan militaire de l\'OTAN', 'Un plan soviétique pour l\'Asie', 'Un plan de décolonisation'],
        correct: 0,
        explication: 'Le plan Marshall fut un programme américain d\'aide économique pour reconstruire l\'Europe occidentale après 1945.'
      }
    ]
  },

  // ─── GÉOGRAPHIE ────────────────────────────────────────────────────
  {
    id: 'geo-physique-1',
    subjectId: 'geographie',
    titre: 'Géographie physique — Reliefs et climatologie',
    difficulte: 'facile',
    duree: 15,
    questions: [
      {
        id: 1,
        question: 'Le plus haut sommet d\'Afrique est :',
        options: ['Le Kilimandjaro (5 895 m)', 'Le Mont Kenya (5 199 m)', 'Le Ras Dashen (4 550 m)', 'Le Mont Cameroun (4 095 m)'],
        correct: 0,
        explication: 'Le Kilimandjaro en Tanzanie culmine à 5 895 m, c\'est le toit de l\'Afrique.'
      },
      {
        id: 2,
        question: 'La tectonique des plaques explique :',
        options: ['Les séismes, volcans et formation des montagnes', 'Les courants marins uniquement', 'La formation des nuages', 'Le cycle de l\'eau'],
        correct: 0,
        explication: 'Le mouvement des plaques lithosphériques est à l\'origine des séismes, volcans et chaînes de montagnes.'
      },
      {
        id: 3,
        question: 'Le Rift africain est :',
        options: ['Une fracture géologique de l\'est de l\'Afrique', 'Un fleuve', 'Une chaîne de montagnes', 'Un désert'],
        correct: 0,
        explication: 'Le Rift est-africain est un système de failles actives s\'étendant de la mer Rouge au Mozambique.'
      },
      {
        id: 4,
        question: 'Le biome qui couvre le plus d\'Afrique est :',
        options: ['La savane', 'La forêt tropicale', 'Le désert', 'La steppe'],
        correct: 0,
        explication: 'La savane (herbes + arbres épars) couvre environ 45% de l\'Afrique, du Sahel à l\'Afrique australe.'
      },
      {
        id: 5,
        question: 'Le fleuve le plus long du monde est :',
        options: ['Le Nil (6 650 km)', 'L\'Amazone (6 400 km)', 'Le Congo (4 700 km)', 'Le Niger (4 200 km)'],
        correct: 0,
        explication: 'Le Nil, traversant 11 pays dont l\'Éthiopie et l\'Égypte, est le plus long fleuve du monde à 6 650 km.'
      },
      {
        id: 6,
        question: 'Le Sahara est le plus grand désert :',
        options: ['Chaud du monde', 'Du monde toutes catégories', 'D\'Afrique uniquement', 'De sable'],
        correct: 0,
        explication: 'Le Sahara (9,2 millions km²) est le plus grand désert chaud. L\'Antarctique est plus grand (14 M km²) mais froid.'
      }
    ]
  },

  // ─── FRANÇAIS ──────────────────────────────────────────────────────
  {
    id: 'francais-grammaire-1',
    subjectId: 'francais',
    titre: 'Grammaire — Conjugaison et syntaxe',
    difficulte: 'facile',
    duree: 15,
    questions: [
      {
        id: 1,
        question: 'Dans "Je mange une pomme", quel est le COD ?',
        options: ['Une pomme', 'Je', 'Mange', 'Aucun COD'],
        correct: 0,
        explication: 'Le COD (Complément d\'Objet Direct) répond à "Quoi ?" → "Je mange quoi ?" → "une pomme".'
      },
      {
        id: 2,
        question: 'Le subjonctif présent est utilisé après :',
        options: ['Il faut que...', 'Je pense que...', 'Je sais que...', 'Il est certain que...'],
        correct: 0,
        explication: 'Le subjonctif s\'emploie après des expressions de nécessité (il faut que), de doute, d\'émotion...'
      },
      {
        id: 3,
        question: 'Quelle est la nature du mot "rapidement" ?',
        options: ['Adverbe', 'Adjectif', 'Nom', 'Verbe'],
        correct: 0,
        explication: '"Rapidement" modifie un verbe → c\'est un adverbe (de manière). Les adverbes en -ment sont invariables.'
      },
      {
        id: 4,
        question: 'La phrase "Bien que je sois fatigué, je travaille" contient :',
        options: ['Une proposition subordonnée circonstancielle de concession', 'Une proposition relative', 'Une principale et une complétive', 'Une proposition de cause'],
        correct: 0,
        explication: '"Bien que" introduit une concession. La concession exprime une opposition malgré laquelle l\'action se réalise.'
      },
      {
        id: 5,
        question: 'Le passé composé de "prendre" à la 3ème personne du singulier est :',
        options: ['Il a pris', 'Il a prendre', 'Il prit', 'Il a prendu'],
        correct: 0,
        explication: 'Prendre → participe passé irrégulier : pris. Il a pris (auxiliaire avoir + pris).'
      },
      {
        id: 6,
        question: 'Dans "Le livre que j\'ai lu était intéressant", "que" est :',
        options: ['Un pronom relatif COD', 'Une conjonction de coordination', 'Un adverbe', 'Un pronom personnel'],
        correct: 0,
        explication: '"Que" reprend "le livre" et est COD du verbe "ai lu" dans la proposition relative.'
      }
    ]
  },
  {
    id: 'francais-litterature-1',
    subjectId: 'francais',
    titre: 'Littérature — Mouvements et auteurs',
    difficulte: 'moyen',
    duree: 20,
    questions: [
      {
        id: 1,
        question: 'Aimé Césaire est l\'auteur de :',
        options: ['"Cahier d\'un retour au pays natal"', '"Les Misérables"', '"Germinal"', '"Les Fleurs du Mal"'],
        correct: 0,
        explication: 'Aimé Césaire (1913-2008), poète et homme politique martiniquais, a écrit ce chef-d\'œuvre de la Négritude en 1939.'
      },
      {
        id: 2,
        question: 'Le mouvement de la Négritude a été fondé dans les années :',
        options: ['1930', '1950', '1920', '1960'],
        correct: 0,
        explication: 'La Négritude naît dans les années 1930 à Paris, autour de Césaire, Senghor et Damas.'
      },
      {
        id: 3,
        question: '"Les Misérables" a été écrit par :',
        options: ['Victor Hugo', 'Honoré de Balzac', 'Gustave Flaubert', 'Émile Zola'],
        correct: 0,
        explication: 'Victor Hugo publie "Les Misérables" en 1862, œuvre majeure du romantisme social.'
      },
      {
        id: 4,
        question: 'L\'auteur camerounais Mongo Beti est connu pour :',
        options: ['"Mission terminée" et sa critique du colonialisme', '"Une si longue lettre"', '"Les Bouts de bois de Dieu"', '"L\'Aventure ambiguë"'],
        correct: 0,
        explication: 'Mongo Beti (1932-2001) est célèbre pour sa critique du colonialisme à travers "Mission terminée", "Le Pauvre Christ de Bomba"...'
      },
      {
        id: 5,
        question: 'Le réalisme en littérature vise à :',
        options: ['Représenter fidèlement la réalité sociale de son époque', 'Exalter les sentiments et l\'imagination', 'Explorer l\'inconscient', 'Idéaliser la nature'],
        correct: 0,
        explication: 'Le réalisme (XIXe s.) cherche à décrire objectivement la société : Balzac, Flaubert, Zola.'
      }
    ]
  },

  // ─── PHILOSOPHIE ─────────────────────────────────────────────────
  {
    id: 'philo-ethique-1',
    subjectId: 'philosophie',
    titre: 'Éthique et philosophie morale',
    difficulte: 'moyen',
    duree: 20,
    questions: [
      {
        id: 1,
        question: 'Selon Kant, l\'impératif catégorique signifie :',
        options: ['Agir selon une maxime universalisable', 'Maximiser le bonheur du plus grand nombre', 'Suivre ses instincts naturels', 'Obéir à l\'autorité de l\'État'],
        correct: 0,
        explication: 'Kant : "Agis seulement selon la maxime par laquelle tu peux vouloir qu\'elle devienne une loi universelle."'
      },
      {
        id: 2,
        question: 'L\'utilitarisme de Bentham est basé sur :',
        options: ['La maximisation du bonheur collectif', 'Le respect absolu des droits individuels', 'La vertu personnelle', 'La loi divine'],
        correct: 0,
        explication: 'L\'utilitarisme : le bon acte est celui qui produit le plus grand bonheur pour le plus grand nombre.'
      },
      {
        id: 3,
        question: '"L\'existence précède l\'essence" est une thèse de :',
        options: ['Jean-Paul Sartre', 'Immanuel Kant', 'Aristote', 'Descartes'],
        correct: 0,
        explication: 'Sartre (existentialisme) : l\'homme n\'a pas de nature prédéfinie, il se définit par ses choix et actions.'
      },
      {
        id: 4,
        question: 'Socrate est connu pour sa méthode philosophique appelée :',
        options: ['La maïeutique (accouchement des idées)', 'La dialectique hégélienne', 'L\'induction scientifique', 'Le doute méthodique'],
        correct: 0,
        explication: 'Socrate utilisait le dialogue et les questions pour aider l\'interlocuteur à "accoucher" de ses propres vérités.'
      },
      {
        id: 5,
        question: 'La philosophie Ubuntu (Afrique) signifie :',
        options: ['"Je suis parce que nous sommes"', '"L\'homme est un loup pour l\'homme"', '"Je pense donc je suis"', '"La liberté ou la mort"'],
        correct: 0,
        explication: 'Ubuntu (zoulou/xhosa) exprime la solidarité et l\'interdépendance humaine : l\'individu existe grâce à la communauté.'
      },
      {
        id: 6,
        question: 'Un sophisme est :',
        options: ['Un raisonnement trompeur qui paraît valide', 'Un argument logiquement valide', 'Une figure de style', 'Une loi mathématique'],
        correct: 0,
        explication: 'Un sophisme (du grec "sophisma") est un faux raisonnement présenté comme valide, destiné à tromper.'
      }
    ]
  },

  // ─── ÉCONOMIE ────────────────────────────────────────────────────
  {
    id: 'eco-micro-1',
    subjectId: 'economie',
    titre: 'Microéconomie — Offre, demande et marché',
    difficulte: 'facile',
    duree: 15,
    questions: [
      {
        id: 1,
        question: 'La loi de la demande stipule que quand le prix augmente :',
        options: ['La quantité demandée diminue', 'La quantité demandée augmente', 'L\'offre diminue', 'L\'offre augmente'],
        correct: 0,
        explication: 'Relation inverse prix-demande : à prix plus élevé, les consommateurs achètent moins (sauf biens Giffen).'
      },
      {
        id: 2,
        question: 'Le prix d\'équilibre est atteint quand :',
        options: ['L\'offre = la demande', 'L\'offre > la demande', 'La demande > l\'offre', 'Le prix est fixé par l\'État'],
        correct: 0,
        explication: 'À l\'équilibre, la quantité offerte égalise la quantité demandée → prix d\'équilibre.'
      },
      {
        id: 3,
        question: 'Si P > P_équilibre, il y a :',
        options: ['Un surplus (excès d\'offre)', 'Une pénurie (excès de demande)', 'L\'équilibre', 'Une augmentation de la demande'],
        correct: 0,
        explication: 'Prix trop élevé → producteurs veulent vendre plus que les consommateurs n\'achètent → surplus → pression à la baisse des prix.'
      },
      {
        id: 4,
        question: 'Des biens substituables sont des biens :',
        options: ['Qui peuvent se remplacer (ex : beurre et margarine)', 'Qui se consomment ensemble (ex : voiture et essence)', 'Qui ont le même prix', 'Qui ont la même utilité marginale'],
        correct: 0,
        explication: 'Biens substituables : la hausse du prix de l\'un augmente la demande de l\'autre (ex : thé et café).'
      },
      {
        id: 5,
        question: 'Le PIB mesure :',
        options: ['La valeur totale des biens et services produits dans un pays en un an', 'Le revenu des ménages', 'Les exportations nettes', 'La richesse totale accumulée'],
        correct: 0,
        explication: 'PIB = valeur ajoutée totale créée sur le territoire national au cours d\'une année.'
      },
      {
        id: 6,
        question: 'L\'inflation est :',
        options: ['Une hausse générale et durable des prix', 'Une baisse générale des prix', 'Une hausse du chômage', 'Une augmentation du PIB'],
        correct: 0,
        explication: 'L\'inflation désigne une hausse persistante du niveau général des prix, mesurée par l\'IPC.'
      }
    ]
  },

  // ─── INFORMATIQUE ────────────────────────────────────────────────
  {
    id: 'info-algo-1',
    subjectId: 'informatique',
    titre: 'Algorithmique — Structures et complexité',
    difficulte: 'moyen',
    duree: 20,
    questions: [
      {
        id: 1,
        question: 'La complexité d\'une boucle "Pour i de 1 à n" contenant une instruction O(1) est :',
        options: ['O(n)', 'O(1)', 'O(n²)', 'O(log n)'],
        correct: 0,
        explication: 'Une boucle de n itérations avec opération constante → O(n) : complexité linéaire.'
      },
      {
        id: 2,
        question: 'Une structure de données LIFO (Last In, First Out) est :',
        options: ['Une pile (stack)', 'Une file (queue)', 'Un tableau', 'Une liste chaînée'],
        correct: 0,
        explication: 'LIFO : le dernier entré est le premier sorti → Pile. Exemple : historique navigateur, pile d\'appels.'
      },
      {
        id: 3,
        question: 'Le tri rapide (Quicksort) a une complexité moyenne de :',
        options: ['O(n log n)', 'O(n²)', 'O(n)', 'O(log n)'],
        correct: 0,
        explication: 'Quicksort : O(n log n) en moyenne, O(n²) dans le pire cas.'
      },
      {
        id: 4,
        question: 'La récursivité est :',
        options: ['Une fonction qui s\'appelle elle-même', 'Une boucle infinie', 'Une structure conditionnelle', 'Un type de données'],
        correct: 0,
        explication: 'Une fonction récursive s\'appelle elle-même avec un cas de base pour arrêter les appels.'
      },
      {
        id: 5,
        question: 'En binaire, 1010 représente en décimal :',
        options: ['10', '12', '8', '15'],
        correct: 0,
        explication: '1×2³ + 0×2² + 1×2¹ + 0×2⁰ = 8 + 0 + 2 + 0 = 10'
      },
      {
        id: 6,
        question: 'Une adresse IP de type 192.168.1.0/24 indique :',
        options: ['Un réseau de 256 adresses dont 254 utilisables', 'Une seule adresse', '24 réseaux', 'Un réseau de classe A'],
        correct: 0,
        explication: '/24 = 24 bits de masque → 8 bits pour les hôtes → 2⁸ = 256 adresses (254 utilisables : réseau + diffusion exclus).'
      }
    ]
  },

  // ─── ANGLAIS ──────────────────────────────────────────────────────
  {
    id: 'anglais-grammar-1',
    subjectId: 'anglais',
    titre: 'English Grammar — Tenses and Structures',
    difficulte: 'moyen',
    duree: 20,
    questions: [
      {
        id: 1,
        question: 'Choose the correct form: "She ___ in Yaoundé for five years."',
        options: ['has lived', 'lived', 'is living', 'lives'],
        correct: 0,
        explication: 'Present Perfect is used for actions that started in the past and continue to the present. "for five years" is the clue.'
      },
      {
        id: 2,
        question: 'The passive voice of "They built this house in 1990" is:',
        options: ['This house was built in 1990', 'This house is built in 1990', 'This house built in 1990', 'This house has been built in 1990'],
        correct: 0,
        explication: 'Simple past passive: Subject + was/were + past participle. "built" is the past participle of "build".'
      },
      {
        id: 3,
        question: 'Which sentence uses the conditional correctly?',
        options: ['If I had money, I would travel', 'If I have money, I would travel', 'If I had money, I will travel', 'If I would have money, I travel'],
        correct: 0,
        explication: 'Second conditional (unreal present): If + past simple, would + base verb.'
      },
      {
        id: 4,
        question: '"Despite being tired, she continued working." — "despite" expresses:',
        options: ['Concession', 'Cause', 'Result', 'Condition'],
        correct: 0,
        explication: '"Despite" introduces a concession: something happens in spite of an opposing factor.'
      },
      {
        id: 5,
        question: 'The plural of "phenomenon" is:',
        options: ['phenomena', 'phenomenons', 'phenomenas', 'phenomenen'],
        correct: 0,
        explication: '"Phenomenon" has a Greek origin. Its plural follows Greek rules: phenomena.'
      },
      {
        id: 6,
        question: 'Choose the correct reported speech: He said "I am happy" → He said that:',
        options: ['he was happy', 'he is happy', 'he were happy', 'he has been happy'],
        correct: 0,
        explication: 'Backshift in reported speech: present simple → past simple. "am" → "was".'
      },
      {
        id: 7,
        question: '"The book ___ by Chinua Achebe" — Complete with the correct passive:',
        options: ['was written', 'was wrote', 'is wrote', 'wrote'],
        correct: 0,
        explication: 'Past passive: was/were + past participle. "written" is the past participle of "write".'
      }
    ]
  },

  // ─── ESPAGNOL ─────────────────────────────────────────────────────
  {
    id: 'espagnol-verbos-1',
    subjectId: 'espagnol',
    titre: 'Gramática — Los tiempos verbales',
    difficulte: 'facile',
    duree: 15,
    questions: [
      {
        id: 1,
        question: 'Conjugue "hablar" au présent, 1ère personne du singulier :',
        options: ['Hablo', 'Hablas', 'Habla', 'Hablamos'],
        correct: 0,
        explication: 'Les verbes en -AR : yo hablo, tú hablas, él habla, nosotros hablamos...'
      },
      {
        id: 2,
        question: '"¿Cómo ___ tú?" (estar) :',
        options: ['estás', 'eres', 'está', 'soy'],
        correct: 0,
        explication: 'Estar pour les états temporaires. "¿Cómo estás?" = Comment vas-tu ? (tú estás)'
      },
      {
        id: 3,
        question: 'La différence entre "ser" et "estar" :',
        options: ['Ser = caractéristiques permanentes, Estar = états temporaires', 'Ser = lieu, Estar = origine', 'Ils sont synonymes', 'Ser = pluriel, Estar = singulier'],
        correct: 0,
        explication: 'Ser : origine, profession, caractère (permanent). Estar : humeur, lieu, état (temporaire).'
      },
      {
        id: 4,
        question: 'Le prétérit indéfini de "ir" à la 3ème personne du pluriel est :',
        options: ['fueron', 'iban', 'van', 'irán'],
        correct: 0,
        explication: 'Ir au prétérit indéfini : fui, fuiste, fue, fuimos, fuisteis, fueron (irrégulier, identique à ser).'
      },
      {
        id: 5,
        question: '"Quiero que tú ___ la verdad." (decir - subjonctif) :',
        options: ['digas', 'dices', 'decir', 'dijeras'],
        correct: 0,
        explication: 'Après "querer que", le subjonctif présent s\'impose. "Decir" au subjonctif : diga, digas, diga...'
      }
    ]
  }
]

export const getQuizzesBySubject = (subjectId) =>
  QUIZZES.filter(q => q.subjectId === subjectId)

export const getQuiz = (id) => QUIZZES.find(q => q.id === id)

export const DIFFICULTE_COLORS = {
  facile: 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400',
  moyen: 'text-amber-600 bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400',
  difficile: 'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400'
}
