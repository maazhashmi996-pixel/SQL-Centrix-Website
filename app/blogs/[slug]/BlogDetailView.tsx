"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User } from "lucide-react";

interface BlogDoc {
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  createdAt: string;
}

export default function BlogDetailView({ blog }: { blog: BlogDoc }) {
  const paragraphs = blog.content
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.a
          href="/blogs"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-500 transition-colors hover:text-yellow-600"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Blog
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6"
        >
          <h1 className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
            {blog.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-yellow-500" />
              {blog.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-yellow-500" />
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          {blog.coverImage && (
            <div className="mt-8 overflow-hidden rounded-[24px] border border-slate-200 shadow-[0_25px_60px_rgba(15,23,42,0.10)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full object-cover"
              />
            </div>
          )}

          <div className="mt-10 space-y-5">
            {paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-8 text-slate-600 sm:text-[17px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}