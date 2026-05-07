import type { Metadata } from "next";

import { ServicesPageView } from "@/components/section/services/services-page-view";

export const metadata: Metadata = {
  title: "Services | Fifth Fade",
  description:
    "Dubbing, song recording, composition, SFX, live audio, video shoot area, jam room, background score, mixing and mastering.",
};

export default function ServicesPage() {
  return <ServicesPageView />;
}
