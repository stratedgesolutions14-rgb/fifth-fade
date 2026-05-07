import type { Metadata } from "next";

import { AboutPageView } from "@/components/section/about/about-page-view";

export const metadata: Metadata = {
  title: "Fifth Fade | About",
  description:
    "Fifth Fade is a music studio that provides music lessons, studio sessions, and creative guidance built to help every artist grow with confidence.",
};

export default function AboutPage() {
  return <AboutPageView />;
}
