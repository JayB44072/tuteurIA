"""Generate UML diagrams as PNG for TuteurIA report."""
import os
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch
import numpy as np

OUT = os.path.join(os.path.dirname(__file__), 'diagrams')
os.makedirs(OUT, exist_ok=True)

WHITE = '#FFFFFF'
BLUE  = '#1E3A5F'
LBLUE = '#2E86C1'
CYAN  = '#AED6F1'
GRAY  = '#F2F3F4'
DGRAY = '#717D7E'
GREEN = '#1E8449'
LGREEN= '#A9DFBF'
RED   = '#C0392B'
LRED  = '#FADBD8'
ORANGE= '#D35400'
LORANGE='#FAD7A0'
BLACK = '#1A1A1A'

def save(fig, name):
    fig.savefig(os.path.join(OUT, name), dpi=150, bbox_inches='tight',
                facecolor=WHITE, edgecolor='none')
    plt.close(fig)
    print(f'  OK {name}')

def actor(ax, x, y, label, color=BLUE):
    # head
    circle = plt.Circle((x, y+0.55), 0.18, color=color, zorder=3)
    ax.add_patch(circle)
    # body
    ax.plot([x, x], [y+0.37, y+0.05], color=color, lw=2, zorder=3)
    # arms
    ax.plot([x-0.25, x+0.25], [y+0.28, y+0.28], color=color, lw=2, zorder=3)
    # legs
    ax.plot([x, x-0.2], [y+0.05, y-0.2], color=color, lw=2, zorder=3)
    ax.plot([x, x+0.2], [y+0.05, y-0.2], color=color, lw=2, zorder=3)
    ax.text(x, y-0.35, label, ha='center', va='top', fontsize=8,
            color=BLACK, fontweight='bold', wrap=True)

def usecase(ax, cx, cy, text, w=1.6, h=0.5, color=CYAN):
    el = mpatches.Ellipse((cx, cy), w, h, color=color, ec=BLUE, lw=1.5, zorder=2)
    ax.add_patch(el)
    ax.text(cx, cy, text, ha='center', va='center', fontsize=7.5,
            color=BLACK, fontweight='bold', zorder=3)

def box(ax, x, y, w, h, label, fc=GRAY, ec=BLUE, fs=9, bold=True):
    r = FancyBboxPatch((x-w/2, y-h/2), w, h, boxstyle='round,pad=0.05',
                       fc=fc, ec=ec, lw=1.8, zorder=2)
    ax.add_patch(r)
    ax.text(x, y, label, ha='center', va='center', fontsize=fs,
            color=BLACK, fontweight='bold' if bold else 'normal', zorder=3)

def arrow(ax, x1, y1, x2, y2, label='', color=BLUE, style='->', lw=1.5):
    ax.annotate('', xy=(x2, y2), xytext=(x1, y1),
                arrowprops=dict(arrowstyle=style, color=color, lw=lw))
    if label:
        mx, my = (x1+x2)/2, (y1+y2)/2
        ax.text(mx+0.05, my+0.05, label, fontsize=7, color=color, style='italic')

def dashed_arrow(ax, x1, y1, x2, y2, label=''):
    ax.annotate('', xy=(x2, y2), xytext=(x1, y1),
                arrowprops=dict(arrowstyle='->', color=DGRAY, lw=1.3,
                                linestyle='dashed'))
    if label:
        mx, my = (x1+x2)/2, (y1+y2)/2
        ax.text(mx+0.05, my, label, fontsize=7, color=DGRAY, style='italic')

def setup_ax(fig, title, xl, xr, yb, yt):
    ax = fig.add_subplot(111)
    ax.set_xlim(xl, xr)
    ax.set_ylim(yb, yt)
    ax.set_aspect('equal')
    ax.axis('off')
    ax.set_facecolor(WHITE)
    fig.patch.set_facecolor(WHITE)
    ax.set_title(title, fontsize=13, fontweight='bold', color=BLUE, pad=12)
    return ax

