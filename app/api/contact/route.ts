import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

import {
  contactMailHtml,
  contactMailPlainText,
} from "@/lib/email/contact-mail-template";

const bodySchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email(),
  subject: z.string().trim().min(1).max(200),
  message: z.string().trim().min(10).max(5000),
});

export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Expected a JSON body." },
      { status: 400 },
    );
  }

  const parsed = bodySchema.safeParse(raw);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please check all fields are valid." },
      { status: 400 },
    );
  }

  const { name, email, subject, message } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "Email service is not configured yet." },
      { status: 503 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL;
  if (!to?.trim()) {
    return NextResponse.json(
      { ok: false, error: "Contact recipient email is not configured." },
      { status: 503 },
    );
  }

  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Contact <onboarding@resend.dev>";

  const templateProps = { name, email, subject, message };

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from,
      to: [to.trim()],
      replyTo: email,
      subject: `[Website] ${subject}`,
      html: contactMailHtml(templateProps),
      text: contactMailPlainText(templateProps),
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Could not send email. Try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Could not send email. Try again later." },
      { status: 502 },
    );
  }
}
