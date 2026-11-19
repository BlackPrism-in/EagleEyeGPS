import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { navProducts, site, whatsappLink } from "@/data/site";
import { Container, WhatsAppIcon } from "./ui";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-top">
          <Link
            href="/"
            className="footer-logo"
            aria-label="Eagle Eye GPS home"
          >
            <Image
              src="/images/logo.png"
              alt="Eagle Eye"
              width={510}
              height={123}
            />
          </Link>
          <p>
            A clearer view.
            <br />
            <em>A better journey.</em>
          </p>
        </div>
        <div className="footer-grid">
          <div className="footer-intro">
            <h3>Your world, connected</h3>
            <p>
              GPS tracking and video telematics made simple. A complete
              solution, from the first installation to every journey after.
              <br />
              <strong>A brand of Omesh Automation.</strong>
            </p>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-4 w-4" /> Let’s talk on WhatsApp
            </a>
          </div>
          <div>
            <h3>Find your solution</h3>
            <ul>
              {navProducts.map((product) => (
                <li key={product.href}>
                  <Link href={product.href}>{product.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Explore</h3>
            <ul>
              <li>
                <Link href="/solutions">Industries we serve</Link>
              </li>
              <li>
                <Link href="/about">Our story</Link>
              </li>
              <li>
                <Link href="/contact">Get in touch</Link>
              </li>
              <li>
                <a
                  href={site.loginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Client login
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Come say hello</h3>
            <address>
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.line3}
            </address>
            <div className="footer-contact">
              <a href={site.phoneHref}>
                <Phone size={13} />
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`}>
                <Mail size={13} />
                {site.email}
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Eagle Eye GPS · Omesh Automation. All
            rights reserved.
          </p>
          <p>
            Designed &amp; built by{" "}
            <a
              href="https://blackprism.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              BlackPrism
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
