import { IBlog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

interface IProps {
    blog: IBlog
}

const BlogCard = async ({ blog }: IProps) => {

    return (
        <div>
            <div className="flex p-3">
                <Image width={100} height={100} className="object-cover object-center w-10 h-10 rounded-full" src={"/user-image.webp"} alt="" />

                <div className="mx-4">
                    <h1 className="text-sm">Kashim rahman mahdi</h1>
                    <p className="text-sm text-muted-foreground">{format(new Date(blog?.createdAt), "MMM dd, yyyy")}</p>
                </div>
            </div>
            <h1 className="mt-6 text-xl font-semibold">
                {blog.title}
            </h1>

            <hr className="w-32 my-6" />

            <p className="text-muted-foreground">
                {blog.content.slice(0, 100)}{"..."}
            </p>
            <Link href={`/blogs/${blog.slug}`}>
                <span className="inline-block mt-4 text-primary hover:underline">Read more</span>
            </Link>
        </div>
    );
};

export default BlogCard;