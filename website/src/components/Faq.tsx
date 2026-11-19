import { Plus } from "lucide-react";
import { Button, Container, Eyebrow } from "./ui";

const questions = [
  {
    question: "What’s included in my tracking package?",
    answer:
      "Your package includes the GPS device, SIM, tracking software, mobile apps, on-site installation and your first year of recharge. You also get lifetime support from our team. Optional sensors and dashcams can be added to suit your needs.",
  },
  {
    question: "Can I track my vehicles from my phone?",
    answer:
      "Yes. The Eagle Eye GPS Pro app gives you live tracking, alerts, route history and reports on your phone. You can also use the web dashboard to keep an eye on your vehicles from your computer.",
  },
  {
    question: "Do you help with installation?",
    answer:
      "Yes. We offer on-site installation across India. Our technician fits and configures your tracking device and helps you get started with the apps. Contact our Siliguri team to discuss installation for your location.",
  },
  {
    question: "How do I choose the right solution?",
    answer:
      "Personal tracking is designed for cars, bikes and family vehicles. Fleet management adds operational tools such as fuel monitoring, sensors and driver reports. SmartBus connects schools, parents and drivers. Tell us your vehicle type and count, and we’ll help you choose.",
  },
];

export default function Faq() {
  return (
    <section className="home-section faq-section">
      <Container className="faq-layout">
        <div>
          <Eyebrow>A little clarity</Eyebrow>
          <h2>
            Good questions.
            <br />
            Straight answers.
          </h2>
          <p>
            Still have something on your mind?
            <br />
            Our team is a conversation away.
          </p>
          <Button href="/contact" variant="outline">
            Talk to our team
          </Button>
        </div>
        <div className="faq-list">
          {questions.map((item) => (
            <details key={item.question}>
              <summary>
                {item.question}
                <Plus size={19} />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
