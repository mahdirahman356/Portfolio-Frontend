import BlogDetailsCard from "@/components/modules/BlogDetailsCard";

const BlogDetailsPage = async ({ params }: { params: Promise<{ blogId: string }> }) => {
    
    const {blogId} = await params
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${blogId}`)
    const blog = await res.json()

    return (
        <div className="py-6 md:py-16 px-6">
            <BlogDetailsCard blog={blog}/>
        </div>
    );
};

export default BlogDetailsPage;