# ─── 1. Use-case global ────────────────────────────────────────────────────────
def uc_global():
    fig = plt.figure(figsize=(16, 11))
    ax = setup_ax(fig, 'Diagramme de Cas d\'Utilisation Global — TuteurIA', -1, 15, -1, 10)

    # System boundary
    sys_rect = FancyBboxPatch((1.5, -0.5), 11, 10.2, boxstyle='round,pad=0.1',
                              fc='#F8FBFF', ec=LBLUE, lw=2.5, zorder=1)
    ax.add_patch(sys_rect)
    ax.text(7, 9.85, 'Système TuteurIA', ha='center', fontsize=11,
            fontweight='bold', color=LBLUE)

    # Actors
    actor(ax, -0.3, 5.5, 'Élève', BLUE)
    actor(ax, 14.3, 5.5, 'Administrateur', BLUE)
    actor(ax, 7, -0.8, 'Groq API', GREEN)

    # Use cases — Élève
    ucs_eleve = [
        (3.5, 8.5, "S'inscrire"),
        (3.5, 7.2, "Se connecter"),
        (3.5, 5.9, "Consulter les cours"),
        (3.5, 4.6, "Faire un QCM"),
        (3.5, 3.3, "Importer document\n→ QCM IA"),
        (3.5, 2.0, "Chatter avec\nle Tuteur IA"),
        (3.5, 0.7, "Voir sa progression"),
    ]
    for cx, cy, t in ucs_eleve:
        usecase(ax, cx, cy, t)
        arrow(ax, 0.5, 5.8, 2.6, cy, color=DGRAY, lw=1.2)

    # Use cases — Admin
    ucs_admin = [
        (9.5, 8.5, "Gérer les utilisateurs"),
        (9.5, 7.2, "Gérer les matières"),
        (9.5, 5.9, "Gérer les QCM"),
        (9.5, 4.6, "Consulter statistiques"),
        (9.5, 3.3, "Modérer les contenus"),
    ]
    for cx, cy, t in ucs_admin:
        usecase(ax, cx, cy, t)
        arrow(ax, 13.5, 5.8, 10.3, cy, color=DGRAY, lw=1.2)

    # Groq API connections
    for cx, cy, t in [(3.5, 3.3, ''), (3.5, 2.0, '')]:
        dashed_arrow(ax, cx, cy-0.25, 7, -0.5, '<<uses>>')

    save(fig, 'uc_global.png')

# ─── 2. Use-case Authentification ─────────────────────────────────────────────
def uc_auth():
    fig = plt.figure(figsize=(12, 8))
    ax = setup_ax(fig, "Cas d'Utilisation Détaillé — Authentification", -1, 11, -1, 7)

    sys_rect = FancyBboxPatch((1, 0.2), 8, 6.2, boxstyle='round,pad=0.1',
                              fc='#F8FBFF', ec=LBLUE, lw=2.5, zorder=1)
    ax.add_patch(sys_rect)
    ax.text(5, 6.55, 'Module Authentification', ha='center', fontsize=10,
            fontweight='bold', color=LBLUE)

    actor(ax, -0.2, 3, 'Utilisateur', BLUE)
    actor(ax, 9.8, 4, 'Supabase Auth', GREEN)

    usecase(ax, 5, 5.2, "S'inscrire", w=2.2)
    usecase(ax, 5, 3.8, "Se connecter")
    usecase(ax, 5, 2.6, "Se déconnecter")
    usecase(ax, 5, 1.5, "Réinitialiser\nmot de passe", w=2.2)
    usecase(ax, 5, 0.6, "Gérer son profil")

    for y in [5.2, 3.8, 2.6, 1.5, 0.6]:
        arrow(ax, 0.6, 3.2, 3.8, y, color=DGRAY, lw=1.1)

    for y in [5.2, 3.8, 1.5]:
        dashed_arrow(ax, 6.1, y, 9, 4.2, '<<calls>>')

    save(fig, 'uc_auth.png')

# ─── 3. Use-case Tuteur IA ─────────────────────────────────────────────────────
def uc_tuteur():
    fig = plt.figure(figsize=(13, 8))
    ax = setup_ax(fig, "Cas d'Utilisation Détaillé — Tuteur IA", -1, 12, -0.5, 7.5)

    sys_rect = FancyBboxPatch((1, 0.2), 9, 6.8, boxstyle='round,pad=0.1',
                              fc='#F8FBFF', ec=LBLUE, lw=2.5, zorder=1)
    ax.add_patch(sys_rect)
    ax.text(5.5, 7.2, 'Module Tuteur IA', ha='center', fontsize=10,
            fontweight='bold', color=LBLUE)

    actor(ax, -0.2, 3.5, 'Élève', BLUE)
    actor(ax, 10.8, 3.5, 'Groq API\n(LLaMA 3.3)', GREEN)

    usecase(ax, 5.5, 6.2, "Poser une question")
    usecase(ax, 5.5, 5.0, "Recevoir une réponse IA", w=2.4)
    usecase(ax, 5.5, 3.8, "Choisir une suggestion")
    usecase(ax, 5.5, 2.6, "Consulter l'historique", w=2.4)
    usecase(ax, 5.5, 1.4, "Effacer la conversation", w=2.4)
    usecase(ax, 5.5, 0.5, "Changer de langue", w=2.4)

    for y in [6.2, 5.0, 3.8, 2.6, 1.4, 0.5]:
        arrow(ax, 0.6, 3.5, 4.3, y, color=DGRAY, lw=1.1)

    dashed_arrow(ax, 6.7, 6.2, 10, 4.0, '<<calls>>')
    dashed_arrow(ax, 6.7, 5.0, 10, 3.2, '<<returns>>')

    # extend
    dashed_arrow(ax, 5.5, 3.55, 5.5, 3.05, '<<extend>>')

    save(fig, 'uc_tuteur.png')

