import React from 'react';
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { IProject } from '@/types';
import { format } from "date-fns";
import Link from 'next/link';
import { Button } from '../ui/button';

interface IProps {
    project: IProject
}

const ProjectCard = ({ project }: IProps) => {
    return (
        <div>
            <Image width={500} height={500} className="object-cover object-center w-full h-44 rounded-lg" src={project.thumbnail} alt="" />

            <div className="mt-8">

                <h1 className="mt-4 text-xl font-semibold">
                    {project.title}
                </h1>

                <p className="mt-2 text-muted-foreground">
                    {project.description.slice(0, 100)}{"..."}
                </p>

                <div className="flex items-center justify-between mt-4">
                    <p className="text-sm text-muted-foreground">{format(new Date(project?.createdAt), "MMM dd, yyyy")}</p>
                    <Link href={`/projects/${project.slug}`}>
                        <Button className="p-3 bg-primary text-muted rounded-full hover:bg-muted hover:text-muted-foreground">
                            <ArrowRight size={18} />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;