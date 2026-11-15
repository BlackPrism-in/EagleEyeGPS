import type { Metadata } from "next";
import Image from "next/image";
import { Camera, Fuel, PackageCheck, PlayCircle } from "lucide-react";
import LeadBanner from "@/components/LeadBanner";
import ProductHero from "@/components/ProductHero";
import SmartBusTiers from "@/components/SmartBusTiers";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import { schoolPackageBadge, schoolUpgrades, smartbusLite, smartbusPremium } from "@/data/schoolbus";

export const metadata: Metadata = {
  title: "School Bus Tracking Solution — SmartBus Lite & Premium",
  description:
    "School bus GPS tracking with dedicated Manager, Parent and Driver apps, RFID/QR attendance, proximity alerts, live bus cameras and fuel monitoring. 1-year recharge included.",
};

const upgradeIcons = [Camera, Fuel];

export default function Page() {
  return (
    <>
      <ProductHero
        pageTitle="School Bus Tracking Solution"
        headline="Complete Student Safety, Automated Attendance & Live Parent Visibility"
        subHeadline="Standard GPS trackers are built for commercial trucks, not school transport. Choose between SmartBus Lite and SmartBus Premium to connect school administrators, drivers, and parents in real time—delivered as a complete, ready-to-deploy solution with 1-year recharge included."
        badge={schoolPackageBadge}
        image="/images/school-boarding.jpg"
        imageAlt="Students boarding a school bus safely"
      />

      {/* App ecosystem visual */}
      <section className="border-b border-ink-900/10 bg-white py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>One connected ecosystem</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900 text-balance">
              Dedicated apps for School Managers, Parents and Drivers
            </h2>
            <p className="mt-4 text-ink-600/80">
              Every stakeholder sees exactly what they need — a live command dashboard for the school, live ETA and
              boarding alerts for parents, and trip navigation with attendance for drivers and attendants.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {["Manager App", "Parent App", "Driver App"].map((a) => (
                <div key={a} className="rounded-2xl bg-brand-50 px-2 py-4 text-sm font-bold text-brand-800">
                  {a}
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-3xl bg-white">
            <Image
              src="/images/smartbus-devices.jpg"
              alt="SmartBus Driver, Manager and Parent apps with school transport dashboard"
              fill
              sizes="(min-width:1024px) 55vw, 100vw"
              className="object-contain"
            />
          </div>
        </Container>
      </section>

      {/* Tiers */}
      <section className="bg-grid-light bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            center
            eyebrow="Choose your plan"
            title="SmartBus Lite or SmartBus Premium"
            intro="Start with essential live tracking and parent alerts, or go all-in with attendance, route automation and a dedicated driver app."
          />
          <div className="mt-12">
            <SmartBusTiers tiers={[smartbusLite, smartbusPremium]} />
          </div>
        </Container>
      </section>

      {/* Video */}
      <section className="bg-ink-950 py-20 text-white sm:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <Eyebrow light>See it in action</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance">
              Watch how SmartBus keeps every journey safe
            </h2>
            <p className="mt-4 text-white/70">
              Live tracking, route optimisation, RFID &amp; QR attendance, live in-bus cameras and 100+ reports — in a
              quick product walkthrough.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-400">
              <PlayCircle className="h-5 w-5" /> 3:47 min walkthrough
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl ring-1 ring-white/10">
            <video
              controls
              preload="none"
              playsInline
              poster="/video/smartbus-poster.jpg"
              className="aspect-video w-full bg-black"
            >
              <source src="/video/smartbus-promo.mp4" type="video/mp4" />
            </video>
          </div>
        </Container>
      </section>

      {/* Shared hardware upgrades */}
      <section className="bg-brand-50/60 py-20 sm:py-24">
        <Container>
          <div className="overflow-hidden rounded-[2rem] border border-brand-500/30 bg-white">
            <div className="flex items-center gap-2 bg-brand-500 px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-ink-950 sm:px-10">
              Optional Security &amp; Fuel Upgrades for School Buses
            </div>
            <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
                  Shared School Bus Hardware Upgrades
                </h2>
                <p className="mt-2 text-ink-600/80">Available for both SmartBus Lite &amp; SmartBus Premium.</p>
                <ul className="mt-8 space-y-4">
                  {schoolUpgrades.map((u, i) => {
                    const Icon = upgradeIcons[i];
                    return (
                      <li key={u.title} className="flex gap-4 rounded-2xl bg-ink-900 p-5 text-white">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-ink-950">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="font-bold">{u.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-white/70">{u.text}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-6 flex gap-3 rounded-2xl border-2 border-dashed border-brand-500/60 bg-brand-50 p-5">
                  <PackageCheck className="h-6 w-6 shrink-0 text-brand-700" />
                  <p className="text-sm font-bold text-brand-900">{schoolPackageBadge}</p>
                </div>
              </div>
              <div className="grid gap-3">
                <div className="relative aspect-video overflow-hidden rounded-2xl">
                  <Image src="/images/dashcam-cabin.jpg" alt="Live in-bus camera view" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
                </div>
                <div className="relative aspect-video overflow-hidden rounded-2xl">
                  <Image src="/images/attendance.jpg" alt="RFID and QR code student attendance" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <LeadBanner
        title="Book a SmartBus demo for your school"
        intro="See the Manager, Parent and Driver apps live. We'll help you choose between Lite and Premium and plan installation across your fleet."
        defaultProduct="School Bus Tracking"
      />
    </>
  );
}