# ─── 4. Diagramme de séquence — Connexion ─────────────────────────────────────
def seq_login():
    fig = plt.figure(figsize=(14, 9))
    ax = setup_ax(fig, 'Diagramme de Séquence — Connexion Utilisateur', 0, 14, -0.5, 9)

    actors = [('Utilisateur', 1.5), ('Login.jsx', 3.5), ('AuthContext', 5.5),
              ('supabase.js', 7.5), ('Supabase Auth', 10), ('Dashboard', 12.5)]
    colors = [BLUE, LBLUE, LBLUE, LBLUE, GREEN, LBLUE]

    for (name, x), c in zip(actors, colors):
        box(ax, x, 8.5, 1.6, 0.55, name, fc=CYAN if c==LBLUE else LGREEN if c==GREEN else '#D6EAF8', ec=c, fs=8)
        ax.plot([x, x], [8.22, 0.2], color=DGRAY, lw=1, linestyle='--', zorder=1)

    msgs = [
        (1.5, 3.5, 7.8, 'saisit email + mdp'),
        (3.5, 5.5, 7.5, 'login(email, mdp)'),
        (5.5, 7.5, 7.2, 'signInWithPassword()'),
        (7.5, 10,  6.9, 'POST /auth/v1/token'),
        (10,  7.5, 6.6, 'session + user'),
        (7.5, 5.5, 6.3, 'setUser(session.user)'),
        (5.5, 3.5, 6.0, 'resolve()'),
        (3.5, 12.5,5.7, 'navigate("/dashboard")'),
        (12.5,3.5, 5.4, 'Dashboard rendu'),
    ]
    for x1, x2, y, lbl in msgs:
        ax.annotate('', xy=(x2, y), xytext=(x1, y),
                    arrowprops=dict(arrowstyle='->', color=BLUE, lw=1.5))
        mx = (x1+x2)/2
        ax.text(mx, y+0.1, lbl, ha='center', fontsize=7.5, color=BLACK)

    # Alt box — error
    err_rect = FancyBboxPatch((2.5, 2.8), 9, 1.8, boxstyle='round,pad=0.05',
                              fc=LRED, ec=RED, lw=1.5, alpha=0.5, zorder=0)
    ax.add_patch(err_rect)
    ax.text(2.7, 4.5, 'alt [Erreur d\'authentification]', fontsize=8, color=RED, fontweight='bold')
    ax.annotate('', xy=(1.5, 3.5), xytext=(7.5, 3.5),
                arrowprops=dict(arrowstyle='->', color=RED, lw=1.3))
    ax.text(4.5, 3.6, 'throw error', ha='center', fontsize=7.5, color=RED)
    ax.annotate('', xy=(1.5, 3.0), xytext=(3.5, 3.0),
                arrowprops=dict(arrowstyle='->', color=RED, lw=1.3))
    ax.text(2.5, 3.1, 'affiche message erreur', ha='center', fontsize=7.5, color=RED)

    save(fig, 'seq_login.png')

# ─── 5. Diagramme de séquence — Tuteur IA ─────────────────────────────────────
def seq_tuteur():
    fig = plt.figure(figsize=(15, 9))
    ax = setup_ax(fig, 'Diagramme de Séquence — Interaction Tuteur IA', 0, 15, -0.5, 9)

    actors = [('Élève', 1.5), ('AiTutor.jsx', 3.5), ('sendMessage()', 5.8),
              ('Groq API', 8.5), ('LLaMA 3.3\n70B', 11.5), ('AiTutor.jsx\n(affichage)', 13.5)]
    colors = [BLUE, LBLUE, LBLUE, GREEN, GREEN, LBLUE]
    fcs = ['#D6EAF8', CYAN, CYAN, LGREEN, LGREEN, CYAN]

    for (name, x), c, fc in zip(actors, colors, fcs):
        box(ax, x, 8.5, 1.8, 0.55, name, fc=fc, ec=c, fs=8)
        ax.plot([x, x], [8.22, 0.2], color=DGRAY, lw=1, linestyle='--', zorder=1)

    msgs = [
        (1.5, 3.5,  7.8, 'saisit question'),
        (3.5, 5.8,  7.5, 'sendMessage(text)'),
        (5.8, 3.5,  7.2, 'setLoading(true)'),
        (5.8, 8.5,  6.9, 'POST /openai/v1/chat/completions'),
        (8.5, 11.5, 6.6, 'inférence LLaMA'),
        (11.5,8.5,  6.3, 'stream tokens'),
        (8.5, 5.8,  6.0, 'response.choices[0].message'),
        (5.8, 13.5, 5.7, 'setMessages([...msg, aiResp])'),
        (13.5,1.5,  5.4, 'affiche réponse IA'),
        (5.8, 3.5,  5.1, 'setLoading(false)'),
    ]
    for x1, x2, y, lbl in msgs:
        ax.annotate('', xy=(x2, y), xytext=(x1, y),
                    arrowprops=dict(arrowstyle='->', color=BLUE, lw=1.4))
        mx = (x1+x2)/2
        ax.text(mx, y+0.1, lbl, ha='center', fontsize=7.2, color=BLACK)

    # loop box
    loop = FancyBboxPatch((2.5, 4.8), 12, 3.4, boxstyle='round,pad=0.05',
                          fc='none', ec=LBLUE, lw=1.5, linestyle='--', zorder=0)
    ax.add_patch(loop)
    ax.text(2.7, 8.1, 'loop [conversation active]', fontsize=8, color=LBLUE, fontweight='bold')

    save(fig, 'seq_tuteur.png')

