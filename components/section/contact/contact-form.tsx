"use client";

import { useState } from "react";
import { z } from "zod";

import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Enter a valid email"),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(5000),
});

export type ContactFormResult = z.infer<typeof contactSchema>;

const CONTACT_FORM_SUCCESS_MESSAGE =
  "Thanks — we received your message and will get back soon.";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormResult, string>>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const raw = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        subject: fieldErrors.subject?.[0],
        message: fieldErrors.message?.[0],
      });
      setStatus("error");
      setMessage("Please fix the highlighted fields.");
      return;
    }

    setStatus("loading");
    const form = e.currentTarget;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };

      if (!res.ok || data.ok === false) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Try again shortly.");
        return;
      }

      setStatus("success");
      setMessage(CONTACT_FORM_SUCCESS_MESSAGE);
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Could not reach the server. Check your connection and try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
    >
      {message !== null ? (
        <div
          role="status"
          aria-live="polite"
          className={cn(
            "rounded-lg border px-4 py-3 text-sm",
            status === "success"
              ? "flex items-start gap-3 border-2 border-emerald-600/70 bg-emerald-50 text-emerald-950 dark:border-emerald-500/60 dark:bg-emerald-950/40 dark:text-emerald-50"
              : status === "error"
                ? "border-destructive/40 bg-destructive/5 text-destructive"
                : "border-border text-muted-foreground",
          )}
        >
          {status === "success" ? (
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden />
          ) : null}
          <span className={status === "success" ? "min-w-0 leading-snug" : undefined}>{message}</span>
        </div>
      ) : null}

      <div className="space-y-2">
        <Label htmlFor="your-name">Your name</Label>
        <Input
          id="your-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Ada Lovelace"
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name ? <p className="text-xs text-destructive">{errors.name}</p> : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="your-email">Your email</Label>
        <Input
          id="your-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email ? <p className="text-xs text-destructive">{errors.email}</p> : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="your-subject">Your subject</Label>
        <Input
          id="your-subject"
          name="subject"
          type="text"
          placeholder="Lesson inquiry, booking, ..."
          aria-invalid={Boolean(errors.subject)}
        />
        {errors.subject ? <p className="text-xs text-destructive">{errors.subject}</p> : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="your-message">Your message</Label>
        <Textarea
          id="your-message"
          name="message"
          rows={5}
          placeholder="Tell us what you’re looking for— instrument, timeline, availability."
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? <p className="text-xs text-destructive">{errors.message}</p> : null}
      </div>

      <Button
        type="submit"
        variant="secondary"
        size="lg"
        disabled={status === "loading"}
        className="w-full sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
