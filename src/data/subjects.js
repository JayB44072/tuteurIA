export const SUBJECTS = [
  {
    id: 'mathematiques',
    nom: 'Mathématiques',
    icon: '📐',
    couleur: 'from-blue-500 to-blue-700',
    couleurLight: 'bg-blue-50 text-blue-700 border-blue-200',
    couleurDark: 'dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800',
    niveaux: ['Bac', 'GCE'],
    description: 'Algèbre, géométrie, analyse et probabilités pour maîtriser les mathématiques du secondaire.',
    chapitres: [
      {
        id: 'algebre',
        titre: 'Algèbre',
        icon: '∑',
        lecons: [
          {
            id: 'equations',
            titre: 'Équations et inéquations',
            duree: '45 min',
            contenu: `# Équations et Inéquations

## I. Équations du premier degré

> Une équation du premier degré à une inconnue est une égalité de la forme **ax + b = 0**, où *a* et *b* sont des réels et *a ≠ 0*.

### Méthode de résolution

Pour résoudre ax + b = 0 :
1. Transposer le terme constant : ax = −b
2. Diviser les deux membres par a : x = −b/a

**Exemple résolu :**
\`\`\`
  3x + 6 = 0
  3x = −6
  x = −6/3 = −2
\`\`\`

!! Vérification : substituer x = −2 dans l'équation : 3(−2) + 6 = −6 + 6 = 0 ✓

---

## II. Inéquations du premier degré

### Règles fondamentales

- Ajouter ou soustraire un même nombre des deux membres **conserve** l'inégalité.
- Multiplier ou diviser par un nombre **positif** conserve l'inégalité.
- Multiplier ou diviser par un nombre **négatif** **inverse** le sens de l'inégalité.

!! La règle d'inversion du signe est la source d'erreur la plus fréquente. Ne jamais l'oublier !

**Exemple :** Résoudre −2x + 4 > 0
\`\`\`
  −2x + 4 > 0
  −2x > −4
  x < 2   ← signe inversé car on divise par −2
\`\`\`

---

## III. Équations du second degré

> L'équation du second degré **ax² + bx + c = 0** (a ≠ 0) se résout grâce au **discriminant** Δ = b² − 4ac.

### Tableau de résolution

- **Δ > 0** → Deux solutions distinctes : x₁ = (−b − √Δ)/2a  et  x₂ = (−b + √Δ)/2a
- **Δ = 0** → Une solution double : x = −b/2a
- **Δ < 0** → Aucune solution réelle

### Exemple complet
\`\`\`
  x² − 5x + 6 = 0
  a = 1,  b = −5,  c = 6
  Δ = (−5)² − 4×1×6 = 25 − 24 = 1
  x₁ = (5 − 1)/2 = 2
  x₂ = (5 + 1)/2 = 3
\`\`\`

**Vérification par factorisation :** x² − 5x + 6 = (x − 2)(x − 3) ✓`
          },
          {
            id: 'polynomes',
            titre: 'Polynômes et factorisation',
            duree: '50 min',
            contenu: `# Polynômes et Factorisation

## I. Définition

> Un **polynôme** de degré n en x est une expression de la forme :
> P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ··· + a₁x + a₀,  avec aₙ ≠ 0.

Le **degré** d'un polynôme est le plus grand exposant de x ayant un coefficient non nul.

---

## II. Identités remarquables

Ces formules doivent être **mémorisées absolument** car elles sont omniprésentes :

> **(a + b)² = a² + 2ab + b²** — Carré d'une somme
> **(a − b)² = a² − 2ab + b²** — Carré d'une différence
> **(a + b)(a − b) = a² − b²** — Produit de la somme par la différence

### Démonstration de (a + b)²
\`\`\`
  (a + b)² = (a + b)(a + b)
           = a² + ab + ba + b²
           = a² + 2ab + b²  ✓
\`\`\`

---

## III. Techniques de factorisation

### 1. Mise en facteur commun

Repérer un facteur commun à tous les termes :
\`\`\`
  6x³ − 4x² + 2x = 2x(3x² − 2x + 1)
\`\`\`

### 2. Utiliser les identités remarquables

\`\`\`
  x² − 9 = x² − 3² = (x − 3)(x + 3)
  4x² + 12x + 9 = (2x + 3)²
\`\`\`

### 3. Factorisation par le discriminant

\`\`\`
  x² − 5x + 6  →  Δ = 25 − 24 = 1
  x₁ = 2,  x₂ = 3
  x² − 5x + 6 = (x − 2)(x − 3)
\`\`\`

!! Pour factoriser un trinôme ax² + bx + c, calculer toujours le discriminant en premier.`
          }
        ]
      },
      {
        id: 'geometrie',
        titre: 'Géométrie',
        icon: '△',
        lecons: [
          {
            id: 'vecteurs',
            titre: 'Vecteurs dans le plan',
            duree: '40 min',
            contenu: `## Vecteurs dans le plan

Un vecteur est défini par sa **direction**, son **sens** et sa **norme**.

### Coordonnées d'un vecteur
Si A(x₁, y₁) et B(x₂, y₂), alors :
**AB⃗** = (x₂ - x₁ ; y₂ - y₁)

### Norme d'un vecteur
||AB⃗|| = √((x₂-x₁)² + (y₂-y₁)²)

### Opérations
**Addition :** u⃗(a,b) + v⃗(c,d) = (a+c ; b+d)
**Produit scalaire :** u⃗·v⃗ = ac + bd

### Colinéarité
u⃗(a,b) et v⃗(c,d) sont colinéaires si et seulement si : ad - bc = 0`
          },
          {
            id: 'trigonometrie',
            titre: 'Trigonométrie',
            duree: '55 min',
            contenu: `## Trigonométrie

### Cercle trigonométrique
Le cercle trigonométrique est un cercle de rayon 1 centré à l'origine.

Pour un angle θ : cos(θ) est l'abscisse, sin(θ) est l'ordonnée.

### Valeurs remarquables
| θ | 0° | 30° | 45° | 60° | 90° |
|---|-----|-----|-----|-----|-----|
| cos | 1 | √3/2 | √2/2 | 1/2 | 0 |
| sin | 0 | 1/2 | √2/2 | √3/2 | 1 |
| tan | 0 | 1/√3 | 1 | √3 | - |

### Formules fondamentales
- sin²(θ) + cos²(θ) = 1
- tan(θ) = sin(θ)/cos(θ)

### Formules d'addition
- cos(a+b) = cos(a)cos(b) - sin(a)sin(b)
- sin(a+b) = sin(a)cos(b) + cos(a)sin(b)`
          }
        ]
      },
      {
        id: 'analyse',
        titre: 'Analyse et Fonctions',
        icon: '∫',
        lecons: [
          {
            id: 'limites',
            titre: 'Limites et continuité',
            duree: '60 min',
            contenu: `## Limites

### Définition intuitive
La limite de f(x) quand x tend vers a est le nombre L vers lequel f(x) se rapproche lorsque x se rapproche de a.

### Limites usuelles
- lim(x→+∞) xⁿ = +∞ (n > 0)
- lim(x→0) sin(x)/x = 1
- lim(x→+∞) (1 + 1/x)ˣ = e

### Opérations sur les limites
Si lim f = L et lim g = M :
- lim(f + g) = L + M
- lim(f × g) = L × M
- lim(f/g) = L/M si M ≠ 0

### Formes indéterminées
- ∞ - ∞
- 0 × ∞
- 0/0
- ∞/∞

Ces formes nécessitent un traitement particulier (factorisation, règle de L'Hôpital...)`
          },
          {
            id: 'derivees',
            titre: 'Dérivées et applications',
            duree: '70 min',
            contenu: `## Dérivées

### Définition
f'(x) = lim(h→0) [f(x+h) - f(x)] / h

### Dérivées usuelles
| f(x) | f'(x) |
|------|-------|
| xⁿ | n·xⁿ⁻¹ |
| √x | 1/(2√x) |
| eˣ | eˣ |
| ln(x) | 1/x |
| sin(x) | cos(x) |
| cos(x) | -sin(x) |

### Règles de dérivation
- (u + v)' = u' + v'
- (ku)' = ku' (k constante)
- (uv)' = u'v + uv'
- (u/v)' = (u'v - uv') / v²
- (g∘f)'(x) = g'(f(x)) × f'(x)

### Applications
**Étude de variations :** f'(x) > 0 → f croissante ; f'(x) < 0 → f décroissante
**Extrema locaux :** f'(a) = 0 et changement de signe`
          }
        ]
      },
      {
        id: 'probabilites',
        titre: 'Probabilités et Statistiques',
        icon: '🎲',
        lecons: [
          {
            id: 'probabilites-base',
            titre: 'Probabilités de base',
            duree: '45 min',
            contenu: `## Probabilités

### Vocabulaire
- **Expérience aléatoire :** expérience dont le résultat est imprévisible
- **Espace fondamental Ω :** ensemble de tous les résultats possibles
- **Événement :** sous-ensemble de Ω
- **Probabilité P(A) :** nombre entre 0 et 1

### Propriétés
- 0 ≤ P(A) ≤ 1
- P(Ω) = 1
- P(Ā) = 1 - P(A)
- P(A ∪ B) = P(A) + P(B) - P(A ∩ B)

### Équiprobabilité
Si Ω a n issues équiprobables :
P(A) = (nombre d'issues favorables à A) / n

### Probabilités conditionnelles
P(A|B) = P(A ∩ B) / P(B)

### Indépendance
A et B sont indépendants si P(A ∩ B) = P(A) × P(B)`
          }
        ]
      },
      {
        id: 'suites',
        titre: 'Suites numériques',
        icon: '∞',
        lecons: [
          {
            id: 'suites-arithmetiques',
            titre: 'Suites arithmétiques et géométriques',
            duree: '50 min',
            contenu: `## Suites numériques

### Suites arithmétiques
Une suite est **arithmétique** si chaque terme s'obtient en ajoutant une constante r (raison) au terme précédent.
- uₙ = u₀ + n·r
- Somme : S = n × (u₁ + uₙ) / 2

### Suites géométriques
Une suite est **géométrique** si chaque terme s'obtient en multipliant le terme précédent par une constante q (raison).
- uₙ = u₀ × qⁿ
- Somme (q ≠ 1) : S = u₀ × (qⁿ - 1) / (q - 1)

### Raisonnement par récurrence
1. **Initialisation :** vérifier la propriété pour n = 0 (ou 1)
2. **Hérédité :** supposer la propriété vraie au rang n, et montrer qu'elle est vraie au rang n+1
3. **Conclusion**`
          }
        ]
      }
    ]
  },
  {
    id: 'physique',
    nom: 'Physique',
    icon: '⚛️',
    couleur: 'from-emerald-500 to-emerald-700',
    couleurLight: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    couleurDark: 'dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800',
    niveaux: ['Bac', 'GCE'],
    description: 'Mécanique, électricité, optique et thermodynamique pour comprendre les lois de l\'univers.',
    chapitres: [
      {
        id: 'mecanique',
        titre: 'Mécanique',
        icon: '🔧',
        lecons: [
          {
            id: 'cinematique',
            titre: 'Cinématique du point matériel',
            duree: '60 min',
            contenu: `## Cinématique

### Mouvement rectiligne uniforme (MRU)
- Vitesse constante : v = constante
- Position : x(t) = x₀ + v·t
- Accélération : a = 0

### Mouvement rectiligne uniformément accéléré (MRUA)
- Accélération constante : a = constante
- Vitesse : v(t) = v₀ + a·t
- Position : x(t) = x₀ + v₀·t + ½a·t²

### Chute libre
Objet en chute libre (sans frottement) :
- a = g = 9,8 m/s² (vers le bas)
- v(t) = gt (en partant du repos)
- h(t) = ½gt²

### Vecteurs cinématiques
- **Position :** OM⃗(x,y,z)
- **Vitesse :** v⃗ = dOM⃗/dt
- **Accélération :** a⃗ = dv⃗/dt`
          },
          {
            id: 'dynamique',
            titre: 'Dynamique - Lois de Newton',
            duree: '55 min',
            contenu: `## Lois de Newton

### 1ère loi (Inertie)
Un corps au repos reste au repos, et un corps en mouvement rectiligne uniforme reste en MRU, tant qu'aucune force extérieure ne s'exerce sur lui.

### 2ème loi (Fondamentale)
**ΣF⃗ = m·a⃗**

La somme des forces est égale à la masse multipliée par l'accélération.

### 3ème loi (Interaction)
Si A exerce une force F⃗ sur B, alors B exerce sur A une force -F⃗ (opposée, même norme, même droite d'action).

### Forces usuelles
- **Poids :** P⃗ = m·g⃗ (vers le bas, g = 9,8 N/kg)
- **Réaction normale :** N⃗ (perpendiculaire au support)
- **Frottement :** f⃗ = μ·N (opposé au mouvement)
- **Tension :** T⃗ (dans le fil, vers le haut)`
          }
        ]
      },
      {
        id: 'electricite',
        titre: 'Électricité',
        icon: '⚡',
        lecons: [
          {
            id: 'circuits',
            titre: 'Circuits électriques',
            duree: '65 min',
            contenu: `## Circuits électriques

### Grandeurs électriques
- **Intensité I :** débit de charges (Ampère, A)
- **Tension U :** différence de potentiel (Volt, V)
- **Résistance R :** opposition au courant (Ohm, Ω)

### Loi d'Ohm
**U = R·I**

### Association de résistances
**En série :** R_eq = R₁ + R₂ + R₃ + ...
**En parallèle :** 1/R_eq = 1/R₁ + 1/R₂ + ...

### Lois de Kirchhoff
**Loi des nœuds :** La somme des courants entrant = somme des courants sortant
**Loi des mailles :** La somme algébrique des tensions dans une maille est nulle

### Puissance électrique
P = U·I = R·I² = U²/R (en Watts)
Énergie : E = P·t (en Joules)`
          }
        ]
      },
      {
        id: 'optique',
        titre: 'Optique',
        icon: '🔭',
        lecons: [
          {
            id: 'reflection',
            titre: 'Réflexion et réfraction',
            duree: '50 min',
            contenu: `## Optique géométrique

### Lois de Snell-Descartes

**Réflexion :**
L'angle d'incidence = l'angle de réflexion (par rapport à la normale)

**Réfraction :**
n₁·sin(θ₁) = n₂·sin(θ₂)

Où n est l'indice de réfraction du milieu.

### Indices de réfraction courants
- Air : n ≈ 1
- Eau : n ≈ 1,33
- Verre : n ≈ 1,5

### Réflexion totale
Se produit quand θ₁ > θ_c (angle critique)
sin(θ_c) = n₂/n₁ (avec n₁ > n₂)

### Lentilles convergentes
**Relation de conjugaison :**
1/v - 1/u = 1/f'

Où : f' = focale, u = distance objet, v = distance image`
          }
        ]
      },
      {
        id: 'thermodynamique',
        titre: 'Thermodynamique',
        icon: '🌡️',
        lecons: [
          {
            id: 'chaleur',
            titre: 'Chaleur et température',
            duree: '45 min',
            contenu: `## Thermodynamique

### Température et chaleur
- **Température :** mesure de l'agitation thermique (Kelvin K, ou Celsius °C)
- T(K) = T(°C) + 273,15

### Capacité calorifique
Q = m·c·ΔT
- Q : quantité de chaleur (J)
- m : masse (kg)
- c : capacité thermique massique (J/kg·K)
- ΔT : variation de température

### Changements d'état
Pendant un changement d'état, la **température reste constante**.
L = m·L_f (chaleur latente)

### Premier principe de la thermodynamique
ΔU = Q + W
- ΔU : variation d'énergie interne
- Q : chaleur reçue
- W : travail reçu`
          }
        ]
      }
    ]
  },
  {
    id: 'chimie',
    nom: 'Chimie',
    icon: '🧪',
    couleur: 'from-amber-500 to-amber-700',
    couleurLight: 'bg-amber-50 text-amber-700 border-amber-200',
    couleurDark: 'dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800',
    niveaux: ['Bac', 'GCE'],
    description: 'Chimie générale, organique et minérale. Maîtrise les transformations de la matière.',
    chapitres: [
      {
        id: 'atome',
        titre: 'Structure de l\'atome',
        icon: '⚛',
        lecons: [
          {
            id: 'modele-atomique',
            titre: 'Modèle atomique et tableau périodique',
            duree: '55 min',
            contenu: `## Structure de l'atome

### Composition de l'atome
- **Noyau :** protons (charge +) et neutrons (neutres)
- **Cortège électronique :** électrons (charge -)

**Numéro atomique Z :** nombre de protons
**Masse atomique A :** Z + N (neutrons)
**Notation :** ᴬ_Z X

### Configuration électronique
Les électrons se répartissent sur des couches K, L, M, N...
- K : 2 électrons max
- L : 8 électrons max
- M : 18 électrons max

### Tableau périodique
**Périodes :** lignes horizontales (même nombre de couches)
**Groupes :** colonnes verticales (même configuration externe → propriétés similaires)

### Ions
- **Cation :** perte d'électrons → charge positive (Na⁺, Ca²⁺)
- **Anion :** gain d'électrons → charge négative (Cl⁻, O²⁻)`
          }
        ]
      },
      {
        id: 'liaisons',
        titre: 'Liaisons chimiques',
        icon: '🔗',
        lecons: [
          {
            id: 'liaison-covalente',
            titre: 'Liaisons covalentes et ioniques',
            duree: '50 min',
            contenu: `## Liaisons chimiques

### Liaison covalente
Partage d'une ou plusieurs paires d'électrons entre deux atomes.
- **Simple :** 1 paire partagée (C-H)
- **Double :** 2 paires partagées (C=O)
- **Triple :** 3 paires partagées (N≡N)

### Règle de l'octet
Les atomes tendent à avoir 8 électrons dans leur couche externe (2 pour H).

### Liaison ionique
Transfert d'électrons entre un métal et un non-métal.
Ex : Na + Cl → Na⁺Cl⁻

### Électronégativité
Capacité d'un atome à attirer les électrons d'une liaison.
Plus l'électronégativité est élevée, plus l'atome attire les électrons.

### Molécules polaires
Si Δχ > 0,4 : liaison polaire → molécule polaire (si asymétrique)`
          }
        ]
      },
      {
        id: 'reactions',
        titre: 'Réactions chimiques',
        icon: '⚗️',
        lecons: [
          {
            id: 'equilibre',
            titre: 'Équilibre et cinétique chimique',
            duree: '60 min',
            contenu: `## Réactions chimiques

### Équation chimique
**Réactifs → Produits**
L'équation doit être équilibrée (conservation des atomes et charges).

### Stœchiométrie
Les coefficients stœchiométriques donnent les proportions molaires.
n = m/M (moles = masse / masse molaire)

### Constante d'équilibre K
Pour aA + bB ⇌ cC + dD :
K = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ

### Facteurs influençant l'équilibre (Le Chatelier)
- **Concentration :** ajout d'un réactif → déplace vers les produits
- **Température :** augmentation → favorise la réaction endothermique
- **Pression :** augmentation → favorise le côté avec moins de moles gazeuses

### Cinétique chimique
**Vitesse de réaction** : dépend de la température, concentration et catalyseur.
**Loi d'Arrhenius :** k = A·e^(-Ea/RT)`
          }
        ]
      },
      {
        id: 'chimie-organique',
        titre: 'Chimie organique',
        icon: '🌿',
        lecons: [
          {
            id: 'hydrocarbures',
            titre: 'Hydrocarbures et groupes fonctionnels',
            duree: '65 min',
            contenu: `## Chimie organique

### Hydrocarbures
Composés contenant uniquement C et H.

**Alcanes :** CₙH₂ₙ₊₂ (liaisons simples)
- Méthane CH₄, Éthane C₂H₆, Propane C₃H₈

**Alcènes :** CₙH₂ₙ (une double liaison)
- Éthylène CH₂=CH₂

**Alcynes :** CₙH₂ₙ₋₂ (une triple liaison)
- Acétylène CH≡CH

### Groupes fonctionnels
| Groupe | Famille | Exemple |
|--------|---------|---------|
| -OH | Alcool | Éthanol C₂H₅OH |
| -COOH | Acide carboxylique | Acide acétique |
| -NH₂ | Amine | Aniline |
| -CHO | Aldéhyde | Formaldéhyde |
| C=O | Cétone | Acétone |

### Isomérie
Molécules de même formule brute mais de structure différente.
- Isomérie de chaîne
- Isomérie de position
- Isomérie de fonction`
          }
        ]
      }
    ]
  },
  {
    id: 'svt',
    nom: 'SVT',
    icon: '🌱',
    couleur: 'from-green-500 to-green-700',
    couleurLight: 'bg-green-50 text-green-700 border-green-200',
    couleurDark: 'dark:bg-green-900/20 dark:text-green-300 dark:border-green-800',
    niveaux: ['Bac'],
    description: 'Sciences de la Vie et de la Terre : biologie cellulaire, génétique, écologie et géologie.',
    chapitres: [
      {
        id: 'cellule',
        titre: 'La cellule',
        icon: '🔬',
        lecons: [
          {
            id: 'structure-cellulaire',
            titre: 'Structure et organisation cellulaire',
            duree: '50 min',
            contenu: `## La cellule

### Définition
La cellule est l'unité structurale et fonctionnelle de tout être vivant.

### Cellule procaryote vs eucaryote
**Procaryote :** sans noyau délimité (bactéries)
**Eucaryote :** avec noyau délimité par une enveloppe nucléaire

### Organites cellulaires
- **Noyau :** contient l'ADN, centre de contrôle
- **Mitochondrie :** production d'énergie (ATP) par respiration
- **Chloroplaste :** photosynthèse (dans les cellules végétales)
- **Réticulum endoplasmique :** synthèse de protéines et lipides
- **Appareil de Golgi :** tri et emballage des protéines
- **Lysosomes :** digestion intracellulaire
- **Vacuole :** stockage (très développée dans les végétaux)
- **Ribosomes :** synthèse des protéines

### Membrane plasmique
Double couche de phospholipides + protéines.
**Propriétés :** semi-perméable, fluidité`
          }
        ]
      },
      {
        id: 'genetique',
        titre: 'Génétique',
        icon: '🧬',
        lecons: [
          {
            id: 'adn',
            titre: 'ADN et expression génétique',
            duree: '70 min',
            contenu: `## Génétique moléculaire

### Structure de l'ADN
Double hélice de nucléotides composés de :
- Sucre (désoxyribose)
- Phosphate
- Base azotée : Adénine (A), Thymine (T), Guanine (G), Cytosine (C)

**Appariement des bases :** A-T et G-C (liens hydrogène)

### Réplication de l'ADN
Semi-conservative : chaque brin sert de matrice.
Enzyme principale : ADN polymérase

### Transcription (ADN → ARN)
Dans le noyau : un brin d'ADN → ARN messager (ARNm)
Enzyme : ARN polymérase

### Traduction (ARNm → Protéine)
Dans le cytoplasme (ribosomes) :
- Codons (triplets de bases) codent des acides aminés
- ARN de transfert (ARNt) amène les acides aminés

### Mutations
**Substitution :** remplacement d'une base
**Délétion :** perte d'une base
**Insertion :** ajout d'une base

Les mutations peuvent être silencieuses, faux-sens ou non-sens.`
          },
          {
            id: 'lois-mendel',
            titre: 'Lois de Mendel et hérédité',
            duree: '65 min',
            contenu: `## Génétique mendélienne

### Vocabulaire
- **Gène :** séquence d'ADN codant un caractère
- **Allèle :** forme alternative d'un gène
- **Locus :** emplacement du gène sur le chromosome
- **Homozygote :** 2 allèles identiques (AA ou aa)
- **Hétérozygote :** 2 allèles différents (Aa)
- **Phénotype :** caractère observable
- **Génotype :** composition allélique

### 1ère loi de Mendel (Uniformité)
En croisant deux lignées pures, tous les hybrides F1 ont le même phénotype.

### 2ème loi de Mendel (Ségrégation)
Les allèles se séparent lors de la formation des gamètes.
Croisement F1 × F1 : 3 dominants : 1 récessif

### Tableau de Punnett
Permet de visualiser les combinaisons alléliques possibles.

| | A | a |
|---|---|---|
| **A** | AA | Aa |
| **a** | Aa | aa |`
          }
        ]
      },
      {
        id: 'ecologie',
        titre: 'Écologie',
        icon: '🌍',
        lecons: [
          {
            id: 'ecosystemes',
            titre: 'Écosystèmes et biodiversité',
            duree: '45 min',
            contenu: `## Écologie

### L'écosystème
Ensemble formé par une biocénose (êtres vivants) et son biotope (milieu physique).

### Niveaux trophiques
1. **Producteurs :** végétaux (photosynthèse)
2. **Consommateurs primaires :** herbivores
3. **Consommateurs secondaires :** carnivores
4. **Décomposeurs :** bactéries, champignons

### Flux d'énergie
L'énergie se perd à chaque niveau (10% transmise en moyenne).

### Cycles biogéochimiques
- **Cycle du carbone :** photosynthèse ↔ respiration ↔ combustion
- **Cycle de l'azote :** fixation → nitrification → dénitrification
- **Cycle de l'eau**

### Biodiversité
3 niveaux : génétique, spécifique, écosystémique.
**Menaces :** déforestation, pollution, espèces invasives, changement climatique`
          }
        ]
      }
    ]
  },
  {
    id: 'histoire',
    nom: 'Histoire',
    icon: '📜',
    couleur: 'from-orange-500 to-orange-700',
    couleurLight: 'bg-orange-50 text-orange-700 border-orange-200',
    couleurDark: 'dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800',
    niveaux: ['Bac', 'GCE'],
    description: 'Histoire mondiale, africaine et locale. De l\'Antiquité à nos jours.',
    chapitres: [
      {
        id: 'afrique-precoloniale',
        titre: 'Afrique précoloniale',
        icon: '🏛️',
        lecons: [
          {
            id: 'grands-empires',
            titre: 'Les grands empires africains',
            duree: '55 min',
            contenu: `## Les grands empires africains

### Empire du Ghana (Ve - XIe siècle)
Premier grand empire d'Afrique de l'Ouest, situé au Sahel.
- Commerce de l'or et du sel
- Capital : Koumbi Saleh
- Déclin : invasion des Almoravides (1076)

### Empire du Mali (XIIIe - XVe siècle)
- Fondateur : Soundiata Keita (1235, bataille de Kirina)
- Apogée sous Mansa Moussa (1312-1337)
- Célèbre pèlerinage à La Mecque (1324) avec 60 000 hommes et 80 chameaux chargés d'or
- Université de Tombouctou (Sankoré)

### Empire Songhaï (XVe - XVIe siècle)
- Fondateur : Sonni Ali Ber
- Apogée sous Askia Mohammed (1493-1528)
- Commerce transsaharien et Islam

### Royaume du Bénin (XIIe - XIXe siècle)
- Situé au Nigeria actuel
- Renommé pour ses bronzes et ivoires
- Organisation administrative avancée

### Royaume du Kongo (XIVe - XIXe siècle)
- Afrique centrale
- Contact avec les Portugais (1483)
- Christianisation et traite des esclaves`
          }
        ]
      },
      {
        id: 'colonisation',
        titre: 'Colonisation et décolonisation',
        icon: '🗺️',
        lecons: [
          {
            id: 'colonisation-afrique',
            titre: 'La colonisation de l\'Afrique',
            duree: '65 min',
            contenu: `## La colonisation de l'Afrique

### Conférence de Berlin (1884-1885)
Partage de l'Afrique entre puissances européennes.
**Participants :** France, Angleterre, Allemagne, Portugal, Belgique, Italie, Espagne...

**Principes :**
- Liberté de commerce dans le bassin du Congo
- Liberté de navigation sur le Congo et le Niger
- Règle de l'effectivité : occupation réelle

### Formes de colonisation
- **Colonisation de peuplement :** Algérie, Kenya, Afrique du Sud
- **Colonisation d'exploitation :** extraction de ressources
- **Administration directe (France) :** assimilation
- **Administration indirecte (Angleterre) :** conservation des structures locales

### Résistances africaines
- Résistance de Samori Touré contre la France (1882-1898)
- Résistance de Béhanzin au Dahomey
- Guerres Zoulou en Afrique du Sud
- Révolte des Maji-Maji en Tanzanie (1905-1907)

### Décolonisation (1945-1975)
**Conférence de Bandung (1955) :** solidarité afro-asiatique
**Ghana :** 1er pays d'Afrique subsaharienne indépendant (6 mars 1957)
**Année africaine (1960) :** 17 pays accèdent à l'indépendance`
          }
        ]
      },
      {
        id: 'guerres-mondiales',
        titre: 'Guerres mondiales',
        icon: '⚔️',
        lecons: [
          {
            id: 'premiere-guerre',
            titre: 'Première Guerre mondiale (1914-1918)',
            duree: '60 min',
            contenu: `## Première Guerre mondiale

### Causes
**MAIN :** Militarisme, Alliances, Impérialisme, Nationalisme

**Étincelle :** Assassinat de l'archiduc François-Ferdinand à Sarajevo (28 juin 1914)

### Camps en présence
**Triple Alliance :** Allemagne, Autriche-Hongrie, Italie
**Triple Entente :** France, Russie, Royaume-Uni

### Déroulement
1914 : Guerre de mouvement → guerre de position (tranchées)
1916 : Batailles de Verdun et de la Somme (boucheries)
1917 : Entrée en guerre des États-Unis ; révolution russe
1918 : Armistice le 11 novembre

### Bilan
- ~18 millions de morts
- Effondrement de 4 empires : ottoman, austro-hongrois, russe, allemand
- Traité de Versailles (1919) : "diktat" pour l'Allemagne

### Participation africaine
- Tirailleurs sénégalais (600 000 soldats africains)
- Porteurs et travailleurs forcés`
          }
        ]
      }
    ]
  },
  {
    id: 'geographie',
    nom: 'Géographie',
    icon: '🌍',
    couleur: 'from-teal-500 to-teal-700',
    couleurLight: 'bg-teal-50 text-teal-700 border-teal-200',
    couleurDark: 'dark:bg-teal-900/20 dark:text-teal-300 dark:border-teal-800',
    niveaux: ['Bac', 'GCE'],
    description: 'Géographie physique, humaine et économique. Cartographie et enjeux du monde contemporain.',
    chapitres: [
      {
        id: 'geographie-physique',
        titre: 'Géographie physique',
        icon: '🏔️',
        lecons: [
          {
            id: 'relief',
            titre: 'Reliefs et formation de la Terre',
            duree: '50 min',
            contenu: `## Géographie physique

### Structure interne de la Terre
- **Croûte terrestre :** 0-70 km (continental) ou 0-10 km (océanique)
- **Manteau :** 70-2900 km (silicates)
- **Noyau externe :** 2900-5100 km (fer liquide)
- **Noyau interne :** 5100-6371 km (fer solide)

### Tectonique des plaques
La lithosphère est divisée en plaques qui se déplacent (~2-10 cm/an).

**Types de frontières :**
- **Divergentes :** les plaques s'écartent (dorsales océaniques)
- **Convergentes :** les plaques se rapprochent (subduction → montagnes)
- **Transformantes :** les plaques glissent l'une contre l'autre

### Séismes et volcans
- **Séismes :** rupture et libération d'énergie le long d'une faille
- **Volcans :** émission de magma (shield, stratovolcan, caldeira)

### Grands ensembles du relief africain
- Bouclier africain (plateau stable)
- Rift africain (fractures de l'est)
- Atlas (nord), Drakensberg (sud)
- Kilimandjaro (5 895 m), plus haut sommet d'Afrique`
          }
        ]
      },
      {
        id: 'geographie-humaine',
        titre: 'Géographie humaine',
        icon: '👥',
        lecons: [
          {
            id: 'population',
            titre: 'Population mondiale et migrations',
            duree: '55 min',
            contenu: `## Population mondiale

### Évolution de la population
- 1 milliard en 1804
- 2 milliards en 1927
- 8 milliards en 2022
- Projection : ~10 milliards en 2050

### Indicateurs démographiques
- **Taux de natalité :** naissances pour 1000 hab/an
- **Taux de mortalité :** décès pour 1000 hab/an
- **Accroissement naturel :** natalité - mortalité
- **Espérance de vie**
- **Taux de fécondité :** enfants par femme

### Transition démographique
1. Natalité élevée, mortalité élevée → stable
2. Mortalité chute (médecine), natalité reste haute → explosion
3. Natalité chute → stabilisation
4. Natalité ≈ mortalité (basse) → vieillissement

### Migrations
**Causes :** économiques, politiques (réfugiés), climatiques, familiales

**Grandes routes migratoires :**
- Afrique → Europe (Méditerranée)
- Amérique centrale → USA
- Asie du Sud-Est → Golfe Persique`
          }
        ]
      }
    ]
  },
  {
    id: 'francais',
    nom: 'Français',
    icon: '✍️',
    couleur: 'from-indigo-500 to-indigo-700',
    couleurLight: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    couleurDark: 'dark:bg-indigo-900/20 dark:text-indigo-300 dark:border-indigo-800',
    niveaux: ['Bac', 'GCE'],
    description: 'Littérature, grammaire, expression écrite et orale. Maîtrise de la langue française.',
    chapitres: [
      {
        id: 'grammaire',
        titre: 'Grammaire et syntaxe',
        icon: '📝',
        lecons: [
          {
            id: 'propositions',
            titre: 'Propositions et analyse syntaxique',
            duree: '50 min',
            contenu: `## Grammaire française

### Types de propositions
**Proposition principale :** peut exister seule
**Proposition subordonnée :** dépend d'une principale

### Propositions subordonnées relatives
Introduites par un pronom relatif (qui, que, dont, où...)
**Exemple :** "L'élève **qui travaille** réussit."

### Propositions subordonnées conjonctives
Introduites par une conjonction (que, si, quand, parce que...)
- **Complétive :** "Je pense **que tu as raison**."
- **Circonstancielle de temps :** "**Quand il arrive**, nous partons."
- **Circonstancielle de cause :** "Je reste **parce qu'il pleut**."
- **Circonstancielle de but :** "Il travaille **pour réussir**."

### Concordance des temps
- Présent → subordonnée au présent ou passé
- Passé → subordonnée à l'imparfait ou au plus-que-parfait
- Conditionnel présent → imparfait dans la subordonnée`
          }
        ]
      },
      {
        id: 'litterature',
        titre: 'Littérature française et africaine',
        icon: '📚',
        lecons: [
          {
            id: 'mouvements-litteraires',
            titre: 'Grands mouvements littéraires',
            duree: '60 min',
            contenu: `## Mouvements littéraires

### La Négritude (XXe siècle)
Mouvement littéraire et politique célébrant les valeurs de la culture africaine.
**Fondateurs :** Aimé Césaire (Martinique), Léopold Sédar Senghor (Sénégal), Léon-Gontran Damas (Guyane)
**Œuvres clés :**
- "Cahier d'un retour au pays natal" - Césaire
- "Chants d'ombre" - Senghor

### Le Réalisme (XIXe siècle)
Représentation fidèle de la réalité sociale.
**Auteurs :** Balzac (La Comédie humaine), Flaubert (Madame Bovary), Zola (Germinal)

### Le Romantisme (XIXe siècle)
Exaltation des sentiments, de la nature, du moi.
**Auteurs :** Victor Hugo (Les Misérables), Lamartine, Musset

### Le Surréalisme (XXe siècle)
Exploration de l'inconscient, automatisme psychique.
**Auteurs :** André Breton, Aragon, Éluard

### Littérature africaine francophone
- Mongo Beti (Cameroun) : "Mission terminée"
- Ahmadou Kourouma (Côte d'Ivoire) : "Les soleils des indépendances"
- Mariama Bâ (Sénégal) : "Une si longue lettre"`
          }
        ]
      },
      {
        id: 'expression-ecrite',
        titre: 'Expression écrite',
        icon: '🖊️',
        lecons: [
          {
            id: 'dissertation',
            titre: 'La dissertation littéraire',
            duree: '55 min',
            contenu: `## La dissertation littéraire

### Structure
**Introduction :**
1. Accroche (citation, fait, question rhétorique)
2. Présentation du sujet
3. Problématique
4. Annonce du plan

**Développement :**
- 2 ou 3 parties équilibrées
- Chaque partie : idée principale + arguments + exemples
- Transitions entre parties

**Conclusion :**
1. Synthèse des idées
2. Réponse à la problématique
3. Ouverture (élargissement)

### Les connecteurs logiques
- **Addition :** de plus, en outre, par ailleurs
- **Opposition :** cependant, néanmoins, toutefois
- **Cause :** car, parce que, puisque
- **Conséquence :** donc, ainsi, c'est pourquoi
- **Illustration :** par exemple, c'est le cas de

### Conseils
- Éviter le "je"
- Varier le vocabulaire
- Citer les œuvres entre guillemets
- Analyser, ne pas raconter`
          }
        ]
      }
    ]
  },
  {
    id: 'anglais',
    nom: 'Anglais',
    icon: '🇬🇧',
    couleur: 'from-cyan-500 to-cyan-700',
    couleurLight: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    couleurDark: 'dark:bg-cyan-900/20 dark:text-cyan-300 dark:border-cyan-800',
    niveaux: ['Bac', 'GCE'],
    description: 'Grammar, vocabulary, comprehension and expression. Master English for exams.',
    chapitres: [
      {
        id: 'grammar',
        titre: 'Grammar',
        icon: '📖',
        lecons: [
          {
            id: 'tenses',
            titre: 'English Tenses',
            duree: '60 min',
            contenu: `## English Tenses

### Present Tenses
**Simple Present:** habitual actions, facts
- I work / She works
- Used with: always, usually, often, sometimes

**Present Continuous:** actions happening now
- I am working / She is working
- Used with: now, at the moment, currently

**Present Perfect:** past actions with present relevance
- I have worked / She has worked
- Used with: just, already, yet, ever, since, for

### Past Tenses
**Simple Past:** completed actions at specific time
- I worked / She worked
- Used with: yesterday, last week, in 2020

**Past Continuous:** ongoing action interrupted in the past
- I was working when he called.

**Past Perfect:** action before another past action
- I had worked before she arrived.

### Future Tenses
**Will:** predictions, promises, offers
- It will rain tomorrow.

**Going to:** plans, intentions, evidence
- I am going to study medicine.

**Present Continuous for future:** fixed arrangements
- I am meeting him tomorrow.`
          }
        ]
      },
      {
        id: 'comprehension',
        titre: 'Reading Comprehension',
        icon: '📑',
        lecons: [
          {
            id: 'reading-skills',
            titre: 'Reading Skills and Strategies',
            duree: '45 min',
            contenu: `## Reading Comprehension

### Reading Strategies
**Skimming:** reading quickly to get the main idea
**Scanning:** looking for specific information
**Intensive reading:** reading carefully for detailed understanding

### Identifying Main Ideas
- Look at the title and headings
- Read the first and last sentence of each paragraph
- Identify topic sentences

### Understanding Vocabulary in Context
When you don't know a word:
1. Look at surrounding words (context clues)
2. Identify the word type (noun, verb, adjective)
3. Look for synonyms or antonyms nearby
4. Use word parts (prefix, root, suffix)

### Question Types
- **Literal:** answer directly in the text
- **Inferential:** reading between the lines
- **Evaluative:** your opinion based on the text
- **Vocabulary:** meaning of words in context

### Essay Structure
**Introduction → Body paragraphs → Conclusion**
- Use connectives: However, Furthermore, In addition, Therefore`
          }
        ]
      }
    ]
  },
  {
    id: 'philosophie',
    nom: 'Philosophie',
    icon: '🧠',
    couleur: 'from-violet-500 to-violet-700',
    couleurLight: 'bg-violet-50 text-violet-700 border-violet-200',
    couleurDark: 'dark:bg-violet-900/20 dark:text-violet-300 dark:border-violet-800',
    niveaux: ['Bac'],
    description: 'Logique, éthique, métaphysique et philosophie politique. Penser par soi-même.',
    chapitres: [
      {
        id: 'logique',
        titre: 'Logique et argumentation',
        icon: '💭',
        lecons: [
          {
            id: 'raisonnement',
            titre: 'Le raisonnement logique',
            duree: '50 min',
            contenu: `## Logique et raisonnement

### Le raisonnement déductif
Du général au particulier.
**Syllogisme :**
- Prémisse majeure : Tous les hommes sont mortels
- Prémisse mineure : Socrate est un homme
- Conclusion : Donc Socrate est mortel

### Le raisonnement inductif
Du particulier au général.
- Observation de cas particuliers → règle générale
- **Limite :** ne garantit pas la vérité de la conclusion

### Le raisonnement par analogie
Raisonner sur la ressemblance entre deux situations.
**Exemple :** "L'État est comme un corps humain..."

### Les sophismes (raisonnements fallacieux)
- **Ad hominem :** attaquer la personne, pas l'argument
- **Homme de paille :** déformer l'argument adverse
- **Appel à la majorité :** "tout le monde le fait"
- **Fausse cause :** confondre corrélation et causalité
- **Pente glissante :** "si A alors forcément Z"

### La dissertation philosophique
1. Analyser le sujet (définir les concepts)
2. Problématiser (trouver la tension)
3. Construire un plan dialectique (thèse/antithèse/synthèse)
4. Argumenter avec des exemples`
          }
        ]
      },
      {
        id: 'ethique',
        titre: 'Éthique et morale',
        icon: '⚖️',
        lecons: [
          {
            id: 'courants-ethiques',
            titre: 'Les grands courants éthiques',
            duree: '60 min',
            contenu: `## Éthique et philosophie morale

### L'éthique utilitariste (Bentham, Mill)
**Principe :** maximiser le bonheur du plus grand nombre.
La valeur morale d'un acte dépend de ses conséquences.
**Critique :** peut justifier des injustices envers une minorité.

### L'éthique déontologique (Kant)
**Impératif catégorique :** "Agis seulement selon la maxime qui fait que tu peux vouloir en même temps qu'elle devienne une loi universelle."
Le devoir prime sur les conséquences.

### L'éthique des vertus (Aristote)
Le bonheur (eudémonie) s'atteint par la pratique des vertus :
courage, justice, tempérance, prudence...

### L'existentialisme (Sartre)
"L'existence précède l'essence."
L'homme est radicalement libre et responsable.
"Nous sommes condamnés à être libres."

### Éthique africaine : Ubuntu
"Je suis parce que nous sommes" (Desmond Tutu)
Philosophie de l'interdépendance et de la communauté.

### Questions éthiques contemporaines
- Bioéthique (euthanasie, clonage)
- Éthique environnementale
- Éthique numérique
- Justice sociale et inégalités`
          }
        ]
      }
    ]
  },
  {
    id: 'economie',
    nom: 'Économie',
    icon: '📊',
    couleur: 'from-rose-500 to-rose-700',
    couleurLight: 'bg-rose-50 text-rose-700 border-rose-200',
    couleurDark: 'dark:bg-rose-900/20 dark:text-rose-300 dark:border-rose-800',
    niveaux: ['Bac', 'GCE'],
    description: 'Microéconomie, macroéconomie et économie africaine. Comprendre les mécanismes économiques.',
    chapitres: [
      {
        id: 'microeconomie',
        titre: 'Microéconomie',
        icon: '🏪',
        lecons: [
          {
            id: 'offre-demande',
            titre: 'Offre, demande et prix d\'équilibre',
            duree: '55 min',
            contenu: `## Microéconomie

### La demande
La demande représente la quantité d'un bien qu'un acheteur souhaite acquérir à un prix donné.

**Loi de la demande :** quand le prix augmente, la quantité demandée diminue (relation inverse).

**Déterminants de la demande :**
- Revenu des ménages
- Prix des biens substituts et complémentaires
- Goûts et préférences
- Anticipations

### L'offre
L'offre représente la quantité qu'un producteur est prêt à vendre à un prix donné.

**Loi de l'offre :** quand le prix augmente, la quantité offerte augmente (relation directe).

**Déterminants de l'offre :**
- Coûts de production
- Technologie disponible
- Prix des intrants
- Nombre de producteurs

### L'équilibre de marché
Le prix d'équilibre est celui qui égalise l'offre et la demande.
- Prix > équilibre → surplus → baisse des prix
- Prix < équilibre → pénurie → hausse des prix

### Élasticité
**Élasticité-prix de la demande :** e = (ΔQ/Q) / (ΔP/P)
- e > 1 : demande élastique (sensible aux prix)
- e < 1 : demande inélastique (peu sensible aux prix)`
          }
        ]
      },
      {
        id: 'macroeconomie',
        titre: 'Macroéconomie',
        icon: '🏛️',
        lecons: [
          {
            id: 'pib',
            titre: 'PIB, croissance et inflation',
            duree: '60 min',
            contenu: `## Macroéconomie

### Le PIB (Produit Intérieur Brut)
Valeur totale des biens et services produits dans un pays en une année.

**Méthodes de calcul :**
- **Par la production :** somme des valeurs ajoutées
- **Par les dépenses :** C + I + G + (X - M)
  - C : consommation des ménages
  - I : investissement
  - G : dépenses publiques
  - X : exportations, M : importations

### La croissance économique
Augmentation durable du PIB réel.
**Taux de croissance :** [(PIB₂ - PIB₁) / PIB₁] × 100

**Sources de croissance :**
- Facteur travail (quantité et qualité)
- Facteur capital (machines, équipements)
- Progrès technique (facteur résiduel de Solow)

### L'inflation
Augmentation générale et durable du niveau des prix.
**Mesure :** Indice des Prix à la Consommation (IPC)

**Causes :**
- Inflation par la demande (trop de monnaie)
- Inflation par les coûts (matières premières)
- Inflation importée

**Effets :** perte de pouvoir d'achat, déséquilibres économiques

### Économie africaine
**Défis :** dépendance aux matières premières, dette extérieure, chômage des jeunes
**Opportunités :** dividende démographique, ressources naturelles, marché africain (ZLECAF)`
          }
        ]
      }
    ]
  },
  {
    id: 'informatique',
    nom: 'Informatique',
    icon: '💻',
    couleur: 'from-slate-500 to-slate-700',
    couleurLight: 'bg-slate-50 text-slate-700 border-slate-200',
    couleurDark: 'dark:bg-slate-900/20 dark:text-slate-300 dark:border-slate-800',
    niveaux: ['Bac', 'GCE'],
    description: 'Algorithmique, programmation, réseaux et systèmes. Les bases de l\'informatique.',
    chapitres: [
      {
        id: 'algorithmique',
        titre: 'Algorithmique',
        icon: '🔄',
        lecons: [
          {
            id: 'algorithmes-base',
            titre: 'Algorithmes et structures de base',
            duree: '60 min',
            contenu: `## Algorithmique

### Qu'est-ce qu'un algorithme ?
Suite finie et ordonnée d'instructions permettant de résoudre un problème.

**Propriétés :** Finitude, Déterminisme, Entrées/Sorties, Efficacité

### Structures de contrôle

**Séquence :**
\`\`\`
Instruction 1
Instruction 2
Instruction 3
\`\`\`

**Condition (Si...Sinon) :**
\`\`\`
Si condition Alors
  bloc si vrai
Sinon
  bloc si faux
Fin Si
\`\`\`

**Boucle Pour :**
\`\`\`
Pour i de 1 à 10 Faire
  instruction
Fin Pour
\`\`\`

**Boucle Tant Que :**
\`\`\`
Tant Que condition Faire
  instruction
Fin Tant Que
\`\`\`

### Complexité
**O(1) :** constante | **O(n) :** linéaire | **O(n²) :** quadratique | **O(log n) :** logarithmique

### Exemple : Tri à bulles
\`\`\`
Pour i de 1 à n-1 Faire
  Pour j de 1 à n-i Faire
    Si tableau[j] > tableau[j+1] Alors
      echanger tableau[j] et tableau[j+1]
    Fin Si
  Fin Pour
Fin Pour
\`\`\``
          }
        ]
      },
      {
        id: 'reseaux',
        titre: 'Réseaux informatiques',
        icon: '🌐',
        lecons: [
          {
            id: 'internet',
            titre: 'Internet et protocoles',
            duree: '45 min',
            contenu: `## Réseaux informatiques

### Types de réseaux
- **LAN :** réseau local (maison, école)
- **MAN :** réseau métropolitain (ville)
- **WAN :** réseau étendu (Internet)

### Modèle OSI (7 couches)
1. Physique
2. Liaison de données
3. Réseau (IP)
4. Transport (TCP, UDP)
5. Session
6. Présentation
7. Application (HTTP, FTP, SMTP)

### Adressage IP
**IPv4 :** 32 bits, notation décimale (192.168.1.1)
**IPv6 :** 128 bits, notation hexadécimale

**Classes d'adresses IPv4 :**
- Classe A : 0.0.0.0 - 127.255.255.255
- Classe B : 128.0.0.0 - 191.255.255.255
- Classe C : 192.0.0.0 - 223.255.255.255

### Protocoles essentiels
- **HTTP/HTTPS :** transfert de pages web (port 80/443)
- **FTP :** transfert de fichiers (port 21)
- **SMTP :** envoi d'emails (port 25)
- **DNS :** résolution de noms de domaine
- **DHCP :** attribution automatique d'adresses IP

### Sécurité réseau
- Pare-feu (firewall)
- Chiffrement (SSL/TLS)
- VPN (réseau privé virtuel)`
          }
        ]
      }
    ]
  },
  {
    id: 'biologie',
    nom: 'Biologie',
    icon: '🔬',
    couleur: 'from-pink-500 to-pink-700',
    couleurLight: 'bg-pink-50 text-pink-700 border-pink-200',
    couleurDark: 'dark:bg-pink-900/20 dark:text-pink-300 dark:border-pink-800',
    niveaux: ['GCE'],
    description: 'Cell biology, physiology, ecology and evolution. For GCE A-Level Biology.',
    chapitres: [
      {
        id: 'cell-biology',
        titre: 'Cell Biology',
        icon: '🦠',
        lecons: [
          {
            id: 'cell-structure',
            titre: 'Cell Structure and Function',
            duree: '55 min',
            contenu: `## Cell Biology

### Cell Theory
1. All living things are made of cells
2. The cell is the basic unit of life
3. All cells come from pre-existing cells

### Prokaryotic vs Eukaryotic Cells

| Feature | Prokaryotic | Eukaryotic |
|---------|-------------|------------|
| Nucleus | No | Yes |
| Size | 1-10 μm | 10-100 μm |
| Organelles | Few, no membrane | Many, membrane-bound |
| DNA | Circular | Linear (chromosomes) |
| Examples | Bacteria | Plants, Animals, Fungi |

### Cell Organelles and Functions
- **Nucleus:** contains DNA, controls cell activities
- **Mitochondria:** ATP production (cellular respiration)
- **Ribosomes:** protein synthesis
- **Endoplasmic Reticulum:** protein/lipid synthesis
- **Golgi apparatus:** sorting and packaging proteins
- **Lysosomes:** intracellular digestion
- **Chloroplasts:** photosynthesis (plant cells only)
- **Vacuole:** storage, turgor pressure in plants

### Cell Membrane
Fluid mosaic model: phospholipid bilayer with embedded proteins.
**Functions:** selective permeability, cell recognition, communication`
          }
        ]
      }
    ]
  },
  {
    id: 'espagnol',
    nom: 'Espagnol',
    icon: '🇪🇸',
    couleur: 'from-yellow-500 to-yellow-700',
    couleurLight: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    couleurDark: 'dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800',
    niveaux: ['Bac'],
    description: 'Gramática, vocabulario, comprensión y expresión. Aprende el español para los exámenes.',
    chapitres: [
      {
        id: 'gramatica',
        titre: 'Gramática española',
        icon: '📗',
        lecons: [
          {
            id: 'verbos',
            titre: 'Los tiempos verbales',
            duree: '55 min',
            contenu: `## Los tiempos verbales en español

### El Presente de Indicativo
Acciones habituales o que ocurren ahora.
**Irregulares comunes :**
- Ser : soy, eres, es, somos, sois, son
- Estar : estoy, estás, está, estamos, estáis, están
- Ir : voy, vas, va, vamos, vais, van
- Tener : tengo, tienes, tiene...

### El Pretérito Indefinido
Acciones completadas en el pasado.
- hablar → hablé, hablaste, habló, hablamos, hablasteis, hablaron
- Irregulares : ser/ir → fui, fuiste, fue, fuimos, fuisteis, fueron

### El Pretérito Imperfecto
Acciones habituales en el pasado o descripciones.
- hablar → hablaba, hablabas, hablaba...
- ser → era, eras, era...

### El Futuro Simple
Acciones futuras o suposiciones.
- hablar → hablaré, hablarás, hablará...
- Irregulares : tener → tendré, hacer → haré, poder → podré

### El Subjuntivo
Deseos, dudas, emociones.
- "Quiero que **vengas**."
- "Espero que **tenga** éxito."`
          }
        ]
      }
    ]
  }
]

export const getSubject = (id) => SUBJECTS.find(s => s.id === id)
export const getChapter = (subjectId, chapterId) => {
  const subject = getSubject(subjectId)
  return subject?.chapitres.find(c => c.id === chapterId)
}
