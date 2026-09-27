import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ project, priority = false }) => {
  return (
    <article className="group overflow-hidden rounded-3xl border border-blue-100 bg-white/80 shadow-sm shadow-blue-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/10 dark:border-blue-300/10 dark:bg-navy-900 dark:hover:shadow-blue-950/30">
      <Link
        href={`/projects/${project.slug}`}
        className="block h-full"
        aria-label={`View ${project.title} project details`}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-blue-100 via-blue-50 to-white dark:from-navy-800 dark:via-blue-950/50 dark:to-darkTheme">
          {project.cover ? (
            <Image
              src={project.cover}
              alt={project.coverAlt ?? `${project.title} project preview`}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain p-2 transition duration-700 group-hover:scale-[1.02] md:p-3"
            />
          ) : (
            <div className="absolute inset-0 flex items-end p-7">
              <span className="font-lora text-4xl font-semibold tracking-[-0.05em] text-navy-900/80 dark:text-white/80">
                {project.title}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/15 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
        </div>

        <div className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
            {project.category}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-navy-950 dark:text-white">
            {project.title}
          </h3>
        </div>
      </Link>
    </article>
  );
};

export default ProjectCard;
