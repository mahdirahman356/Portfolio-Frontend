import ProjectDetailsCard from '@/components/modules/ProjectDetailsCard';
import React from 'react';

const ProjectDetailsPage = async ({ params }: { params: Promise<{ projectId: string }> }) => {

    const { projectId } = await params
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${projectId}`)
    const project = await res.json()

    return (
        <div className="py-6 md:py-16 px-6">
            <ProjectDetailsCard project={project}/>
        </div>
    );
};

export default ProjectDetailsPage;