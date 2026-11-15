import type { MetadataRoute } from "next";
import { site } from "@/data/site";

const routes = [
  "",
  "/products/personal-vehicle-tracking",
  "/products/advance-fleet-management",
  "/products/school-bus-tracking",
  "/products/ais-140-trackers",
  "/products/field-employee-tracking",
  "/solutions",
  "/about",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
}
