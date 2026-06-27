'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type Direction = 'bottom' | 'left' | 'right';

const directionClasses: Record<Direction, string> = {
  bottom: 'translate-y-16',
  left: '-translate-x-16',
  right: 'translate-x-16',
};

interface RevealOnScrollProps {
  children: React.ReactNode;
  direction?: Direction;
  className?: string;
  delay?: number;
}

export function RevealOnScroll({
  children,
  direction = 'bottom',
  className,
  delay = 0,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px 20% 0px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionProperty: 'opacity, transform',
      }}
      className={cn(
        'opacity-0 transform will-change-transform transition duration-700 ease-out',
        !isVisible && directionClasses[direction],
        isVisible && 'opacity-100 translate-x-0 translate-y-0',
        className
      )}
    >
      {children}
    </div>
  );
}
