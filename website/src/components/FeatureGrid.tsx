import type { Feature } from "@/data/products";
import Reveal from "./Reveal";
import { Container, SectionHeading } from "./ui";

export default function FeatureGrid({
  title,
  intro,
  features,
}: {
  title: string;
  intro?: string;
  features: Feature[];
}) {
  return (
    <section className="feature-section">
      <Container>
        <SectionHeading eyebrow="A closer look" title={title} intro={intro} />
        <div className="feature-list">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={(index % 2) * 70}>
              <div className="feature-item">
                <span>
                  <feature.icon size={22} strokeWidth={1.5} />
                </span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
