import type { LucideIcon } from "lucide-react";
import {
  Disc3,
  Drum,
  Layers,
  Mic2,
  Music4,
  Radio,
  SlidersHorizontal,
  Sparkles,
  Video,
} from "lucide-react";

export type StudioService = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

export const studioServices: StudioService[] = [
  {
    title: "Dubbing",
    description:
      "Clean voice replacement and sync for film, ads, and streaming with treated rooms and pro monitoring.",
    Icon: Mic2,
  },
  {
    title: "Song Recording",
    description:
      "Multi-track capture, vocal chains, and takes that feel natural—ready for your next single or EP.",
    Icon: Disc3,
  },
  {
    title: "Song Composition",
    description:
      "Melody, arrangement, and production direction from first idea to a release-ready structure.",
    Icon: Music4,
  },
  {
    title: "Sound Effects (SFX)",
    description:
      "Custom SFX design and libraries shaped for games, promos, and cinematic moments.",
    Icon: Sparkles,
  },
  {
    title: "Live Audio Services",
    description:
      "Console-ready mixes for events and sessions—clear front-of-house and monitor balance.",
    Icon: Radio,
  },
  {
    title: "Video Shoot Area",
    description:
      "Flexible floor space and lighting-friendly setup for performance videos and promos.",
    Icon: Video,
  },
  {
    title: "Rehearsal Space (Jam Room)",
    description:
      "Book the jam room for tight rehearsals—backline-friendly, treated, and comfortable.",
    Icon: Drum,
  },
  {
    title: "Background Score",
    description:
      "Emotive scoring that supports your story—from subtle beds to defining themes.",
    Icon: Layers,
  },
  {
    title: "Mixing & Mastering",
    description:
      "Polished loudness and tone across speakers and headphones, ready for every platform.",
    Icon: SlidersHorizontal,
  },
];
