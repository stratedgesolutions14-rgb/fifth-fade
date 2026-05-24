import type { Metadata } from "next";

import { AboutPageView } from "@/components/section/about/about-page-view";

export const metadata: Metadata = {
  title: "About Fifth Fade Music & Recording Studio",
  description:
    "Learn about Fifth Fade, a creative music and recording studio offering professional audio production, dubbing, mixing, and mastering services.",
};

export default function AboutPage() {
  return <AboutPageView />;
}
