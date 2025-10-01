import { Metadata } from "next";
import { ArrowDown } from "lucide-react";
import BlogCard from "@/components/modules/BlogCard";
import { IBlog } from "@/types";

export const metadata: Metadata = {
  title: "All Blogs | Next Blog",
  description: "Browse All Blog Posts"
}

export default async function BlogsPage() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`)
  const blogs = await res.json()
  console.log(blogs)

  return (
    <div className="py-6 md:py-16 px-6">
      <div className="space-y-20">
        <div className="space-y-10">
          <h1 className="text-2xl md:text-3xl font-bold"><span className="text-primary">Reflections and practical</span> <br /> guides from my <br />web-dev journey </h1>
          <div className="flex items-center gap-2">
            <span className="uppercase text-sm tracking-[0.3em]">Explore My Blogs</span>
            <span className="p-3 bg-muted rounded-full"><ArrowDown size={18} /></span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog: IBlog) => (
            <BlogCard blog={blog} key={blog.id}/>
          ))}
        </div>
      </div>
    </div>
  );
};

