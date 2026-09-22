"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ImagePlus, Save, X } from "lucide-react";

export interface BlogFormValues {
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  published: boolean;
}

interface BlogFormProps {
  initial?: Partial<BlogFormValues>;
  submitLabel: string;
  onSubmit: (values: BlogFormValues) => Promise<{ error?: string } | void>;
}

const MAX_IMAGE_BYTES = 3 * 1024 * 1024; // 3MB

export default function BlogForm({
  initial,
  submitLabel,
  onSubmit,
}: BlogFormProps) {
  const [title, setTitle] = useState(initial?.title || "");
  const [excerpt, setExcerpt] = useState(initial?.excerpt || "");
  const [content, setContent] = useState(initial?.content || "");
  const [coverImage, setCoverImage] = useState(initial?.coverImage || "");
  const [published, setPublished] = useState(initial?.published ?? true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_IMAGE_BYTES) {
      setError("Cover image must be smaller than 3MB.");
      return;
    }

    setError("");
    const reader = new FileReader();
    reader.onload = () => setCoverImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!title.trim() || !excerpt.trim() || !content.trim()) {
      setError("Title, excerpt, and content are required.");
      return;
    }

    setLoading(true);
    const result = await onSubmit({
      title,
      excerpt,
      content,
      coverImage,
      published,
    });
    setLoading(false);

    if (result?.error) {
      setError(result.error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
    >
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
          {error}
        </div>
      )}

      <div>
        <label className="mb-2 block text-sm font-bold text-slate-800">
          Cover Image
        </label>
        <div className="flex items-center gap-4">
          <div className="flex h-24 w-40 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-dashed border-slate-300 bg-slate-50">
            {coverImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={coverImage}
                alt="Cover preview"
                className="h-full w-full object-cover"
              />
            ) : (
              <ImagePlus className="h-6 w-6 text-slate-300" />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50">
              <ImagePlus className="h-3.5 w-3.5" />
              Choose Image
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
            {coverImage && (
              <button
                type="button"
                onClick={() => setCoverImage("")}
                className="inline-flex w-fit items-center gap-1 text-xs font-semibold text-red-500 hover:text-red-600"
              >
                <X className="h-3 w-3" />
                Remove image
              </button>
            )}
          </div>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-bold text-slate-800">
          Title
        </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Blog title"
          className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-400/10"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-bold text-slate-800">
          Short Excerpt{" "}
          <span className="font-normal text-slate-400">
            (shown on the card)
          </span>
        </label>
        <textarea
          required
          rows={2}
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="A short summary of the blog post"
          className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-400/10"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-bold text-slate-800">
          Content{" "}
          <span className="font-normal text-slate-400">
            (separate paragraphs with a blank line)
          </span>
        </label>
        <textarea
          required
          rows={12}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write the full blog content here..."
          className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-400/10"
        />
      </div>

      <label className="flex w-fit cursor-pointer items-center gap-3 rounded-xl border border-slate-200 px-4 py-3">
        <input
          type="checkbox"
          checked={published}
          onChange={(e) => setPublished(e.target.checked)}
          className="h-4 w-4 accent-yellow-500"
        />
        <span className="text-sm font-semibold text-slate-700">
          Published (visible on the website)
        </span>
      </label>

      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="group flex items-center gap-2 rounded-xl border border-yellow-300 bg-yellow-400 px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.12em] text-slate-950 shadow-[0_10px_25px_rgba(250,204,21,0.20)] transition-colors hover:bg-yellow-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Save className="h-3.5 w-3.5" />
        {loading ? "Saving..." : submitLabel}
      </motion.button>
    </form>
  );
}
