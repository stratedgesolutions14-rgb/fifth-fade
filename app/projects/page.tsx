import type { Metadata } from "next";

import { ProjectsPageView } from "@/components/section/projects/projects-page-view";

export const metadata: Metadata = {
  title: "Fifth Fade | Projects",
  description:
    "Selected studio work—from musicals and film streams to singles and videos—from Fifth Fade in Tirunelveli.",
};

export default function ProjectsPage() {
  return <ProjectsPageView />;
}
