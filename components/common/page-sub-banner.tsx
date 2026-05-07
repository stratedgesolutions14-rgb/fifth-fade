import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  /** Omit on the current page segment */
  href?: string;
};

export type PageSubBannerProps = {
  items: BreadcrumbItem[];
  kicker?: string;
  title: string;
  description?: string;
  className?: string;
};

export function PageSubBanner({
  items,
  kicker,
  title,
  description,
  className,
}: PageSubBannerProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-primary pt-28 pb-16 text-secondary sm:pt-32",
        className,
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 opacity-[0.15]",
          "[background-image:radial-gradient(circle_at_1px_1px,var(--foreground)_1px,transparent_0)] [background-size:24px_24px]",
        )}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium uppercase tracking-wide text-secondary/85">
            {items.map((item, index) => (
              <li key={`${item.label}-${index}`} className="flex items-center gap-2">
                {index > 0 ? (
                  <span className="text-secondary/50" aria-hidden>
                    <ChevronRight className="size-4" />
                  </span>
                ) : null}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-secondary hover:underline underline-offset-4"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-secondary" aria-current="page">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="max-w-xl">
          {kicker ? (
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary/80">
              {kicker}
            </p>
          ) : null}
          <h1 className="mt-3 text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 text-sm leading-6 text-secondary/85 sm:text-base">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
