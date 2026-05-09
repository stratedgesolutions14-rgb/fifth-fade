import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { studioServices } from "@/lib/services-catalog";

const HOME_CARD_COUNT = 6;

type ServicesShowcaseProps = {
  variant?: "home" | "page";
};

function ServiceCard({
  title,
  description,
  Icon,
  index,
}: {
  title: string;
  description: string;
  Icon: LucideIcon;
  index: number;
}) {
  return (
    <article
      data-aos="fade-up"
      data-aos-delay={Math.min(index * 50, 250)}
      className="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-[box-shadow,border-color] duration-300 hover:border-primary/35 hover:shadow-lg"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 size-36 rounded-full bg-primary/25 blur-3xl transition-opacity duration-300 group-hover:opacity-90"
      />

      <div className="relative inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-secondary shadow-md shadow-primary/25">
        <Icon className="size-6" strokeWidth={2} aria-hidden />
      </div>

      <h3 className="relative mt-4 shrink-0 text-base font-black uppercase leading-tight tracking-tight text-secondary">
        {title}
      </h3>
      <p className="relative mt-3 grow text-sm leading-6 text-muted-foreground">
        {description}
      </p>

      <div className="relative mt-6 flex shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary/70 opacity-80 transition-opacity group-hover:opacity-100">
        <Sparkles className="size-3.5 text-primary" aria-hidden />
        <span>Studio-ready</span>
      </div>
    </article>
  );
}

export function ServicesShowcase({ variant = "home" }: ServicesShowcaseProps) {
  const isHome = variant === "home";
  const displayed = isHome
    ? studioServices.slice(0, HOME_CARD_COUNT)
    : studioServices;

  return (
    <section
      id="services"
      className={cn("scroll-mt-28 bg-background pb-10")}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {isHome ? (
          <div className="mx-auto max-w-xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-secondary sm:text-4xl lg:text-5xl">
              Everything under one studio roof
            </h2>
            <p className="mt-5 text-sm leading-6 text-muted-foreground sm:text-base">
              From recording and dubbing to jam rooms and video setups—pick what
              you need and we&apos;ll help you ship it with clarity and care.
            </p>
          </div>
        ) : null}

        <div
          className={cn(
            "mx-auto grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
            "items-stretch",
            isHome ? "mt-12" : "mt-0",
          )}
        >
          {displayed.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              Icon={service.Icon}
              index={index}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <Button variant="secondary" size="lg" asChild className="w-full gap-2 sm:w-auto">
            <Link href="/contact">
              Book a slot
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
          {isHome ? (
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
              <Link href="/services">See all services</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
