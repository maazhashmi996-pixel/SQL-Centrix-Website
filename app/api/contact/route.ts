import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, country, role, interest, marketingConsent } = body as {
      email?: string;
      country?: string;
      role?: string;
      interest?: string;
      marketingConsent?: string;
    };

    if (!email || !country || !role || !interest) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_TO_EMAIL,
    } = process.env;

    if (!SMTP_USER || !SMTP_PASS) {
      console.error("Contact form: SMTP_USER / SMTP_PASS not configured.");
      return NextResponse.json(
        { error: "Email is not configured on the server yet." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST || "smtp.gmail.com",
      port: SMTP_PORT ? Number(SMTP_PORT) : 465,
      secure: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const toEmail = CONTACT_TO_EMAIL || SMTP_USER;

    const textBody = `New SQL Centrix Contact Form Submission

Business Email:
${email}

Business Location:
${country}

I am a:
${role}

Business Interested In:
${interest}

Marketing Updates:
${marketingConsent || "No"}
`;

    await transporter.sendMail({
      from: `"SQL Centrix Website" <${SMTP_USER}>`,
      to: toEmail,
      replyTo: email,
      subject: `New Contact Form Submission - ${interest}`,
      text: textBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your enquiry." },
      { status: 500 }
    );
  }
}
