
import Blogs from "@/components/modules/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Blogs | Next Blog",
  description: "Browse All Blog Posts"
}

export default async function BlogsPage() {

  return (
      <div className="py-6 md:py-16 px-6">
        <Blogs />
      </div>
  );
};

