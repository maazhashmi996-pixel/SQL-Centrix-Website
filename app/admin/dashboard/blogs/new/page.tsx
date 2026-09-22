"use client";

import React from "react";
import { useRouter } from "next/navigation";
import BlogForm, { type BlogFormValues } from "../BlogForm";

export default function NewBlogPage() {
  const router = useRouter();

  const handleSubmit = async (values: BlogFormValues) => {
    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (!res.ok) {
      return { error: data.error || "Could not create blog." };
    }

    router.push("/admin/dashboard/blogs");
    router.refresh();
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black tracking-tight text-slate-950">
          New Blog
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Write a new post and publish it to the website.
        </p>
      </div>

      <BlogForm submitLabel="Publish Blog" onSubmit={handleSubmit} />
    </div>
  );
}
