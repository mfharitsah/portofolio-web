'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects, groups }) => {
  const [activeGroup, setActiveGroup] = useState('All');
  const visibleProjects =
    activeGroup === 'All'
      ? projects
      : projects.filter((project) => project.group === activeGroup);

  return (
    <>
      <div
        className="mb-10 flex flex-wrap gap-2"
        aria-label="Filter projects by category"
      >
        {groups.map((group) => (
          <button
            key={group}
            type="button"
            onClick={() => setActiveGroup(group)}
            aria-pressed={activeGroup === group}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              activeGroup === group
                ? 'border-blue-700 bg-blue-700 text-white shadow-md shadow-blue-900/15 dark:border-blue-300 dark:bg-blue-300 dark:text-navy-950'
                : 'border-blue-100 bg-white/70 text-slate-600 hover:border-blue-300 hover:text-blue-700 dark:border-blue-300/10 dark:bg-blue-300/5 dark:text-white/60 dark:hover:border-blue-300/40 dark:hover:text-blue-300'
            }`}
          >
            {group}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            priority={index < 3}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectGrid;
