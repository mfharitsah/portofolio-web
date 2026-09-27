'use client';

import { highlights, siteConfig } from '@/app/data/portfolio';
import { assets } from '@/assets/assets';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const typewriterWords = ['software.', 'data.', 'AI.'];

const TypewriterWord = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const currentWord = typewriterWords[wordIndex];

  useEffect(() => {
    let delay = isDeleting ? 55 : 95;

    if (!isDeleting && characterCount === currentWord.length) {
      delay = 1500;
    } else if (isDeleting && characterCount === 0) {
      delay = 320;
    }

    const timeout = window.setTimeout(() => {
      if (!isDeleting && characterCount === currentWord.length) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && characterCount === 0) {
        setWordIndex((current) => (current + 1) % typewriterWords.length);
        setIsDeleting(false);
        return;
      }

      setCharacterCount((current) => current + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [characterCount, currentWord, isDeleting]);

  return (
    <span className="inline-flex min-w-[9ch] items-baseline text-blue-700 dark:text-blue-300">
      {currentWord.slice(0, characterCount)}
      <span
        className="ml-1 inline-block h-[0.9em] w-0.5 animate-pulse bg-blue-600 align-baseline dark:bg-blue-300"
        aria-hidden="true"
      />
    </span>
  );
};

const Header = () => {
  return (
    <section
      id="top"
      className="section-shell relative grid min-h-screen items-center gap-14 pb-20 pt-32 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20"
    >
      <div className="absolute left-[-12rem] top-24 -z-10 size-[30rem] rounded-full bg-blue-300/35 blur-3xl dark:bg-blue-600/15" />
      <div className="absolute -right-56 top-16 -z-10 size-[32rem] rounded-full bg-navy-700/15 blur-3xl dark:bg-blue-500/10" />

      <div>
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-7 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/70"
        >
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
          </span>
          Software Engineer at AstraZeneca
        </motion.div>

        <motion.p
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="eyebrow"
        >
          {siteConfig.name} · {siteConfig.location}
        </motion.p>

        <motion.h1
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.14 }}
          className="mt-5 max-w-4xl font-lora text-5xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl"
        >
          <span className="sr-only">
            Building real-world solutions with software, data, and AI.
          </span>
          <span aria-hidden="true">
            Building real-world solutions with <TypewriterWord />
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-white/65 md:text-xl"
        >
          Software engineer working across product engineering, enterprise
          systems, and the modern web—with experience in healthcare,
          telecommunications, energy, and higher education.
        </motion.p>

        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <a href="#work" className="button-primary">
            Explore selected work <span aria-hidden="true">↓</span>
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            className="button-secondary"
          >
            View LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a
            href={siteConfig.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-3 text-sm font-semibold text-slate-600 transition hover:text-blue-700 dark:text-white/60 dark:hover:text-blue-300"
          >
            Résumé ↗
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative mx-auto w-full max-w-md"
      >
        <div className="absolute -inset-4 rotate-3 rounded-[2.5rem] border border-blue-300 bg-blue-100 dark:border-blue-400/30 dark:bg-blue-500/10" />
        <div className="absolute -bottom-16 -right-16 -z-10 size-56 rounded-full bg-blue-500/25 blur-3xl dark:bg-blue-400/15" />
        <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-slate-100 shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-white/5">
          <Image
            src={assets.harris_rectangle}
            alt="Muhammad Fahish Haritsah Bimo"
            priority
            sizes="(max-width: 1024px) 90vw, 420px"
            className="aspect-[4/5] w-full object-cover object-top"
          />
          <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/60 bg-white/85 p-4 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-slate-950/80">
            <p className="text-sm font-semibold">Harris</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-white/60">
              Engineer · Builder · Curious problem solver
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 dark:border-white/10 dark:bg-white/10 sm:grid-cols-3 lg:col-span-2"
      >
        {highlights.map((highlight) => (
          <div
            key={highlight.label}
            className="bg-white/90 p-6 dark:bg-navy-900"
          >
            <p className="font-lora text-3xl font-semibold tracking-tight text-navy-700 dark:text-blue-300">
              {highlight.value}
            </p>
            <p className="mt-2 max-w-[15rem] text-sm leading-6 text-slate-600 dark:text-white/55">
              {highlight.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Header;
