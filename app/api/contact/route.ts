import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const bodySchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email(),
  subject: z.string().trim().min(1).max(200),
  message: z.string().trim().min(10).max(5000),
});

function escapeHtml(text: string) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const raw = await request.json();
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

    const to = process.env.CONTACT_TO_EMAIL ?? "fifthfade@gmail.com";
    const from =
      process.env.CONTACT_FROM_EMAIL ?? "Contact <onboarding@resend.dev>";

    const resend = new Resend(apiKey);
    const html = `
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <hr />
      <p style="white-space:pre-wrap;">${escapeHtml(message)}</p>
    `;

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `[Website] ${subject}`,
      html,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Could not send email. Try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }
}
