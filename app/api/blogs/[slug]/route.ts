import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { getCurrentAdmin } from "@/lib/auth";
import { slugify } from "@/lib/slugify";

type Params = { params: Promise<{ slug: string }> };

// GET /api/blogs/[slug] -> a single blog, public if published
export async function GET(_req: NextRequest, { params }: Params) {
  try {
    const { slug } = await params;
    await connectDB();

    const blog = await Blog.findOne({ slug }).lean();
    if (!blog) {
      return NextResponse.json({ error: "Blog not found." }, { status: 404 });
    }

    if (!blog.published) {
      const admin = await getCurrentAdmin();
      if (!admin) {
        return NextResponse.json(
          { error: "Blog not found." },
          { status: 404 }
        );
      }
    }

    return NextResponse.json({ blog });
  } catch (error) {
    console.error("Fetch blog error:", error);
    return NextResponse.json(
      { error: "Could not load blog." },
      { status: 500 }
    );
  }
}

// PUT /api/blogs/[slug] -> update a blog (admin only)
export async function PUT(req: NextRequest, { params }: Params) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json(
        { error: "Not authenticated." },
        { status: 401 }
      );
    }

    const { slug } = await params;
    const { title, excerpt, content, coverImage, published } =
      await req.json();

    await connectDB();

    const blog = await Blog.findOne({ slug });
    if (!blog) {
      return NextResponse.json({ error: "Blog not found." }, { status: 404 });
    }

    if (title && title !== blog.title) {
      const baseSlug = slugify(title) || "post";
      let newSlug = baseSlug;
      let counter = 1;
      while (await Blog.findOne({ slug: newSlug, _id: { $ne: blog._id } })) {
        newSlug = `${baseSlug}-${counter}`;
        counter += 1;
      }
      blog.slug = newSlug;
      blog.title = title;
    }

    if (excerpt !== undefined) blog.excerpt = excerpt;
    if (content !== undefined) blog.content = content;
    if (coverImage !== undefined) blog.coverImage = coverImage;
    if (published !== undefined) blog.published = published;

    await blog.save();

    return NextResponse.json({ blog });
  } catch (error) {
    console.error("Update blog error:", error);
    return NextResponse.json(
      { error: "Could not update blog." },
      { status: 500 }
    );
  }
}

// DELETE /api/blogs/[slug] -> delete a blog (admin only)
export async function DELETE(_req: NextRequest, { params }: Params) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json(
        { error: "Not authenticated." },
        { status: 401 }
      );
    }

    const { slug } = await params;
    await connectDB();

    const deleted = await Blog.findOneAndDelete({ slug });
    if (!deleted) {
      return NextResponse.json({ error: "Blog not found." }, { status: 404 });
    }

    return NextResponse.json({ message: "Blog deleted." });
  } catch (error) {
    console.error("Delete blog error:", error);
    return NextResponse.json(
      { error: "Could not delete blog." },
      { status: 500 }
    );
  }
}
