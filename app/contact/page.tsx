import type { Metadata } from "next";

import { ContactView } from "@/components/section/contact/contact-view";

export const metadata: Metadata = {
  title: "Contact Fifth Fade Music & Recording Studio",
  description:
    "Contact Fifth Fade for studio booking, music recording, dubbing, mixing, mastering, and professional audio production services.",
};

export default function ContactPage() {
  return (
    <>
      <ContactView />
    </>
  );
}
