"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { Bus, Check, MonitorSmartphone, Smartphone, Users } from "lucide-react";
import type { Tier } from "@/data/schoolbus";

const audienceIcon = (audience: string) =>
  audience.includes("Parent")
    ? Users
    : audience.includes("Driver")
      ? Bus
      : MonitorSmartphone;

export default function SmartBusTiers({ tiers }: { tiers: Tier[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function moveTab(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % tiers.length;
    else if (event.key === "ArrowLeft")
      next = (index + tiers.length - 1) % tiers.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tiers.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  }

  return (
    <div className="school-tiers">
      <div
        role="tablist"
        aria-label="SmartBus plans"
        className="school-plan-tabs"
      >
        {tiers.map((tier, index) => (
          <button
            key={tier.id}
            ref={(element) => {
              refs.current[index] = element;
            }}
            role="tab"
            type="button"
            id={`tab-${tier.id}`}
            aria-selected={active === index}
            aria-controls={`panel-${tier.id}`}
            tabIndex={active === index ? 0 : -1}
            onKeyDown={(event) => moveTab(event, index)}
            onClick={() => setActive(index)}
          >
            {tier.name}
            <span>
              {tier.id === "lite"
                ? "Everyday essentials"
                : "Complete transport control"}
            </span>
          </button>
        ))}
      </div>
      {tiers.map((tier, tierIndex) => (
        <div
          key={tier.id}
          role="tabpanel"
          id={`panel-${tier.id}`}
          aria-labelledby={`tab-${tier.id}`}
          hidden={active !== tierIndex}
          tabIndex={0}
          className="school-plan-panel"
        >
          <div className="school-plan-heading">
            <h3>
              {tier.name} <span>{tier.subtitle}</span>
            </h3>
            <p>{tier.tagline}</p>
            {tier.note && (
              <p className="school-plan-note">
                <Check size={16} />
                {tier.note}
              </p>
            )}
          </div>
          <div
            className={`school-audiences ${tier.groups.length === 3 ? "school-audiences--three" : ""}`}
          >
            {tier.groups.map((group) => {
              const Icon = audienceIcon(group.audience);
              return (
                <div key={group.audience} className="school-audience">
                  <div className="school-audience__heading">
                    <span>
                      <Icon size={23} strokeWidth={1.5} />
                    </span>
                    <div>
                      <h4>{group.audience}</h4>
                      <p>
                        <Smartphone size={13} />
                        {group.platform}
                      </p>
                    </div>
                  </div>
                  <ul>
                    {group.features.map((feature) => (
                      <li key={feature.title}>
                        <Check size={16} />
                        <div>
                          <h5>{feature.title}</h5>
                          <p>{feature.text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
