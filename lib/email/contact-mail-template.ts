export type ContactMailTemplateProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function escapeHtml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function infoRowHtml(label: string, value: string, mailto?: string): string {
  const safeLabel = escapeHtml(label);
  const safeValue = escapeHtml(value);
  const valueInner = mailto
    ? `<a href="${escapeHtml(mailto)}" style="color:#8b5a2b;text-decoration:none">${safeValue}</a>`
    : safeValue;
  return `
<tr>
  <td style="padding:0 0 12px;vertical-align:top">
    <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#888">${safeLabel}</p>
    <p style="margin:6px 0 0;font-size:16px;color:#1a1a1a;font-weight:600">${valueInner}</p>
  </td>
</tr>`;
}

/** Full HTML email (for Resend `html` field). */
export function contactMailHtml(props: ContactMailTemplateProps): string {
  const { name, email, subject, message } = props;
  const safeMessage = escapeHtml(message);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
</head>
<body style="margin:0;background-color:#f4f1ec;font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif">
<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;padding:28px 16px">
<tbody>
<tr>
<td align="center">
<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;max-width:560px;background-color:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e8e2d9">
<tbody>
<tr>
<td style="padding:24px 28px;background-color:#1a1a1a;color:#e8d5b5">
<p style="margin:0;font-size:11px;letter-spacing:0.28em;text-transform:uppercase;color:#c9a66b">Fifth Fade</p>
<p style="margin:10px 0 0;font-size:20px;font-weight:800;text-transform:uppercase;line-height:1.2">New contact message</p>
</td>
</tr>
<tr>
<td style="padding:24px 28px 28px">
<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%">
<tbody>
${infoRowHtml("Name", name)}
${infoRowHtml("Email", email, `mailto:${email}`)}
${infoRowHtml("Subject", subject)}
</tbody>
</table>
<p style="margin:20px 0 8px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#666">Message</p>
<div style="margin:0;padding:16px;background-color:#faf8f5;border-radius:8px;border:1px solid #ebe6de;font-size:15px;line-height:1.55;color:#333;white-space:pre-wrap">${safeMessage}</div>
</td>
</tr>
<tr>
<td style="padding:0 28px 20px;font-size:12px;color:#888;line-height:1.5">
This email was sent from the contact form on the Fifth Fade website.
Reply directly to this message to reach the sender.
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</body>
</html>`;
}

/** Plain-text body for clients that prefer text. */
export function contactMailPlainText({
  name,
  email,
  subject,
  message,
}: ContactMailTemplateProps): string {
  return [
    "New contact message — Fifth Fade",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    "",
    "Message:",
    message,
    "",
    "— Sent from the website contact form",
  ].join("\n");
}
