import { skillGroups } from '@/app/data/portfolio';
import { motion } from 'motion/react';

const Profile = () => {
  return (
    <section
      id="about"
      className="relative scroll-mt-28 overflow-hidden border-y border-blue-100 bg-white/65 py-24 dark:border-blue-300/10 dark:bg-blue-300/[0.025] md:py-32"
    >
      <div className="absolute -right-52 top-12 size-[30rem] rounded-full bg-blue-300/20 blur-3xl dark:bg-blue-500/10" aria-hidden="true" />
      <div className="section-shell relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">About</p>
          <h2 className="section-title mt-3">
            From ideas to systems
people actually use.
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="space-y-5 text-lg leading-8 text-slate-600 dark:text-white/65">
            <p>
              I’m a Computer Engineering graduate from Universitas Indonesia, engineering across software, data, and AI to turn real-world problems into practical digital solutions. My work spans <span className='text-blue-900 font-bold dark:text-white'>full-stack applications, backend services, automation, data platforms, and AI-powered systems</span>.
            </p>
          </div>

          <aside className="mt-8 rounded-2xl border-l-4 border-blue-700 bg-blue-50 p-6 shadow-lg shadow-blue-950/5 dark:border-blue-300 dark:bg-blue-400/10 dark:shadow-blue-500/5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-navy-700 dark:text-blue-300">
              A result I’m proud of
            </p>
            <p className="mt-3 text-lg leading-8 text-slate-700 dark:text-white/75">
              Built a full-stack media monitoring platform that combines real-time news collection with LLM-powered summarization, reducing a daily manual workflow by up to 80%.
            </p>
          </aside>
        </motion.div>
      </div>

      <div className="section-shell relative mt-16 grid gap-4 md:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.label}
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="rounded-2xl border border-blue-100 bg-white/75 p-6 shadow-sm shadow-blue-950/5 dark:border-blue-300/10 dark:bg-blue-300/[0.035]"
          >
            <p className="text-sm font-semibold text-slate-950 dark:text-white">
              {group.label}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Profile;
