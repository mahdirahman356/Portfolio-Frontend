import ProjectCard from "@/components/modules/ProjectCard";
import { IProject } from "@/types";
import { ArrowDown } from "lucide-react";

const ProjectsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`)
  const projects = await res.json()
  return (
    <div className="py-6 md:py-16 px-6">
      <div className="space-y-20">
        <div className="space-y-10">
          <h1 className="text-2xl md:text-3xl font-bold"><span className="text-primary">A collection of my personal</span> <br /> and professional <br />web development projects.</h1>
          <div className="flex items-center gap-2">
            <span className="uppercase text-sm tracking-[0.3em]">Explore My Projects</span>
            <span className="p-3 bg-muted rounded-full"><ArrowDown size={18} /></span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: IProject) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;