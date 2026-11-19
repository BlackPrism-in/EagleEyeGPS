import Image from "next/image";
import { Camera, Check } from "lucide-react";
import type { DashcamBlock } from "@/data/products";
import { Button, Container, Eyebrow } from "./ui";

const channels = [
  { count: "1", label: "Front road" },
  { count: "2", label: "Road + cabin" },
  { count: "3", label: "+ Blind spot" },
  { count: "4", label: "All-around view" },
];

export default function DashcamUpgrade({ block }: { block: DashcamBlock }) {
  return (
    <section className="dashcam-upgrade">
      <Container>
        <div className="upgrade-layout">
          <div>
            <Eyebrow light>See more. Know more.</Eyebrow>
            <h2>{block.title}</h2>
            <p>{block.description}</p>
            <div
              className="channel-options"
              aria-label="Available camera channels"
            >
              {channels.map((channel) => (
                <div key={channel.count}>
                  <strong>
                    {channel.count}
                    <span> CH</span>
                  </strong>
                  <p>{channel.label}</p>
                </div>
              ))}
            </div>
            <div className="upgrade-photo">
              <Image
                src="/images/dashcam-cabin.jpg"
                alt="In-cabin dashcam product preview"
                fill
                sizes="(min-width: 900px) 45vw, 100vw"
                className="object-cover"
              />
              <span>
                <Camera size={14} /> Eagle Eye 4G video telematics
              </span>
            </div>
          </div>
          <div className="upgrade-benefits">
            <span className="upgrade-label">Optional hardware upgrade</span>
            <ul>
              {block.points.map((point) => (
                <li key={point.title}>
                  <Check size={19} />
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button href="#quote">Ask about dashcam pricing</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
