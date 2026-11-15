export const site = {
  name: "Eagle Eye GPS",
  company: "Omesh Automation",
  url: "https://www.eagleeyegps.in",
  loginUrl: "https://tracking.eagleeyegps.in",
  phone: "+91 96355 54473",
  phoneHref: "tel:+919635554473",
  whatsapp: "919635554473",
  email: "info@eagleeyegps.in",
  address: {
    line1: "Bharat Complex, Ground Floor",
    line2: "Champasari More, Siliguri",
    line3: "West Bengal - 734003",
  },
  tagline: "Complete Turnkey GPS & Telematics Products — 1-Year Recharge Included",
};

export function whatsappLink(message?: string) {
  const text = message ?? "Hi Eagle Eye GPS, I'd like a quote for a GPS tracking solution.";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export type NavProduct = {
  title: string;
  short: string;
  href: string;
};

export const navProducts: NavProduct[] = [
  {
    title: "Personal Vehicle Tracking",
    short: "Car, bike & family vehicle security",
    href: "/products/personal-vehicle-tracking",
  },
  {
    title: "Advance Fleet Management",
    short: "Fuel, sensors & fleet operations",
    href: "/products/advance-fleet-management",
  },
  {
    title: "School Bus Tracking",
    short: "SmartBus Lite & SmartBus Premium",
    href: "/products/school-bus-tracking",
  },
  {
    title: "AIS-140 Certified Trackers",
    short: "Mercyda Track & Pauldea Tracker",
    href: "/products/ais-140-trackers",
  },
  {
    title: "Field Employee Tracking",
    short: "Attendance, field visits & tasks",
    href: "/products/field-employee-tracking",
  },
];

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products/personal-vehicle-tracking", dropdown: true },
  { label: "Solutions", href: "/solutions" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];
