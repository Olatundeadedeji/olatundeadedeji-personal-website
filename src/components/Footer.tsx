'use client';

import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            &copy; {currentYear} Olatunde Adedeji. All rights reserved.
          </p>
          <ul className="flex gap-4" aria-label="Social links">
            <li>
              <a 
                className="link-underline" 
                href="https://github.com/Olatundeadedeji" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="link-underline"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
