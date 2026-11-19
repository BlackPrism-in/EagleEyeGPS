"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import {
  Bus,
  Car,
  Check,
  Gauge,
  Layers2,
  LocateFixed,
  MapPin,
  Navigation,
  ShieldCheck,
  Truck,
} from "lucide-react";

const modes = [
  {
    id: "personal",
    label: "Personal",
    icon: Car,
    vehicle: "Family car",
    plate: "WB 74 · 0826",
    speed: "42",
    distance: "18.6",
    alert: "Inside your safe zone",
    detail: "Geofence monitoring enabled",
    location: "Sevoke Road",
    x: 306,
    y: 215,
    route:
      "M134 343 L134 281 Q134 268 148 268 L292 268 Q306 268 306 254 L306 215",
  },
  {
    id: "fleet",
    label: "Fleet",
    icon: Truck,
    vehicle: "Delivery truck",
    plate: "WB 73 · 1248",
    speed: "56",
    distance: "126.4",
    alert: "On the planned route",
    detail: "Route deviation alerts enabled",
    location: "Hill Cart Road",
    x: 368,
    y: 154,
    route:
      "M134 343 L134 281 Q134 268 148 268 L292 268 Q306 268 306 254 L306 168 Q306 154 320 154 L368 154",
  },
  {
    id: "school",
    label: "School bus",
    icon: Bus,
    vehicle: "School bus",
    plate: "WB 74 · 0365",
    speed: "28",
    distance: "12.8",
    alert: "Next stop: school gate",
    detail: "Parent proximity alerts enabled",
    location: "Pradhan Nagar",
    x: 200,
    y: 154,
    route:
      "M134 343 L134 281 Q134 268 148 268 L292 268 Q306 268 306 254 L306 168 Q306 154 292 154 L200 154",
  },
];

export function StreetMap({ miniature = false }: { miniature?: boolean }) {
  return (
    <svg
      viewBox="0 0 580 440"
      preserveAspectRatio="none"
      fill="none"
      className="street-map"
      aria-hidden="true"
    >
      <rect width="580" height="440" fill="#edf0ed" />
      <g fill="#e3e8e2" stroke="#dce3dc" strokeWidth="1">
        <rect x="22" y="26" width="94" height="99" rx="8" />
        <rect x="153" y="24" width="135" height="101" rx="8" />
        <rect x="326" y="24" width="102" height="101" rx="8" />
        <rect x="22" y="174" width="94" height="76" rx="8" />
        <rect x="153" y="174" width="62" height="76" rx="8" />
        <rect x="234" y="174" width="54" height="76" rx="8" />
        <rect x="326" y="174" width="101" height="76" rx="8" />
        <rect x="22" y="290" width="94" height="117" rx="8" />
        <rect x="153" y="290" width="135" height="51" rx="8" />
        <rect x="153" y="362" width="135" height="47" rx="8" />
        <rect x="326" y="290" width="103" height="119" rx="8" />
      </g>
      <g stroke="#f9fbf8" strokeWidth="9">
        <path d="M16 76H116M66 26V124M153 76H288M219 26V125M326 76H428M377 26V125M21 212H116M186 176V248M326 212H428M378 176V248M22 344H116M68 290V408M222 290V340M326 344H428M378 290V408" />
      </g>
      <path
        d="M511 -20C425 62 534 119 487 191S453 307 500 364S477 426 492 470"
        stroke="#c8ded4"
        strokeWidth="52"
      />
      <path
        d="M511 -20C425 62 534 119 487 191S453 307 500 364S477 426 492 470"
        stroke="#b9d3c8"
        strokeWidth="1"
      />
      <g stroke="#dce1db" strokeWidth="23">
        <path d="M134 0V440M306 0V440M0 154H580M0 268H580M0 425H580" />
      </g>
      <g stroke="white" strokeWidth="19">
        <path d="M134 0V440M306 0V440M0 154H580M0 268H580M0 425H580" />
      </g>
      <g fill="#c8dac3">
        <rect x="336" y="299" width="83" height="100" rx="7" />
        <rect x="32" y="35" width="75" height="32" rx="6" />
      </g>
      <g fill="#b5cbb0">
        <circle cx="349" cy="316" r="6" />
        <circle cx="366" cy="338" r="8" />
        <circle cx="394" cy="318" r="9" />
        <circle cx="399" cy="369" r="7" />
        <circle cx="349" cy="383" r="9" />
      </g>
      {!miniature && (
        <g fill="#829087" fontSize="10" fontFamily="inherit" letterSpacing="1">
          <text x="161" y="105">
            PRADHAN NAGAR
          </text>
          <text x="167" y="319">
            SILIGURI
          </text>
          <text x="339" y="359" fontSize="9">
            CITY PARK
          </text>
          <text x="34" y="199" fontSize="9">
            CHAMPASARI
          </text>
          <text x="326" y="142" fontSize="9">
            SEVOKE ROAD
          </text>
          <text x="532" y="320" transform="rotate(-80 532 320)" fill="#7eab97">
            MAHANANDA
          </text>
        </g>
      )}
      <g fill="#d4dcd1">
        <rect x="162" y="184" width="19" height="14" rx="2" />
        <rect x="242" y="218" width="33" height="20" rx="2" />
        <rect x="334" y="183" width="31" height="18" rx="2" />
        <rect x="33" y="303" width="25" height="24" rx="2" />
        <rect x="79" y="366" width="28" height="28" rx="2" />
      </g>
    </svg>
  );
}

