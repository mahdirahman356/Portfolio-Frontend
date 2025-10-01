import { IProject } from "@/types";
import { ArrowRight, CircleSmall } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface IProps {
    project: IProject
}

const ProjectDetailsCard = ({ project }: IProps) => {
    return (
        <div className="max-w-xl mx-auto">
            <h1 className="text-4xl font-semibold mb-6">
                {project.title}
            </h1>
            <Image width={500} height={500} className="object-cover object-center w-full h-52 rounded-lg mb-6" src={project.thumbnail} alt="" />
            <div className="flex gap-6 mb-6">
                <div className="flex items-center gap-2">
                    <span className="uppercase text-sm tracking-[0.3em]">live link</span>
                    <Link href={project.liveLink}>
                        <Button className="p-3 bg-muted hover:bg-muted-foreground text-foreground rounded-full"><ArrowRight size={18} /></Button>
                    </Link>
                </div>
                <div className="flex items-center gap-2">
                    <span className="uppercase text-sm tracking-[0.3em]">repo link</span>
                    <Link href={project.repoLink}>
                        <Button className="p-3 bg-muted hover:bg-muted-foreground text-foreground rounded-full"><ArrowRight size={18} /></Button>
                    </Link>
                </div>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl mb-2">Overview</h2>
                <p className="text-muted-foreground">
                    {project.description}
                </p>
            </div>
            <div>
                <h2 className="text-2xl mb-2">Features</h2>
                <ul className="text-muted-foreground">
                    {project.features.map((feature, index) => (
                        <li className="flex gap-2" key={index}>
                            <CircleSmall size={15} className="mt-1" />
                            <span>
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProjectDetailsCard;