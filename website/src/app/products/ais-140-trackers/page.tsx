import type { Metadata } from "next";
import PhaseTwoPage from "@/components/PhaseTwoPage";

export const metadata: Metadata = {
  title: "AIS-140 Certified GPS Trackers — Mercyda Track & Pauldea Tracker",
  description:
    "Government-mandated, RTO/VAHAN-compliant AIS-140 GPS tracking devices with emergency SOS panic button support. 1-year recharge included.",
};

export default function Page() {
  return (
    <PhaseTwoPage
      title="AIS-140 Certified GPS Trackers"
      productName="AIS-140 Certified Trackers"
      headline="Government-mandated, RTO/VAHAN-compliant AIS-140 GPS trackers"
      text="Featuring Mercyda Track and Pauldea Tracker with emergency SOS panic button support and 1-year recharge included — ready for commercial and public transport compliance."
      points={[
        "AIS-140 certified devices",
        "RTO / VAHAN compliant",
        "Emergency SOS panic button support",
        "Mercyda Track & Pauldea Tracker",
      ]}
      image="/images/gps-device.png"
    />
  );
}
