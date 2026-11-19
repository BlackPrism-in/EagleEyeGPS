import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { site } from "@/data/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Eagle Eye GPS — GPS Tracking, Video Telematics & Fleet Solutions | Siliguri",
    template: "%s | Eagle Eye GPS",
  },
  description:
    "Complete turnkey GPS tracking, 4G dashcams, fleet management and school bus tracking with 1-year recharge included. Eagle Eye GPS by Omesh Automation, Siliguri — pan-India installation & lifetime support.",
  keywords: [
    "GPS tracker Siliguri",
    "vehicle tracking",
    "fleet management",
    "school bus tracking",
    "AIS-140 GPS",
    "4G dashcam",
    "fuel monitoring",
    "Eagle Eye GPS",
  ],
  authors: [{ name: "BlackPrism", url: "https://blackprism.in" }],
  creator: "BlackPrism",
  openGraph: {
    type: "website",
    siteName: "Eagle Eye GPS",
    locale: "en_IN",
    images: ["/images/devices-mockup.png"],
  },
  icons: { icon: "/images/app-icon.png", apple: "/images/app-icon.png" },
};

export const viewport: Viewport = {
  themeColor: "#202c2f",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Eagle Eye GPS (Omesh Automation)",
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: `${site.url}/images/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bharat Complex, Ground Floor, Champasari More",
    addressLocality: "Siliguri",
    addressRegion: "West Bengal",
    postalCode: "734003",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={jakarta.variable}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
