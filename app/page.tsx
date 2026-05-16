import LifeAbout from "@/components/section/about/life_about";
import MainContentAbout from "@/components/section/about/main_content_about";
import { ServicesShowcase } from "@/components/section/services/services-showcase";
import Instruments from "@/components/section/home/instruments";
import StudioShowcase from "@/components/section/home/studio_showcase";
import Testimonial from "@/components/section/home/testimonial";
import type { Metadata } from "next";
import JoinCourse from "@/components/section/home/join_course";

export const metadata: Metadata = {
  title: "Fifth Fade | Home",
  description: "Fifth Fade is a music studio that provides music lessons, studio sessions, and creative guidance built to help every artist grow with confidence.",
};

export default function Home() {
  return (
    <>
      <section className="main_bg flex min-h-dvh w-full items-center justify-center px-4 text-center">
        <div className="max-w-3xl">
          <h1
            className="text-4xl font-black uppercase leading-tight text-primary sm:text-5xl lg:text-7xl"
            data-aos="fade-up"
          >
            Feel The Rhythm
          </h1>
          <p
            className="mt-5 text-base font-medium leading-7 text-white sm:text-lg"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Discover music lessons, studio sessions, and creative guidance built
            to help every artist grow with confidence.
          </p>
        </div>
      </section>
      <MainContentAbout />
      <JoinCourse />
      <ServicesShowcase variant="home" />
      <LifeAbout />
      <Testimonial />
      <Instruments />
      <StudioShowcase />
    </>
  );
}
