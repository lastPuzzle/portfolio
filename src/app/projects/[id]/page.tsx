import Layout from '@/components/layout/layout';
import ProjectDetail from '../_components/ProjectDetail';
import { getProjectById, projects } from '@/lib/data/projects';
import { notFound } from 'next/navigation';

import type { Metadata } from 'next';

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const project = getProjectById(params.id);

  if (!project) {
    return {
      title: '프로젝트를 찾을 수 없습니다',
    };
  }

  return {
    title: `${project.title} - 프로젝트`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <Layout>
      <ProjectDetail project={project} />
    </Layout>
  );
}
