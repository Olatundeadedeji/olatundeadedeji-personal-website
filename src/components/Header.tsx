'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useClickTracking } from '@/hooks/useAnalytics';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { trackLinkClick, trackButtonClick } = useClickTracking();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-base-100/70 border-b border-slate-200/70 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">
            <span aria-hidden="true" className="inline-grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-brand to-accent text-white shadow-soft">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="currentColor" d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zm0 2.2L6 8v8l6 3.3L18 16V8l-6-2.8z"/>
              </svg>
            </span>
            <span className="font-semibold">Olatunde Adedeji</span>
          </Link>
          
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent" 
            aria-controls="mobile-nav" 
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close main menu" : "Open main menu"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
              <path fill="currentColor" d="M3 6h18M3 12h18M3 18h18"/>
            </svg>
          </button>
          
          <nav className="hidden md:block" aria-label="Primary">
            <ul className="flex gap-6">
              <li><Link className="link-underline px-1 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href="/about">About</Link></li>
              <li><Link className="link-underline px-1 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href="/services">Services</Link></li>
              <li><Link className="link-underline px-1 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href="/books">Books</Link></li>
              <li><Link className="link-underline px-1 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href="/blog">Blog</Link></li>
              <li><Link className="link-underline px-1 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href="/projects">Projects</Link></li>
              <li><Link className="link-underline px-1 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
        
        <nav id="mobile-nav" className="md:hidden" hidden={!mobileMenuOpen} aria-label="Mobile">
          <ul className="py-2">
            <li><Link className="block px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-900 rounded" href="/about">About</Link></li>
            <li><Link className="block px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-900 rounded" href="/services">Services</Link></li>
            <li><Link className="block px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-900 rounded" href="/books">Books</Link></li>
            <li><Link className="block px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-900 rounded" href="/blog">Blog</Link></li>
            <li><Link className="block px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-900 rounded" href="/projects">Projects</Link></li>
            <li><Link className="block px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-900 rounded" href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
