import type { Metadata } from "next";

import { ProjectsPageView } from "@/components/section/projects/projects-page-view";

export const metadata: Metadata = {
  title: "Fifth Fade Music Production Projects & Works",
  description:
    "View Fifth Fade music projects, film audio works, singles, background scores, and professional studio productions.",
};

export default function ProjectsPage() {
  return <ProjectsPageView />;
}
