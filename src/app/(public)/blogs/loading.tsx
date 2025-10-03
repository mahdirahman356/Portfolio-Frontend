import { LoaderCircleIcon } from "lucide-react";

const BlogPageLoading = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <LoaderCircleIcon
                className="-ms-1 animate-spin"
                size={20}
                aria-hidden="true"
            />
        </div>
    );
};

export default BlogPageLoading;