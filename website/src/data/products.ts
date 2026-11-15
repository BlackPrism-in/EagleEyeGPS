import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AirVent,
  BatteryWarning,
  Bell,
  CalendarClock,
  Car,
  ClipboardList,
  Fuel,
  Gauge,
  History,
  KeyRound,
  LayoutDashboard,
  MapPinned,
  Power,
  Route,
  Share2,
  ShieldAlert,
  Thermometer,
  Truck,
  Wrench,
} from "lucide-react";

export type Feature = { icon: LucideIcon; title: string; text: string };

export type DashcamBlock = {
  title: string;
  description: string;
  points: { title: string; text: string }[];
};

export type ProductPage = {
  slug: string;
  pageTitle: string;
  headline: string;
  subHeadline: string;
  badge: string;
  image: string;
  imageAlt: string;
  featuresTitle: string;
  featuresIntro: string;
  features: Feature[];
  dashcam: DashcamBlock;
};

export const personalVehicle: ProductPage = {
  slug: "personal-vehicle-tracking",
  pageTitle: "Personal Vehicle Tracking Solution",
  headline: "Complete Security & Control for Your Car, Bike, or Family Vehicle",
  subHeadline:
    "Monitor your personal vehicle in real time, protect it from theft, and stay informed about driving habits and maintenance—delivered as a complete, ready-to-use solution with 1-year recharge included through the Eagle Eye GPS Pro app and web platform.",
  badge:
    "Complete Turnkey Solution — Includes 1-Year Recharge, Mobile App & Web Access, and Lifetime Support",
  image: "/images/app-phones.png",
  imageAlt: "Eagle Eye GPS Pro mobile app showing live tracking, ignition and geofence alerts",
  featuresTitle: "Core GPS Tracking Features",
  featuresIntro:
    "Everything you need to protect your vehicle and keep your family safe — in one app.",
  features: [
    {
      icon: MapPinned,
      title: "Real-Time Live Tracking & Speed",
      text: "Track your vehicle's exact location and live speed on the map, updated every few seconds.",
    },
    {
      icon: Power,
      title: "Remote Engine Immobilization (Anti-Theft)",
      text: "Remotely cut off the engine directly from your mobile app in case of theft or unauthorized movement to prevent the vehicle from being driven away.",
    },
    {
      icon: KeyRound,
      title: "Instant Ignition ON/OFF & Parking Alerts",
      text: "Receive immediate push notifications the moment your ignition is turned on or off, or if the vehicle moves while parked.",
    },
    {
      icon: AirVent,
      title: "AC ON/OFF Detection",
      text: "Get instant notifications whenever the vehicle's air conditioning is switched on or off—useful for preventing unnecessary idling when a family driver is waiting.",
    },
    {
      icon: BatteryWarning,
      title: "Tamper & Power Cut Protection",
      text: "Receive an immediate alert if someone attempts to disconnect the vehicle battery or tamper with the device, supported by an internal backup battery.",
    },
    {
      icon: ShieldAlert,
      title: "Geo-Fencing (Safe Zones)",
      text: "Create virtual boundaries around your home, office, or neighbourhood and get notified whenever your vehicle enters or exits.",
    },
    {
      icon: History,
      title: "90-Day Route Playback & Daily Summary",
      text: "Replay past routes for up to 90 days and check daily reports covering total distance, running time, stops, and idling.",
    },
    {
      icon: Gauge,
      title: "Over-Speed & Driver Behaviour Alerts",
      text: "Set custom speed limits and monitor harsh braking or rapid acceleration to keep family members and chauffeurs driving safely.",
    },
    {
      icon: Share2,
      title: "One-Click Shareable Live Location",
      text: "Generate a temporary live tracking link to share your trip status with family or friends in a single click.",
    },
    {
      icon: Wrench,
      title: "Vehicle Maintenance & Document Reminders",
      text: "Set automated alerts based on kilometres or dates for oil changes, tyre rotation, general servicing, and insurance/PUC renewals.",
    },
  ],
  dashcam: {
    title: "All-in-One 4G Dashcam with Live Video & Voice Monitoring",
    description:
      "Looking for visual proof on the road and inside the cabin? Upgrade to our Eagle Eye 4G Dashcam, available in 1, 2, 3, and 4-channel configurations—combining real-time video surveillance, live voice monitoring, and all standard GPS tracking features in a single device.",
    points: [
      {
        title: "Flexible Multi-Channel Coverage",
        text: "Choose from 1-Channel (front road view), 2-Channel (front + cabin), or 3 & 4-Channel (all-around blind-spot and rear monitoring).",
      },
      {
        title: "Live Remote Video Streaming",
        text: "Watch live camera feeds from anywhere directly on your mobile app or web portal.",
      },
      {
        title: "Live Voice Monitoring",
        text: "Listen to real-time in-cabin audio for added security and clarity during incidents.",
      },
      {
        title: "Built-In Full GPS Suite",
        text: "Includes live tracking, 90-day route playback, overspeed alerts, geofencing, and instant event notifications without needing a separate tracker.",
      },
    ],
  },
};

