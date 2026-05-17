/**
 * Single source for `public/images/stu_wall` assets.
 * — 4 tabs in home studio hero
 * — Remaining files in the “studio wall” strip
 * — Full set for About / long galleries
 */

export type StuWallPhoto = {
  src: string;
  alt: string;
};

export const studioShowcaseTabs = [
  {
    id: "artist-lounge",
    label: "Artist Lounge",
    desktopSrc: "/images/stu_wall/artist_desktop.webp",
    mobileSrc: "/images/stu_wall/artist_responsive.webp",
    alt: "Artist lounge with sofa, bean bag, and production desk",
  },
  {
    id: "control-room",
    label: "Control Room",
    desktopSrc: "/images/stu_wall/control_desktop.jpeg",
    mobileSrc: "/images/stu_wall/control_responsive.jpeg",
    alt: "Control room facing vocal booth with Fifth Fade logo",
  },
  {
    id: "live-session",
    label: "Live Session",
    desktopSrc: "/images/stu_wall/live_desktop.webp",
    mobileSrc: "/images/stu_wall/live_responsive.webp",
    alt: "Engineer at DAW with vocalist recording in the booth",
  },
  {
    id: "vocal-booth",
    label: "Vocal Booth",
    desktopSrc: "/images/stu_wall/vocal_desktop.webp",
    mobileSrc: "/images/stu_wall/vocal_responsive.webp",
    alt: "Condenser microphone with Fifth Fade wall sign",
  },
] as const;
// export const studioShowcaseTabs = [
//   {
//     id: "artist-lounge",
//     label: "Artist Lounge",
//     src: "/images/stu_wall/std_1.JPEG",
//     alt: "Artist lounge with sofa, bean bag, and production desk",
//   },
//   {
//     id: "control-room",
//     label: "Control Room",
//     src: "/images/stu_wall/stu_5.JPEG",
//     alt: "Control room facing vocal booth with Fifth Fade logo",
//   },
//   {
//     id: "live-session",
//     label: "Live Session",
//     src: "/images/stu_wall/stu_6.jpeg",
//     alt: "Engineer at DAW with vocalist recording in the booth",
//   },
//   {
//     id: "vocal-booth",
//     label: "Vocal Booth",
//     src: "/images/stu_wall/stu_9.jpeg",
//     alt: "Condenser microphone with Fifth Fade wall sign",
//   },
// ] as const;

/** Photos not used in the home hero tabs (7 images). */
export const studioWallGalleryOnly: StuWallPhoto[] = [
  {
    src: "/images/stu_wall/stu_2.JPEG",
    alt: "Mixing suite with wooden diffuser and booth window",
  },
  {
    src: "/images/stu_wall/stu_3.JPEG",
    alt: "Wide view of control room and acoustic treatment",
  },
  {
    src: "/images/stu_wall/stu_4.JPEG",
    alt: "Close view of workstation and studio monitors",
  },
  {
    src: "/images/stu_wall/stu_7.jpeg",
    alt: "AKG condenser microphone on shock mount",
  },
  {
    src: "/images/stu_wall/stu_8.jpeg",
    alt: "Studio condenser mic and grey acoustic panels",
  },
  {
    src: "/images/stu_wall/stu_10.jpeg",
    alt: "DAW session with Fifth Fade booth through the glass",
  },
  {
    src: "/images/stu_wall/stu_11.jpeg",
    alt: "Logic Pro session with monitors and booth view",
  },
];

/** All 11 wall photos for About (visual story order). */
export const allStuWallPhotosOrdered: StuWallPhoto[] = [
  {
    src: "/images/stu_wall/stu_5.JPEG",
    alt: "Control room facing vocal booth with Fifth Fade logo",
  },
  {
    src: "/images/stu_wall/stu_6.jpeg",
    alt: "Engineer at DAW with vocalist in the booth",
  },
  {
    src: "/images/stu_wall/stu_9.jpeg",
    alt: "Condenser microphone with Fifth Fade wall sign",
  },
  {
    src: "/images/stu_wall/std_1.JPEG",
    alt: "Artist lounge with sofa and production corner",
  },
  {
    src: "/images/stu_wall/stu_10.jpeg",
    alt: "DAW workstation with plugins and booth window",
  },
  {
    src: "/images/stu_wall/stu_11.jpeg",
    alt: "Wide monitor session with wooden slat wall",
  },
  {
    src: "/images/stu_wall/stu_2.JPEG",
    alt: "Control room with wooden diffuser and glass to booth",
  },
  {
    src: "/images/stu_wall/stu_3.JPEG",
    alt: "Overhead-style view of the mix position",
  },
  {
    src: "/images/stu_wall/stu_4.JPEG",
    alt: "Ergonomic chair and mix desk",
  },
  {
    src: "/images/stu_wall/stu_7.jpeg",
    alt: "Large-diaphragm condenser on shock mount",
  },
  {
    src: "/images/stu_wall/stu_8.jpeg",
    alt: "Close-up condenser mic in treated room",
  },
];
