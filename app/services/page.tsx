import type { Metadata } from "next";

import { ServicesPageView } from "@/components/section/services/services-page-view";

export const metadata: Metadata = {
  title: "Fifth Fade | Services",
  description:
    "Fifth Fade is a music studio that provides music lessons, studio sessions, and creative guidance built to help every artist grow with confidence.",
};

export default function ServicesPage() {
  return <ServicesPageView />;
}
