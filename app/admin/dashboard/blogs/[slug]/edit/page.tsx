"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import BlogForm, { type BlogFormValues } from "../../BlogForm";
import type { BlogDetail } from "@/lib/types";

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`/api/blogs/${params.slug}`)
      .then(async (res) => {
        if (!res.ok) {
          setNotFound(true);
          return;
        }
        const data = await res.json();
        setBlog(data.blog);
      })
      .finally(() => setLoading(false));
  }, [params.slug]);

  const handleSubmit = async (values: BlogFormValues) => {
    const res = await fetch(`/api/blogs/${params.slug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (!res.ok) {
      return { error: data.error || "Could not update blog." };
    }

    router.push("/admin/dashboard/blogs");
    router.refresh();
  };

  const handleDelete = async () => {
    if (!confirm("Delete this blog permanently?")) return;
    await fetch(`/api/blogs/${params.slug}`, { method: "DELETE" });
    router.push("/admin/dashboard/blogs");
    router.refresh();
  };

  if (loading) {
    return <p className="py-14 text-center text-sm text-slate-400">Loading...</p>;
  }

  if (notFound || !blog) {
    return (
      <p className="py-14 text-center text-sm text-slate-400">
        Blog not found.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-950">
            Edit Blog
          </h1>
          <p className="mt-1 text-sm text-slate-500">{blog.title}</p>
        </div>

        <button
          onClick={handleDelete}
          className="flex items-center gap-2 rounded-xl border border-red-200 px-4 py-2.5 text-xs font-bold text-red-500 transition-colors hover:bg-red-50"
        >
          <Trash2 className="h-3.5 w-3.5" />
          Delete Blog
        </button>
      </div>

      <BlogForm
        submitLabel="Save Changes"
        onSubmit={handleSubmit}
        initial={{
          title: blog.title,
          excerpt: blog.excerpt,
          content: blog.content,
          coverImage: blog.coverImage,
          published: blog.published,
        }}
      />
    </div>
  );
}
