import BlogDetailsCard from "@/components/modules/BlogDetailsCard";


export const generateStaticParams = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`)
    const data = await res.json()

    const blogs = data?.data || data

    return blogs.map((blog: { slug: string }) => ({
        blogSlug: blog.slug
    }))
}


const BlogDetailsPage = async ({ params }: { params: Promise<{ blogSlug: string }> }) => {

    const { blogSlug } = await params
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${blogSlug}`)
    const blog = await res.json()

    return (
        <div className="py-6 md:py-16 px-6">
            <BlogDetailsCard blog={blog} />
        </div>
    );
};

export default BlogDetailsPage;