export default function TrackingPreview() {
  const [active, setActive] = useState(0);
  const [showRoute, setShowRoute] = useState(true);
  const [centered, setCentered] = useState(false);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const mode = modes[active];
  const Icon = mode.icon;

  function onTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % modes.length;
    else if (event.key === "ArrowLeft")
      next = (index + modes.length - 1) % modes.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = modes.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabsRef.current[next]?.focus();
  }

  return (
    <div className="tracking-preview">
      <div className="preview-topline">
        <span>
          <span className="preview-mark">
            <LocateFixed size={17} />
          </span>{" "}
          EAGLE EYE <strong>GPS PRO</strong>
        </span>
        <span>Interactive preview</span>
      </div>
      <div
        role="tablist"
        aria-label="Preview a tracking solution"
        className="preview-tabs"
      >
        {modes.map((item, index) => (
          <button
            key={item.id}
            ref={(element) => {
              tabsRef.current[index] = element;
            }}
            role="tab"
            id={`preview-tab-${item.id}`}
            aria-controls="tracking-panel"
            aria-selected={active === index}
            tabIndex={active === index ? 0 : -1}
            onKeyDown={(event) => onTabKey(event, index)}
            onClick={() => {
              setActive(index);
              setCentered(false);
            }}
          >
            <item.icon size={16} />
            {item.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id="tracking-panel"
        aria-labelledby={`preview-tab-${mode.id}`}
        className={`preview-map ${centered ? "is-centered" : ""}`}
      >
        <div
          className="preview-map__drawing"
          style={{ transformOrigin: `${mode.x / 5.8}% ${mode.y / 4.4}%` }}
        >
          <StreetMap />
          <svg
            viewBox="0 0 580 440"
            preserveAspectRatio="none"
            className="route-overlay"
            fill="none"
            aria-hidden="true"
          >
            {showRoute && (
              <>
                <path
                  d={mode.route}
                  stroke="white"
                  strokeWidth="9"
                  strokeLinecap="round"
                />
                <path
                  className="map-route"
                  d={mode.route}
                  stroke="#f57942"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle
                  cx="134"
                  cy="343"
                  r="7"
                  fill="white"
                  stroke="#253830"
                  strokeWidth="3"
                />
              </>
            )}
            <circle
              cx={mode.x}
              cy={mode.y}
              r="32"
              fill="#f57942"
              opacity=".12"
            />
            <circle
              cx={mode.x}
              cy={mode.y}
              r="21"
              fill="#f57942"
              opacity=".14"
            />
            <circle
              cx={mode.x}
              cy={mode.y}
              r="15"
              fill="#f57942"
              stroke="white"
              strokeWidth="4"
            />
            <path
              d={`M${mode.x - 4} ${mode.y + 4}l4 -10 4 10 -4 -2z`}
              fill="white"
            />
          </svg>
        </div>
        <div className="map-location">
          <MapPin size={14} /> Siliguri, West Bengal
        </div>
        <div
          className="map-vehicle-label"
          key={mode.id}
          style={{ left: `${mode.x / 5.8}%`, top: `${mode.y / 4.4 - 15}%` }}
        >
          <Icon size={14} />
          <span>{mode.vehicle}</span>
          <span className="live-dot" />
        </div>
        <div className="map-controls">
          <button
            type="button"
            aria-label={
              centered ? "Zoom out to full route" : "Zoom in on vehicle"
            }
            aria-pressed={centered}
            onClick={() => setCentered(!centered)}
          >
            <LocateFixed size={18} />
          </button>
          <button
            type="button"
            aria-label={showRoute ? "Hide sample route" : "Show sample route"}
            aria-pressed={showRoute}
            onClick={() => setShowRoute(!showRoute)}
          >
            <Layers2 size={18} />
          </button>
        </div>
        <div className="map-alert" aria-live="polite">
          <span className="map-alert__icon">
            <ShieldCheck size={18} />
          </span>
          <div>
            <strong>{mode.alert}</strong>
            <span>{mode.detail}</span>
          </div>
          <Check size={16} />
        </div>
      </div>
      <div className="preview-vehicle" aria-live="polite">
        <div className="preview-vehicle__heading">
          <span className="vehicle-icon">
            <Icon size={23} strokeWidth={1.5} />
          </span>
          <div>
            <strong>{mode.vehicle}</strong>
            <span>{mode.plate}</span>
          </div>
          <span className="vehicle-status">
            <span className="live-dot" /> Moving
          </span>
        </div>
        <div className="vehicle-metrics">
          <div>
            <Gauge size={15} />
            <strong>
              {mode.speed}
              <small> km/h</small>
            </strong>
            <span>Current speed</span>
          </div>
          <div>
            <Navigation size={15} />
            <strong>
              {mode.distance}
              <small> km</small>
            </strong>
            <span>Distance today</span>
          </div>
          <div>
            <MapPin size={15} />
            <strong>Siliguri</strong>
            <span>{mode.location}</span>
          </div>
        </div>
      </div>
      <div className="preview-caption">
        <span>Illustrative map · sample vehicle data</span>
        <span>
          <ShieldCheck size={12} /> Connected. Protected.
        </span>
      </div>
    </div>
  );
}
