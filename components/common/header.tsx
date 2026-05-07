"use client";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

/** Sections with a light hero under the transparent header — use solid bar & dark links. */
const LIGHT_HEADER_ROUTES = new Set(["/contact", "/services", "/about", "/projects"]);

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const onLightBackdrop = LIGHT_HEADER_ROUTES.has(pathname ?? "");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showSolidHeader = isScrolled || isMenuOpen || onLightBackdrop;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        showSolidHeader
          ? "border-border bg-background/95 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          <Image
            src="/images/logo.jpeg"
            alt="Logo"
            width={50}
            height={50}
            className="w-auto h-auto"
          />
        </Link>

        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    pathname === link.href && showSolidHeader
                      ? "bg-primary font-semibold text-primary-foreground shadow-sm shadow-primary/30"
                      : showSolidHeader
                        ? "text-muted-foreground hover:bg-muted hover:text-foreground"
                        : "text-white hover:bg-white/10 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={`size-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden ${
            showSolidHeader
              ? "text-foreground hover:bg-muted"
              : "text-white hover:bg-white/10"
          } ${isMenuOpen ? "hidden" : "inline-flex"
            }`}
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu className="size-5" aria-hidden="true" />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 flex h-[100dvh] transition-opacity duration-300 ease-in-out md:hidden ${isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
          }`}
        aria-hidden={!isMenuOpen}
      >
        <aside
          className={`h-full w-4/5 border-r border-border bg-background px-4 py-4 shadow-xl transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-semibold tracking-tight"
              onClick={() => setIsMenuOpen(false)}
            >
              Music
            </Link>

            <button
              type="button"
              className="inline-flex size-9 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-md px-3 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                      pathname === link.href
                        ? "bg-primary font-semibold text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <button
          type="button"
          className={`h-full w-1/5 bg-background/20 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          aria-label="Close menu"
          onClick={() => setIsMenuOpen(false)}
        />
      </div>
    </header>
  );
}
