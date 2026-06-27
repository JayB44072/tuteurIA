'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useApp } from '@/app/providers';
import { useTranslation } from '@/lib/i18n';
import { createClient } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import {
  CheckCircle2, XCircle, ArrowLeft, ArrowRight, Trophy, Clock,
  Sparkles, AlertTriangle, BookOpen, RotateCcw, Home
} from 'lucide-react';

export default function QuizTakePage() {
  const params = useParams();
  const router = useRouter();
  const { user, locale } = useApp();
  const { t } = useTranslation(locale);
  const supabase = createClient();

  const [quiz, setQuiz] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [startTime] = useState(Date.now());
  const [timeSpent, setTimeSpent] = useState(0);
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [aiLoading, setAiLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      const { data: quizData } = await supabase.from('quizzes').select('*, subjects(name_fr, name_en)').eq('id', params.id).single();
      setQuiz(quizData);
      const { data: questionsData } = await supabase.from('quiz_questions').select('*').eq('quiz_id', params.id).order('order_index');
      setQuestions(questionsData || []);
      setLoading(false);
    };
    load();
  }, [params.id]);

  const handleSelect = (questionId: string, answerIndex: number) => {
    if (submitted) return;
    setSelectedAnswers({ ...selectedAnswers, [questionId]: answerIndex });
  };

  const handleSubmit = async () => {
    if (Object.keys(selectedAnswers).length < questions.length) {
      toast.error('Veuillez répondre à toutes les questions');
      return;
    }
    const spent = Math.floor((Date.now() - startTime) / 1000);
    setTimeSpent(spent);

    let score = 0;
    const answers: any[] = [];
    questions.forEach((q) => {
      const isCorrect = selectedAnswers[q.id] === q.correct_answer;
      if (isCorrect) score++;
      answers.push({
        question_id: q.id,
        selected_answer: selectedAnswers[q.id],
        is_correct: isCorrect,
      });
    });

    if (user) {
      const { data: attempt } = await supabase.from('quiz_attempts').insert({
        user_id: user.id,
        quiz_id: params.id,
        score,
        total_questions: questions.length,
        time_spent_seconds: spent,
        completed: true,
      }).select().single();

      if (attempt) {
        await supabase.from('quiz_answers').insert(
          answers.map((a) => ({ ...a, attempt_id: attempt.id }))
        );
      }
    }

    setResults({ score, total: questions.length, percentage: Math.round((score / questions.length) * 100), answers });
    setSubmitted(true);
  };

  const getAiExplanation = async (question: any) => {
    setAiLoading(true);
    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'user', content: `Explique cette question d'examen: "${locale === 'fr' ? question.question_fr : question.question_en}". La bonne réponse est l'option ${question.correct_answer + 1}. Donne une explication détaillée pour un élève de lycée.` }],
        }),
      });
      const data = await res.json();
      setAiExplanation(data.content || data.text || 'Pas d\'explication disponible');
    } catch {
      setAiExplanation('Erreur lors de la génération de l\'explication');
    }
    setAiLoading(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;
  const allAnswered = Object.keys(selectedAnswers).length === questions.length;

  if (submitted && results) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center">
          <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${results.percentage >= 60 ? 'bg-green-100' : 'bg-red-100'}`}>
            <Trophy className={`h-10 w-10 ${results.percentage >= 60 ? 'text-green-600' : 'text-red-600'}`} />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t.quiz.results}</h1>
          <p className="text-4xl font-bold mt-2 text-slate-900 dark:text-white">{results.percentage}%</p>
          <p className="text-slate-600 dark:text-slate-300 mt-1">
            {results.score} / {results.total} {t.quiz.correct}
          </p>
          <div className="flex items-center justify-center gap-2 mt-2 text-sm text-slate-500">
            <Clock className="h-4 w-4" /> {Math.floor(timeSpent / 60)}m {timeSpent % 60}s
          </div>
        </div>

        <div className="space-y-4">
          {questions.map((q, i) => {
            const selected = selectedAnswers[q.id];
            const isCorrect = selected === q.correct_answer;
            return (
              <Card key={q.id} className={isCorrect ? 'border-green-200' : 'border-red-200'}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-2 mb-3">
                    {isCorrect ? <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" /> : <XCircle className="h-5 w-5 text-red-500 mt-0.5" />}
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">{t.quiz.question} {i + 1}</p>
                      <p className="text-slate-700 dark:text-slate-300 mt-1">{locale === 'fr' ? q.question_fr : q.question_en}</p>
                    </div>
                  </div>
                  <div className="ml-7 space-y-1">
                    {q.options.map((opt: string, idx: number) => (
                      <div key={idx} className={`flex items-center gap-2 p-2 rounded text-sm ${
                        idx === q.correct_answer ? 'bg-green-50 dark:bg-green-900/20 text-green-700' :
                        idx === selected && idx !== q.correct_answer ? 'bg-red-50 dark:bg-red-900/20 text-red-700' :
                        'text-slate-600'
                      }`}>
                        <span className="font-medium">{String.fromCharCode(65 + idx)}.</span> {opt}
                      </div>
                    ))}
                  </div>
                  <div className="ml-7 mt-3">
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      <span className="font-semibold">{t.quiz.explanation}:</span> {locale === 'fr' ? q.explanation_fr : q.explanation_en}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex gap-3 justify-center">
          <Link href="/quiz">
            <Button variant="outline" className="gap-2">
              <RotateCcw className="h-4 w-4" /> {t.quiz.newQuiz}
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button className="gap-2">
              <Home className="h-4 w-4" /> Dashboard
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Link href="/quiz">
          <Button variant="ghost" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4" /> {t.common.back}
          </Button>
        </Link>
        <div className="flex items-center gap-2">
          <Badge variant="outline">{t.quiz.question} {currentIndex + 1} {t.quiz.of} {questions.length}</Badge>
          <Badge variant="outline" className="capitalize">{quiz?.difficulty}</Badge>
        </div>
      </div>

      <Progress value={((currentIndex + 1) / questions.length) * 100} className="h-2" />

      {currentQuestion && (
        <Card className="shadow-lg">
          <CardContent className="pt-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
              {locale === 'fr' ? currentQuestion.question_fr : currentQuestion.question_en}
            </h2>
            <div className="space-y-3">
              {(currentQuestion.options as string[]).map((opt: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(currentQuestion.id, idx)}
                  className={`w-full flex items-center gap-3 p-4 rounded-lg border-2 text-left transition-all ${
                    selectedAnswers[currentQuestion.id] === idx
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    selectedAnswers[currentQuestion.id] === idx
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </div>
                  <span className="text-slate-700 dark:text-slate-200">{opt}</span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex(currentIndex - 1)}
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> {t.quiz.previous}
        </Button>

        {isLast ? (
          <Button onClick={handleSubmit} disabled={!allAnswered} className="gap-2">
            <CheckCircle2 className="h-4 w-4" /> {t.quiz.finish}
          </Button>
        ) : (
          <Button
            onClick={() => setCurrentIndex(currentIndex + 1)}
            disabled={selectedAnswers[currentQuestion?.id] === undefined}
          >
            {t.quiz.next} <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}
