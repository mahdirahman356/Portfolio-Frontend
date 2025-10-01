import ProjectDetailsCard from '@/components/modules/ProjectDetailsCard';
import React from 'react';


export const generateStaticParams = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`)
    const data = await res.json()

    const projects = data?.data || data

    return projects.map((project: { slug: string }) => ({
        projectSlug: project.slug
    }))
}

const ProjectDetailsPage = async ({ params }: { params: Promise<{ projectSlug: string }> }) => {

    const { projectSlug } = await params
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${projectSlug}`)
    const project = await res.json()

    return (
        <div className="py-6 md:py-16 px-6">
            <ProjectDetailsCard project={project}/>
        </div>
    );
};

export default ProjectDetailsPage;