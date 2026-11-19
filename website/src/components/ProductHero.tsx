import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MonitorSmartphone } from "lucide-react";
import type { ReactNode } from "react";
import { whatsappLink } from "@/data/site";
import { Button, Container, Eyebrow, RechargeBadge, WhatsAppIcon } from "./ui";

export default function ProductHero({
  pageTitle,
  headline,
  subHeadline,
  badge,
  image,
  imageAlt,
  imageClassName = "object-cover",
  extra,
}: {
  pageTitle: string;
  headline: string;
  subHeadline: string;
  badge: string;
  image: string;
  imageAlt: string;
  imageClassName?: string;
  extra?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <Container className="page-hero__layout">
        <div>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={12} />
            <Link href="/#products">Products</Link>
            <ChevronRight size={12} />
            <span aria-current="page">
              {pageTitle.replace(" Solution", "")}
            </span>
          </nav>
          <Eyebrow>{pageTitle.replace(" Solution", "")}</Eyebrow>
          <h1>{headline}</h1>
          <p className="page-hero__intro">{subHeadline}</p>
          <RechargeBadge>{badge}</RechargeBadge>
          <div className="page-hero__actions">
            <Button href="#quote">Find my tracking package</Button>
            <Button
              href={whatsappLink(
                `Hi Eagle Eye GPS, I'm interested in ${pageTitle}.`,
              )}
              variant="outline"
            >
              <WhatsAppIcon className="h-4 w-4" /> Talk to our team
            </Button>
          </div>
          {extra}
        </div>
        <div
          className={`page-hero__visual ${image.endsWith(".png") ? "page-hero__visual--device" : ""}`}
        >
          <div className="page-hero__image">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(min-width: 900px) 45vw, 100vw"
              className={imageClassName}
            />
          </div>
          <div className="page-hero__visual-label">
            <MonitorSmartphone size={16} /> Connected on the web. With you on
            mobile.
          </div>
        </div>
      </Container>
    </section>
  );
}