export const fleetManagement: ProductPage = {
  slug: "advance-fleet-management",
  pageTitle: "Advance Fleet Management Solution",
  headline: "End-to-End Visibility, Fuel Control & Operational Efficiency for Commercial Fleets",
  subHeadline:
    "Manage trucks, commercial vans, cold-chain vehicles, and heavy machinery from a single command dashboard. Delivered as a complete, ready-to-deploy solution with 1-year recharge included across mobile and web platforms.",
  badge:
    "Complete Turnkey Fleet Solution — Includes 1-Year Recharge, Web & Mobile Dashboard Access, and Lifetime Support",
  image: "/images/dashboard-laptop.jpg",
  imageAlt: "Eagle Eye GPS fleet dashboard showing multiple vehicles on a live map",
  featuresTitle: "Core Fleet Management & Sensor Capabilities",
  featuresIntro:
    "One command dashboard for live location, fuel, temperature, drivers, jobs and maintenance.",
  features: [
    {
      icon: LayoutDashboard,
      title: "Real-Time Multi-Vehicle Fleet Dashboard",
      text: "Track your entire fleet simultaneously on one live map with instant status filters (Running, Idle, Stopped, Offline) and sub-10-second updates.",
    },
    {
      icon: Fuel,
      title: "Precision Fuel Level Monitoring & Theft Detection",
      text: "Monitor real-time fuel tank levels, detect sudden fuel pilferage or draining, verify fuel refilling logs, and analyze mileage patterns to stop fuel losses.",
    },
    {
      icon: Thermometer,
      title: "Cold-Chain & Cabin Temperature Monitoring",
      text: "Track live cargo and cabin temperatures using integrated temperature sensors with instant threshold breach alerts—essential for pharma, dairy, and perishable goods transport.",
    },
    {
      icon: AirVent,
      title: "AC ON/OFF & Engine Idle Control",
      text: "Receive real-time notifications whenever the vehicle's AC is switched on or off, alongside excessive idling alerts to curb unnecessary fuel burn.",
    },
    {
      icon: Route,
      title: "Route Optimization & Geo-Fencing",
      text: "Assign planned routes, create custom geofences around warehouses, loading bays, and client sites, and get instant alerts on route deviations or unauthorized stops.",
    },
    {
      icon: Activity,
      title: "Driver Behaviour & Safety Scorecards",
      text: "Monitor harsh braking, rapid acceleration, sharp cornering, and overspeeding to reduce accident risks, tyre wear, and maintenance costs.",
    },
    {
      icon: CalendarClock,
      title: "Automated Fleet Maintenance & Document Reminders",
      text: "Schedule service alerts based on engine hours, odometer mileage, or dates, alongside automated reminders for insurance, fitness, permit, and PUC renewals.",
    },
    {
      icon: ClipboardList,
      title: "Trip, Job & Expense Management",
      text: "Assign delivery jobs, track estimated time of arrival (ETA), log trip expenses, and download automated daily/monthly MIS reports in Excel or PDF.",
    },
    {
      icon: Bell,
      title: "Remote Engine Immobilization & Tamper Alerts",
      text: "Remotely immobilize a vehicle in case of unauthorized use or theft, backed by instant battery disconnect and tamper alerts.",
    },
    {
      icon: History,
      title: "90-Day Route Playback & Engine Hour Logs",
      text: "Replay complete historical routes for up to 90 days and track exact engine working hours for commercial trucks and construction equipment (JCBs/excavators).",
    },
  ],
  dashcam: {
    title: "All-in-One 4G Dashcam with Live Video & Voice Monitoring",
    description:
      "Eliminate blind spots and protect your fleet from false liability claims. Upgrade to our Eagle Eye 4G Dashcam, available in 1, 2, 3, and 4-channel configurations—combining live multi-angle video surveillance, live voice monitoring, and full GPS fleet tracking in a single device.",
    points: [
      {
        title: "1, 2, 3 & 4-Channel Coverage",
        text: "Monitor the front road, driver cabin, cargo area, and rear blind spots simultaneously.",
      },
      {
        title: "Live Remote Video & Playback",
        text: "Stream live camera feeds or review recorded trip footage remotely from your office dashboard or mobile app.",
      },
      {
        title: "Live Voice Monitoring",
        text: "Communicate or monitor live cabin audio in real time during critical transit operations.",
      },
      {
        title: "Integrated GPS Suite",
        text: "Includes live tracking, route playback, speed alerts, and geofencing built directly into the camera unit.",
      },
    ],
  },
};

/** Cards for the homepage product grid */
export const productCards = [
  {
    title: "Personal Vehicle Tracking",
    text: "Anti-theft engine cut-off, live tracking, AC & ignition alerts and 90-day playback for your car, bike or family vehicle.",
    href: "/products/personal-vehicle-tracking",
    image: "/images/app-screen.png",
    icon: Car,
  },
  {
    title: "Advance Fleet Management",
    text: "Fuel theft detection, temperature sensors, driver scorecards, jobs and MIS reports for commercial fleets.",
    href: "/products/advance-fleet-management",
    image: "/images/dashboard-map.png",
    icon: Truck,
  },
  {
    title: "School Bus Tracking",
    text: "SmartBus Lite & Premium — dedicated Manager, Parent and Driver apps with RFID/QR attendance and live alerts.",
    href: "/products/school-bus-tracking",
    image: "/images/school-buses.jpg",
    icon: Bell,
  },
  {
    title: "AIS-140 Certified Trackers",
    text: "Government-mandated, RTO/VAHAN-compliant trackers — Mercyda Track & Pauldea Tracker with SOS panic button.",
    href: "/products/ais-140-trackers",
    image: "/images/gps-device.png",
    icon: ShieldAlert,
  },
  {
    title: "Field Employee Tracking",
    text: "Mobile workforce attendance, live field visit tracking and task reporting for sales & service teams.",
    href: "/products/field-employee-tracking",
    image: "/images/app-icon.png",
    icon: MapPinned,
  },
];