# ─── 6. Diagramme de séquence — Doc → QCM ─────────────────────────────────────
def seq_docquiz():
    fig = plt.figure(figsize=(14, 9))
    ax = setup_ax(fig, 'Diagramme de Séquence — Document → QCM IA', 0, 14, -0.5, 9)

    actors = [('Élève', 1.5), ('DocQuiz.jsx', 3.5), ('FileReader', 5.5),
              ('Groq API', 8), ('DocQuiz.jsx\n(quiz)', 11.5)]
    colors = [BLUE, LBLUE, LBLUE, GREEN, LBLUE]
    fcs = ['#D6EAF8', CYAN, CYAN, LGREEN, CYAN]

    for (name, x), c, fc in zip(actors, colors, fcs):
        box(ax, x, 8.5, 1.8, 0.55, name, fc=fc, ec=c, fs=8)
        ax.plot([x, x], [8.22, 0.2], color=DGRAY, lw=1, linestyle='--', zorder=1)

    msgs = [
        (1.5, 3.5, 7.8, 'glisse-dépose fichier (.pdf/.txt/.docx)'),
        (3.5, 5.5, 7.5, 'readAsText(file)'),
        (5.5, 3.5, 7.2, 'extractedText (8000 chars max)'),
        (3.5, 3.5, 6.9, 'setStep("analyzing")'),
        (3.5, 8.0, 6.6, 'POST /chat/completions\n(prompt + texte)'),
        (8.0, 3.5, 6.3, 'JSON questions[]'),
        (3.5, 3.5, 6.0, 'parseQuizzesFromAI(aiText)'),
        (3.5, 11.5,5.7, 'setQuestions(parsed), setStep("quiz")'),
        (11.5,1.5, 5.4, 'affiche QCM interactif'),
    ]
    for x1, x2, y, lbl in msgs:
        ax.annotate('', xy=(x2, y), xytext=(x1, y),
                    arrowprops=dict(arrowstyle='->', color=BLUE, lw=1.4))
        mx = (x1+x2)/2
        ax.text(mx, y+0.1, lbl, ha='center', fontsize=7, color=BLACK)

    save(fig, 'seq_docquiz.png')

