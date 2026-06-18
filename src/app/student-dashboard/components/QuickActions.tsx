import React from 'react';
import Link from 'next/link';
import { Brain, ClipboardList, BookOpen, Users } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


const actions = [
  {
    id: 'qa-tutor',
    label: 'Tuteur IA',
    icon: Brain,
    href: '/ai-tutor-chat',
    color: 'bg-primary/15 text-primary-light border-primary/20 hover:bg-primary/25',
  },
  {
    id: 'qa-quiz',
    label: 'Quiz',
    icon: ClipboardList,
    href: '/student-dashboard',
    color: 'bg-accent/15 text-accent border-accent/20 hover:bg-accent/25',
  },
  {
    id: 'qa-exam',
    label: 'Examen blanc',
    icon: BookOpen,
    href: '/student-dashboard',
    color: 'bg-success/15 text-success border-success/20 hover:bg-success/25',
  },
  {
    id: 'qa-parent',
    label: 'Espace parent',
    icon: Users,
    href: '/student-dashboard',
    color: 'bg-info/15 text-info border-info/20 hover:bg-info/25',
  },
];

export default function QuickActions() {
  return (
    <div className="hidden sm:flex items-center gap-2">
      {actions?.map((action) => {
        const Icon = action?.icon;
        return (
          <Link
            key={action?.id}
            href={action?.href}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-600 transition-all duration-150 active:scale-[0.97] ${action?.color}`}
          >
            <Icon size={13} />
            <span className="hidden lg:inline">{action?.label}</span>
          </Link>
        );
      })}
    </div>
  );
}