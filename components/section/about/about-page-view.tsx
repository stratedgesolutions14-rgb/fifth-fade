import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Headphones,
  Mic2,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";

import { PageSubBanner } from "@/components/common/page-sub-banner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const marqueePhrases = [
  "Fifth Fade Studios",
  "Record · Mix · Release",
  "Dubbing · SFX · Score",
  "Jam room · Live room",
  "Artist-first engineering",
  "Tirunelveli · Tamil Nadu",
];

const values = [
  {
    title: "Sound that serves the song",
    body: "Every take, balance, and fade exists to lift the story—not to show off gear for its own sake.",
    Icon: Headphones,
  },
  {
    title: "Room to experiment",
    body: "Comfortable monitoring, quiet rooms, and workflows that make it easy to chase the right idea.",
    Icon: Sparkles,
  },
  {
    title: "Translation you can trust",
    body: "Mixes and masters that survive phones, cars, club systems, and the quiet of headphones.",
    Icon: SlidersHorizontal,
  },
] as const;

const whyWeExistImages = [
  {
    src: "/images/about.png",
    alt: "Artist and band moments in Fifth Fade studio",
  },
  {
    src: "/images/about2.jpg",
    alt: "Hands on keys and production desk in the studio",
  },
  {
    src: "/images/studio/stud_2.jpg",
    alt: "Studio monitors and acoustic space",
  },
] as const;

/** Same crop height for the two overlapping cards under the hero. */
const whyExistOverlapFrame =
  "relative w-full overflow-hidden rounded-2xl border-4 border-background shadow-xl h-[11.25rem] sm:h-[13rem] lg:h-[14.5rem]";

const processSteps = [
  {
    phase: "Listen",
    detail: "Goals, references, and timelines—so the session has a clear compass before we hit record.",
  },
  {
    phase: "Capture",
    detail: "Tracked with care: levels, mic choice, and headphone mixes that keep performances honest.",
  },
  {
    phase: "Shape",
    detail: "Edit, balance, and vibe—polish that still feels human when the faders come up.",
  },
  {
    phase: "Deliver",
    detail: "Stems, masters, and labeled exports so your release pipeline stays organized.",
  },
] as const;

function MarqueeStrip() {
  const doubled = [...marqueePhrases, ...marqueePhrases];
  return (
    <div className="border-y border-secondary/10 bg-secondary py-3.5 text-primary">
      <div className="about-marquee-wrap mx-auto max-w-full overflow-hidden">
        <div
          className="about-marquee-track items-center gap-x-16 px-8 text-xs font-bold uppercase tracking-[0.35em]"
          aria-hidden
        >
          {doubled.map((text, i) => (
            <span key={`${text}-${i}`} className="flex shrink-0 items-center gap-x-16">
              <span className="whitespace-nowrap">{text}</span>
              <span className="select-none text-primary/45">◇</span>
            </span>
          ))}
        </div>
      </div>
      <span className="sr-only">{marqueePhrases.join(", ")}</span>
    </div>
  );
}

