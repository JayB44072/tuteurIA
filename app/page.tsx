import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import {
  Sparkles, BookOpen, Trophy, Zap, Globe, Shield, Users, BarChart3,
  ChevronRight, Star, CheckCircle2
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/90">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-3 text-lg font-semibold text-slate-900 dark:text-white">
            <Sparkles className="h-6 w-6 text-blue-600" />
            WhiteDuke
          </div>
          <nav className="hidden items-center gap-8 md:flex text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#accueil" className="transition hover:text-slate-900 dark:hover:text-white">Accueil</a>
            <a href="#fonctionnalites" className="transition hover:text-slate-900 dark:hover:text-white">Fonctionnalités</a>
            <a href="#nos-offres" className="transition hover:text-slate-900 dark:hover:text-white">Nos offres</a>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <Link href="/auth/login">
              <Button variant="outline" className="text-sm px-4 py-2">Connexion</Button>
            </Link>
            <Link href="/auth/signup">
              <Button size="sm" className="text-sm px-4 py-2">Inscription</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="pt-20">
        {/* Hero Section */}
        <section id="accueil" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 pt-28 pb-24">
          <div className="mx-auto max-w-7xl px-4 text-center">
          <RevealOnScroll direction="bottom" delay={0} className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 text-sm font-medium text-blue-700 dark:text-blue-300 mb-6">
            <Zap className="h-4 w-4" />
            <span>WhiteDukeSaas IA-Powered Education for Africa</span>
          </RevealOnScroll>
          <RevealOnScroll direction="left" delay={100} className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight">
              WhiteDukeIA
              <span className="block text-blue-600 mt-2">Votre Tuteur IA Adaptatif</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll direction="right" delay={200} className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300 mb-10">
            <p>
              Préparez le Baccalauréat et le GCE A-Level avec un coaching personnalisé, des quiz adaptatifs et des explications pas à pas en français et en anglais.
            </p>
          </RevealOnScroll>
          <RevealOnScroll direction="bottom" delay={300} className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
            <Link href="/auth/signup" className="flex">
              <Button size="lg" className="h-11 min-w-[180px] gap-2 text-base px-8">
                Commencer Gratuitement <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/auth/login" className="flex">
              <Button size="lg" variant="outline" className="h-11 min-w-[180px] gap-2 text-base px-8">
                Se Connecter
              </Button>
            </Link>
          </RevealOnScroll>
          <RevealOnScroll direction="bottom" delay={400} className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-500">
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Révisions illimitées</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Quiz IA personnalisés</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Plans de révision</div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Features */}
      <section id="fonctionnalites" className="py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <RevealOnScroll direction="left" delay={0} className="inline-block">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Fonctionnalités Clés</h2>
            </RevealOnScroll>
            <RevealOnScroll direction="right" delay={100} className="mx-auto max-w-2xl">
              <p className="text-slate-600 dark:text-slate-300">Tout ce dont vous avez besoin pour réussir vos examens, propulsé par l'IA.</p>
            </RevealOnScroll>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Sparkles, title: 'Tuteur IA', desc: 'Posez vos questions, obtenez des explications détaillées et des conseils de révision adaptés à votre niveau.', direction: 'left' as const },
              { icon: Trophy, title: 'Quiz Adaptatifs', desc: 'Des quiz qui s\'ajustent à vos forces et faiblesses, avec correction instantanée et explications.', direction: 'right' as const },
              { icon: BookOpen, title: 'Cours Complets', desc: 'Accédez aux matières, chapitres et leçons du Bac et du GCE A-Level, structurés et clairs.', direction: 'bottom' as const },
              { icon: BarChart3, title: 'Progression', desc: 'Suivez vos progrès en temps réel, identifiez vos points faibles et concentrez-vous sur l\'essentiel.', direction: 'left' as const },
              { icon: Globe, title: 'Bilingue FR/EN', desc: 'Basculez entre français et anglais à tout moment. Tout le contenu est traduit.', direction: 'right' as const },
              { icon: Users, title: 'Parrainage', desc: 'Invitez vos amis et gagnez des jours Premium. 1 ami = 7 jours, 5 amis = 1 mois.', direction: 'bottom' as const },
            ].map((f, i) => (
              <RevealOnScroll
                key={i}
                direction={f.direction}
                delay={i * 120}
                className="h-full"
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                      <f.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">{f.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">{f.desc}</p>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="nos-offres" className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Nos Offres</h2>
            <p className="text-slate-600 dark:text-slate-300">Choisissez le plan qui correspond à vos besoins.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <RevealOnScroll direction="left" delay={0} className="h-full">
              <Card className="h-full">
                <CardContent className="pt-6 flex h-full flex-col">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Gratuit</h3>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mt-2">0 <span className="text-sm font-normal text-slate-500">FCFA/mois</span></div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Révisions illimitées</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Accès aux cours</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Quiz standards</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> 10 questions IA/jour</li>
                  </ul>
                  <div className="mt-auto">
                    <Link href="/auth/signup">
                      <Button className="w-full" variant="outline">Commencer</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </RevealOnScroll>
            <RevealOnScroll direction="bottom" delay={120} className="h-full">
              <Card className="h-full border-blue-500">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Populaire
                </div>
                <CardContent className="pt-6 flex h-full flex-col">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Premium Étudiant</h3>
                  <div className="text-3xl font-bold text-blue-600 mt-2">2 500 <span className="text-sm font-normal text-slate-500">FCFA/mois</span></div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Tout Gratuit +</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> IA illimitée</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Quiz personnalisés</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Plans de révision</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Simulations d'examens</li>
                  </ul>
                  <div className="mt-auto">
                    <Link href="/auth/signup">
                      <Button className="w-full">S'abonner</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </RevealOnScroll>
            <RevealOnScroll direction="right" delay={240} className="h-full">
              <Card className="h-full">
                <CardContent className="pt-6 flex h-full flex-col">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Premium Excellence</h3>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mt-2">5 000 <span className="text-sm font-normal text-slate-500">FCFA/mois</span></div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Tout Premium +</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Coach IA avancé</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Prévisions de notes</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Assistance prioritaire</li>
                  </ul>
                  <div className="mt-auto">
                    <Link href="/auth/signup">
                      <Button className="w-full" variant="outline">S'abonner</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 px-4">
        <RevealOnScroll direction="left" delay={0} className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-white">
            <Sparkles className="h-5 w-5 text-blue-600" /> WhiteDuke
          </div>
          <p className="text-sm text-slate-500">© 2026 WhiteDuke. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <Link href="/auth/login" className="text-sm text-slate-600 hover:text-slate-900">Connexion</Link>
            <Link href="/auth/signup" className="text-sm text-slate-600 hover:text-slate-900">Inscription</Link>
          </div>
        </RevealOnScroll>
      </footer>
    </div>
  );
}
