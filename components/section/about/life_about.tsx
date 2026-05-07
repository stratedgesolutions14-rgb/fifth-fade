import Image from "next/image";
import { Play } from "lucide-react";

const lifePoints = [
  "Create with passion",
  "Compose your dreams",
  "Art through sound",
  "Harmony is key",
];

export default function LifeAbout() {
  return (
    <section className="w-full bg-background py-10">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Music Life
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-secondary sm:text-4xl lg:text-5xl">
            Composing is a <br className="hidden sm:block" />
            way of life
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using a page.
          </p>

          <ul className="mt-6 space-y-4">
            {lifePoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 text-sm font-medium uppercase tracking-wide text-secondary"
              >
                <Play
                  className="size-3 fill-primary text-primary"
                  aria-hidden="true"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="mt-8 rounded-sm bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wide text-secondary transition-colors hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Learn More
          </button>
        </div>

        <div className="mx-auto w-full max-w-md overflow-hidden [perspective:800px] lg:ml-auto lg:mr-0">
          <Image
            src="/images/about2.jpg"
            alt="Hands playing a keyboard in a music studio"
            width={460}
            height={360}
            className="h-auto w-full object-cover transition-transform duration-700 ease-in-out [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]"
            sizes="(max-width: 1024px) 100vw, 460px"
          />
        </div>
      </div>
    </section>
  );
}
