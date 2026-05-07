"use client";

import { ArrowUp, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const whatsappUrl = "https://wa.me/919345311799";

export function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-20 right-6 z-50 flex flex-col items-end gap-3 sm:bottom-24">
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="inline-flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <MessageCircle className="size-6" aria-hidden="true" />
      </Link>

      <button
        type="button"
        aria-label="Back to top"
        onClick={scrollToTop}
        className={`inline-flex size-12 items-center justify-center rounded-full bg-secondary text-primary shadow-lg shadow-black/20 transition-all hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
          showBackToTop
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp className="size-5" aria-hidden="true" />
      </button>
    </div>
  );
}
