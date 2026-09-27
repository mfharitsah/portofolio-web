import { getFeaturedProjects } from '@/app/data/projects';
import { motion } from 'motion/react';
import Link from 'next/link';
import ProjectCard from './ProjectCard';

const Works = () => {
  const featuredProjects = getFeaturedProjects().slice(0, 3);

  return (
    <section
      id="work"
      className="relative scroll-mt-28 overflow-hidden border-y border-blue-100 bg-white/65 py-24 dark:border-blue-300/10 dark:bg-blue-300/[0.025] md:py-32"
    >
      <div
        className="absolute -right-56 top-16 size-[32rem] rounded-full bg-blue-300/20 blur-3xl dark:bg-blue-500/10"
        aria-hidden="true"
      />
      <div className="section-shell relative">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="section-title mt-3">
              Projects built around real needs.
            </h2>
          </div>
          <p className="section-copy md:max-w-md">
            Three selected projects across web and mobile engineering. Open a
            project to explore its context, solution, impact, and visual work.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ y: 28, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 18, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-12 flex justify-center"
        >
          <Link href="/projects" className="button-primary">
            See all projects <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Works;
