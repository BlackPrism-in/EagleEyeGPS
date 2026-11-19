import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight, ShieldCheck } from "lucide-react";
import { whatsappLink } from "@/data/site";
import LeadBanner from "./LeadBanner";
import { Button, Container, Eyebrow, RechargeBadge, WhatsAppIcon } from "./ui";

export default function PhaseTwoPage({
  title,
  headline,
  text,
  points,
  image,
  productName,
}: {
  title: string;
  headline: string;
  text: string;
  points: string[];
  image: string;
  productName: string;
}) {
  return (
    <>
      <section className="page-hero">
        <Container className="page-hero__layout">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <ChevronRight size={12} />
              <Link href="/#products">Products</Link>
              <ChevronRight size={12} />
              <span aria-current="page">{productName}</span>
            </nav>
            <Eyebrow>{title}</Eyebrow>
            <h1>{headline}</h1>
            <p className="page-hero__intro">{text}</p>
            <ul className="phase-features">
              {points.map((point) => (
                <li key={point}>
                  <Check size={17} />
                  {point}
                </li>
              ))}
            </ul>
            <RechargeBadge>
              1-year recharge · Installation · Lifetime support
            </RechargeBadge>
            <div className="page-hero__actions">
              <Button href="#quote">Let’s find your package</Button>
              <Button
                href={whatsappLink(
                  `Hi Eagle Eye GPS, I'd like details on ${productName}.`,
                )}
                variant="outline"
              >
                <WhatsAppIcon className="h-4 w-4" /> Talk to our team
              </Button>
            </div>
          </div>
          <div className="page-hero__visual">
            <div className="page-hero__image">
              <Image
                src={image}
                alt={title}
                fill
                priority
                sizes="(min-width: 900px) 40vw, 100vw"
                className="object-contain p-12"
              />
            </div>
            <div className="page-hero__visual-label">
              <ShieldCheck size={16} /> Hardware, software &amp; support.
              Together.
            </div>
          </div>
        </Container>
      </section>
      <div className="pt-16">
        <LeadBanner
          title={`Let’s talk ${productName.toLowerCase()}.`}
          intro="Share your requirements. Our team will help you with specifications, availability and pricing."
          defaultProduct={productName}
        />
      </div>
    </>
  );
}
