
const BlogDetailsPage = async ({ params }: { params: Promise<{ blogId: string }> }) => {
    
    console.log(params)

    return (
        <div className="py-30 px-4 max-w-7xl mx-auto">
            <h1 className="text-4xl font-semibold text-gray-700 text-center">
                💤 This is the blogs details page
            </h1>
        </div>
    );
};

export default BlogDetailsPage;