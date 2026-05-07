/**
 * Featured studio work — assets in `public/images/projects/`.
 */
export type StudioProject = {
  image: string;
  title: string;
  tag: string;
  description: string;
};

export const studioProjects: StudioProject[] = [
  {
    image: "/images/projects/pro_1.PNG",
    title: "Kuraivindri",
    tag: "Musical",
    description:
      "A Jabez Jude musical presented by Jesus Waits Ministries—posters, assets, and audio treated for a cinematic, worship-forward release.",
  },
  {
    image: "/images/projects/pro_2.JPEG",
    title: "Aura",
    tag: "Film · streaming",
    description:
      "Virundhinar Productions’ character-driven drama—mix and loudness shaped for OTT, so dialogue and score stay clear on every device.",
  },
  {
    image: "/images/projects/pro_3.jpeg",
    title: "Kaanum Pozhuthe",
    tag: "Single · music video",
    description:
      "Fifth Fade Music release with Avinash G and Janetlin Isha—tracking through master, ready for YouTube and socials out of the same room.",
  },
];
