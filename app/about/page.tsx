import type { Metadata } from "next";

import { AboutPageView } from "@/components/section/about/about-page-view";

export const metadata: Metadata = {
  title: "About | Fifth Fade",
  description:
    "Learn about Fifth Fade musical and recording studio in Tirunelveli—our story, values, process, and creative space.",
};

export default function AboutPage() {
  return <AboutPageView />;
}
