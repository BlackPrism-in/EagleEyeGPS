import { whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "./ui";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Eagle Eye GPS on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2"
    >
      <span className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-900 shadow-lg ring-1 ring-ink-900/5 transition-opacity sm:block sm:opacity-0 sm:group-hover:opacity-100">
        Chat with us
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.7)] transition-transform group-hover:scale-105">
        <span className="absolute inset-0 animate-ping-slow rounded-full bg-[#25D366] opacity-40" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </span>
    </a>
  );
}
