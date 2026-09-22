import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";
import { getCurrentAdmin } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const currentAdmin = await getCurrentAdmin();
    if (!currentAdmin) {
      return NextResponse.json(
        { error: "Not authenticated." },
        { status: 401 }
      );
    }

    const { currentPassword, newPassword } = await req.json();

    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { error: "Current and new password are required." },
        { status: 400 }
      );
    }

    if (String(newPassword).length < 6) {
      return NextResponse.json(
        { error: "New password must be at least 6 characters." },
        { status: 400 }
      );
    }

    await connectDB();

    const admin = await Admin.findById(currentAdmin.adminId);
    if (!admin) {
      return NextResponse.json({ error: "Admin not found." }, { status: 404 });
    }

    const isValid = await bcrypt.compare(currentPassword, admin.password);
    if (!isValid) {
      return NextResponse.json(
        { error: "Current password is incorrect." },
        { status: 401 }
      );
    }

    admin.password = await bcrypt.hash(newPassword, 10);
    await admin.save();

    return NextResponse.json({ message: "Password updated successfully." });
  } catch (error) {
    console.error("Change password error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
