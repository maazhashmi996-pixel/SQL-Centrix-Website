"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Newspaper } from "lucide-react";
import type { PublicBlogCard } from "./page";

export default function BlogCards({ blogs }: { blogs: PublicBlogCard[] }) {
  if (blogs.length === 0) {
    return (
      <div className="mx-auto mt-16 flex max-w-md flex-col items-center gap-3 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
          <Newspaper className="h-6 w-6" />
        </span>
        <p className="text-sm font-semibold text-slate-500">
          No blog posts yet. Check back soon.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog, index) => (
        <motion.a
          key={blog._id}
          href={`/blogs/${blog.slug}`}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
          whileHover={{ y: -4 }}
          className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(15,23,42,0.10)]"
        >
          <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100">
            {blog.coverImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-slate-300">
                <Newspaper className="h-10 w-10" />
              </div>
            )}
          </div>

          <div className="flex flex-1 flex-col p-5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-yellow-600">
              {new Date(blog.createdAt).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>

            <h3 className="mt-2 line-clamp-2 text-lg font-black leading-snug text-slate-950">
              {blog.title}
            </h3>

            <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-slate-500">
              {blog.excerpt}
            </p>

            <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-800">
              Read More
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
