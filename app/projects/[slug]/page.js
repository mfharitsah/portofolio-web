import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import ProjectGallery from '@/app/components/ProjectGallery';
import {
  getNextProject,
  getProjectBySlug,
  projects,
} from '@/app/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const generateStaticParams = () =>
  projects.map((project) => ({ slug: project.slug }));

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.intro,
    openGraph: {
      title: `${project.title} — Harris`,
      description: project.intro,
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const nextProject = getNextProject(project.slug);
  const metadata = [
    { label: 'Role', value: project.role },
    { label: 'Timeline', value: project.timeline },
    { label: 'Team', value: project.team },
    { label: 'Stack', value: project.stack.join(', ') },
  ];

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden pb-24 pt-28 md:pb-32 md:pt-36">
        <div
          className="absolute -right-56 top-10 -z-10 size-[34rem] rounded-full bg-blue-300/25 blur-3xl dark:bg-blue-500/10"
          aria-hidden="true"
        />

        <div className="section-shell grid gap-10 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-12">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-blue-700 dark:text-white/50 dark:hover:text-blue-300"
              >
                <span aria-hidden="true">←</span> All projects
              </Link>

              <nav
                className="mt-10 border-l border-blue-100 pl-5 dark:border-blue-300/10"
                aria-label="Project detail sections"
              >
                <a
                  href="#overview"
                  className="block py-2 text-sm font-semibold text-blue-700 transition hover:translate-x-1 dark:text-blue-300"
                >
                  Overview
                </a>
                <a
                  href="#solution-impact"
                  className="block py-2 text-sm font-semibold text-slate-500 transition hover:translate-x-1 hover:text-blue-700 dark:text-white/45 dark:hover:text-blue-300"
                >
                  Solution &amp; impact
                </a>
              </nav>
            </div>
          </aside>

          <article className="min-w-0">
            <Link
              href="/projects"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-blue-700 dark:text-white/50 dark:hover:text-blue-300 lg:hidden"
            >
              <span aria-hidden="true">←</span> All projects
            </Link>

            <header className="max-w-4xl">
              <p className="eyebrow">{project.category}</p>
              <h1 className="mt-4 font-lora text-5xl font-medium leading-none tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-white/65 md:text-xl">
                {project.intro}
              </p>
            </header>

            <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-100 via-blue-50 to-white shadow-xl shadow-blue-950/10 dark:border-blue-300/10 dark:from-navy-800 dark:via-blue-950/50 dark:to-darkTheme">
              {project.cover ? (
                <Image
                  src={project.cover}
                  alt={project.coverAlt ?? `${project.title} project cover`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 960px"
                  className="object-contain p-3 md:p-5"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <span className="font-lora text-5xl font-semibold tracking-[-0.05em] text-navy-900/75 dark:text-white/75 md:text-7xl">
                    {project.title}
                  </span>
                </div>
              )}
            </div>

            <dl className="mt-6 grid overflow-hidden rounded-2xl border border-blue-100 bg-white/70 dark:border-blue-300/10 dark:bg-blue-300/[0.035] sm:grid-cols-2 xl:grid-cols-4">
              {metadata.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-blue-100 p-5 last:border-0 dark:border-blue-300/10 sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0 xl:border-b-0 xl:border-r xl:last:border-r-0"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/65">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            {(project.links.repository || project.links.live) && (
              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="button-primary"
                  >
                    Visit live project <span aria-hidden="true">↗</span>
                  </a>
                )}
                {project.links.repository && (
                  <a
                    href={project.links.repository}
                    target="_blank"
                    rel="noreferrer"
                    className="button-secondary"
                  >
                    View repository <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            )}

            <div className="mt-20 grid gap-14 border-t border-blue-100 pt-12 dark:border-blue-300/10 lg:grid-cols-2 lg:gap-16">
              <section id="overview" className="scroll-mt-28">
                <p className="eyebrow">01</p>
                <h2 className="mt-3 font-lora text-3xl font-medium tracking-[-0.035em] md:text-4xl">
                  Overview
                </h2>
                <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 dark:text-white/65">
                  {project.overview.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>

              <section id="solution-impact" className="scroll-mt-28">
                <p className="eyebrow">02</p>
                <h2 className="mt-3 font-lora text-3xl font-medium tracking-[-0.035em] md:text-4xl">
                  Solution &amp; impact
                </h2>
                <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 dark:text-white/65">
                  {project.solutionImpact.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {project.impactPoints.length > 0 && (
                  <ul className="mt-7 space-y-3">
                    {project.impactPoints.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-white/65"
                      >
                        <span
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-300"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </div>

            <ProjectGallery
              images={project.gallery}
              projectTitle={project.title}
            />

            <Link
              href={`/projects/${nextProject.slug}`}
              className="group mt-20 flex flex-col justify-between gap-6 rounded-3xl border border-blue-100 bg-white/70 p-7 transition hover:border-blue-300 hover:shadow-xl hover:shadow-blue-950/10 dark:border-blue-300/10 dark:bg-blue-300/[0.035] dark:hover:border-blue-300/30 sm:flex-row sm:items-end md:p-10"
            >
              <div>
                <p className="eyebrow">Next project</p>
                <p className="mt-3 font-lora text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                  {nextProject.title}
                </p>
              </div>
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-blue-700 text-xl text-white transition duration-300 group-hover:translate-x-1 dark:bg-blue-300 dark:text-navy-950">
                →
              </span>
            </Link>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
