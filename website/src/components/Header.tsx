"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, LogIn, Menu, Phone, X } from "lucide-react";
import { mainNav, navProducts, site, whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "./ui";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string, dropdown?: boolean) =>
    dropdown ? pathname.startsWith("/products") : href === "/" ? pathname === "/" : pathname.startsWith(href);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProductsOpen(true);
  };
  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setProductsOpen(false), 120);
  };

  return (
    <>
      {/* Top info strip */}
      <div className="hidden bg-ink-950 text-xs text-white/70 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <p>
            <span className="font-semibold text-brand-400">1-Year Recharge Included</span> on every Eagle Eye GPS
            product · Pan-India installation
          </p>
          <div className="flex items-center gap-5">
            <a href={site.phoneHref} className="inline-flex items-center gap-1.5 hover:text-white">
              <Phone className="h-3.5 w-3.5" /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-shadow ${
          scrolled ? "border-ink-900/10 shadow-[0_6px_24px_-12px_rgba(13,17,23,0.25)]" : "border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
          <Link href="/" className="flex shrink-0 flex-col" aria-label="Eagle Eye GPS home">
            <Image
              src="/images/logo.png"
              alt="Eagle Eye GPS"
              width={510}
              height={123}
              priority
              className="h-8 w-auto lg:h-9"
            />
            <span className="mt-0.5 pl-0.5 text-[10px] font-medium tracking-wide text-ink-600/70">
              by Omesh Automation
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {mainNav.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative" onMouseEnter={openMenu} onMouseLeave={closeMenu}>
                  <button
                    type="button"
                    aria-expanded={productsOpen}
                    aria-haspopup="true"
                    onClick={() => setProductsOpen((v) => !v)}
                    className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      isActive(item.href, true) ? "text-brand-700" : "text-ink-800 hover:text-brand-700"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    className={`absolute left-1/2 top-full w-[440px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                      productsOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden rounded-2xl border border-ink-900/10 bg-white p-2 shadow-2xl">
                      {navProducts.map((p) => (
                        <Link
                          key={p.href}
                          href={p.href}
                          className="group block rounded-xl px-4 py-3 hover:bg-brand-50"
                        >
                          <span className="block text-sm font-semibold text-ink-900 group-hover:text-brand-800">
                            {p.title}
                          </span>
                          <span className="block text-xs text-ink-600/70">{p.short}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive(item.href) ? "text-brand-700" : "text-ink-800 hover:text-brand-700"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={site.loginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-ink-900/15 px-5 py-2.5 text-sm font-semibold text-ink-900 transition-colors hover:border-ink-900"
            >
              <LogIn className="h-4 w-4" /> Login
            </a>
            <Link
              href="/contact#quote"
              className="inline-flex items-center rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-brand-400"
            >
              Get Free Quote
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-ink-950/60 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => {
            // Close on any link tap, including same-page hash links like /contact#quote
            if ((e.target as HTMLElement).closest("a")) setOpen(false);
          }}
        >
          <div className="flex items-center justify-between border-b border-ink-900/10 px-5 py-4">
            <Image src="/images/logo.png" alt="Eagle Eye GPS" width={510} height={123} className="h-7 w-auto" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-5 py-4" aria-label="Mobile">
            {mainNav.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="border-b border-ink-900/5 py-2">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-2 text-base font-semibold"
                    onClick={() => setProductsOpen((v) => !v)}
                    aria-expanded={productsOpen}
                  >
                    {item.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                  </button>
                  {productsOpen && (
                    <div className="space-y-1 pb-2 pl-3">
                      {navProducts.map((p) => (
                        <Link
                          key={p.href}
                          href={p.href}
                          className="block rounded-lg px-3 py-2 text-sm text-ink-700 hover:bg-brand-50"
                        >
                          {p.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block border-b border-ink-900/5 py-4 text-base font-semibold ${
                    isActive(item.href) ? "text-brand-700" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <div className="space-y-2 border-t border-ink-900/10 p-5">
            <a
              href={site.loginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-ink-900/15 py-3 text-sm font-semibold"
            >
              <LogIn className="h-4 w-4" /> Client Login
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-sm font-semibold text-white"
            >
              <WhatsAppIcon /> WhatsApp Us
            </a>
            <Link
              href="/contact#quote"
              className="flex w-full items-center justify-center rounded-full bg-brand-500 py-3 text-sm font-semibold text-ink-950"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
