"use client";

import React, { useEffect, useState } from "react";
import { Pencil, Trash2, PlusCircle, Eye, EyeOff } from "lucide-react";
import type { BlogListItem } from "@/lib/types";

export default function AdminBlogsListPage() {
  const [blogs, setBlogs] = useState<BlogListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [busySlug, setBusySlug] = useState<string | null>(null);

  const loadBlogs = () => {
    setLoading(true);
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data.blogs || []))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  const handleDelete = async (slug: string) => {
    if (!confirm("Delete this blog permanently?")) return;
    setBusySlug(slug);
    await fetch(`/api/blogs/${slug}`, { method: "DELETE" });
    setBlogs((prev) => prev.filter((b) => b.slug !== slug));
    setBusySlug(null);
  };

  const togglePublish = async (blog: BlogListItem) => {
    setBusySlug(blog.slug);
    const res = await fetch(`/api/blogs/${blog.slug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published: !blog.published }),
    });
    if (res.ok) {
      setBlogs((prev) =>
        prev.map((b) =>
          b.slug === blog.slug ? { ...b, published: !b.published } : b
        )
      );
    }
    setBusySlug(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-black tracking-tight text-slate-950">
          All Blogs
        </h1>
        <a
          href="/admin/dashboard/blogs/new"
          className="flex items-center gap-2 rounded-xl border border-yellow-300 bg-yellow-400 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.12em] text-slate-950 shadow-[0_10px_25px_rgba(250,204,21,0.20)] transition-colors hover:bg-yellow-500"
        >
          <PlusCircle className="h-3.5 w-3.5" />
          New Blog
        </a>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        {loading ? (
          <p className="py-14 text-center text-sm text-slate-400">
            Loading blogs...
          </p>
        ) : blogs.length === 0 ? (
          <p className="py-14 text-center text-sm text-slate-400">
            No blogs yet. Create your first one.
          </p>
        ) : (
          <div className="divide-y divide-slate-100">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="h-14 w-20 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                    {blog.coverImage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={blog.coverImage}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    ) : null}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-slate-800">
                      {blog.title}
                    </p>
                    <p className="mt-0.5 truncate text-xs text-slate-400">
                      {new Date(blog.createdAt).toLocaleDateString()} ·{" "}
                      <span
                        className={
                          blog.published ? "text-green-600" : "text-slate-500"
                        }
                      >
                        {blog.published ? "Published" : "Draft"}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <button
                    onClick={() => togglePublish(blog)}
                    disabled={busySlug === blog.slug}
                    title={blog.published ? "Unpublish" : "Publish"}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:bg-slate-50 disabled:opacity-50"
                  >
                    {blog.published ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                  <a
                    href={`/admin/dashboard/blogs/${blog.slug}/edit`}
                    title="Edit"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:bg-slate-50"
                  >
                    <Pencil className="h-4 w-4" />
                  </a>
                  <button
                    onClick={() => handleDelete(blog.slug)}
                    disabled={busySlug === blog.slug}
                    title="Delete"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-200 text-red-500 transition-colors hover:bg-red-50 disabled:opacity-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
