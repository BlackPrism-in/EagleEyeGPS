import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  ChevronRight,
  Eye,
  HeartHandshake,
  MapPin,
  PackageCheck,
  Target,
  Wrench,
} from "lucide-react";
import LeadBanner from "@/components/LeadBanner";
import Reveal from "@/components/Reveal";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Eagle Eye GPS is a brand of Omesh Automation, Siliguri — delivering turnkey GPS tracking, video telematics and fleet products with 1-year recharge, installation and lifetime support.",
};
const values = [
  {
    icon: PackageCheck,
    title: "One complete solution",
    text: "Hardware, SIM, software and apps, with your first year of recharge included. Everything you need, with clear pricing.",
  },
  {
    icon: Wrench,
    title: "Ready from day one",
    text: "Our technicians install and configure your device on-site, then help you get comfortable with your apps.",
  },
  {
    icon: HeartHandshake,
    title: "People you can count on",
    text: "Lifetime support from a local team you can call, WhatsApp or visit. We’re here for the journeys ahead.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <Container className="page-hero__layout">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <ChevronRight size={12} />
              <span aria-current="page">Our story</span>
            </nav>
            <Eyebrow>Rooted in Siliguri. Built for every journey.</Eyebrow>
            <h1>A closer eye on the things that matter.</h1>
            <p className="page-hero__intro">
              We’re Eagle Eye GPS, the telematics brand of{" "}
              <strong>Omesh Automation</strong>. We help families, businesses
              and schools see, secure and manage their vehicles through GPS
              tracking, 4G video telematics and purpose-built software.
            </p>
            <p className="about-location">
              <MapPin size={16} />
              {site.address.line2}, West Bengal
            </p>
          </div>
          <div className="page-hero__visual page-hero__visual--device">
            <div className="page-hero__image">
              <Image
                src="/images/app-phones.png"
                alt="Eagle Eye GPS Pro mobile app screens"
                fill
                priority
                sizes="(min-width: 900px) 45vw, 100vw"
                className="object-contain p-6"
              />
            </div>
            <div className="page-hero__visual-label">
              <Eye size={16} /> Keeping your world in clear view.
            </div>
          </div>
        </Container>
      </section>
      <section className="home-section">
        <Container>
          <div className="about-purpose">
            <Reveal>
              <Target size={26} strokeWidth={1.5} />
              <Eyebrow>Our mission</Eyebrow>
              <h2>
                Professional tracking.
                <br />
                Made simple.
              </h2>
              <p>
                To make professional-grade vehicle tracking simple and
                affordable, with complete, ready-to-use solutions that include
                recharge, apps, installation and support.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <Eye size={26} strokeWidth={1.5} />
              <Eyebrow>Our vision</Eyebrow>
              <h2>
                Every journey visible.
                <br />
                Every arrival safer.
              </h2>
              <p>
                To be a trusted telematics partner for families, fleets and
                schools across India, where every vehicle is secure and every
                student gets home safe.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>
      <section className="home-section setup-section">
        <Container>
          <SectionHeading
            eyebrow="The Eagle Eye way"
            title="More than a device. A team on your side."
            intro="We take care of the technology, so you can focus on the people and work that matter."
          />
          <div className="about-values">
            {values.map((value) => (
              <div key={value.title}>
                <value.icon size={28} strokeWidth={1.5} />
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="home-section">
        <Container className="about-offering">
          <div>
            <SectionHeading
              eyebrow="A solution for your world"
              title="From your family’s car to your entire fleet."
            />
            <ul>
              {[
                "Personal GPS tracking for cars, bikes & family vehicles",
                "Fleet management with fuel & temperature sensors",
                "SmartBus Lite & Premium for school transport",
                "Multi-channel 4G dashcams with live video",
                "AIS-140 certified trackers for compliance",
              ].map((item) => (
                <li key={item}>
                  <Check size={17} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="about-photo">
            <Image
              src="/images/school-buses.jpg"
              alt="School buses ready for their next journey"
              fill
              sizes="(min-width: 900px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>
      <LeadBanner />
    </>
  );
}
