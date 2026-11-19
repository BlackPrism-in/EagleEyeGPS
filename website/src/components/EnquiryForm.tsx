"use client";

import { useId, useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { navProducts, whatsappLink } from "@/data/site";
import { Button, WhatsAppIcon } from "./ui";

const productOptions = [
  ...navProducts.map((product) => product.title),
  "4G Dashcam (1/2/3/4-Channel)",
  "Not sure — need advice",
];
const vehicleCounts = ["1", "2 – 5", "6 – 20", "21 – 50", "51 – 100", "100+"];
type FieldName = "name" | "phone" | "product" | "count";
type Errors = Partial<Record<FieldName, string>>;

export default function EnquiryForm({
  defaultProduct,
  dark,
  compact,
}: {
  defaultProduct?: string;
  dark?: boolean;
  compact?: boolean;
}) {
  const uid = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [preparedLink, setPreparedLink] = useState("");
  const id = (field: string) => `${uid}-${field}`;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const digits = phone.replace(/\D/g, "");
    const product = String(data.get("product") ?? "");
    const count = String(data.get("count") ?? "");
    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your full name.";
    if (!/^[\d\s()+-]+$/.test(phone) || !/^(?:91|0)?[6-9]\d{9}$/.test(digits))
      next.phone = "Enter a valid Indian mobile number.";
    if (!product) next.product = "Please choose a product.";
    if (!count) next.count = "Please choose your vehicle count.";
    setErrors(next);
    const firstError = Object.keys(next)[0] as FieldName | undefined;
    if (firstError) {
      (
        event.currentTarget.elements.namedItem(firstError) as HTMLElement
      )?.focus();
      return;
    }
    const message = [
      "Hi Eagle Eye GPS, I'd like a free quote.",
      `Name: ${name}`,
      `Phone/WhatsApp: ${phone}`,
      `Product: ${product}`,
      `Vehicles: ${count}`,
    ].join("\n");
    const link = whatsappLink(message);
    window.open(link, "_blank", "noopener,noreferrer");
    setPreparedLink(link);
  }

  if (preparedLink) {
    return (
      <div
        className="form-success"
        role="status"
        tabIndex={-1}
        ref={(element) => element?.focus()}
      >
        <CheckCircle2 size={36} strokeWidth={1.5} />
        <h3>Your message is ready.</h3>
        <p>
          Review your enquiry in WhatsApp and tap send. If a new window didn’t
          open, use the button below.
        </p>
        <Button href={preparedLink} variant="whatsapp">
          <WhatsAppIcon /> Open WhatsApp
        </Button>
        <button type="button" onClick={() => setPreparedLink("")}>
          Start another enquiry
        </button>
      </div>
    );
  }

  const errorProps = (field: FieldName) => ({
    "aria-invalid": !!errors[field],
    "aria-describedby": errors[field] ? id(`${field}-error`) : undefined,
  });
  const showError = (field: FieldName) =>
    errors[field] && (
      <p id={id(`${field}-error`)} className="form-error">
        {errors[field]}
      </p>
    );

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`enquiry-form ${dark ? "enquiry-form--dark" : ""} ${compact ? "enquiry-form--compact" : ""}`}
    >
      <div>
        <label htmlFor={id("name")} className="form-label">
          Your name
        </label>
        <input
          id={id("name")}
          name="name"
          required
          autoComplete="name"
          placeholder="Full name"
          className="form-field"
          {...errorProps("name")}
        />
        {showError("name")}
      </div>
      <div>
        <label htmlFor={id("phone")} className="form-label">
          Mobile / WhatsApp
        </label>
        <input
          id={id("phone")}
          name="phone"
          required
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="10-digit mobile number"
          className="form-field"
          {...errorProps("phone")}
        />
        {showError("phone")}
      </div>
      <div>
        <label htmlFor={id("product")} className="form-label">
          I’m interested in
        </label>
        <select
          id={id("product")}
          name="product"
          required
          defaultValue={
            productOptions.includes(defaultProduct ?? "") ? defaultProduct : ""
          }
          className="form-field"
          {...errorProps("product")}
        >
          <option value="" disabled>
            Select a solution
          </option>
          {productOptions.map((product) => (
            <option key={product} value={product}>
              {product}
            </option>
          ))}
        </select>
        {showError("product")}
      </div>
      <div>
        <label htmlFor={id("count")} className="form-label">
          Number of vehicles
        </label>
        <select
          id={id("count")}
          name="count"
          required
          defaultValue=""
          className="form-field"
          {...errorProps("count")}
        >
          <option value="" disabled>
            Select vehicle count
          </option>
          {vehicleCounts.map((count) => (
            <option key={count} value={count}>
              {count}
            </option>
          ))}
        </select>
        {showError("count")}
      </div>
      <div className="form-submit">
        <button type="submit" className="button button--primary">
          Get my free quote
        </button>
        <p>
          <WhatsAppIcon className="mr-1 inline h-3.5 w-3.5" /> Opens WhatsApp.
          Review your message before sending.
        </p>
      </div>
    </form>
  );
}
