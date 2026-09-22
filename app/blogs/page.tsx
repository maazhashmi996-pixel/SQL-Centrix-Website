import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import BlogCards from "./BlogCards";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog — SQL Centrix",
  description:
    "Insights, playbooks, and growth strategies from the SQL Centrix team.",
};

export interface PublicBlogCard {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  author: string;
  createdAt: string;
}

async function getPublishedBlogs(): Promise<PublicBlogCard[]> {
  try {
    await connectDB();
    const blogs = await Blog.find({ published: true })
      .sort({ createdAt: -1 })
      .select("title slug excerpt coverImage author createdAt")
      .lean();

    return JSON.parse(JSON.stringify(blogs));
  } catch (error) {
    console.error("Failed to load blogs:", error);
    return [];
  }
}

export default async function BlogsPage() {
  const blogs = await getPublishedBlogs();

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-yellow-700">
            Blog
          </span>
          <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Insights & Growth Strategies
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Ideas, playbooks, and lessons from building predictable pipelines
            for B2B companies.
          </p>
        </div>

        <BlogCards blogs={blogs} />
      </div>
    </main>
  );
}