# ─── 7. Diagramme de classes ───────────────────────────────────────────────────
def class_diagram():
    fig = plt.figure(figsize=(18, 13))
    ax = setup_ax(fig, 'Diagramme de Classes — TuteurIA', 0, 18, -0.5, 13)

    def class_box(ax, x, y, name, attrs, methods, w=3.2, color=BLUE):
        h_name = 0.55
        h_attr = max(len(attrs)*0.38, 0.38)
        h_meth = max(len(methods)*0.38, 0.38)
        total = h_name + h_attr + h_meth + 0.2
        # name
        r = FancyBboxPatch((x, y), w, h_name, boxstyle='square,pad=0',
                           fc=color, ec=color, lw=0, zorder=2)
        ax.add_patch(r)
        ax.text(x+w/2, y+h_name/2, name, ha='center', va='center',
                fontsize=9, fontweight='bold', color=WHITE, zorder=3)
        # attrs
        r2 = FancyBboxPatch((x, y+h_name), w, h_attr, boxstyle='square,pad=0',
                            fc=GRAY, ec=color, lw=1.5, zorder=2)
        ax.add_patch(r2)
        for i, a in enumerate(attrs):
            ax.text(x+0.1, y+h_name+h_attr-(i+0.7)*0.38, a,
                    fontsize=7.5, color=BLACK, va='center', zorder=3)
        # methods
        r3 = FancyBboxPatch((x, y+h_name+h_attr), w, h_meth,
                            boxstyle='square,pad=0', fc=WHITE, ec=color, lw=1.5, zorder=2)
        ax.add_patch(r3)
        for i, m in enumerate(methods):
            ax.text(x+0.1, y+h_name+h_attr+h_meth-(i+0.7)*0.38, m,
                    fontsize=7.5, color=BLUE, va='center', zorder=3)
        return (x+w/2, y), (x+w/2, y+total), (x, y+total/2), (x+w, y+total/2)

    class_box(ax, 0.3, 9.5, 'User',
              ['- id: UUID', '- email: string', '- full_name: string',
               '- created_at: Date'],
              ['+ login()', '+ logout()', '+ signup()'],
              color=BLUE)

    class_box(ax, 4.5, 9.5, 'Subject',
              ['- id: string', '- nom: string', '- icon: string',
               '- couleur: string'],
              ['+ getChapitres()', '+ getLessons()'],
              color=LBLUE)

    class_box(ax, 8.5, 9.5, 'Lesson',
              ['- id: string', '- titre: string',
               '- contenu: string', '- duree: number'],
              ['+ getContent()', '+ render()'],
              color=LBLUE)

    class_box(ax, 12.5, 9.5, 'QCM',
              ['- id: string', '- titre: string',
               '- subjectId: string', '- duree: number'],
              ['+ getQuestions()', '+ submit()'],
              color=LBLUE)

    class_box(ax, 0.3, 5.5, 'Question',
              ['- id: string', '- enonce: string',
               '- options: string[]', '- correct: number',
               '- explication: string'],
              ['+ validate(answer)'],
              color='#6C3483')

    class_box(ax, 4.5, 5.5, 'UserProgress',
              ['- userId: UUID', '- subjectId: string',
               '- score: number', '- date: Date'],
              ['+ calculate()', '+ save()'],
              color=GREEN)

    class_box(ax, 8.5, 5.5, 'ChatMessage',
              ['- id: string', '- role: user|assistant',
               '- content: string', '- timestamp: Date'],
              ['+ format()', '+ display()'],
              color=ORANGE)

    class_box(ax, 12.5, 5.5, 'GroqService',
              ['- apiKey: string', '- model: string',
               '- baseUrl: string'],
              ['+ sendMessage()', '+ generateQCM()',
               '+ analyzeDoc()'],
              color=RED)

    class_box(ax, 4.5, 1.5, 'AuthContext',
              ['- user: User|null', '- loading: boolean'],
              ['+ login()', '+ logout()', '+ signup()'],
              color='#1A5276')

    class_box(ax, 8.5, 1.5, 'LangContext',
              ['- lang: fr|en', ],
              ['+ t(section, key)', '+ toggleLang()'],
              color='#1A5276')

    class_box(ax, 12.5, 1.5, 'ThemeContext',
              ['- dark: boolean'],
              ['+ toggle()', '+ toggleDarkMode()'],
              color='#1A5276')

    # associations
    def assoc(x1, y1, x2, y2, label='', style='->'):
        ax.annotate('', xy=(x2, y2), xytext=(x1, y1),
                    arrowprops=dict(arrowstyle=style, color=DGRAY, lw=1.3))
        if label:
            ax.text((x1+x2)/2+0.05, (y1+y2)/2+0.08, label,
                    fontsize=7, color=DGRAY, style='italic')

    assoc(3.5, 10.4, 4.5, 10.4, '1..*')
    assoc(7.7, 10.4, 8.5, 10.4, '1..*')
    assoc(11.7, 10.4, 12.5, 10.4, '1..*')
    assoc(15.7, 10.4, 12.5+3.2/2, 9.5, '1..*')
    assoc(14.1, 9.5, 1.5, 7.2, '1')
    assoc(6.7, 9.5, 6.7, 7.2, '1..*')

    save(fig, 'class_diagram.png')

