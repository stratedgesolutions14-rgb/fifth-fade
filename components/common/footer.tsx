"use client";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const infoLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact us" },
];

const OFFICE_ADDRESS =
  "35/798  , A/1 , 30th street Shanthi Nagar, palayamkottai , Tirunelveli - 627002 .";
const OFFICE_MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS.trim())}`;

function FacebookGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M24 12.073C24 5.446 18.627 0 12 0S0 5.446 0 12.073c0 5.989 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YouTubeGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
    </svg>
  );
}
const year = new Date().getFullYear();
export function Footer() {
  return (
    <footer className="bg-secondary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl  gap-6 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link
            href="/"
            className="inline-flex items-center transition-opacity hover:opacity-80"
          >
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="h-auto w-auto"
            />
          </Link>

          <p className="mt-1 max-w-56 text-sm leading-5 text-primary">
            It is a long established fact that a reader will be distracted by
            the readable.
          </p>

          <div className="mt-4 flex items-center gap-3">
            {/* <Link
              target="_blank"
              href="https://www.facebook.com/"
              aria-label="Facebook"
              className="flex size-7 items-center justify-center bg-primary text-secondary transition-colors hover:bg-primary/90   rounded-[9px]"
            >
              <FacebookGlyph className="size-3.5" />
            </Link> */}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/@FifthFade/"
              aria-label="YouTube"
              className="flex size-7 items-center justify-center bg-primary text-secondary transition-colors hover:bg-primary/90 rounded-[9px]"
            >
              <YouTubeGlyph className="size-3.5" />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/fifthfade_musical_studio/"
              aria-label="Instagram"
              className="flex size-7 items-center justify-center bg-primary text-secondary transition-colors hover:bg-primary/90 rounded-[9px]"
            >
              <InstagramGlyph className="size-3.5" />
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold uppercase text-primary">Contact Us</h2>
          <ul className="mt-6 space-y-4 text-sm text-primary">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <Link
                href="tel:+919486983061"
                className="transition-colors hover:text-primary/70 "
              >
                Call &#45; +91 94869 83061
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <Link
                href="https://wa.me/919345311799"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary/70"
              >
                WhatsApp &#45; +91 93453 11799
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <Link
                href="mailto:fifthfade@gmail.com"
                className="transition-colors hover:text-primary/70"
              >
                fifthfade@gmail.com
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <Link
                href={OFFICE_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary/70"
                aria-label="Open address in Google Maps"
              >
                {OFFICE_ADDRESS}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold uppercase text-primary">Info</h2>
          <ul className="mt-6 space-y-4 text-sm text-primary">
            {infoLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-primary/70">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold uppercase text-primary">Opening Hours</h2>
          <ul className="mt-6 space-y-4 text-sm text-primary">
            <li>Working Days: Monday to Sunday</li>
            <li>Working Hours: 09:00 AM - 09:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary/20 px-4 py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-3 text-center text-sm text-primary">
          <span >&#169; {year} &#45; All Rights Reserved</span>
          <span aria-hidden="true" className="hidden h-4 w-px bg-primary/30 sm:block" />
          <div className="flex items-center gap-0.5">
            <span className="uppercase tracking-wide">Powered by</span>
            <Link
              href="https://stratedgesolutions.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-1.5 inline-flex items-center transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="StratEdge Solutions — visit website"
            >
              <Image
                src="/created-white-logo.png"
                alt="StratEdge Solutions"
                width={160}
                height={48}
                className="h-8 w-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
