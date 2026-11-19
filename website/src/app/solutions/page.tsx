import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import LeadBanner from "@/components/LeadBanner";
import Reveal from "@/components/Reveal";
import { Button, Container, Eyebrow } from "@/components/ui";
import { industries } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Industry-Specific Telematics & GPS Solutions",
  description:
    "GPS tracking, sensor and video surveillance solutions for logistics, cold-chain, construction, mining, emergency fleets, schools and corporate transport.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="page-hero">
        <Container className="page-hero__layout">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <ChevronRight size={12} />
              <span aria-current="page">Industry solutions</span>
            </nav>
            <Eyebrow>Your industry. Your challenges. Your solution.</Eyebrow>
            <h1>
              Built for the way
              <br />
              your business moves.
            </h1>
            <p className="page-hero__intro">
              From a school run to a cross-country delivery, every journey has
              different needs. Put GPS tracking, sensors and video to work for
              your industry.
            </p>
            <div className="page-hero__actions">
              <Button href="#industries">Find your industry</Button>
              <Button href="#quote" variant="outline">
                Talk to our team
              </Button>
            </div>
          </div>
          <div className="solutions-hero-photo">
            <Image
              src="/images/highway.jpg"
              alt="Connected vehicles travelling through a city"
              fill
              priority
              sizes="(min-width: 900px) 45vw, 100vw"
              className="object-cover"
            />
            <span>
              <Check size={15} /> Real visibility. Across every industry.
            </span>
          </div>
        </Container>
      </section>
      <section id="industries" className="home-section">
        <Container>
          <div className="industry-jump" aria-label="Jump to an industry">
            {industries.map((industry) => (
              <a key={industry.id} href={`#${industry.id}`}>
                <industry.icon size={16} />
                {industry.title.split(" & ")[0]}
              </a>
            ))}
          </div>
          <div className="industry-details">
            {industries.map((industry) => (
              <Reveal key={industry.id}>
                <article id={industry.id} className="industry-detail">
                  <div className="industry-detail__icon">
                    <industry.icon size={31} strokeWidth={1.4} />
                  </div>
                  <div>
                    <h2>{industry.title}</h2>
                    <p>{industry.text}</p>
                    {industry.href && (
                      <Link className="card-link" href={industry.href}>
                        Explore the recommended solution
                      </Link>
                    )}
                  </div>
                  <ul>
                    {industry.highlights.map((highlight) => (
                      <li key={highlight}>
                        <Check size={16} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <LeadBanner
        title="Let’s build around your business."
        intro="Tell us about your industry and your fleet. We’ll help put the right tracking, sensors and video together."
      />
    </>
  );
}
