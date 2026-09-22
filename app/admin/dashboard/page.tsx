"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Newspaper, CheckCircle2, FileClock, PlusCircle } from "lucide-react";
import type { BlogListItem } from "@/lib/types";

export default function DashboardOverviewPage() {
  const [blogs, setBlogs] = useState<BlogListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data.blogs || []))
      .finally(() => setLoading(false));
  }, []);

  const published = blogs.filter((b) => b.published).length;
  const drafts = blogs.length - published;

  const stats = [
    { label: "Total Blogs", value: blogs.length, icon: Newspaper },
    { label: "Published", value: published, icon: CheckCircle2 },
    { label: "Drafts", value: drafts, icon: FileClock },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-950">
            Overview
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage your blog posts and account settings.
          </p>
        </div>

        <a
          href="/admin/dashboard/blogs/new"
          className="group flex items-center gap-2 rounded-xl border border-yellow-300 bg-yellow-400 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.12em] text-slate-950 shadow-[0_10px_25px_rgba(250,204,21,0.20)] transition-colors hover:bg-yellow-500"
        >
          <PlusCircle className="h-3.5 w-3.5" />
          New Blog
        </a>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {stat.label}
                </p>
                <Icon className="h-4 w-4 text-yellow-500" />
              </div>
              <p className="mt-3 text-3xl font-black text-slate-950">
                {loading ? "—" : stat.value}
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-black uppercase tracking-wider text-slate-900">
            Recent Blogs
          </h2>
          <a
            href="/admin/dashboard/blogs"
            className="text-xs font-bold text-yellow-600 hover:text-yellow-700"
          >
            View all
          </a>
        </div>

        {loading ? (
          <p className="py-8 text-center text-sm text-slate-400">Loading...</p>
        ) : blogs.length === 0 ? (
          <p className="py-8 text-center text-sm text-slate-400">
            No blogs yet. Create your first one.
          </p>
        ) : (
          <div className="divide-y divide-slate-100">
            {blogs.slice(0, 5).map((blog) => (
              <a
                key={blog._id}
                href={`/admin/dashboard/blogs/${blog.slug}/edit`}
                className="flex items-center justify-between gap-4 py-3 transition-colors hover:bg-slate-50"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-slate-800">
                    {blog.title}
                  </p>
                  <p className="text-xs text-slate-400">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                    blog.published
                      ? "bg-green-100 text-green-700"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {blog.published ? "Published" : "Draft"}
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
