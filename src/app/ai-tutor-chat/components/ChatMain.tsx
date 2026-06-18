'use client';

import React, { useState, useRef, useEffect } from 'react';
import { mockChatMessages } from '@/lib/mockData';
import type { AIMessage } from '@/types';
import {
  Send,
  Brain,
  Zap,
  Clock,
  BookOpen,
  Lightbulb,
  RotateCcw,
  Copy,
  ThumbsUp,
  ThumbsDown,
  Sparkles,
} from 'lucide-react';

const suggestedQuestions = [
  { id: 'sug-1', text: 'Explique-moi la règle de la chaîne avec un autre exemple' },
  { id: 'sug-2', text: 'Comment dériver sin(2x) ?' },
  { id: 'sug-3', text: 'Donne-moi un exercice d\'entraînement' },
  { id: 'sug-4', text: 'Quelle est la différence entre dérivée et primitive ?' },
];

function TypingIndicator() {
  return (
    <div className="flex items-start gap-3 animate-fade-in">
      <div className="w-8 h-8 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
        <Brain size={14} className="text-primary-light" />
      </div>
      <div className="chat-bubble-ai rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={`dot-${i}`}
              className="w-1.5 h-1.5 rounded-full bg-primary-light animate-typing"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MessageBubble({ message }: { message: AIMessage }) {
  const isAI = message.role === 'assistant';
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderContent = (content: string) => {
    return content.split('\n').map((line, lineIdx) => {
      if (line.startsWith('> ')) {
        return (
          <blockquote
            key={`line-${lineIdx}`}
            className="border-l-2 border-primary/50 pl-3 my-1.5 text-primary-light/90 italic"
          >
            {line.slice(2)}
          </blockquote>
        );
      }
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={`line-${lineIdx}`} className={lineIdx > 0 ? 'mt-1.5' : ''}>
          {parts.map((part, partIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={`part-${partIdx}`} className="font-700 text-foreground">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return <span key={`part-${partIdx}`}>{part}</span>;
          })}
        </p>
      );
    });
  };

  return (
    <div
      className={`flex items-start gap-3 group animate-fade-in ${
        isAI ? '' : 'flex-row-reverse'
      }`}
    >
      {/* Avatar */}
      {isAI ? (
        <div className="w-8 h-8 rounded-xl bg-primary/20 border border-primary/25 flex items-center justify-center flex-shrink-0 mt-0.5">
          <Brain size={14} className="text-primary-light" />
        </div>
      ) : (
        <div className="w-8 h-8 rounded-xl bg-gradient-violet flex items-center justify-center flex-shrink-0 mt-0.5 text-white text-xs font-bold">
          AD
        </div>
      )}

      {/* Bubble */}
      <div className={`flex flex-col max-w-[75%] xl:max-w-[68%] ${isAI ? '' : 'items-end'}`}>
        <div
          className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
            isAI
              ? 'chat-bubble-ai rounded-tl-sm text-foreground'
              : 'chat-bubble-user rounded-tr-sm text-foreground'
          }`}
        >
          {renderContent(message.content)}

          {/* XP award */}
          {isAI && message.xpAwarded && message.xpAwarded > 0 && (
            <div className="mt-2 pt-2 border-t border-primary/15 flex items-center gap-1.5">
              <Zap size={10} className="text-accent" />
              <span className="text-[10px] font-700 text-accent">+{message.xpAwarded} XP</span>
            </div>
          )}
        </div>

        {/* Timestamp + actions */}
        <div
          className={`flex items-center gap-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ${
            isAI ? '' : 'flex-row-reverse'
          }`}
        >
          <span className="text-[10px] text-muted-foreground">{message.timestamp}</span>
          {isAI && (
            <div className="flex items-center gap-1">
              <button
                onClick={handleCopy}
                className="p-1 rounded hover:bg-muted/40 transition-colors"
                title="Copier"
              >
                <Copy size={10} className={copied ? 'text-success' : 'text-muted-foreground'} />
              </button>
              <button className="p-1 rounded hover:bg-muted/40 transition-colors" title="Utile">
                <ThumbsUp size={10} className="text-muted-foreground hover:text-success" />
              </button>
              <button className="p-1 rounded hover:bg-muted/40 transition-colors" title="Pas utile">
                <ThumbsDown size={10} className="text-muted-foreground hover:text-error" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ChatMain() {
  const [messages, setMessages] = useState<AIMessage[]>(mockChatMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sessionXP, setSessionXP] = useState(85);
  const [sessionDuration] = useState(42);
  const [messageCount, setMessageCount] = useState(mockChatMessages.length);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = async () => {
    const trimmed = inputValue.trim();
    if (!trimmed || isTyping) return;

    const userMsg: AIMessage = {
      id: `msg-user-${Date.now()}`,
      role: 'user',
      content: trimmed,
      timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setMessageCount((c) => c + 1);
    setIsTyping(true);

    // BACKEND INTEGRATION POINT: POST /api/ai/chat with message + subject context + user history
    await new Promise((r) => setTimeout(r, 1800));

    const aiResponses = [
      'Très bonne question ! Avant de répondre directement, essayons de raisonner ensemble. Qu\'est-ce que tu comprends déjà de ce concept ?',
      'Tu es sur la bonne voie ! Pense à ce que nous avons vu précédemment sur la règle de la chaîne. Quelle est la première étape que tu appliquerais ?',
      'Intéressant ! Pour mieux t\'aider, peux-tu me montrer ce que tu as essayé de faire ? Je pourrai ainsi identifier exactement où se trouve la difficulté.',
      'Excellente approche ! Tu viens de gagner **+10 XP** 🌟 Continuons avec un exemple plus complexe pour consolider ta compréhension.',
    ];

    const randomResponse = aiResponses[Math.floor(messages.length % aiResponses.length)];
    const xpAward = 10;

    const aiMsg: AIMessage = {
      id: `msg-ai-${Date.now()}`,
      role: 'assistant',
      content: randomResponse,
      timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
      xpAwarded: xpAward,
    };

    setMessages((prev) => [...prev, aiMsg]);
    setSessionXP((prev) => prev + xpAward);
    setMessageCount((c) => c + 1);
    setIsTyping(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestion = (text: string) => {
    setInputValue(text);
    inputRef.current?.focus();
  };

  return (
    <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
      {/* Session stats bar */}
      <div className="flex items-center gap-3 px-4 lg:px-6 py-3 border-b border-border bg-card/80 backdrop-blur-sm flex-shrink-0">
        {/* Subject chip */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/15 border border-primary/20">
          <span className="text-base">∑</span>
          <div>
            <p className="text-[12px] font-700 text-primary-light leading-tight">Mathématiques</p>
            <p className="text-[10px] text-muted-foreground leading-tight">Terminale D · Dérivées</p>
          </div>
        </div>

        <div className="flex items-center gap-4 ml-auto text-xs">
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-card-elevated border border-border">
            <Clock size={12} className="text-muted-foreground" />
            <span className="text-muted-foreground">Durée :</span>
            <span className="font-700 text-foreground tabular-nums">{sessionDuration} min</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-card-elevated border border-border">
            <BookOpen size={12} className="text-muted-foreground" />
            <span className="text-muted-foreground">Messages :</span>
            <span className="font-700 text-foreground tabular-nums">{messageCount}</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-accent/10 border border-accent/20">
            <Zap size={12} className="text-accent" />
            <span className="text-muted-foreground">XP session :</span>
            <span className="font-700 text-accent tabular-nums">+{sessionXP}</span>
          </div>
          <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-muted/30 border border-border hover:bg-muted/60 text-muted-foreground hover:text-foreground transition-all duration-150">
            <RotateCcw size={12} />
            <span className="hidden sm:inline">Réinitialiser</span>
          </button>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto scrollbar-thin px-4 lg:px-8 xl:px-12 py-6 space-y-5">
        {/* Context banner */}
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card-elevated border border-border text-xs text-muted-foreground">
            <Sparkles size={11} className="text-primary-light" />
            <span>Session du 18 juin 2026 · Mathématiques Terminale D · Dérivées et fonctions composées</span>
          </div>
        </div>

        {/* AI intro card */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-primary/20 border border-primary/25 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Brain size={14} className="text-primary-light" />
          </div>
          <div className="chat-bubble-ai rounded-2xl rounded-tl-sm px-4 py-3 max-w-lg text-sm">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={12} className="text-primary-light" />
              <span className="text-[11px] font-700 text-primary-light uppercase tracking-wide">
                Tuteur IA · EduAI Prep
              </span>
            </div>
            <p className="text-foreground leading-relaxed">
              Bonjour Aminata ! Je suis ton tuteur IA pour cette session de{' '}
              <strong className="text-primary-light">Mathématiques</strong>. Mon rôle est de t&apos;accompagner
              pas à pas — je ne donnerai pas directement les réponses, mais je vais t&apos;aider à les
              trouver toi-même. C&apos;est comme ça qu&apos;on apprend vraiment ! 💪
            </p>
            <p className="text-foreground mt-2 leading-relaxed">
              Quel sujet veux-tu travailler aujourd&apos;hui ?
            </p>
          </div>
        </div>

        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}

        {isTyping && <TypingIndicator />}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested questions */}
      {!isTyping && (
        <div className="px-4 lg:px-8 xl:px-12 py-2 flex gap-2 overflow-x-auto no-scrollbar">
          {suggestedQuestions.map((q) => (
            <button
              key={q.id}
              onClick={() => handleSuggestion(q.text)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card-elevated hover:border-primary/30 hover:bg-primary/5 text-[11px] text-muted-foreground hover:text-foreground transition-all duration-150 whitespace-nowrap flex-shrink-0"
            >
              <Lightbulb size={10} className="text-accent flex-shrink-0" />
              {q.text}
            </button>
          ))}
        </div>
      )}

      {/* Input area */}
      <div className="px-4 lg:px-8 xl:px-12 py-4 border-t border-border bg-card/50 backdrop-blur-sm flex-shrink-0">
        <div className="relative flex items-end gap-3 bg-input border border-border rounded-2xl px-4 py-3 focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/20 transition-all duration-200">
          <textarea
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Pose ta question à l'IA... (Entrée pour envoyer, Maj+Entrée pour nouvelle ligne)"
            rows={1}
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none resize-none max-h-32 scrollbar-thin leading-relaxed"
            style={{ minHeight: '24px' }}
          />
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-[10px] text-muted-foreground hidden sm:block">
              {inputValue.length > 0 ? `${inputValue.length} car.` : 'Entrée ↵'}
            </span>
            <button
              onClick={handleSend}
              disabled={!inputValue.trim() || isTyping}
              className="w-9 h-9 rounded-xl bg-primary hover:bg-primary-dark disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-150 active:scale-95 shadow-violet"
            >
              {isTyping ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Send size={15} className="text-white" />
              )}
            </button>
          </div>
        </div>
        <p className="text-[10px] text-muted-foreground text-center mt-2">
          L&apos;IA guide sans donner les réponses directement · Session sécurisée · Données privées
        </p>
      </div>
    </div>
  );
}