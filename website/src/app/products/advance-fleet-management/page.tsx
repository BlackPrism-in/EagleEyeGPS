import type { Metadata } from "next";
import ProductTemplate from "@/components/ProductTemplate";
import { fleetManagement } from "@/data/products";

export const metadata: Metadata = {
  title: "Advance Fleet Management Solution",
  description:
    "Fleet tracking with fuel theft detection, cold-chain temperature sensors, driver scorecards, job & expense management and 4G dashcams. 1-year recharge included.",
};

export default function Page() {
  return <ProductTemplate product={fleetManagement} />;
}
