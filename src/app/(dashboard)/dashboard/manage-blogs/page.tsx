import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { IBlog } from "@/types";
import React from "react";
import { format } from "date-fns";
import Link from "next/link";
import BlogPostDialog from "@/components/modules/BlogPostDialog";
import BlogUpdateDialog from "@/components/modules/BlogUpdateDialog";
import { BlogDeleteConfirmation } from "@/components/modules/BlogDeleteConfirmation";

const ManageBlogs = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
        next: {
            revalidate: 2
        }
    })
    const blogs = await res.json()

    return (
        <div className="min-h-screen md:p-8 w-full md:bg-muted rounded-md">
            <div className="flex justify-between items-center my-3">
                <div className="flex items-center gap-2">
                    <span className="uppercase text-sm tracking-[0.3em]">Blogs</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="uppercase text-sm tracking-[0.3em]">Add Blogs</span>
                    <BlogPostDialog />
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
                                <BlogUpdateDialog slug={item.slug} />
                            </TableCell>
                            <TableCell >
                                <BlogDeleteConfirmation slug={item.slug} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default ManageBlogs;