# ─── 8. Diagramme d'activités — Faire un QCM ─────────────────────────────────
def activity_qcm():
    fig = plt.figure(figsize=(10, 15))
    ax = setup_ax(fig, "Diagramme d'Activités — Faire un QCM", 0, 10, -0.5, 15)

    def node(x, y, text, shape='rect', fc=CYAN, ec=BLUE, fs=8.5):
        if shape == 'start':
            c = plt.Circle((x, y), 0.3, color=BLUE, zorder=3)
            ax.add_patch(c)
        elif shape == 'end':
            c = plt.Circle((x, y), 0.3, color=BLUE, zorder=3)
            ax.add_patch(c)
            c2 = plt.Circle((x, y), 0.22, color=WHITE, zorder=4)
            ax.add_patch(c2)
            c3 = plt.Circle((x, y), 0.15, color=BLUE, zorder=5)
            ax.add_patch(c3)
        elif shape == 'diamond':
            d = plt.Polygon([[x,y+0.4],[x+0.55,y],[x,y-0.4],[x-0.55,y]],
                            fc=LORANGE, ec=ORANGE, lw=1.8, zorder=2)
            ax.add_patch(d)
            ax.text(x, y, text, ha='center', va='center', fontsize=7.5,
                    color=BLACK, fontweight='bold', zorder=3)
        else:
            r = FancyBboxPatch((x-1.4, y-0.28), 2.8, 0.56,
                               boxstyle='round,pad=0.08', fc=fc, ec=ec, lw=1.5, zorder=2)
            ax.add_patch(r)
            ax.text(x, y, text, ha='center', va='center', fontsize=fs,
                    color=BLACK, fontweight='bold', zorder=3)

    steps = [
        (5, 14.3, 'start', ''),
        (5, 13.3, 'rect',    "Accéder à /qcm"),
        (5, 12.3, 'rect',    "Sélectionner un QCM"),
        (5, 11.3, 'rect',    "Lire la question"),
        (5, 10.2, 'diamond', "Répondre ?"),
        (5,  9.2, 'rect',    "Sélectionner une option"),
        (5,  8.2, 'rect',    "Afficher feedback\n(correct / incorrect)"),
        (5,  7.2, 'diamond', "Dernière\nquestion ?"),
        (5,  6.2, 'rect',    "Question suivante"),
        (5,  5.2, 'rect',    "Afficher résultats\n(score + corrections)"),
        (5,  4.2, 'diamond', "Recommencer ?"),
        (5,  3.2, 'rect',    "Retour liste QCM"),
        (5,  2.2, 'end',     ''),
    ]
    for x, y, shape, text in steps:
        node(x, y, text, shape)

    # arrows
    pairs = [(0,1),(1,2),(2,3),(3,4),(4,5),(5,6),(6,7),(8,3),(7,8),(9,10),(10,11),(11,12)]
    ys = [s[1] for s in steps]
    for i, j in pairs:
        x1, y1 = steps[i][0], ys[i]
        x2, y2 = steps[j][0], ys[j]
        if i == 8:
            ax.annotate('', xy=(x2, y2+0.28), xytext=(x1+0.55, y1),
                        arrowprops=dict(arrowstyle='->', color=BLUE, lw=1.4,
                                        connectionstyle='arc3,rad=0.4'))
            ax.text(6.2, (y1+y2)/2, 'Non', fontsize=8, color=BLUE)
        elif i == 3:
            ax.annotate('', xy=(x2, y2+0.28), xytext=(x1, y1-0.4),
                        arrowprops=dict(arrowstyle='->', color=BLUE, lw=1.4))
        elif i == 6:
            ax.annotate('', xy=(x2, y2+0.4), xytext=(x1, y1-0.4),
                        arrowprops=dict(arrowstyle='->', color=BLUE, lw=1.4))
            ax.text(5.1, (y1+y2)/2, 'Oui', fontsize=8, color=BLUE)
        elif i == 10:
            ax.annotate('', xy=(x2, y2+0.28), xytext=(x1, y1-0.4),
                        arrowprops=dict(arrowstyle='->', color=BLUE, lw=1.4))
            ax.text(5.1, (y1+y2)/2, 'Non', fontsize=8, color=BLUE)
        else:
            ax.annotate('', xy=(x2, y2+0.28 if steps[j][2]!='end' else y2+0.3),
                        xytext=(x1, y1-0.28 if steps[i][2]!='start' else y1-0.3),
                        arrowprops=dict(arrowstyle='->', color=BLUE, lw=1.4))

    # Non pour diamond Q10.2
    ax.annotate('', xy=(7.5, 10.2), xytext=(5.55, 10.2),
                arrowprops=dict(arrowstyle='->', color=ORANGE, lw=1.3))
    ax.text(6.5, 10.35, 'Pas encore', fontsize=7.5, color=ORANGE)
    node(7.5, 10.2, 'Attente', fc=LORANGE, ec=ORANGE)

    save(fig, 'activity_qcm.png')

