"use client";

import Image from "next/image";
import { useState } from "react";

import {
  studioShowcaseTabs,
  studioWallGalleryOnly,
} from "@/lib/stu-wall-images";

export default function StudioShowcase() {
  const [activeStudioId, setActiveStudioId] = useState<string>(
    studioShowcaseTabs[0].id,
  );

  return (
    <section className="relative w-full bg-black">
      <div className="relative mx-auto min-h-[90dvh] w-full max-w-[1600px] overflow-hidden">
        {studioShowcaseTabs.map((studio) => (
          <div
            key={studio.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              studio.id === activeStudioId ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={studio.id !== activeStudioId}
          >
            <Image
              src={studio.src}
              alt={studio.alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority={studio.id === studioShowcaseTabs[0].id}
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex h-full min-h-[70dvh] flex-col">
          <div className="grid w-full grid-cols-2 border-y border-white/25 bg-black/60 text-white sm:grid-cols-4">
            {studioShowcaseTabs.map((studio) => {
              const isActive = studio.id === activeStudioId;

              return (
                <button
                  key={studio.id}
                  type="button"
                  className={`h-20 border-r border-white/25 px-3 text-left text-base font-extrabold transition-colors duration-300 last:border-r-0 sm:px-6 sm:text-lg ${
                    isActive ? "bg-black/75 text-[#a86a2b]" : "hover:bg-black/65"
                  }`}
                  onMouseEnter={() => setActiveStudioId(studio.id)}
                  onFocus={() => setActiveStudioId(studio.id)}
                >
                  <span className="text-primary">{studio.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-background">
        <div className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 max-w-xl text-left max-lg:mx-auto max-lg:text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Studio wall
            </p>
            <h2 className="mt-2 text-2xl font-black uppercase text-secondary sm:text-3xl">
              More from the room
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
              Gear, angles, and workflow shots from the same sessions—swap or
              reorder anytime.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
            {studioWallGalleryOnly.map(({ src, alt }) => (
              <li
                key={src}
                className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-muted shadow-sm"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
