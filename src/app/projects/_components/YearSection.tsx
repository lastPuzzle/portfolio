'use client';

import { Project } from '@/lib/data/projects';
import ProjectCard from './ProjectCard';

interface YearSectionProps {
  year: number;
  projects: Project[];
}

export default function YearSection({ year, projects }: YearSectionProps) {
  return (
    <section className="relative space-y-4">
      <h2 className="text-md font-bold text-gray-900 dark:text-white">
        {year}년
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project) => (
          <div key={project.id} className="group relative">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
