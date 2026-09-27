'use client';

import { navItems, siteConfig } from '@/app/data/portfolio';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [theme, setTheme] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(savedTheme ?? (prefersDark ? 'dark' : 'light'));
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!theme) return;
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', theme);
  }, [isDarkMode, theme]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-blue-100/80 bg-[#f4f7fb]/85 shadow-sm backdrop-blur-xl dark:border-blue-300/10 dark:bg-darkTheme/85'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="section-shell flex h-20 items-center justify-between"
        aria-label="Primary navigation"
      >
        <Link href="/" className="text-xl font-bold tracking-[-0.04em]" aria-label="Harris, back to home">
          HARRIS<span className="text-blue-600 dark:text-blue-300">.</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.link}
                className="text-sm font-medium text-slate-600 transition hover:text-blue-700 dark:text-white/65 dark:hover:text-blue-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() =>
              setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
            }
            className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white/70 transition hover:border-slate-400 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/30"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="size-5"
            />
          </button>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            className="button-secondary hidden py-2.5 lg:inline-flex"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white/70 md:hidden dark:border-white/10 dark:bg-white/5"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
          >
            <Image
              src={
                isMenuOpen
                  ? isDarkMode
                    ? assets.close_white
                    : assets.close_black
                  : isDarkMode
                    ? assets.menu_white
                    : assets.menu_black
              }
              alt=""
              className="size-5"
            />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-blue-100 bg-[#f4f7fb]/95 backdrop-blur-xl transition-[max-height] duration-300 dark:border-blue-300/10 dark:bg-darkTheme/95 md:hidden ${
          isMenuOpen ? 'max-h-96' : 'max-h-0 border-transparent'
        }`}
      >
        <ul className="section-shell flex flex-col py-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.link}
                onClick={() => setIsMenuOpen(false)}
                className="block border-b border-slate-200 py-4 text-lg font-medium last:border-0 dark:border-white/10"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