export function AboutPageView() {
  return (
    <>
      <PageSubBanner
        items={[{ label: "Home", href: "/" }, { label: "About" }]}
        kicker="Inside Fifth Fade"
        title="Music, craft, and a room that listens "
        description="We're a Tirunelveli studio focused on recordings, mixes, dubbing, and creative audio—built for artists who care how  work lands in the world."
      />

      <MarqueeStrip />

      <section className="relative mx-auto max-w-6xl px-4 pb-6 pt-8 sm:px-6 sm:pb-12 sm:pt-10 lg:px-8 lg:pb-12 lg:pt-16">
        <div className="grid gap-6 max-lg:gap-5 lg:grid-cols-12 lg:items-start lg:gap-10">
          <div className="relative lg:col-span-5">
            <div className="pointer-events-none absolute -left-6 top-12 hidden h-32 w-32 rounded-full bg-primary/35 blur-3xl lg:block" />
            <div className="relative w-full overflow-visible xxl:pb-16  xl:pb-16  lg:pb-14  md:pb-6 sm:pb-10 sx:pb-10">
              {/* Back: hero stays in flow — sets parent height */}
              <div
                className={cn(
                  "relative z-10 overflow-hidden rounded-2xl border border-border shadow-lg",
                  "lg:rotate-[7deg] lg:origin-center",
                )}
              >
                <Image
                  src={whyWeExistImages[0].src}
                  alt={whyWeExistImages[0].alt}
                  width={480}
                  height={560}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
              {/* Middle: absolute — same frame as card 3; lower z than keys shot */}
              <div
                className={cn(
                  "absolute left-0 top-[54%] z-20 w-[54%] sm:top-[56%]",
                  "lg:-rotate-[6deg] lg:origin-center",
                )}
              >
                <div className={whyExistOverlapFrame}>
                  <Image
                    src={whyWeExistImages[2].src}
                    alt={whyWeExistImages[2].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 58vw, 26vw"
                  />
                </div>
              </div>
              {/* Front: absolute — straight, highest z */}
              <div className="absolute right-0 top-[58%] z-30 w-[66%] sm:top-[60%]">
                <div className={whyExistOverlapFrame}>
                  <Image
                    src={whyWeExistImages[1].src}
                    alt={whyWeExistImages[1].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 72vw, 30vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-span-full block h-[min(24vw,4.5rem)] shrink-0 lg:hidden" aria-hidden /> */}

          <div className="relative z-10 max-lg:z-40 lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary max-[700px]:pt-6  max-[638px]:pt-8 max-[500px]:pt-14 max-[450px]:pt-16 max-[400px]:pt-20 max-[350px]:pt-24 max-[300px]:pt-28 ">
              Why we exist
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] text-secondary sm:mt-3 sm:text-4xl lg:text-5xl">
              A creative pit stop between your idea and the outside world
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Fifth Fade started as a simple belief: local artists deserve the same intention and
              clarity as big-city sessions. Whether you&apos;re tracking a first single, dubbing a
              short film, or shaping a full score, we keep the process calm, direct, and musical.
            </p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {["Recording", "Scoring", "Post", "Rehearsals"].map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 pt-6 sm:px-6 sm:pb-16 sm:pt-8 lg:px-8 lg:pb-10 lg:pt-2">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            What guides us
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase text-secondary sm:text-4xl">
            Values you feel in every session
          </h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {values.map(({ title, body, Icon }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary text-secondary transition-transform group-hover:scale-105">
                <Icon className="size-5" strokeWidth={2.2} aria-hidden />
              </div>
              <h3 className="mt-5 text-base font-black uppercase leading-snug text-secondary">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-10 text-primary">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-start justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-bold uppercase tracking-widest">
                <Mic2 className="size-3.5" aria-hidden />
                Process
              </div>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight sm:text-4xl">
                From first note to final export
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-primary/85">
                A flexible frame—swap steps when your project needs it, but always with the same
                attention to detail.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="mt-8 border-primary/40 bg-transparent text-primary hover:bg-primary/10 hover:text-primary"
                asChild
              >
                <Link href="/services" className="gap-2">
                  Explore services
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <ol className="relative space-y-0 border-l-2 border-primary/30 pl-8">
              {processSteps.map((step, i) => (
                <li
                  key={step.phase}
                  className={cn("relative pb-12 last:pb-0", i === 0 && "pt-1")}
                >
                  <span className="absolute -left-[calc(0.5rem+1px)] top-1.5 size-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-secondary" />
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary/70">
                    Step {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-xl font-black uppercase text-primary">{step.phase}</p>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-primary/80">{step.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary py-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_1px_1px,var(--foreground)_1px,transparent_0)] [background-size:20px_20px]"
        />
        <blockquote className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-4xl font-light italic leading-tight tracking-tight text-secondary sm:text-5xl sm:leading-tight">
            &ldquo;Great records happen when the room disappears and the music doesn&apos;t.&rdquo;
          </p>
          <footer className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-secondary/80">
            — Fifth Fade ethos
          </footer>
        </blockquote>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-border bg-card px-6 py-10 text-center shadow-sm sm:flex-row sm:px-10 sm:text-left">
          <div className="max-w-xl">
            <h2 className="text-2xl font-black uppercase text-secondary sm:text-3xl">
              Ready when you are
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
              Tell us about your project—genre, deadline, and what “finished” sounds like to you.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button variant="secondary" size="lg" asChild className="w-full sm:w-auto">
              <Link
                href="https://wa.me/919345311799?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20a%20music%20project%20at%20Fifth%20Fade."
                className="gap-2 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start a conversation
                <ArrowRight className="size-4" aria-hidden />
              </Link>
         
            </Button>
            {/* <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
              <Link href="/">Back home</Link>
            </Button> */}
          </div>
        </div>
      </section>
    </>
  );
}
