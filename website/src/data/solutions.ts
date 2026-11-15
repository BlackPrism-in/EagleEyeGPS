import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Construction,
  GraduationCap,
  Mountain,
  Siren,
  Snowflake,
  Truck,
} from "lucide-react";

export type Industry = {
  id: string;
  icon: LucideIcon;
  title: string;
  short: string;
  text: string;
  highlights: string[];
  href?: string;
};

export const industries: Industry[] = [
  {
    id: "logistics",
    icon: Truck,
    title: "Logistics & Long-Haul Transport",
    short: "Fuel theft prevention, ETAs & cargo-proof dashcams.",
    text: "Precision fuel level monitoring and theft prevention, planned route adherence, automated ETA tracking, warehouse geofencing, driver safety scorecards, and 1 to 4-channel 4G dashcams for road and cargo proof.",
    highlights: ["Fuel monitoring", "Route adherence", "ETA tracking", "4G dashcams"],
    href: "/products/advance-fleet-management",
  },
  {
    id: "cold-chain",
    icon: Snowflake,
    title: "Cold-Chain & FMCG Distribution",
    short: "Live temperature sensors & breach alerts.",
    text: "Real-time cargo and cabin temperature sensors with instant threshold breach alerts, precision fuel monitoring, AC ON/OFF and door open detection, and automated delivery compliance logs.",
    highlights: ["Temperature sensors", "Door open detection", "AC ON/OFF", "Compliance logs"],
    href: "/products/advance-fleet-management",
  },
  {
    id: "construction",
    icon: Construction,
    title: "Construction & Heavy Machinery",
    short: "Engine hours, fuel & site geofencing for JCBs.",
    text: "Fuel level monitoring for excavators, JCBs, and tippers, accurate engine working hour meters, site boundary geofencing, tamper/battery disconnect alerts, and idle-time reduction.",
    highlights: ["Engine hour meters", "Site geofencing", "Tamper alerts", "Idle reduction"],
    href: "/products/advance-fleet-management",
  },
  {
    id: "mining",
    icon: Mountain,
    title: "Mining Operations",
    short: "Rugged trackers with blind-zone buffering.",
    text: "Heavy-duty advanced GPS hardware engineered for 0% GPS downtime with blind-zone data storage/buffering, precision fuel monitoring, rugged vibration-resistant tracking, and trip cycle reporting.",
    highlights: ["Blind-zone buffering", "Rugged hardware", "Fuel monitoring", "Trip cycles"],
    href: "/products/advance-fleet-management",
  },
  {
    id: "emergency",
    icon: Siren,
    title: "Emergency & Security Fleets",
    short: "Sub-second dispatch tracking & SOS alerts.",
    text: "Sub-second live dispatch tracking, priority route monitoring, instant SOS panic alerts, remote immobilization, and live multi-channel cabin video & voice monitoring.",
    highlights: ["Live dispatch", "SOS panic alerts", "Remote immobilization", "Live video & voice"],
    href: "/products/advance-fleet-management",
  },
  {
    id: "schools",
    icon: GraduationCap,
    title: "Schools & Educational Institutions",
    short: "SmartBus apps, RFID attendance & live cameras.",
    text: "Complete student safety and transport automation with SmartBus Lite and SmartBus Premium—featuring dedicated Manager, Parent, and Driver apps, contactless RFID/QR attendance, automated stop proximity alerts, 4G live dome/multi-channel cameras with audio, and wireless fuel monitoring.",
    highlights: ["Manager, Parent & Driver apps", "RFID/QR attendance", "Proximity alerts", "Live bus cameras"],
    href: "/products/school-bus-tracking",
  },
  {
    id: "corporate",
    icon: Building2,
    title: "Corporate Cabs & Employee Transport",
    short: "AC logs, rash-driving scorecards & share links.",
    text: "Real-time AC ON/OFF logs, driver rash-driving scorecards, automated trip logs, and one-click shareable live tracking links for employee safety.",
    highlights: ["AC ON/OFF logs", "Driver scorecards", "Trip logs", "Shareable live links"],
    href: "/products/advance-fleet-management",
  },
];
