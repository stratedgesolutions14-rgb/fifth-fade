import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Languages,
  Layers,
  Mic2,
  Music2,
  ThumbsUp,
  UserRoundCheck,
} from "lucide-react";

type AboutFeature = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

const leftFeatures: AboutFeature[] = [
  {
    title: "Multi-Language",
    description: "There are many variations of passages of available.",
    Icon: Languages,
  },
  {
    title: "Best Skills",
    description: "There are many variations of passages of available.",
    Icon: Music2,
  },
  {
    title: "Professional",
    description: "There are many variations of passages of available.",
    Icon: UserRoundCheck,
  },
];

const rightFeatures: AboutFeature[] = [
  {
    title: "Positive Reviews",
    description: "There are many variations of passages of available.",
    Icon: ThumbsUp,
  },
  {
    title: "Best Equipment",
    description: "There are many variations of passages of available.",
    Icon: Mic2,
  },
  {
    title: "Complete Projects",
    description: "There are many variations of passages of available.",
    Icon: Layers,
  },
];

const aboutFeatures = [...leftFeatures, ...rightFeatures];

function FeatureItem({ title, description, Icon, isLastRow }: AboutFeature & { isLastRow?: boolean }) {
  return (
    <article className={`flex items-start gap-4 py-5 ${isLastRow ? "pb-0" : ""}`}>
      <div className="flex size-14 shrink-0 items-center justify-center bg-primary text-primary-foreground shadow-lg shadow-primary/20">
        <Icon className="size-8 text-secondary" aria-hidden="true" strokeWidth={2.4} />
      </div>

      <div>
        <h3 className="text-base font-bold uppercase text-foreground">
          {title}
        </h3>
        <p className="mt-2 max-w-52 text-sm leading-5 text-muted-foreground">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function MainContentAbout() {
  return (
    <section className="flex min-h-dvh w-full items-center bg-background py-10">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div
          className="w-full overflow-hidden [perspective:1000px]"
          data-aos="fade-right"
        >
          <Image
            src="/images/about.png"
            alt="Musician playing guitar in a studio"
            width={560}
            height={640}
            className="h-auto w-full object-cover transition-transform duration-700 ease-in-out [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div data-aos="fade-left" data-aos-delay="100">
          <div className="text-left max-lg:text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              About Us
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-secondary sm:text-4xl lg:text-5xl">
              Learn music with better guidance
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base max-lg:mx-auto lg:mx-0">
              Build your confidence with expert lessons, studio support, and a
              creative space designed for every musician.
            </p>
          </div>

          <div className="mt-6 grid gap-x-6 sm:grid-cols-2">
            {aboutFeatures.map((feature, index) => (
              <FeatureItem
                key={feature.title}
                {...feature}
                isLastRow={index >= aboutFeatures.length - 2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}