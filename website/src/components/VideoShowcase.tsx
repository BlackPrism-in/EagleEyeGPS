"use client";

import Image from "next/image";
import { useState } from "react";
import { Camera, Check, Mic, Video } from "lucide-react";
import { Button, Container, Eyebrow } from "./ui";

const views = [
  {
    label: "Road view",
    image: "/images/dashcam-adas.jpg",
    alt: "Road camera view with driver assistance detection",
  },
  {
    label: "Cabin view",
    image: "/images/dashcam-cabin.jpg",
    alt: "In-vehicle cabin camera view",
  },
];

export default function VideoShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section className="video-section">
      <Container className="video-layout">
        <div className="video-copy">
          <Eyebrow light>Go beyond the map</Eyebrow>
          <h2>
            A clearer picture.
            <br />
            <em>A safer journey.</em>
          </h2>
          <p>
            Sometimes a location is only half the story. Eagle Eye 4G dashcams
            let you see the road and the cabin, right from your phone.
          </p>
          <ul>
            <li>
              <Video size={18} /> Live video &amp; remote playback
            </li>
            <li>
              <Mic size={18} /> In-cabin voice monitoring
            </li>
            <li>
              <Camera size={18} /> 1, 2, 3 or 4-channel coverage
            </li>
            <li>
              <Check size={18} /> Full GPS tracking built in
            </li>
          </ul>
          <Button href="/products/advance-fleet-management">
            Explore video telematics
          </Button>
        </div>
        <div className="video-preview">
          <div className="video-preview__top">
            <span>
              <Camera size={16} /> EAGLE EYE 4G DASHCAM
            </span>
            <span>4G connected</span>
          </div>
          <div className="video-frame">
            <Image
              key={active}
              src={views[active].image}
              alt={views[active].alt}
              fill
              sizes="(min-width: 900px) 50vw, 100vw"
              className="object-cover"
            />
            <span className="video-frame__label">
              {views[active].label} · Product preview
            </span>
            <div className="video-corner video-corner--tl" />
            <div className="video-corner video-corner--tr" />
            <div className="video-corner video-corner--bl" />
            <div className="video-corner video-corner--br" />
          </div>
          <div className="video-preview__bottom">
            <div role="group" aria-label="Camera view">
              {views.map((view, index) => (
                <button
                  key={view.label}
                  aria-pressed={active === index}
                  onClick={() => setActive(index)}
                >
                  <Camera size={14} />
                  {view.label}
                </button>
              ))}
            </div>
            <span>More angles. Fewer blind spots.</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
