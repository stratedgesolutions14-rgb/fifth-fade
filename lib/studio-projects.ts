/**
 * Featured studio work — assets in `public/images/projects/`.
 */
export type StudioProject = {
  image: string;
  title: string;
  link?: string;
  tag: string;
  description: string;
};

export const studioProjects: StudioProject[] = [
  {
    image: "/images/projects/pro_1.webp",
    title: "Kuraivindri",
    link: "https://youtu.be/WBzoOKkCJ8s?si=MhBeYNlD0gUb_WY6",
    tag: "Musical",
    description:
      "A Jabez Jude musical presented by Jesus Waits Ministries—posters, assets, and audio treated for a cinematic, worship-forward release.",
  },
  {
    image: "/images/projects/pro_2.webp",
    title: "Aura",
    link: "https://youtu.be/5ZAzvAOMKmI?si=31RHeQBS7D5EYKOe",
    tag: "Film · streaming",
    description:
      "Virundhinar Productions’ character-driven drama—mix and loudness shaped for OTT, so dialogue and score stay clear on every device.",
  },
  {
    image: "/images/projects/pro_3.webp",
    title: "Kaanum Pozhuthe",
    link:"https://youtu.be/4aPCZ6xXFJE?si=1GQxl0DJyOdBKV9i",
    tag: "Single · music video",
    description:
      "Fifth Fade Music release with Avinash G and Janetlin Isha—tracking through master, ready for YouTube and socials out of the same room.",
  },
  {
    image: "/images/projects/pro_4.webp",
    title: "Hey Nenjam",
    tag: "Single · romantic music",
    description:
    "An emotional musical release by Jabez Jude P, blending warm visuals and heartfelt storytelling—crafted for streaming platforms, YouTube premieres.",
  },
  {
    image: "/images/projects/pro_5.webp",
    title: "Iravini vizhigal",
    link:"https://youtu.be/_8XrzcZvFYE?si=p_vhCW-Ju-wFF_sl",
    tag: "Film · thriller drama",
    description:
    "A dark investigative thriller directed by Siva Venkatachalam, featuring intense cinematic visuals and suspense-driven storytelling.",
  },
  {
    image: "/images/projects/pro_6.webp",
    title: "Left Unsaid",
    link:"https://youtube.com/shorts/N42MdA3myOk?si=nmQQNIif6sXh2vJU",
    tag: "Short Film · Romantic Drama",
    description:
      "An emotional romantic drama portraying unspoken feelings, dreams, and unfinished conversations through heartfelt storytelling and cinematic visuals.",
  },
];
