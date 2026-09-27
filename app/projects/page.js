import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import ProjectGrid from '@/app/components/ProjectGrid';
import { projectGroups, projects } from '@/app/data/projects';

export const metadata = {
  title: 'Projects',
  description:
    'Selected software engineering, web, mobile, and IoT projects by Muhammad Fahish Haritsah Bimo.',
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden pb-24 pt-32 md:pb-32 md:pt-40">
        <div
          className="absolute -left-52 top-20 -z-10 size-[32rem] rounded-full bg-blue-300/25 blur-3xl dark:bg-blue-600/10"
          aria-hidden="true"
        />
        <div
          className="absolute -right-64 top-72 -z-10 size-[36rem] rounded-full bg-navy-700/10 blur-3xl dark:bg-blue-500/10"
          aria-hidden="true"
        />

        <div className="section-shell">
          <div className="mb-14 max-w-3xl">
            <p className="eyebrow">Portfolio</p>
            <h1 className="mt-4 font-lora text-5xl font-medium leading-tight tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              All Projects
            </h1>
            <p className="section-copy mt-6">
              A growing collection of product, platform, mobile, automation,
              and connected-device work—each documented as a focused case
              study.
            </p>
          </div>

          <ProjectGrid projects={projects} groups={projectGroups} />
        </div>
      </main>
      <Footer />
    </>
  );
}
