import { PageSubBanner } from "@/components/common/page-sub-banner";
import { ContactForm } from "./contact-form";

const MAPS_EMBED_QUERY =
  "Fifth Fade musical & Recording studio, 30th St, Kamaraj Nagar, Tirunelveli, Tamil Nadu 627002";

const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_EMBED_QUERY)}&output=embed`;

export function ContactView() {
  return (
    <>
      <PageSubBanner
        items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        kicker="Say hello"
        title="Book a lesson or studio time"
        description="Leave a note and we will reply shortly. Prefer instant chat? Reach us on WhatsApp from anywhere on the site."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-stretch lg:gap-14 lg:px-8">
        <article className="order-2 space-y-6 rounded-2xl border border-border bg-card p-6 shadow-sm lg:order-1 lg:p-8">
          <div>
            <h2 className="text-lg font-black uppercase tracking-tight text-secondary sm:text-xl">
              Send us a message
            </h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
              All fields below are required so we can respond with the right
              info.
            </p>
          </div>
          <ContactForm />
        </article>

        <div className="order-1 flex h-full min-h-[26rem] flex-col lg:order-2">
          <div className="relative h-full min-h-[26rem] flex-1 overflow-hidden rounded-2xl border border-border shadow-sm ring-1 ring-black/5">
            <iframe
              title="Fifth Fade — studio on Google Maps"
              src={mapsEmbedSrc}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
