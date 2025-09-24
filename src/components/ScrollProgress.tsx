'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrolled = (document.documentElement.scrollTop) / 
        (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
      setProgress(scrolled);
    };

    document.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress(); // Initial call

    return () => document.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div 
      id="scroll-progress" 
      aria-hidden="true" 
      className="fixed top-0 left-0 right-0 h-1 z-[60]"
      style={{
        background: `linear-gradient(90deg, #2563EB ${progress}%, transparent ${progress}%)`
      }}
    >
      <span className="sr-only">Page scroll progress</span>
    </div>
  );
}
