import type { Metadata } from "next";

import { ContactView } from "@/components/section/contact/contact-view";

export const metadata: Metadata = {
  title: "Contact | Fifth Fade",
  description:
    "Get in touch for music lessons and studio bookings. Fifth Fade Musical & Recording studio, Tirunelveli.",
};

export default function ContactPage() {
  return (
    <>
      <ContactView />
    </>
  );
}
