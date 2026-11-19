import { whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "./ui";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with Eagle Eye GPS on WhatsApp"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span>Chat with us</span>
    </a>
  );
}
