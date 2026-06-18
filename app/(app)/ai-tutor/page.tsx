'use client';

import { useEffect, useState, useRef } from 'react';
import { useApp } from '@/app/providers';
import { useTranslation } from '@/lib/i18n';
import { createClient } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import { Send, Sparkles, Loader2, User, Plus, Clock, MessageSquare, BookOpen, Trophy, Target } from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  created_at?: string;
}

export default function AITutorPage() {
  const { user, profile, locale } = useApp();
  const { t } = useTranslation(locale);
  const supabase = createClient();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessions, setSessions] = useState<any[]>([]);
  const [currentSession, setCurrentSession] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const aiDailyUsed = profile?.plan !== 'free' ? 0 : 0; // simplified for demo
  const aiDailyLimit = profile?.plan === 'free' ? 10 : 999;

  useEffect(() => {
    if (!user) return;
    const load = async () => {
      const { data } = await supabase
        .from('ai_sessions')
        .select('*')
        .eq('user_id', user.id)
        .order('updated_at', { ascending: false })
        .limit(10);
      setSessions(data || []);
    };
    load();
  }, [user]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const loadSession = async (sessionId: string) => {
    const { data } = await supabase
      .from('ai_messages')
      .select('*')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: true });
    if (data) {
      setMessages(data.map((m: any) => ({ role: m.role, content: m.content })));
      setCurrentSession(sessionId);
    }
  };

  const createNewSession = async () => {
    if (!user) return;
    const { data } = await supabase
      .from('ai_sessions')
      .insert({ user_id: user.id, type: 'chat', title: 'Nouvelle conversation' })
      .select()
      .single();
    if (data) {
      setSessions([data, ...sessions]);
      setCurrentSession(data.id);
      setMessages([]);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || !user) return;
    if (aiDailyUsed >= aiDailyLimit) {
      toast.error(t.errors.aiLimit);
      return;
    }

    const userMsg: ChatMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    let sessionId = currentSession;
    if (!sessionId) {
      const { data: newSession } = await supabase
        .from('ai_sessions')
        .insert({ user_id: user.id, type: 'chat', title: input.slice(0, 50) })
        .select()
        .single();
      if (newSession) {
        sessionId = newSession.id;
        setCurrentSession(sessionId);
        setSessions([newSession, ...sessions]);
      }
    }

    if (sessionId) {
      await supabase.from('ai_messages').insert({
        session_id: sessionId,
        role: 'user',
        content: input,
      });
    }

    try {
      const systemPrompt = `Tu es WhiteDuke, un tuteur IA expert pour la préparation au Baccalauréat et au GCE A-Level en Afrique. Tu réponds en ${locale === 'fr' ? 'français' : 'anglais'}. Sois pédagogique, clair, et donne des exemples concrets. Encourage l'élève et adapte ton niveau.`;

      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({ role: m.role, content: m.content })),
          systemPrompt,
        }),
      });
      const data = await res.json();
      const assistantContent = data.content || data.text || 'Désolé, je n\'ai pas pu générer de réponse.';

      setMessages((prev) => [...prev, { role: 'assistant', content: assistantContent }]);

      if (sessionId) {
        await supabase.from('ai_messages').insert({
          session_id: sessionId,
          role: 'assistant',
          content: assistantContent,
        });
        await supabase.from('ai_sessions').update({ updated_at: new Date().toISOString() }).eq('id', sessionId);
      }
    } catch (e) {
      toast.error(t.errors.generic);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto h-[calc(100vh-6rem)] flex gap-4">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col gap-2">
        <Button onClick={createNewSession} className="gap-2 w-full">
          <Plus className="h-4 w-4" /> Nouvelle conversation
        </Button>
        <div className="flex-1 overflow-y-auto space-y-1 mt-2">
          {sessions.map((s) => (
            <button
              key={s.id}
              onClick={() => loadSession(s.id)}
              className={`w-full text-left p-3 rounded-lg text-sm transition-colors ${
                currentSession === s.id ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700' : 'hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-2">
                <MessageSquare className="h-3 w-3" />
                <span className="truncate">{s.title}</span>
              </div>
              <div className="text-xs text-slate-500 mt-1">
                {new Date(s.updated_at).toLocaleDateString()}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-white dark:bg-slate-950 rounded-xl border shadow-sm overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-sm text-slate-900 dark:text-white">{t.ai.title}</h2>
              <p className="text-xs text-slate-500">{t.ai.subtitle}</p>
            </div>
          </div>
          <div className="text-xs text-slate-500">
            {t.ai.remaining}: {Math.max(0, aiDailyLimit - aiDailyUsed)}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center text-slate-500">
              <Sparkles className="h-12 w-12 mb-4 opacity-30" />
              <p className="text-lg font-medium">{t.ai.title}</p>
              <p className="text-sm max-w-md mt-2">
                Posez vos questions sur n'importe quelle matière, demandez des explications, des quiz, ou des plans de révision.
              </p>
              <div className="flex flex-wrap gap-2 mt-6 justify-center">
                {[
                  'Explique-moi la dérivation',
                  'Génère un quiz sur la physique',
                  'Plan de révision pour le Bac',
                  'Résume la révolution française',
                ].map((suggestion) => (
                  <Button key={suggestion} variant="outline" size="sm" onClick={() => { setInput(suggestion); }}>
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          )}
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.role === 'user' ? 'bg-slate-200' : 'bg-blue-600'
              }`}>
                {msg.role === 'user' ? <User className="h-4 w-4 text-slate-700" /> : <Sparkles className="h-4 w-4 text-white" />}
              </div>
              <div className={`max-w-[80%] rounded-lg p-3 text-sm ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100'
              }`}>
                <div className="whitespace-pre-wrap">{msg.content}</div>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 text-sm">
                <div className="flex items-center gap-2 text-slate-500">
                  <Loader2 className="h-4 w-4 animate-spin" /> {t.ai.thinking}
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              placeholder={t.ai.placeholder}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
              className="flex-1"
              disabled={loading}
            />
            <Button onClick={sendMessage} disabled={loading || !input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
