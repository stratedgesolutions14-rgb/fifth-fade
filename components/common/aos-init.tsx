"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";

import "aos/dist/aos.css";

export function AosInit() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      disable: typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  useEffect(() => {
    const refreshTimeout = window.setTimeout(() => {
      AOS.refreshHard();
    }, 0);

    return () => window.clearTimeout(refreshTimeout);
  }, [pathname]);

  return null;
}
