import type { LucideIcon } from "lucide-react";
import { Drum, Guitar, MicVocal, Music2, Music4, Piano } from "lucide-react";

type Instrument = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

const instruments: Instrument[] = [
  {
    title: "Piano",
    description: "It is a long established fact distracted a readable",
    Icon: Piano,
  },
  {
    title: "Guitar",
    description: "It is a long established fact distracted a readable",
    Icon: Guitar,
  },
  {
    title: "Violin",
    description: "It is a long established fact distracted a readable",
    Icon: Music2,
  },
  {
    title: "Drums",
    description: "It is a long established fact distracted a readable",
    Icon: Drum,
  },
  {
    title: "Flute",
    description: "It is a long established fact distracted a readable",
    Icon: Music4,
  },
  {
    title: "Horn",
    description: "It is a long established fact distracted a readable",
    Icon: MicVocal,
  },
];

export default function Instruments() {
  return (
    <section className="w-full bg-background py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
            Instruments
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-secondary sm:text-4xl lg:text-5xl">
            Strum, Sing, Shine
          </h2>
          <p className="mt-5 text-sm leading-6 text-muted-foreground sm:text-base">
            It is a long established fact that a reader will be distracted by
            the readable content.
          </p>
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {instruments.map(({ title, description, Icon }) => (
            <article key={title} className="group text-center">
              <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-500 group-hover:scale-[1.03]">
                <Icon className="size-9 text-secondary" aria-hidden="true" strokeWidth={1.8} />
              </div>

              <h3 className="mt-4 text-base font-bold uppercase tracking-wide text-secondary">
                {title}
              </h3>
              <p className="mx-auto mt-3 max-w-48 text-sm leading-6 text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
