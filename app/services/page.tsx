import type { Metadata } from "next";

import { ServicesPageView } from "@/components/section/services/services-page-view";

export const metadata: Metadata = {
  title: "Fifth Fade Music Production & Audio Services",
  description:
    "Explore Fifth Fade services including song recording, dubbing, mixing & mastering, SFX, rehearsal space, and audio production.",
};

export default function ServicesPage() {
  return <ServicesPageView />;
}
