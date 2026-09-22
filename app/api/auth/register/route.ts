import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";
import { getCurrentAdmin } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required." },
        { status: 400 }
      );
    }

    if (String(password).length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters." },
        { status: 400 }
      );
    }

    await connectDB();

    const existingAdminCount = await Admin.countDocuments();

    // Only the very first admin can self-register through this form.
    // Once an admin exists, creating another one requires being logged
    // in already, so random visitors can't grant themselves access.
    if (existingAdminCount > 0) {
      const currentAdmin = await getCurrentAdmin();
      if (!currentAdmin) {
        return NextResponse.json(
          {
            error:
              "An admin account already exists. Please log in first to create another admin account.",
          },
          { status: 403 }
        );
      }
    }

    const email_ = String(email).toLowerCase().trim();
    const existing = await Admin.findOne({ email: email_ });
    if (existing) {
      return NextResponse.json(
        { error: "An admin with this email already exists." },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await Admin.create({
      name,
      email: email_,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "Admin account created successfully. You can now log in." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
