import Image from "next/image";
import Link from "next/link";

import { PageSubBanner } from "@/components/common/page-sub-banner";
import { studioProjects } from "@/lib/studio-projects";

export function ProjectsPageView() {
  return (
    <>
      <PageSubBanner
        items={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        kicker="Selected work"
        title="Projects shaped in the studio"
        description="A few releases we&apos;ve helped sound right—from musicals and film streams to singles and videos. Bring your next idea; this wall updates as we ship more."
      />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 ">
        <div className="flex justify-end">
          <Link
            href="/contact"
            className="text-sm font-bold uppercase tracking-wide text-secondary underline-offset-4 hover:underline"
          >
            Discuss your project →
          </Link>
        </div>

        <ul className="mt-10 grid gap-8 lg:grid-cols-3">
          {studioProjects.map((project) => (
            <li key={project.image}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
                <div className="relative aspect-[4/5] w-full bg-muted">
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.tag}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex w-fit rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-secondary">
                    {project.tag}
                  </span>
                  <h3 className="mt-4 text-xl font-black uppercase tracking-tight text-secondary">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
