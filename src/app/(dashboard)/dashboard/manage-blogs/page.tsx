import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { IBlog } from "@/types";
import React from "react";
import { format } from "date-fns";
import BlogDialog from "@/components/modules/BlogDialog";
import Link from "next/link";

const ManageBlogs = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`)
    const blogs = await res.json()

    return (
        <div className="min-h-screen md:p-8 w-full md:bg-muted rounded-md">
            <div className="flex justify-between items-center my-3">
                <div className="flex items-center gap-2">
                    <span className="uppercase text-sm tracking-[0.3em]">Blogs</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="uppercase text-sm tracking-[0.3em]">Add Blogs</span>
                    <BlogDialog />
                </div>
            </div>
            <Table className="bg-primary-foreground rounded-md">
                <TableHeader>
                    <TableRow className="text-nowrap bg-primary">
                        <TableHead className="rounded-tl-md">Title</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Details</TableHead>
                        <TableHead>Edit</TableHead>
                        <TableHead className="rounded-tr-md">Delete</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {blogs.map((item: IBlog) => (
                        <TableRow key={item.id} className="text-nowrap">
                            <TableCell>{item.title.slice(0, 20)}{"..."}</TableCell>
                            <TableCell>{item.content.slice(0, 20)}{"..."}</TableCell>
                            <TableCell>{format(new Date(item?.createdAt), "MMM dd, yyyy")}</TableCell>
                            <TableCell className="text-primary font-semibold hover:underline">
                                <Link href={`/blogs/${item.slug}`}>
                                    Details
                                </Link>
                            </TableCell>
                            <TableCell >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-primary">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                            </TableCell>
                            <TableCell >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-destructive">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default ManageBlogs;
