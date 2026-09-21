// ═══════════════════════════════════════════════════════════════════════════════
// TUTEURIA — CATALOGUE COMPLET DES MATIÈRES ET COURS PÉDAGOGIQUES
// BACCALAURÉAT (SOUS-SYSTÈME FRANCOPHONE) & GCE A-LEVEL (ANGLOPHONE SUBSYSTEM)
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
    "description": "Algèbre, analyse réelle, géométrie vectorielle et probabilités pour le Baccalauréat scientifique et technique (Séries C, D, TI).",
    "chapitres": [
      {
        "id": "algebre-polynomes",
        "titre": "Algèbre & Équations du Second Degré",
        "icon": "∑",
        "lecons": [
          {
            "id": "second-degre",
            "titre": "Résolution, Discriminant et Relations de Viète",
            "duree": "50 min",
            "contenu": "# Équations et Inéquations du Second Degré\n\n## I. Définition et Forme Canonique\n\n> Soit le trinôme du second degré P(x) = ax² + bx + c, où a, b, c sont des réels et a ≠ 0.\n\nPour tout réel x, la forme canonique s'écrit :\nP(x) = a [ (x + b / (2a))² - (b² - 4ac) / (4a²) ]\nLe discriminant est Δ = b² - 4ac.\n\n---\n\n## II. Discussion selon le signe du Discriminant\n\n- **Si Δ > 0** : Deux racines réelles distinctes :\n  x₁ = (-b - √Δ) / (2a)   et   x₂ = (-b + √Δ) / (2a)\n  Forme factorisée : P(x) = a(x - x₁)(x - x₂)\n\n- **Si Δ = 0** : Une racine réelle double :\n  x₀ = -b / (2a)\n  Forme factorisée : P(x) = a(x - x₀)²\n\n- **Si Δ < 0** : Aucune racine dans ℝ. Le trinôme garde le signe constant de a pour tout x réel.\n\n---\n\n## III. Relations de Viète (Somme et Produit)\n\nSi le trinôme admet deux racines x₁ et x₂, alors :\n- S = x₁ + x₂ = -b/a\n- P = x₁ · x₂ = c/a\n\n!! Deux nombres dont la somme vaut S et le produit vaut P sont les solutions de l'équation :\nX² - S·X + P = 0\n\n---\n\n## IV. Exemple Résolu Type Bac\n\n**Énoncé :** Résoudre dans ℝ l'équation 2x² - 7x + 3 = 0.\n1. Calcul du discriminant : Δ = (-7)² - 4(2)(3) = 49 - 24 = 25 = 5².\n2. Comme Δ > 0, deux solutions distinctes :\n   - x₁ = (7 - 5) / 4 = 2/4 = 1/2\n   - x₂ = (7 + 5) / 4 = 12/4 = 3\n3. Ensemble solution : S = {1/2 ; 3}. Forme factorisée : (2x - 1)(x - 3)."
          },
          {
            "id": "nombres-complexes",
            "titre": "Nombres Complexes et Géométrie du Plan",
            "duree": "60 min",
            "contenu": "# Nombres Complexes et Applications Géométriques\n\n## I. Forme Algébrique et Conjugué\n\n> L'ensemble ℂ des nombres complexes prolonge ℝ avec le nombre imaginaire i vérifiant i² = -1.\nTout nombre complexe s'écrit z = a + ib, avec a, b ∈ ℝ.\n- a = Re(z) est la partie réelle.\n- b = Im(z) est la partie imaginaire.\n- Le conjugué de z est z̄ = a - ib.\n\n---\n\n## II. Module et Argument\n\nPour z = a + ib ≠ 0 :\n- **Module :** |z| = √(a² + b²) = √(z · z̄)\n- **Argument :** θ = arg(z) [2π] tel que cos(θ) = a/|z| et sin(θ) = b/|z|\n\nForme trigonométrique et exponentielle :\nz = |z|(cos θ + i sin θ) = |z| e^(iθ)\n\n---\n\n## III. Interprétation Géométrique\n\nSoient les points A(zA), B(zB) et C(zC) dans le plan muni d'un repère orthonormé direct :\n- Affixe du vecteur AB : z_AB = zB - zA\n- Distance AB = |zB - zA|\n- Angle de vecteurs : (u, AB) = arg(zB - zA) [2π]\n\n!! **Propriétés géométriques fondamentales :**\n- Les points A, B, C sont alignés ssi (zC - zA) / (zB - zA) ∈ ℝ.\n- Le triangle ABC est rectangle en A ssi (zC - zA) / (zB - zA) est un imaginaire pur (partie réelle nulle)."
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
    "description": "Mécanique du point, oscillateurs, électrostatique, circuits électriques RLC et transferts d'énergie pour le Baccalauréat.",
    "chapitres": [
      {
        "id": "mecanique-point",
        "titre": "Cinématique et Dynamique Newtonienne",
        "icon": "⚙️",
        "lecons": [
          {
            "id": "lois-newton",
            "titre": "Les 3 Lois de Newton et Mouvement dans un Champ de Pesanteur",
            "duree": "55 min",
            "contenu": "# Lois de Newton et Balistique\n\n## I. Les Lois Fondamentales de la Dynamique\n\n### 1ère Loi : Principe d'Inertie\n> Dans un référentiel galiléen, si la somme vectorielle des forces extérieures appliquées à un solide est nulle, le solide est immobile ou en mouvement rectiligne uniforme : Σ F_ext = 0 ⇔ v_G = cste.\n\n### 2ème Loi : Principe Fondamental de la Dynamique (PFD)\nDans un référentiel galiléen, la résultante des forces extérieures est égale à la dérivée temporelle de la quantité de mouvement :\nΣ F_ext = m · a_G\n\n### 3ème Loi : Principe des Actions Réciproques\nLorsque deux corps A et B interagissent :\nF_(A/B) = - F_(B/A)\n\n---\n\n## II. Mouvement d'un Projectile dans le Champ de Pesanteur\n\nSoit un solide lancé avec une vitesse v₀ sous un angle α avec l'horizontale. En négligeant les frottements de l'air :\n- Accélération : ax = 0, ay = -g\n- Vitesse : vx(t) = v₀ cos(α), vy(t) = -gt + v₀ sin(α)\n- Équations horaires : x(t) = (v₀ cos α) t, y(t) = -1/2 g t² + (v₀ sin α) t\n\nÉquation de la trajectoire :\ny(x) = - [g / (2 v₀² cos² α)] x² + x tan(α)\nLa trajectoire est un arc de parabole situé dans le plan vertical."
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
    "description": "Cinétique chimique, équilibres acido-basiques, pH et synthèse organique pour les épreuves du Baccalauréat.",
    "chapitres": [
      {
        "id": "solutions-acide-base",
        "titre": "Solutions Aqueuses & Équilibres Acido-Basiques",
        "icon": "💧",
        "lecons": [
          {
            "id": "ph-titrages",
            "titre": "Constante d'acidité Ka, pH et Titrages Acido-Basiques",
            "duree": "50 min",
            "contenu": "# Acides, Bases et Mesure du pH\n\n## I. Définition de Brönsted et Couples Acide/Base\n\n- Un **acide** est une espèce chimique capable de céder un ou plusieurs protons H⁺.\n- Une **base** est une espèce chimique capable de capter un ou plusieurs protons H⁺.\nCouple HA / A⁻ : HA ⇌ A⁻ + H⁺\n\n---\n\n## II. Échelle de pH et Produit Ionique de l'Eau\n\nÀ 25°C, l'autoprotolyse de l'eau est caractérisée par :\nKe = [H₃O⁺][HO⁻] = 10⁻¹⁴  ⇒  pKe = 14\n\nPar définition :\npH = -log[H₃O⁺]  ⇔  [H₃O⁺] = 10^(-pH)\n\n---\n\n## III. Constante d'Acidité Ka et Henderson-Hasselbalch\n\nPour un acide faible en solution :\nKa = ([A⁻][H₃O⁺]) / [HA],   pKa = -log(Ka)\npH = pKa + log([A⁻] / [HA])\n\n- Si pH < pKa : L'acide HA prédomine.\n- Si pH = pKa : [HA] = [A⁻] (demi-équivalence).\n- Si pH > pKa : La base A⁻ prédomine."
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
    "description": "Génétique mendélienne, système immunitaire, géologie et écosystèmes forestiers du bassin du Congo.",
    "chapitres": [
      {
        "id": "genetique-humaine",
        "titre": "Génétique Mendélienne & Santé",
        "icon": "🧬",
        "lecons": [
          {
            "id": "drepanocytose-etude",
            "titre": "Transmission des Caractères Héréditaires : Cas de la Drépanocytose",
            "duree": "50 min",
            "contenu": "# Génétique et Hérédité Humaine\n\n## I. Les Lois de Mendel en Monohybridisme\n\n1. **Loi d'uniformité des hybrides de F1 :** Le croisement de deux lignées pures donne une génération F1 100% homogène.\n2. **Loi de ségrégation des allèles :** Lors de la formation des gamètes, les allèles se séparent équitablement. En F2, on observe le ratio phénotypique 3/4 dominant et 1/4 récessif.\n\n---\n\n## II. Étude Contextuelle : La Drépanocytose en Afrique\n\n!! La drépanocytose (anémie falciforme) est une maladie autosomique récessive très répandue en Afrique subsaharienne.\n- Allèle A : normal (hémoglobine HbA)\n- Allèle S : muté (hémoglobine HbS, hématies déformées en faucille)\n\n### Analyse des Descendants de Parents Porteurs Sains (AS × AS)\n- 25% de probabilité d'avoir un enfant sain homozygote (AA)\n- 50% de probabilité d'avoir un enfant porteur sain résistant au paludisme (AS)\n- 25% de probabilité d'avoir un enfant drépanocytaire atteint de la forme grave (SS)"
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
    "description": "Histoire contemporaine du Cameroun (de 1884 à la réunification de 1961), décolonisation et relations internationales.",
    "chapitres": [
      {
        "id": "cameroun-contemporain",
        "titre": "De la Colonisation à la Réunification",
        "icon": "🇨🇲",
        "lecons": [
          {
            "id": "upc-reunification",
            "titre": "Le Nationalisme Camerounais, l'UPC et la Réunification de 1961",
            "duree": "60 min",
            "contenu": "# Le Mouvement Nationaliste et la Réunification du Cameroun\n\n## I. La Tutelle Internationale et la Naissance de l'UPC\n\nPartagé en 1916 entre la France et la Grande-Bretagne, le Cameroun devient un territoire sous tutelle de l'ONU en 1946.\nLe **10 avril 1948**, l'Union des Populations du Cameroun (UPC) est fondée à Douala sous la direction de :\n- **Ruben Um Nyobè** (Secrétaire Général, le 'Mpodol')\n- **Félix Moumié**\n- **Ernest Ouandié**\n\nRevendications majeures : la réunification des deux Cameroun et l'indépendance nationale immédiate.\n\n---\n\n## II. La Proclamation de l'Indépendance et le Plébiscite\n\n- Le **1er janvier 1960**, le Cameroun sous tutelle française devient indépendant avec Ahmadou Ahidjo comme chef de l'État.\n- Le **11 février 1961**, le plébiscite de l'ONU permet au Southern Cameroons britannique de choisir à une écrasante majorité l'union avec la République du Cameroun.\n- La **Conférence de Foumban** (juillet 1961) fixe les bases de l'État fédéral.\n- Le **1er octobre 1961**, la République Fédérale du Cameroun voit officiellement le jour."
          }
        ]
      }
    ]
  },
  {
    "id": "geographie",
    "nom": "Géographie",
    "icon": "🌍",
    "couleur": "from-cyan-600 to-blue-800",
    "couleurLight": "bg-cyan-50 text-cyan-700 border-cyan-200",
    "couleurDark": "dark:bg-cyan-900/20 dark:text-cyan-300 dark:border-cyan-800",
    "niveaux": [
      "Bac"
    ],
    "description": "Géographie physique et économique du Cameroun, bassins fluviaux, ressources agro-industrielles et intégration CEMAC.",
    "chapitres": [
      {
        "id": "espace-camerounais",
        "titre": "Espaces et Économie du Cameroun",
        "icon": "🗺️",
        "lecons": [
          {
            "id": "reliefs-climats-cameroun",
            "titre": "Reliefs, Domaines Climatiques et Bassin de la Sanaga",
            "duree": "50 min",
            "contenu": "# Le Milieu Physique du Cameroun\n\n## I. Les Grands Ensembles de Relief\n\nLe Cameroun est qualifié d'Afrique en miniature en raison de ses contrastes :\n1. **Les Basses Terres Côtières :** Littoral sédimentaire bordant l'Océan Atlantique.\n2. **Le Plateau Sud-Camerounais et l'Adamaoua :** Régions de hauts plateaux de 600 à 1 100 m d'altitude.\n3. **La Ligne Volcanique du Cameroun :** Chaîne de massifs volcaniques culminant au **Mont Cameroun (4 095 m)**, plus haut sommet d'Afrique centrale.\n\n---\n\n## II. Hydrographie et Énergie\n\nLe fleuve **Sanaga** (918 km) est l'artère maîtresse du pays. Il alimente les grands barrages hydroélectriques nationaux (Édéa, Song Loulou, Nachtigal), moteurs du développement industriel."
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
    "description": "Méthodologie de la dissertation, commentaire de texte et chefs-d'œuvre de la littérature négro-africaine.",
    "chapitres": [
      {
        "id": "roman-africain",
        "titre": "Le Roman Africain d'Engagement",
        "icon": "✍️",
        "lecons": [
          {
            "id": "beti-oyono",
            "titre": "La Satire Anticoloniale : Ferdinand Oyono et Mongo Beti",
            "duree": "55 min",
            "contenu": "# Le Roman Africain de Protestation\n\n## I. L'Ironie Tragique de Ferdinand Oyono\n\nDans *Une vie de boy* (1956), à travers le journal intime de Toundi Joseph, Ferdinand Oyono démonte les faux-semblants de l'ordre colonial. Le boy observe les faiblesses morales des maîtres blancs, brisant le mythe de la supériorité coloniale.\n\n---\n\n## II. Mongo Beti et la Dénonciation de l'Alliance Colon-Église\n\nDans *Le pauvre Christ de Bomba* (1956), Mongo Beti dépeint l'échec cuisant de l'évangélisation missionnaire en pays Tala et démontre la complicité institutionnelle entre l'administration coloniale et les institutions ecclésiales."
          }
        ]
      }
    ]
  },
  {
    "id": "philosophie",
    "nom": "Philosophie",
    "icon": "🧠",
    "couleur": "from-violet-700 to-purple-900",
    "couleurLight": "bg-violet-50 text-violet-700 border-violet-200",
    "couleurDark": "dark:bg-violet-900/20 dark:text-violet-300 dark:border-violet-800",
    "niveaux": [
      "Bac"
    ],
    "description": "La conscience, la liberté, la politique, et les débats fondamentaux sur la philosophie africaine critique.",
    "chapitres": [
      {
        "id": "philo-africaine",
        "titre": "La Philosophie Africaine et le Développement",
        "icon": "💡",
        "lecons": [
          {
            "id": "critique-ethnophilo",
            "titre": "Marcien Towa et la Critique de l'Ethnophilosophie",
            "duree": "55 min",
            "contenu": "# La Pensée Philosophique Africaine\n\n## I. La Querelle de l'Ethnophilosophie\n\nÀ la suite de *La Philosophie bantoue* de Placide Tempels, des auteurs ont cherché la pensée africaine dans les proverbes et contes traditionnels.\n\n---\n\n## II. L'Exigence Critique selon Marcien Towa\n\nDans son *Essai sur la problématique philosophique dans l'Afrique actuelle* (1971), le philosophe camerounais **Marcien Towa** réfute vigoureusement cette approche :\n- La philosophie n'est pas un consensus culturel inconscient.\n- Elle est une démarche personnelle, rigoureuse et critique.\n- L'Afrique doit soumettre sa tradition à une critique constructive pour s'approprier les sciences et technologies nécessaires à son réel affranchissement."
          }
        ]
      }
    ]
  },
  {
    "id": "informatique",
    "nom": "Informatique",
    "icon": "💻",
    "couleur": "from-slate-700 to-cyan-900",
    "couleurLight": "bg-slate-50 text-slate-700 border-slate-200",
    "couleurDark": "dark:bg-slate-900/20 dark:text-slate-300 dark:border-slate-800",
    "niveaux": [
      "Bac"
    ],
    "description": "Algorithmique fondamentale, structures conditionnelles et itératives, bases de données et réseaux.",
    "chapitres": [
      {
        "id": "algo-prog",
        "titre": "Algorithmique & Structures de Données",
        "icon": "⚙️",
        "lecons": [
          {
            "id": "boucles-tableaux",
            "titre": "Structures Conditionnelles, Boucles et Tableaux",
            "duree": "50 min",
            "contenu": "# Algorithmique et Logique de Programmation\n\n## I. Les Structures de Contrôle\n\nUn algorithme s'articule autour de trois structures majeures :\n1. **La séquence :** Exécution séquentielle des instructions.\n2. **L'alternative (Si ... Alors ... Sinon) :** Branchement conditionnel basé sur une expression booléenne.\n3. **La répétition :**\n   - Boucle *Pour* : lorsque le nombre d'itérations est déterminé à l'avance.\n   - Boucle *Tant Que* : itération soumise à une condition préalable."
          }
        ]
      }
    ]
  },
  {
    "id": "gce-maths",
    "nom": "Pure Mathematics with Mechanics",
    "icon": "📐",
    "couleur": "from-blue-700 to-indigo-950",
    "couleurLight": "bg-blue-50 text-blue-800 border-blue-200",
    "couleurDark": "dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-700",
    "niveaux": [
      "GCE"
    ],
    "description": "Calculus, differential equations, vectors, coordinate geometry, statics and dynamics for Cameroon GCE A-Level.",
    "chapitres": [
      {
        "id": "gce-diff-calc",
        "titre": "Differentiation & Integration Techniques",
        "icon": "∫",
        "lecons": [
          {
            "id": "gce-differentiation-rules",
            "titre": "Product Rule, Quotient Rule and Implicit Differentiation",
            "duree": "60 min",
            "contenu": "# Advanced Differentiation for GCE A-Level\n\n## I. Product and Quotient Rules\n\nLet u and v be differentiable functions of x:\n- **Product Rule:** d/dx[u · v] = u (dv/dx) + v (du/dx)\n- **Quotient Rule:** d/dx[u / v] = [v (du/dx) - u (dv/dx)] / v²\n- **Chain Rule:** dy/dx = (dy/du) · (du/dx)\n\n---\n\n## II. Implicit Differentiation\n\nWhen given an equation relating x and y implicitly such as x³ + 2xy + y² = 9 :\n1. Differentiate each term with respect to x applying the product and chain rules.\n2. Collect all dy/dx terms on one side.\n3. Solve for dy/dx:\n   3x² + 2(y + x dy/dx) + 2y dy/dx = 0\n   dy/dx (2x + 2y) = -(3x² + 2y)\n   dy/dx = - (3x² + 2y) / (2x + 2y)\n\n---\n\n## III. Stationary Points\n\n- Stationary points occur where dy/dx = 0.\n- If d²y/dx² < 0, the stationary point is a local maximum.\n- If d²y/dx² > 0, the stationary point is a local minimum."
          }
        ]
      }
    ]
  },
  {
    "id": "gce-physics",
    "nom": "Physics (A-Level)",
    "icon": "⚡",
    "couleur": "from-amber-600 to-red-700",
    "couleurLight": "bg-amber-50 text-amber-800 border-amber-200",
    "couleurDark": "dark:bg-amber-900/30 dark:text-amber-200 dark:border-amber-700",
    "niveaux": [
      "GCE"
    ],
    "description": "Newtonian mechanics, wave superposition, electricity, magnetism, fields, and quantum physics for the Cameroon GCE Board.",
    "chapitres": [
      {
        "id": "gce-superposition-waves",
        "titre": "Wave Phenomena & Superposition",
        "icon": "〰️",
        "lecons": [
          {
            "id": "gce-youngs-experiment",
            "titre": "Interference, Coherence and Young's Double Slit",
            "duree": "55 min",
            "contenu": "# Wave Motion and Optical Interference\n\n## I. The Principle of Superposition\n\n> When two or more waves meet at a point in space, the resultant displacement is the vector sum of the displacements of the individual waves.\n\n### Conditions for Observable Interference Fringes\n1. **Coherence:** Constant phase difference and equal frequencies.\n2. Similar amplitudes for high contrast between bright and dark fringes.\n\n---\n\n## II. Young's Double-Slit Experiment\n\nThe fringe separation y between adjacent bright or dark fringes on a distant screen is:\ny = (λ · D) / d\n\nWhere:\n- λ is the wavelength of monochromatic light\n- D is the slit-to-screen distance\n- d is the separation between the two coherent slits"
          }
        ]
      }
    ]
  },
  {
    "id": "gce-chemistry",
    "nom": "Chemistry (A-Level)",
    "icon": "🧪",
    "couleur": "from-teal-600 to-cyan-800",
    "couleurLight": "bg-teal-50 text-teal-800 border-teal-200",
    "couleurDark": "dark:bg-teal-900/30 dark:text-teal-200 dark:border-teal-700",
    "niveaux": [
      "GCE"
    ],
    "description": "Chemical energetics, reaction kinetics, chemical equilibria, and organic reaction mechanisms for GCE A-Level.",
    "chapitres": [
      {
        "id": "gce-org-mechanisms",
        "titre": "Organic Reaction Mechanisms",
        "icon": "⚗️",
        "lecons": [
          {
            "id": "gce-sn1-sn2",
            "titre": "Nucleophilic Substitution: SN1 vs SN2 in Halogenoalkanes",
            "duree": "60 min",
            "contenu": "# Nucleophilic Substitution in Halogenoalkanes\n\n## I. The SN2 Mechanism (Bimolecular)\n\n- Rate = k [R-X] [Nu⁻]\n- Single concerted step with simultaneous backside attack by nucleophile and departure of the leaving group.\n- Results in inversion of configuration (Walden inversion).\n- Predominantly favoured by primary (1°) halogenoalkanes due to minimal steric hindrance.\n\n---\n\n## II. The SN1 Mechanism (Unimolecular)\n\n- Rate = k [R-X] (first order kinetics).\n- Two-step process involving a planar carbocation intermediate.\n- Produces a racemic mixture when attacking a chiral center.\n- Predominantly favoured by tertiary (3°) halogenoalkanes due to stability of the tertiary carbocation."
          }
        ]
      }
    ]
  },
  {
    "id": "gce-biology",
    "nom": "Biology (A-Level)",
    "icon": "🔬",
    "couleur": "from-emerald-600 to-green-800",
    "couleurLight": "bg-emerald-50 text-emerald-800 border-emerald-200",
    "couleurDark": "dark:bg-emerald-900/30 dark:text-emerald-200 dark:border-emerald-700",
    "niveaux": [
      "GCE"
    ],
    "description": "Cell biology, molecular genetics, protein synthesis, transport systems, and tropical ecology for Cameroon GCE A-Level.",
    "chapitres": [
      {
        "id": "gce-mol-genetics",
        "titre": "Molecular Genetics & DNA Replication",
        "icon": "🧬",
        "lecons": [
          {
            "id": "gce-dna-synthesis",
            "titre": "DNA Structure and Semi-Conservative Replication",
            "duree": "60 min",
            "contenu": "# Molecular Genetics: DNA Replication and Protein Synthesis\n\n## I. DNA Double Helix Structure\n\n- Antiparallel double-stranded polynucleotide.\n- Complementary base pairing: Adenine with Thymine (2 hydrogen bonds), Guanine with Cytosine (3 hydrogen bonds).\n\n---\n\n## II. Semi-Conservative Replication\n\n1. **DNA Helicase:** Unwinds and breaks hydrogen bonds between bases.\n2. **DNA Polymerase:** Catalyses the addition of nucleotides in the 5' to 3' direction.\n3. The leading strand is synthesized continuously; the lagging strand is synthesized discontinuously as Okazaki fragments, joined by DNA Ligase."
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
    "description": "Cameroon History from the 1884 German annexation to post-independence, and 20th century World Affairs for GCE A-Level.",
    "chapitres": [
      {
        "id": "gce-cameroon-1884-1961",
        "titre": "Cameroon History 1884–1961",
        "icon": "🏛️",
        "lecons": [
          {
            "id": "gce-treaty-plebiscite",
            "titre": "The Germano-Duala Treaty (1884) and the 1961 Plebiscite",
            "duree": "60 min",
            "contenu": "# Modern History of Cameroon\n\n## I. The Germano-Duala Treaty of July 1884\n\nOn July 12, 1884, Dr. Gustav Nachtigal on behalf of the German Empire signed the historic treaty with King Bell and King Akwa, establishing the German Protectorate of Kamerun and outmanoeuvring British Consul Edward Hewett.\n\n---\n\n## II. The UN Plebiscite of February 11, 1961\n\nFollowing the League of Nations and UN Trusteeship division after WWI:\n- Southern Cameroons voted by an overwhelming majority (233,571 to 97,741) to achieve independence by joining the independent Republic of Cameroun.\n- The Foumban Constitutional Conference in July 1961 established the Federal Republic of Cameroon on October 1, 1961."
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
    "description": "Price theory, market structures, inflation, balance of payments, and development policies for African economies.",
    "chapitres": [
      {
        "id": "gce-macro-policy",
        "titre": "Macroeconomic Indicators & Policies",
        "icon": "📊",
        "lecons": [
          {
            "id": "gce-inflation-bop",
            "titre": "Inflation and Balance of Payments Adjustment",
            "duree": "55 min",
            "contenu": "# Macroeconomic Principles: Inflation and External Balance\n\n## I. Demand-Pull vs Cost-Push Inflation\n\n- **Demand-Pull Inflation:** Caused by aggregate demand exceeding full employment output capacity (AD > AS).\n- **Cost-Push Inflation:** Triggered by rising costs of factors of production (wages, raw materials, imported energy).\n\n---\n\n## II. The Balance of Payments (BOP)\n\nRecords economic transactions between residents of a country and the rest of the world.\n- Current Account: Trade balance in goods and services, primary and secondary income.\n- Corrective policies for developing countries: Currency devaluation, expenditure-switching policies and export diversification."
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
    "description": "Data representation, algorithms, complexity, relational databases, and computer networking for GCE A-Level.",
    "chapitres": [
      {
        "id": "gce-algo-complexity",
        "titre": "Algorithms & Database Systems",
        "icon": "🔀",
        "lecons": [
          {
            "id": "gce-sorting-bigo",
            "titre": "Searching, Sorting Algorithms and Big-O Complexity",
            "duree": "55 min",
            "contenu": "# Algorithms and Complexity\n\n## I. Searching Algorithms\n\n- **Linear Search:** Checks items sequentially. Complexity: O(n).\n- **Binary Search:** Requires a sorted dataset. Repeatedly halves the search space. Complexity: O(log n).\n\n---\n\n## II. Sorting Algorithms\n\n- **Bubble Sort:** O(n²) average and worst-case time complexity.\n- **Merge Sort:** Divide-and-conquer algorithm with guaranteed O(n log n) time complexity in all cases.\n\n---\n\n## III. Relational Database Normalization\n\n- 1NF: Atomic values, no repeating groups.\n- 2NF: In 1NF and no partial dependencies on composite keys.\n- 3NF: In 2NF and no transitive dependencies."
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
