'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollReveal({ children, className = '' }: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check if user prefers reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) return;

    // Set initial state
    element.classList.add('opacity-0', 'translate-y-4');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.remove('opacity-0', 'translate-y-4');
            element.classList.add('animate-slide-up');
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <div ref={elementRef} className={`transition-all duration-700 ${className}`}>
      {children}
    </div>
  );
}
