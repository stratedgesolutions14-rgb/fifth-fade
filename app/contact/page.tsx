import type { Metadata } from "next";

import { ContactView } from "@/components/section/contact/contact-view";

export const metadata: Metadata = {
  title: "Fifth Fade | Contact",
  description:
    "Fifth Fade is a music studio that provides music lessons, studio sessions, and creative guidance built to help every artist grow with confidence.",
};

export default function ContactPage() {
  return (
    <>
      <ContactView />
    </>
  );
}
