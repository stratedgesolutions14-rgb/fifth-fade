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

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link
            href="/"
            className="inline-flex items-center transition-opacity hover:opacity-80"
          >
            <Image
              src="/images/logo.jpeg"
              alt="Logo"
              width={50}
              height={50}
              className="h-auto w-auto"
            />
          </Link>

          <p className="mt-6 max-w-56 text-sm leading-5 text-secondary">
            It is a long established fact that a reader will be distracted by
            the readable.
          </p>

          <div className="mt-4 flex items-center gap-3">
            <Link
              href="#"
              aria-label="Facebook"
              className="flex size-7 items-center justify-center bg-secondary text-primary transition-colors hover:bg-secondary/90"
            >
              <span className="text-sm font-bold">f</span>
            </Link>
            <Link
              href="#"
              aria-label="X"
              className="flex size-7 items-center justify-center bg-secondary text-primary transition-colors hover:bg-secondary/90"
            >
              <span className="text-sm font-bold">x</span>
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="flex size-7 items-center justify-center bg-secondary text-primary transition-colors hover:bg-secondary/90"
            >
              <span className="text-xs font-bold">ig</span>
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold uppercase text-secondary">Contact Us</h2>
          <ul className="mt-6 space-y-4 text-sm text-secondary">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <Link
                href="tel:+919486983061"
                className="transition-colors hover:text-primary-foreground/70"
              >
                Call - +91 94869 83061
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <Link
                href="https://wa.me/919345311799"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary-foreground/70"
              >
                WhatsApp - +91 93453 11799
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <Link
                href="mailto:fifthfade@gmail.com"
                className="transition-colors hover:text-primary-foreground/70"
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
                className="transition-colors hover:text-primary-foreground/70"
                aria-label="Open address in Google Maps"
              >
                {OFFICE_ADDRESS}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold uppercase text-secondary">Info</h2>
          <ul className="mt-6 space-y-4 text-sm text-secondary">
            {infoLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-primary-foreground/70">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold uppercase text-secondary">Opening Hours</h2>
          <ul className="mt-6 space-y-4 text-sm text-secondary">
            <li>Working Days: 09:00 - 20:00</li>
            <li>Saturday: 10:00 - 18:00</li>
            <li>Sunday: 12:00 - 18:00</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-secondary/20 px-4 py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-3 text-center text-sm text-secondary">
          <span >© 2026 - All Rights Reserved</span>
          <span aria-hidden="true" className="hidden h-4 w-px bg-secondary/30 sm:block" />
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
                src="/created-logo.png"
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
