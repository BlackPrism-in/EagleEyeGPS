import { Clock, MapPin, Phone } from "lucide-react";
import { site, whatsappLink } from "@/data/site";
import EnquiryForm from "./EnquiryForm";
import { Container, Eyebrow, WhatsAppIcon } from "./ui";

/** Lead capture block — used at the bottom of the homepage and every product page. */
export default function LeadBanner({
  title = "Get a free quote in minutes",
  intro = "Tell us what you need to track. We'll recommend the right all-in-one package — hardware, apps, installation and 1-year recharge included.",
  defaultProduct,
  id = "quote",
}: {
  title?: string;
  intro?: string;
  defaultProduct?: string;
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-24 bg-white py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-ink-900 p-6 sm:p-10 lg:p-14">
          <div className="bg-grid absolute inset-0" aria-hidden />
          <div
            className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-500/25 blur-3xl"
            aria-hidden
          />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
            <div>
              <Eyebrow light>Quick Enquiry</Eyebrow>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-white/70">{intro}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-900 hover:bg-brand-50"
                >
                  <Phone className="h-4 w-4" /> Call {site.phone}
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1fb857]"
                >
                  <WhatsAppIcon /> WhatsApp Us
                </a>
              </div>

              <div className="mt-8 space-y-3 border-t border-white/10 pt-6 text-sm text-white/70">
                <p className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  <span>
                    <span className="font-semibold text-white">Siliguri Office</span> — {site.address.line1},{" "}
                    {site.address.line2}, {site.address.line3}
                  </span>
                </p>
                <p className="flex gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  Pan-India installation & lifetime support
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-white/[0.04] p-5 ring-1 ring-white/10 sm:p-7">
              <EnquiryForm dark defaultProduct={defaultProduct} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
