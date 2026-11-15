import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navProducts, site, whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "./ui";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white/70">
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:px-8">
        <div>
          <div className="inline-flex rounded-xl bg-white px-4 py-3">
            <Image src="/images/logo.png" alt="Eagle Eye GPS" width={510} height={123} className="h-8 w-auto" />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Eagle Eye GPS is a brand of <span className="font-semibold text-white">Omesh Automation</span>, Siliguri —
            delivering complete, turnkey GPS tracking, video telematics and fleet products with 1-year recharge
            included, on-site installation and lifetime support.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1fb857]"
          >
            <WhatsAppIcon /> Chat on WhatsApp
          </a>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">Products</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navProducts.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="hover:text-brand-400">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">Company</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link href="/solutions" className="hover:text-brand-400">
                Solutions (Industries We Serve)
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-brand-400">
                About Us
              </Link>
            </li>
            <li>
              <a href={site.loginUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-400">
                Client Login
              </a>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brand-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">Get in Touch</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <span>
                {site.address.line1},<br />
                {site.address.line2},<br />
                {site.address.line3}
              </span>
            </li>
            <li>
              <a href={site.phoneHref} className="flex gap-3 hover:text-brand-400">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex gap-3 hover:text-brand-400">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 pb-24 pt-6 text-xs sm:flex-row sm:pb-6 sm:pl-6 sm:pr-24 lg:pl-8">
          <p>
            © {new Date().getFullYear()} Eagle Eye GPS · Omesh Automation. All rights reserved.
          </p>
          <p className="text-white/50">
            Designed &amp; built with <span aria-label="love" role="img">❤️</span> by{" "}
            <a
              href="https://blackprism.in"
              target="_blank"
              rel="noopener"
              className="font-semibold text-white/80 transition-colors hover:text-brand-400"
            >
              BlackPrism
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
