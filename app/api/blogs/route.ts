import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { getCurrentAdmin } from "@/lib/auth";
import { slugify } from "@/lib/slugify";

// GET /api/blogs -> public list (published only), or all blogs if an
// admin is logged in (so the dashboard can manage drafts too).
export async function GET() {
  try {
    await connectDB();
    const admin = await getCurrentAdmin();

    const filter = admin ? {} : { published: true };

    const blogs = await Blog.find(filter)
      .sort({ createdAt: -1 })
      .select("title slug excerpt coverImage author published createdAt")
      .lean();

    return NextResponse.json({ blogs });
  } catch (error) {
    console.error("Fetch blogs error:", error);
    return NextResponse.json(
      { error: "Could not load blogs." },
      { status: 500 }
    );
  }
}

// POST /api/blogs -> create a new blog (admin only)
export async function POST(req: NextRequest) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json(
        { error: "Not authenticated." },
        { status: 401 }
      );
    }

    const { title, excerpt, content, coverImage, published } =
      await req.json();

    if (!title || !excerpt || !content) {
      return NextResponse.json(
        { error: "Title, excerpt, and content are required." },
        { status: 400 }
      );
    }

    await connectDB();

    const baseSlug = slugify(title) || "post";
    let slug = baseSlug;
    let counter = 1;
    while (await Blog.findOne({ slug })) {
      slug = `${baseSlug}-${counter}`;
      counter += 1;
    }

    const blog = await Blog.create({
      title,
      slug,
      excerpt,
      content,
      coverImage: coverImage || "",
      author: admin.name,
      published: published !== undefined ? published : true,
    });

    return NextResponse.json({ blog }, { status: 201 });
  } catch (error) {
    console.error("Create blog error:", error);
    return NextResponse.json(
      { error: "Could not create blog." },
      { status: 500 }
    );
  }
}
