import Image from "next/image";
import Link from "next/link";
import {
  BellRing,
  Bus,
  Check,
  CheckCheck,
  CircleHelp,
  Fuel,
  Headphones,
  History,
  LayoutDashboard,
  MapPin,
  MonitorSmartphone,
  PackageCheck,
  Radar,
  Route,
  ShieldCheck,
  Smartphone,
  Truck,
  Users,
  Wrench,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import LeadBanner from "@/components/LeadBanner";
import TrackingPreview from "@/components/TrackingPreview";
import VideoShowcase from "@/components/VideoShowcase";
import Faq from "@/components/Faq";
import { Button, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { industries } from "@/data/solutions";
import { site } from "@/data/site";

const inclusions = [
  {
    icon: PackageCheck,
    title: "1-year recharge",
    text: "Included from day one",
  },
  {
    icon: History,
    title: "90-day playback",
    text: "Every route, ready to revisit",
  },
  {
    icon: Wrench,
    title: "Pan-India installation",
    text: "Set up at your location",
  },
  {
    icon: Headphones,
    title: "Lifetime support",
    text: "Real people. Here to help.",
  },
];

const steps = [
  {
    icon: Users,
    title: "Let’s find your fit",
    text: "Tell us about your vehicles. We’ll recommend a package that works for you.",
  },
  {
    icon: Wrench,
    title: "We take care of setup",
    text: "Our technician installs your devices, configures the apps and shows you around.",
  },
  {
    icon: Radar,
    title: "You’re ready to move",
    text: "Start tracking, set your alerts and enjoy your first year of recharge, included.",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <Container className="hero-layout">
          <div className="hero-copy">
            <Eyebrow>
              A little more visibility. A lot more peace of mind.
            </Eyebrow>
            <h1>
              Every journey.
              <br />
              In <em>clear view.</em>
            </h1>
            <p className="hero-intro">
              Your family’s car. Your growing fleet. Their ride to school. Stay
              connected to what matters with complete GPS tracking and video
              telematics.
            </p>
            <div className="hero-actions">
              <Button href="#quote">Find my solution</Button>
              <Button href="#products" variant="outline">
                Explore products
              </Button>
            </div>
            <div className="hero-assurance">
              <span>
                <Check size={15} /> Device, apps &amp; installation
              </span>
              <span>
                <Check size={15} /> 1-year recharge included
              </span>
            </div>
            <div className="hero-note">
              <span className="hero-note__icon">
                <ShieldCheck size={22} strokeWidth={1.5} />
              </span>
              <p>
                <strong>Everything connected. Everything covered.</strong>
                <br />
                One complete package, with no hidden charges.
              </p>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-orbit" aria-hidden="true" />
            <TrackingPreview />
            <div className="hero-visual__caption">
              <span className="caption-rule" /> A smarter way to keep an eye on
              your world.
            </div>
          </div>
        </Container>
      </section>

      <section
        className="inclusion-strip"
        aria-label="Included with your tracking solution"
      >
        <Container>
          <ul>
            {inclusions.map((item) => (
              <li key={item.title}>
                <item.icon size={24} strokeWidth={1.5} />
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="products" className="home-section products-section">
        <Container>
          <div className="section-top">
            <SectionHeading
              eyebrow="Made for your world"
              title={
                <>
                  Different journeys.
                  <br />
                  The same peace of mind.
                </>
              }
              intro="From one vehicle to an entire operation, find the right way to stay connected."
            />
            <a href="/contact#quote" className="text-link">
              <CircleHelp size={17} /> Help me choose
            </a>
          </div>
          <div className="solution-grid">
            <Reveal>
              <Link
                className="solution-card solution-card--personal"
                href="/products/personal-vehicle-tracking"
              >
                <div className="solution-card__visual personal-visual">
                  <div className="personal-orbit personal-orbit--one" />
                  <div className="personal-orbit personal-orbit--two" />
                  <Image
                    src="/images/app-screen.png"
                    alt="Eagle Eye GPS mobile app showing vehicle location"
                    width={432}
                    height={960}
                    sizes="220px"
                    className="personal-phone"
                  />
                  <span className="personal-alert">
                    <ShieldCheck size={17} />
                    <span>Your car. Always in sight.</span>
                  </span>
                </div>
                <div className="solution-card__body">
                  <span className="card-category">
                    FOR YOU &amp; YOUR FAMILY
                  </span>
                  <h3>Personal vehicle tracking</h3>
                  <p>
                    A little less worry, wherever life takes you. Live location,
                    safe zones and anti-theft alerts for your car or bike.
                  </p>
                  <span className="card-link">Discover personal tracking</span>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={80}>
              <Link
                className="solution-card solution-card--fleet"
                href="/products/advance-fleet-management"
              >
                <div className="solution-card__visual fleet-visual">
                  <div className="mini-dashboard">
                    <div className="mini-dashboard__title">
                      <LayoutDashboard size={15} />
                      <span>Your fleet, at a glance</span>
                      <Truck size={16} />
                    </div>
                    <div className="mini-dashboard__stats">
                      <div>
                        <Fuel size={19} />
                        <span>Fuel insights</span>
                      </div>
                      <div>
                        <Route size={19} />
                        <span>Smarter routes</span>
                      </div>
                    </div>
                    <div className="mini-chart" aria-hidden="true">
                      {[35, 55, 43, 73, 62, 86, 68, 95, 82, 100, 92, 112].map(
                        (height, index) => (
                          <i key={index} style={{ height }} />
                        ),
                      )}
                    </div>
                    <span className="mini-dashboard__foot">
                      Clarity for every kilometre.
                    </span>
                  </div>
                </div>
                <div className="solution-card__body">
                  <span className="card-category">FOR YOUR BUSINESS</span>
                  <h3>Advanced fleet management</h3>
                  <p>
                    More visibility. Better decisions. Bring your vehicles,
                    fuel, routes and driver performance into one view.
                  </p>
                  <span className="card-link">Explore fleet solutions</span>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={160}>
              <Link
                className="solution-card solution-card--school"
                href="/products/school-bus-tracking"
              >
                <div className="solution-card__visual school-visual">
                  <Image
                    src="/images/school-boarding.jpg"
                    alt="Children boarding a school bus"
                    fill
                    sizes="(min-width: 900px) 30vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span className="school-alert">
                    <Bus size={17} />
                    <span>A safer ride to school.</span>
                  </span>
                </div>
                <div className="solution-card__body">
                  <span className="card-category">
                    FOR SCHOOLS &amp; PARENTS
                  </span>
                  <h3>Smarter school journeys</h3>
                  <p>
                    From the first pickup to the last drop-off. Connect parents,
                    drivers and schools with SmartBus Lite &amp; Premium.
                  </p>
                  <span className="card-link">Meet SmartBus</span>
                </div>
              </Link>
            </Reveal>
          </div>
          <div className="more-solutions">
            <Link href="/products/ais-140-trackers">
              <span className="more-solutions__icon">
                <ShieldCheck size={23} strokeWidth={1.5} />
              </span>
              <div>
                <h3>AIS-140 certified trackers</h3>
                <p>Compliance-ready tracking with emergency SOS.</p>
              </div>
              <span className="subtle-link">Explore</span>
            </Link>
            <Link href="/products/field-employee-tracking">
              <span className="more-solutions__icon">
                <Users size={23} strokeWidth={1.5} />
              </span>
              <div>
                <h3>Field employee tracking</h3>
                <p>Keep your people, visits and tasks connected.</p>
              </div>
              <span className="subtle-link">Explore</span>
            </Link>
          </div>
        </Container>
      </section>

      <section id="platform" className="home-section platform-section">
        <Container className="platform-layout">
          <Reveal className="platform-visual">
            <div className="platform-visual__header">
              <span className="platform-symbol">
                <MonitorSmartphone size={20} />
              </span>
              <span>ONE PLATFORM. YOUR WHOLE WORLD.</span>
            </div>
            <Image
              src="/images/devices-mockup.png"
              alt="Eagle Eye GPS dashboard on laptop and mobile apps"
              width={612}
              height={366}
              sizes="(min-width: 900px) 50vw, 100vw"
              className="platform-devices"
            />
            <div className="platform-visual__footer">
              <span>
                <CheckCheck size={16} /> In sync, wherever you are
              </span>
              <span>Web + mobile apps</span>
            </div>
          </Reveal>
          <div className="platform-copy">
            <SectionHeading
              eyebrow="Clarity, wherever you are"
              title={
                <>
                  Your vehicles.
                  <br />
                  One powerful view.
                </>
              }
              intro="At your desk or on the move, the Eagle Eye GPS Pro app and web dashboard put the information you need right at your fingertips."
            />
            <div className="platform-features">
              {[
                {
                  icon: MapPin,
                  title: "See the whole picture",
                  text: "Live locations and 90-day route playback, in one place.",
                },
                {
                  icon: BellRing,
                  title: "Know when it matters",
                  text: "Ignition, speed and geofence alerts keep you informed.",
                },
                {
                  icon: Smartphone,
                  title: "Take control, anywhere",
                  text: "The same tracking, insights and reports on web and mobile.",
                },
              ].map((feature) => (
                <div key={feature.title}>
                  <feature.icon size={21} strokeWidth={1.5} />
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              className="text-link"
              href={site.loginUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LayoutDashboard size={16} /> Already connected? Open your
              dashboard
            </a>
          </div>
        </Container>
      </section>

      <VideoShowcase />

      <section className="home-section industries-section">
        <Container>
          <div className="section-top">
            <SectionHeading
              eyebrow="Built around your business"
              title={
                <>
                  Whatever moves your business,
                  <br />
                  we help you see it better.
                </>
              }
              intro="Different industries. Different challenges. A tracking solution configured for yours."
            />
            <Button href="/solutions" variant="outline">
              Explore all industries
            </Button>
          </div>
          <div className="industry-grid">
            {industries.map((industry) => (
              <Link
                key={industry.id}
                href={`/solutions#${industry.id}`}
                className="industry-item"
              >
                <industry.icon size={25} strokeWidth={1.4} />
                <div>
                  <h3>{industry.title}</h3>
                  <p>{industry.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="home-section setup-section">
        <Container>
          <div className="setup-layout">
            <div>
              <Eyebrow>From hello to on the road</Eyebrow>
              <h2>
                We handle the setup.
                <br />
                <em>You enjoy the journey.</em>
              </h2>
              <p>
                Hardware, SIM, software, apps and support. You get a complete
                solution and a team that stays with you.
              </p>
              <Button href="#quote" variant="dark">
                Let’s get you connected
              </Button>
            </div>
            <div className="setup-steps">
              {steps.map((step) => (
                <div className="setup-step" key={step.title}>
                  <span>
                    <step.icon size={23} strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Faq />
      <LeadBanner
        title="Your next journey starts with a conversation."
        intro="Tell us what you need to track. We’ll find the right package, take care of installation and help you get moving."
      />
    </>
  );
}
