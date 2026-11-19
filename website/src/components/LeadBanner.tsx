import { MapPin, Phone } from "lucide-react";
import { site, whatsappLink } from "@/data/site";
import EnquiryForm from "./EnquiryForm";
import { Container, Eyebrow, WhatsAppIcon } from "./ui";

export default function LeadBanner({
  title = "Let’s get you connected.",
  intro = "Tell us what you need to track. We’ll recommend the right complete package, with hardware, apps, installation and 1-year recharge included.",
  defaultProduct,
  id = "quote",
}: {
  title?: string;
  intro?: string;
  defaultProduct?: string;
  id?: string;
}) {
  return (
    <section id={id} className="lead-section">
      <Container>
        <div className="lead-panel">
          <div className="lead-copy">
            <Eyebrow>Better journeys start here</Eyebrow>
            <h2>{title}</h2>
            <p>{intro}</p>
            <div className="lead-contact">
              <a href={site.phoneHref}>
                <Phone size={16} />
                {site.phone}
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Let’s chat on WhatsApp
              </a>
            </div>
            <div className="lead-location">
              <MapPin size={17} />
              <span>
                Based in Siliguri. Connected across India.
                <br />
                On-site installation &amp; lifetime support.
              </span>
            </div>
          </div>
          <div className="quote-form">
            <div className="quote-form__heading">
              <h3>Find your perfect fit</h3>
              <span>Just a few details</span>
            </div>
            <EnquiryForm defaultProduct={defaultProduct} />
          </div>
        </div>
      </Container>
    </section>
  );
}
