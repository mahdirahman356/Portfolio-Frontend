import { IBlog } from "@/types";
import Image from "next/image";
import { format } from "date-fns";

interface IProps {
    blog: IBlog
}

const BlogDetailsCard = ({ blog }: IProps) => {

    if (!blog) {
        return (
            <div className="py-20 text-center text-muted-foreground">Blog not found.</div>
        );
    }

    return (
        <div className="max-w-xl mx-auto">
            <div className="flex p-3">
                <Image width={100} height={100} className="object-cover object-center w-10 h-10 rounded-full" src="/user-image.webp" alt="" />
                <div className="mx-4">
                    <h1 className="text-sm">Kashim rahman mahdi</h1>
                    <p className="text-sm text-muted-foreground">{format(new Date(blog.createdAt), "MMM dd, yyyy")}</p>
                </div>
            </div>
            <hr className="my-2" />
            <h1 className="mt-3 text-4xl font-semibold">
                {blog.title}
            </h1>
            <hr className="w-32 my-6" />
            <p className="text-muted-foreground">
                {blog.content}
            </p>
        </div>
    );
};

export default BlogDetailsCard;