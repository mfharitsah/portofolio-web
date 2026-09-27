import { experienceData } from '@/app/data/portfolio';
import { motion } from 'motion/react';

const Experience = () => {
  return (
    <section id="experience" className="section-shell relative scroll-mt-28 overflow-hidden py-24 md:py-32">
      <div className="absolute -left-52 top-24 -z-10 size-[28rem] rounded-full bg-blue-300/20 blur-3xl dark:bg-blue-600/10" aria-hidden="true" />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-12 max-w-3xl"
      >
        <p className="eyebrow">Experience</p>
        <h2 className="section-title mt-3">
          From public platforms to enterprise engineering.
        </h2>
        <p className="section-copy mt-5">
          A growing track record across healthcare, telecommunications, energy,
          and higher education, grounded in hands-on software delivery.
        </p>
      </motion.div>

      <div className="relative border-t border-blue-100 dark:border-blue-300/10">
        {experienceData.map((experience, index) => (
          <motion.article
            key={`${experience.company}-${experience.period}`}
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="grid gap-4 border-b border-blue-100 py-8 dark:border-blue-300/10 md:grid-cols-[0.75fr_1fr_1.5fr] md:gap-10 md:py-10"
          >
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-white/50">
                {experience.period}
              </p>
              <p className="mt-1 text-sm text-slate-400 dark:text-white/35">
                {experience.location}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-semibold tracking-tight">
                  {experience.role}
                </h3>
                {experience.current && (
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-400/15 dark:text-emerald-300">
                    Current
                  </span>
                )}
              </div>
              <p className="mt-1 text-slate-600 dark:text-white/65">
                {experience.company}
              </p>
            </div>

            <div>
              <p className="leading-7 text-slate-600 dark:text-white/65">
                {experience.summary}
              </p>
              {experience.tags && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
