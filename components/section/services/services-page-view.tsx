import { PageSubBanner } from "@/components/common/page-sub-banner";
import { ServicesShowcase } from "@/components/section/services/services-showcase";

export function ServicesPageView() {
  return (
    <>
      <PageSubBanner
        items={[{ label: "Home", href: "/" }, { label: "Services" }]}
        kicker="Capabilities"
        title="Creative audio & studio services"
        description="Dial in dubbing, recording, scoring, mixing, rehearsals, and on-camera sessions—all coordinated with engineers who listen first."
      />
      <ServicesShowcase variant="page" />
    </>
  );
}
