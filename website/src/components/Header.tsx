"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  Bus,
  Car,
  ChevronDown,
  LogIn,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Truck,
  Users,
  X,
} from "lucide-react";
import { mainNav, navProducts, site } from "@/data/site";
import { Button } from "./ui";

const productIcons = [Car, Truck, Bus, ShieldCheck, Users];

export default function Header() {
  const pathname = usePathname();
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    function dismiss(event: MouseEvent) {
      if (!productsRef.current?.contains(event.target as Node))
        setProductsOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setProductsOpen(false);
        if (productsRef.current?.contains(document.activeElement))
          productsRef.current.querySelector("button")?.focus();
      }
    }
    document.addEventListener("mousedown", dismiss);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", dismiss);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const media = window.matchMedia("(min-width: 1100px)");
    const onResize = () => {
      if (media.matches) dialogRef.current?.close();
    };
    media.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = previous;
      media.removeEventListener("change", onResize);
    };
  }, [mobileOpen]);

  const isActive = (href: string, dropdown?: boolean) =>
    dropdown
      ? pathname.startsWith("/products")
      : href === "/"
        ? pathname === "/"
        : pathname.startsWith(href);
  function closeMenus() {
    setProductsOpen(false);
    dialogRef.current?.close();
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="utility-bar">
        <div className="site-container utility-bar__inner">
          <p>
            <ShieldCheck size={14} />
            <strong>One complete package.</strong> 1-year recharge included.
          </p>
          <div>
            <span>
              <MapPin size={13} /> Siliguri, serving India
            </span>
            <a href={site.phoneHref}>
              <Phone size={13} />
              {site.phone}
            </a>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="site-container header-inner">
          <Link
            href="/"
            className="brand"
            aria-label="Eagle Eye GPS home"
            onClick={closeMenus}
          >
            <Image
              src="/images/logo.png"
              alt="Eagle Eye"
              width={510}
              height={123}
              priority
            />
            <span>GPS &amp; TELEMATICS</span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {mainNav.map((item) =>
              item.dropdown ? (
                <div
                  key={item.label}
                  ref={productsRef}
                  className="nav-products"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget))
                      setProductsOpen(false);
                  }}
                >
                  <button
                    className={`nav-link ${isActive(item.href, true) ? "is-active" : ""}`}
                    type="button"
                    aria-expanded={productsOpen}
                    aria-controls="product-menu"
                    onClick={() => setProductsOpen(!productsOpen)}
                  >
                    Products{" "}
                    <ChevronDown
                      size={14}
                      className={productsOpen ? "rotate-180" : ""}
                    />
                  </button>
                  <div
                    id="product-menu"
                    className="product-menu"
                    hidden={!productsOpen}
                  >
                    <p className="menu-eyebrow">A solution for every journey</p>
                    {navProducts.map((product, index) => {
                      const Icon = productIcons[index];
                      return (
                        <Link
                          key={product.href}
                          href={product.href}
                          onClick={closeMenus}
                          aria-current={
                            pathname === product.href ? "page" : undefined
                          }
                        >
                          <span className="menu-icon">
                            <Icon size={20} />
                          </span>
                          <span>
                            <strong>{product.title}</strong>
                            <small>{product.short}</small>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenus}
                  className={`nav-link ${isActive(item.href) ? "is-active" : ""}`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label === "About Us" ? "Our story" : item.label}
                </Link>
              ),
            )}
          </nav>
          <div className="header-actions">
            <a
              href={site.loginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="login-link"
            >
              <LogIn size={16} /> Client login
            </a>
            <Button href="/contact#quote">Get a free quote</Button>
          </div>
          <button
            className="mobile-toggle"
            type="button"
            aria-label="Open navigation"
            aria-haspopup="dialog"
            aria-controls="mobile-navigation"
            aria-expanded={mobileOpen}
            onClick={() => {
              dialogRef.current?.showModal();
              setMobileOpen(true);
            }}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>
      <dialog
        id="mobile-navigation"
        ref={dialogRef}
        className="mobile-dialog"
        aria-label="Navigation"
        onClose={() => setMobileOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenus();
        }}
      >
        <div className="mobile-dialog__inner">
          <div className="mobile-dialog__heading">
            <span className="eyebrow">Explore Eagle Eye</span>
            <button
              className="mobile-toggle"
              onClick={closeMenus}
              aria-label="Close navigation"
            >
              <X size={22} />
            </button>
          </div>
          <nav
            aria-label="Mobile navigation"
            onClick={(event) => {
              if ((event.target as HTMLElement).closest("a")) closeMenus();
            }}
          >
            <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>
              Home
            </Link>
            <details open={pathname.startsWith("/products")}>
              <summary>
                Products <ChevronDown size={18} />
              </summary>
              <div>
                {navProducts.map((product) => (
                  <Link
                    href={product.href}
                    key={product.href}
                    aria-current={
                      pathname === product.href ? "page" : undefined
                    }
                  >
                    {product.title}
                  </Link>
                ))}
              </div>
            </details>
            <Link
              href="/solutions"
              aria-current={pathname === "/solutions" ? "page" : undefined}
            >
              Solutions
            </Link>
            <Link
              href="/about"
              aria-current={pathname === "/about" ? "page" : undefined}
            >
              Our story
            </Link>
            <Link
              href="/contact"
              aria-current={pathname === "/contact" ? "page" : undefined}
            >
              Contact
            </Link>
          </nav>
          <div className="mobile-dialog__actions">
            <Button href="/contact#quote" onClick={closeMenus}>
              Get a free quote
            </Button>
            <Button href={site.loginUrl} variant="outline">
              <LogIn size={16} /> Client login
            </Button>
            <a href={site.phoneHref}>{site.phone}</a>
          </div>
        </div>
      </dialog>
    </>
  );
}
