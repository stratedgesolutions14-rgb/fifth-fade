"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { PageSubBanner } from "@/components/common/page-sub-banner";
import { studioProjects } from "@/lib/studio-projects";

export function ProjectsPageView() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <PageSubBanner
        items={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        kicker="Selected work"
        title="Projects shaped in the studio"
        description="A few releases we&apos;ve helped sound right—from musicals and film streams to singles and videos. Bring your next idea; this wall updates as we ship more."
      />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
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
                {/* IMAGE */}
                <button
                  onClick={() => setSelectedImage(project.image)}
                  className="relative aspect-[4/5] w-full bg-muted"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.tag}`}
                    fill
                    className="object-cover object-top transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </button>

                {/* CONTENT */}
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

      {/* MODAL */}
      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-4 text-4xl text-white"
            >
              ×
            </button>

            {/* IMAGE */}
            <div className="relative mx-auto h-[80vh] w-full max-w-2xl overflow-hidden rounded-2xl">
              <Image
                src={selectedImage}
                alt="Project preview"
                fill
                className="object-contain rounded-2xl"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// import Image from "next/image";
// import Link from "next/link";

// import { PageSubBanner } from "@/components/common/page-sub-banner";
// import { studioProjects } from "@/lib/studio-projects";

// export function ProjectsPageView() {
//   return (
//     <>
//       <PageSubBanner
//         items={[{ label: "Home", href: "/" }, { label: "Projects" }]}
//         kicker="Selected work"
//         title="Projects shaped in the studio"
//         description="A few releases we&apos;ve helped sound right—from musicals and film streams to singles and videos. Bring your next idea; this wall updates as we ship more."
//       />

//       <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 ">
//         <div className="flex justify-end">
//           <Link
//             href="/contact"
//             className="text-sm font-bold uppercase tracking-wide text-secondary underline-offset-4 hover:underline"
//           >
//             Discuss your project →
//           </Link>
//         </div>

//         <ul className="mt-10 grid gap-8 lg:grid-cols-3">
//           {studioProjects.map((project) => (
//             <li key={project.image}>
//               <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
//                 <div className="relative aspect-[4/5] w-full bg-muted">
//                   <Image
//                     src={project.image}
//                     alt={`${project.title} — ${project.tag}`}
//                     fill
//                     className="object-cover object-top"
//                     sizes="(max-width: 1024px) 100vw, 33vw"
//                   />
//                 </div>
//                 <div className="flex flex-1 flex-col p-6">
//                   <span className="inline-flex w-fit rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-secondary">
//                     {project.tag}
//                   </span>
//                   <h3 className="mt-4 text-xl font-black uppercase tracking-tight text-secondary">
//                     {project.title}
//                   </h3>
//                   <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
//                     {project.description}
//                   </p>
//                 </div>
//               </article>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </>
//   );
// }
