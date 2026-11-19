import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, LogIn, Mail, MapPin, Phone } from "lucide-react";
import LeadBanner from "@/components/LeadBanner";
import { Button, Container, Eyebrow, WhatsAppIcon } from "@/components/ui";
import { site, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Call ${site.phone}, WhatsApp or visit Eagle Eye GPS at Champasari More, Siliguri for GPS tracking, dashcams and fleet solutions.`,
};
const cards = [
  {
    icon: Phone,
    title: "Give us a call",
    value: site.phone,
    href: site.phoneHref,
    detail: "A real conversation. A clearer answer.",
  },
  {
    icon: WhatsAppIcon,
    title: "Drop us a message",
    value: "Chat on WhatsApp",
    href: whatsappLink(),
    detail: "Tell us what you have in mind.",
  },
  {
    icon: Mail,
    title: "Write to our team",
    value: site.email,
    href: `mailto:${site.email}`,
    detail: "Share your requirements with us.",
  },
  {
    icon: LogIn,
    title: "Already connected?",
    value: "Open your dashboard",
    href: site.loginUrl,
    detail: "Your vehicles, right where you left them.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-hero">
        <Container>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={12} />
            <span aria-current="page">Contact</span>
          </nav>
          <Eyebrow>Real people. Helpful answers.</Eyebrow>
          <h1>
            Let’s talk about
            <br />
            your next journey.
          </h1>
          <p className="page-hero__intro">
            One vehicle or a whole fleet, we’ll help you find your fit. Call,
            message or drop by our Siliguri office.
          </p>
          <div className="contact-options">
            {cards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                {...(card.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <card.icon className="h-6 w-6" />
                <span>{card.title}</span>
                <strong>{card.value}</strong>
                <p>{card.detail}</p>
              </a>
            ))}
          </div>
        </Container>
      </section>
      <div className="pt-16">
        <LeadBanner title="Let’s find the right fit for you." />
      </div>
      <section className="contact-office">
        <Container>
          <div className="office-layout">
            <div>
              <Eyebrow>Our door is open</Eyebrow>
              <h2>Come say hello.</h2>
              <address>
                Eagle Eye GPS · Omesh Automation
                <br />
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.line3}
              </address>
              <Button
                href="https://www.google.com/maps/search/?api=1&query=Champasari+More+Siliguri+734003"
                variant="dark"
              >
                <MapPin size={16} /> Get directions
              </Button>
            </div>
            <iframe
              title="Eagle Eye GPS office location — Champasari More, Siliguri"
              src="https://www.google.com/maps?q=Champasari+More,+Siliguri,+West+Bengal+734003&output=embed"
              className="office-map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
