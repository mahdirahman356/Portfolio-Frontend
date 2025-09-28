
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Blogs | Next Blog",
  description: "Browse All Blog Posts"
}

export default async function BlogsPage() {

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-semibold text-gray-700 text-center">
        💤 This is the all blogs page
      </h1>
    </div>
  );
};