# ─── 9. Diagramme de paquetage ────────────────────────────────────────────────
def package_diagram():
    fig = plt.figure(figsize=(16, 11))
    ax = setup_ax(fig, 'Diagramme de Paquetage — Architecture TuteurIA', 0, 16, 0, 11)

    def pkg(ax, x, y, w, h, name, items=[], fc='#EAF2FF', ec=BLUE):
        # tab
        tab = FancyBboxPatch((x, y+h), 2.2, 0.4, boxstyle='round,pad=0.02',
                             fc=ec, ec=ec, lw=0, zorder=2)
        ax.add_patch(tab)
        ax.text(x+1.1, y+h+0.2, name, ha='center', va='center',
                fontsize=9, fontweight='bold', color=WHITE, zorder=3)
        body = FancyBboxPatch((x, y), w, h, boxstyle='round,pad=0.05',
                              fc=fc, ec=ec, lw=2, zorder=1)
        ax.add_patch(body)
        for i, item in enumerate(items):
            ax.text(x+0.3, y+h-0.45*(i+1), f'▸ {item}',
                    fontsize=7.5, color=BLACK, va='center', zorder=2)

    pkg(ax, 0.3, 7.5, 4, 3, 'pages/',
        ['Landing.jsx','Dashboard.jsx','Subjects.jsx',
         'SubjectDetail.jsx','QCMList.jsx','QCMTake.jsx',
         'AiTutor.jsx','DocQuiz.jsx','Progress.jsx','Profile.jsx'],
        fc='#EBF5FB', ec=LBLUE)

    pkg(ax, 5.2, 7.5, 3.5, 3, 'pages/auth/',
        ['Login.jsx','Signup.jsx'],
        fc='#EBF5FB', ec=LBLUE)

    pkg(ax, 0.3, 3.5, 4, 3.5, 'context/',
        ['AuthContext.jsx','ThemeContext.jsx',
         'LangContext.jsx'],
        fc='#F4ECF7', ec='#6C3483')

    pkg(ax, 5.2, 3.5, 3.5, 3.5, 'components/',
        ['layout/Navbar.jsx',
         'layout/CourseReader.jsx'],
        fc='#E8F8F5', ec=GREEN)

    pkg(ax, 9.5, 7.5, 3, 3, 'data/',
        ['subjects.js','quizzes.js'],
        fc='#FEF9E7', ec=ORANGE)

    pkg(ax, 9.5, 3.5, 3, 3.5, 'lib/',
        ['supabase.js'],
        fc='#FDEDEC', ec=RED)

    pkg(ax, 13, 7.5, 2.8, 3, 'assets/',
        ['images/','icons/'],
        fc=GRAY, ec=DGRAY)

    pkg(ax, 13, 3.5, 2.8, 3.5, 'external APIs',
        ['Supabase Auth','Groq API\n(LLaMA 3.3 70B)'],
        fc=LGREEN, ec=GREEN)

    # main entry
    pkg(ax, 4, 0.5, 8, 1.8, 'App Root',
        ['main.jsx  →  App.jsx  →  BrowserRouter  →  Routes'],
        fc='#D6EAF8', ec=BLUE)

    # dependency arrows
    for x1,y1,x2,y2 in [
        (4.3,3.7,4.3,7.5), (5.2,5.2,4.4,7.5),
        (9.5,5.2,4.4,7.5), (11,3.5,9.5,7.5),
        (14.4,3.5,14.4,7.5),
    ]:
        dashed_arrow(ax, x1,y1,x2,y2)

    save(fig, 'package_diagram.png')

# ─── 10. Architecture physique ────────────────────────────────────────────────
def deploy_diagram():
    fig = plt.figure(figsize=(16, 10))
    ax = setup_ax(fig, "Diagramme de Déploiement — Architecture Physique TuteurIA", 0, 16, 0, 10)

    def node3d(ax, x, y, w, h, label, fc=CYAN, ec=BLUE, sublabel=''):
        # 3d effect
        off = 0.25
        side = plt.Polygon([[x+w,y],[x+w+off,y+off],[x+w+off,y+h+off],[x+w,y+h]],
                           fc='#BDC3C7', ec=ec, lw=1, zorder=1)
        top  = plt.Polygon([[x,y+h],[x+off,y+h+off],[x+w+off,y+h+off],[x+w,y+h]],
                           fc='#D5DBDB', ec=ec, lw=1, zorder=1)
        ax.add_patch(side); ax.add_patch(top)
        body = FancyBboxPatch((x, y), w, h, boxstyle='square,pad=0',
                              fc=fc, ec=ec, lw=2, zorder=2)
        ax.add_patch(body)
        ax.text(x+w/2, y+h/2+0.1, label, ha='center', va='center',
                fontsize=9, fontweight='bold', color=BLACK, zorder=3)
        if sublabel:
            ax.text(x+w/2, y+h/2-0.25, sublabel, ha='center', va='center',
                    fontsize=7.5, color=DGRAY, zorder=3)

    # Client
    node3d(ax, 0.5, 6.5, 3.5, 2.5, 'Client / Navigateur', sublabel='React SPA', fc='#D6EAF8', ec=BLUE)

    # CDN / Vercel
    node3d(ax, 5.5, 7, 3.5, 2, 'Vercel / CDN', sublabel='Hebergement Vite build', fc='#F9EBEA', ec=RED)

    # Supabase
    node3d(ax, 5.5, 3.5, 3.5, 2.5, 'Supabase Cloud', sublabel='Auth + PostgreSQL', fc=LGREEN, ec=GREEN)

    # Groq
    node3d(ax, 11, 3.5, 4, 2.5, 'Groq Cloud API', sublabel='LLaMA 3.3 70B', fc=LORANGE, ec=ORANGE)
    # arrows
    arrow(ax, 4, 7.7, 5.5, 7.7, 'HTTPS / fetch()', color=BLUE)
    arrow(ax, 4, 7.0, 5.5, 5.0, 'HTTPS REST', color=GREEN)
    arrow(ax, 4, 6.8, 11, 4.8,  'Bearer Token\nPOST /chat/completions', color=ORANGE)
    dashed_arrow(ax, 9, 7.8, 9, 6.5, 'dist/')

    # Légende
    ax.text(0.5, 1.5, 'Flux de données :', fontsize=9, fontweight='bold', color=BLACK)
    for i, (c, txt) in enumerate([(BLUE,'API Supabase Auth'),(GREEN,'PostgreSQL queries'),
                                    (ORANGE,'Groq inference')]):
        ax.plot([0.5, 1.5], [1.1-i*0.4, 1.1-i*0.4], color=c, lw=2)
        ax.text(1.6, 1.1-i*0.4, txt, fontsize=8, va='center', color=c)

    save(fig, 'deploy_diagram.png')

