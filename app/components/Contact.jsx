import { siteConfig } from '@/app/data/portfolio';
import { motion } from 'motion/react';

const Contact = () => {
  return (
    <section id="contact" className="section-shell scroll-mt-28 py-24 md:py-32">
      <motion.div
        initial={{ y: 28, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[2rem] bg-navy-950 px-6 py-16 text-white shadow-2xl shadow-blue-950/20 dark:border dark:border-blue-300/15 dark:shadow-blue-500/5 md:px-14 md:py-20"
      >
        <div className="absolute -right-28 -top-28 size-80 rounded-full bg-blue-500/35 blur-3xl" />
        <div className="absolute -bottom-36 left-1/3 size-72 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="relative max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">
            Let’s connect
          </p>
          <h2 className="mt-4 font-lora text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
            Have a complex problem worth solving?
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            I’m always open to thoughtful conversations about software
            engineering, product challenges, and opportunities to build systems
            that matter.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={'mailto:' + siteConfig.email}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-400/20"
            >
              Email me <span aria-hidden="true">↗</span>
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/60"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/60"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
