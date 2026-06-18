import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Sparkles, BookOpen, Trophy, Zap, Globe, Shield, Users, BarChart3,
  ChevronRight, Star, CheckCircle2
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 pt-20 pb-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 text-sm font-medium text-blue-700 dark:text-blue-300 mb-6">
            <Zap className="h-4 w-4" />
            <span>AI-Powered Education for Africa</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            WhiteDuke
            <span className="block text-blue-600 mt-2">Votre Tuteur IA Adaptatif</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300 mb-10">
            Préparez le Baccalauréat et le GCE A-Level avec un coaching personnalisé, des quiz adaptatifs et des explications pas à pas en français et en anglais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="gap-2 text-base px-8">
                Commencer Gratuitement <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button size="lg" variant="outline" className="text-base px-8">
                Se Connecter
              </Button>
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-500">
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Révisions illimitées</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Quiz IA personnalisés</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Plans de révision</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Fonctionnalités Clés</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">Tout ce dont vous avez besoin pour réussir vos examens, propulsé par l'IA.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Sparkles, title: 'Tuteur IA', desc: 'Posez vos questions, obtenez des explications détaillées et des conseils de révision adaptés à votre niveau.' },
              { icon: Trophy, title: 'Quiz Adaptatifs', desc: 'Des quiz qui s\'ajustent à vos forces et faiblesses, avec correction instantanée et explications.' },
              { icon: BookOpen, title: 'Cours Complets', desc: 'Accédez aux matières, chapitres et leçons du Bac et du GCE A-Level, structurés et clairs.' },
              { icon: BarChart3, title: 'Progression', desc: 'Suivez vos progrès en temps réel, identifiez vos points faibles et concentrez-vous sur l\'essentiel.' },
              { icon: Globe, title: 'Bilingue FR/EN', desc: 'Basculez entre français et anglais à tout moment. Tout le contenu est traduit.' },
              { icon: Users, title: 'Parrainage', desc: 'Invitez vos amis et gagnez des jours Premium. 1 ami = 7 jours, 5 amis = 1 mois.' },
            ].map((f, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                    <f.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">{f.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Nos Offres</h2>
            <p className="text-slate-600 dark:text-slate-300">Choisissez le plan qui correspond à vos besoins.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-transparent">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Gratuit</h3>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mt-2">0 <span className="text-sm font-normal text-slate-500">FCFA/mois</span></div>
                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Révisions illimitées</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Accès aux cours</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Quiz standards</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> 10 questions IA/jour</li>
                </ul>
                <Link href="/auth/signup">
                  <Button className="w-full mt-6" variant="outline">Commencer</Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-500 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Populaire
              </div>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Premium Étudiant</h3>
                <div className="text-3xl font-bold text-blue-600 mt-2">2 500 <span className="text-sm font-normal text-slate-500">FCFA/mois</span></div>
                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Tout Gratuit +</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> IA illimitée</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Quiz personnalisés</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Plans de révision</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Simulations d'examens</li>
                </ul>
                <Link href="/auth/signup">
                  <Button className="w-full mt-6">S'abonner</Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="border-2 border-transparent">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Premium Excellence</h3>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mt-2">5 000 <span className="text-sm font-normal text-slate-500">FCFA/mois</span></div>
                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Tout Premium +</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Coach IA avancé</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Prévisions de notes</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Assistance prioritaire</li>
                </ul>
                <Link href="/auth/signup">
                  <Button className="w-full mt-6" variant="outline">S'abonner</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-white">
            <Sparkles className="h-5 w-5 text-blue-600" /> WhiteDuke
          </div>
          <p className="text-sm text-slate-500">© 2026 WhiteDuke. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <Link href="/auth/login" className="text-sm text-slate-600 hover:text-slate-900">Connexion</Link>
            <Link href="/auth/signup" className="text-sm text-slate-600 hover:text-slate-900">Inscription</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
