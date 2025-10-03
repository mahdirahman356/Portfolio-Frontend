import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { IProject } from "@/types";
import React from "react";
import { format } from "date-fns";
import Link from "next/link";
import ProjectPostDialog from "@/components/modules/ProjectPostDialog";
import ProjectUpdateDialog from "@/components/modules/ProjectUpdateDialog";
import { ProjectDeleteConfirmation } from "@/components/modules/ProjectDeleteConfirmation";


const ManageProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`)
    const projects = await res.json()

    return (
        <div className="min-h-screen md:p-8 w-full md:bg-muted rounded-md">
            <div className="flex justify-between items-center my-3">
                <div className="flex items-center gap-2">
                    <span className="uppercase text-sm tracking-[0.3em]">Projects</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="uppercase text-sm tracking-[0.3em]">Add Project</span>
                    <ProjectPostDialog />
                </div>
            </div>
            <Table className="bg-primary-foreground rounded-md">
                <TableHeader>
                    <TableRow className="text-nowrap bg-primary">
                        <TableHead className="rounded-tl-md">Title</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Links</TableHead>
                        <TableHead>Details</TableHead>
                        <TableHead>Edit</TableHead>
                        <TableHead className="rounded-tr-md">Delete</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {projects.map((item: IProject) => (
                        <TableRow key={item.id} className="text-nowrap">
                            <TableCell>{item.title.slice(0, 20)}{"..."}</TableCell>
                            <TableCell>{item.description.slice(0, 20)}{"..."}</TableCell>
                            <TableCell>{format(new Date(item?.createdAt), "MMM dd, yyyy")}</TableCell>
                            <TableCell className="text-primary font-semibold hover:underline">
                                <div className="flex items-center gap-x-2">
                                    <Link href={`${item.liveLink}`}>
                                        <p className="px-3 py-1 text-xs text-secondary rounded-full bg-indigo-100/60">Live link</p>
                                    </Link>
                                    <Link href={`${item.repoLink}`}>
                                        <p className="px-3 py-1 text-xs text-primary rounded-full  bg-blue-100/60">Repo link</p>
                                    </Link>
                                </div>
                            </TableCell>
                            <TableCell className="text-primary font-semibold hover:underline">
                                <Link href={`/projects/${item.slug}`}>
                                    Details
                                </Link>
                            </TableCell>
                            <TableCell >
                                 <ProjectUpdateDialog slug={item.slug} />
                            </TableCell>
                            <TableCell >
                                <ProjectDeleteConfirmation slug={item.slug}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default ManageProjects;