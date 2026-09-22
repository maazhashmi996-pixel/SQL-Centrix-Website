import { Schema, models, model, type InferSchemaType } from "mongoose";

const BlogSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    coverImage: { type: String, default: "" },
    author: { type: String, default: "SQL Centrix Team" },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export type IBlog = InferSchemaType<typeof BlogSchema>;

// Reuse the existing model in dev (hot reload) instead of recompiling it.
const Blog = models.Blog || model("Blog", BlogSchema);

export default Blog;