# ─── 11. Diagramme état-transition ────────────────────────────────────────────
def state_diagram():
    fig = plt.figure(figsize=(14, 10))
    ax = setup_ax(fig, "Diagramme d'État-Transition — Session Utilisateur", 0, 14, 0, 10)

    def state(x, y, label, fc=CYAN, ec=BLUE):
        r = FancyBboxPatch((x-1.5, y-0.45), 3, 0.9,
                           boxstyle='round,pad=0.15', fc=fc, ec=ec, lw=2, zorder=2)
        ax.add_patch(r)
        ax.text(x, y, label, ha='center', va='center',
                fontsize=9, fontweight='bold', color=BLACK, zorder=3)

    # start
    c = plt.Circle((1, 9), 0.28, color=BLUE, zorder=3)
    ax.add_patch(c)

    state(4, 9,   'Non connecté',    fc='#FDFEFE', ec=DGRAY)
    state(4, 7,   'Inscription',     fc='#EBF5FB')
    state(4, 5,   'Connexion',       fc='#EBF5FB')
    state(8, 7,   'Email vérifié',   fc=LGREEN, ec=GREEN)
    state(8, 5,   'Authentifié',     fc=LGREEN, ec=GREEN)
    state(11, 7,  'Dashboard',       fc=CYAN)
    state(11, 5,  'Cours / QCM',     fc=CYAN)
    state(11, 3,  'Tuteur IA',       fc=LORANGE, ec=ORANGE)
    state(7,  1.5,'Session expirée', fc=LRED, ec=RED)
    state(11, 1.5,'Déconnecté',      fc='#FDFEFE', ec=DGRAY)

    # end
    c2 = plt.Circle((13.5, 9), 0.28, color=BLUE, zorder=3)
    ax.add_patch(c2)
    c3 = plt.Circle((13.5, 9), 0.20, color=WHITE, zorder=4)
    ax.add_patch(c3)
    c4 = plt.Circle((13.5, 9), 0.13, color=BLUE, zorder=5)
    ax.add_patch(c4)

    trs = [
        (1.28, 9,   2.5, 9,   ''),
        (5.5, 9,    6.5, 7,   'clic Inscription'),
        (5.5, 9,    6.5, 5,   'clic Connexion'),
        (5.5, 7,    6.5, 7,   'formulaire soumis'),
        (9.5, 7,    9.5, 7,   ''),
        (6.5, 7,    6.5, 5,   'email confirmé'),
        (5.5, 5,    6.5, 5,   'credentials OK'),
        (9.5, 5,    9.5, 7,   ''),
        (9.5, 7,   10, 7,     'navigate(dashboard)'),
        (9.5, 5,   10, 5,     ''),
        (12.5, 7,  12.5, 5,   'accès matière/QCM'),
        (12.5, 5,  12.5, 3,   'ouvre Tuteur IA'),
        (12.5, 3,  12.5, 5,   'retour'),
        (8, 5,     8, 1.8,    'token expiré'),
        (5.5, 1.5, 2.5, 9,    'reconnexion'),
        (12.5, 5,  12.5, 1.8, 'logout'),
        (10, 1.5,  13.5, 8.72,'fin session'),
    ]
    for x1,y1,x2,y2,lbl in trs:
        ax.annotate('', xy=(x2,y2), xytext=(x1,y1),
                    arrowprops=dict(arrowstyle='->', color=BLUE, lw=1.3,
                                    connectionstyle='arc3,rad=0.1'))
        if lbl:
            ax.text((x1+x2)/2+0.1, (y1+y2)/2+0.12, lbl,
                    fontsize=7, color=DGRAY, style='italic')

    save(fig, 'state_diagram.png')

# ─── Run all ───────────────────────────────────────────────────────────────────
if __name__ == '__main__':
    print('Génération des diagrammes...')
    uc_global()
    uc_auth()
    uc_tuteur()
    seq_login()
    seq_tuteur()
    seq_docquiz()
    class_diagram()
    activity_qcm()
    package_diagram()
    deploy_diagram()
    state_diagram()
    print(f'\nDone — {len(os.listdir(OUT))} fichiers dans {OUT}')
