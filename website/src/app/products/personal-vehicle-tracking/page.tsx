import type { Metadata } from "next";
import ProductTemplate from "@/components/ProductTemplate";
import { personalVehicle } from "@/data/products";

export const metadata: Metadata = {
  title: "Personal Vehicle Tracking Solution",
  description:
    "GPS tracker for car, bike and family vehicles with remote engine immobilization, ignition & AC alerts, geofencing and 90-day playback. 1-year recharge included.",
};

export default function Page() {
  return <ProductTemplate product={personalVehicle} heroImageClassName="object-contain mix-blend-lighten p-2" />;
}
