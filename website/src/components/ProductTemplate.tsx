import type { ProductPage } from "@/data/products";
import DashcamUpgrade from "./DashcamUpgrade";
import FeatureGrid from "./FeatureGrid";
import LeadBanner from "./LeadBanner";
import ProductHero from "./ProductHero";

/** Standard product page: Hero → Software features → Hardware/dashcam upgrade → Lead capture. */
export default function ProductTemplate({
  product,
  heroImageClassName,
}: {
  product: ProductPage;
  heroImageClassName?: string;
}) {
  return (
    <>
      <ProductHero
        pageTitle={product.pageTitle}
        headline={product.headline}
        subHeadline={product.subHeadline}
        badge={product.badge}
        image={product.image}
        imageAlt={product.imageAlt}
        imageClassName={heroImageClassName}
      />
      <FeatureGrid title={product.featuresTitle} intro={product.featuresIntro} features={product.features} />
      <DashcamUpgrade block={product.dashcam} />
      <LeadBanner
        title={`Get a quote for ${product.pageTitle}`}
        defaultProduct={product.pageTitle.replace(" Solution", "")}
      />
    </>
  );
}
