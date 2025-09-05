'use client';

import { getProjectsByYear } from '@/lib/data/projects';
import YearSection from './YearSection';

export default function ProjectList() {
  const projectsByYear = getProjectsByYear();

  return (
    <div className="space-y-12">
      {Object.entries(projectsByYear)
        .sort(([a], [b]) => Number(b) - Number(a))
        .map(([year, projects]) => (
          <YearSection key={year} year={Number(year)} projects={projects} />
        ))}
    </div>
  );
}
