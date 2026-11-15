import type { Metadata } from "next";
import PhaseTwoPage from "@/components/PhaseTwoPage";

export const metadata: Metadata = {
  title: "Field Employee Tracking Solution",
  description:
    "Mobile workforce attendance, live field visit tracking and task reporting for sales and service teams.",
};

export default function Page() {
  return (
    <PhaseTwoPage
      title="Field Employee Tracking Solution"
      productName="Field Employee Tracking"
      headline="Know where your field team is — and what they've done today"
      text="Mobile workforce attendance, live field visit tracking, and task reporting for sales, service and collection teams."
      points={["Mobile attendance", "Live field visit tracking", "Task reporting", "Web & mobile dashboard"]}
      image="/images/app-icon.png"
    />
  );
}
