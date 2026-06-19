"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { trackLead } from "@/lib/track";
import { CheckIcon, CircleCheckIcon } from "./icons";

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadForm() {
  const t = useTranslations("lead");
  const f = useTranslations("form");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      trackLead("lead_form");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="lead" id="contact">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow" style={{ display: "block", color: "var(--sage)" }}>
            {t("eyebrow")}
          </span>
          <h2>{t("h2")}</h2>
          <p className="lead-sub">{t("sub")}</p>
          <ul>
            {(["b1", "b2", "b3"] as const).map((b) => (
              <li key={b}>
                <CheckIcon />
                <span>{t(b)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="form">
          {status === "success" ? (
            <div className="form-ok" id="formOk">
              <CircleCheckIcon />
              <h3>{f("ok_h")}</h3>
              <p>{f("ok_p")}</p>
            </div>
          ) : (
            <form id="leadForm" noValidate onSubmit={handleSubmit}>
              <div className="row">
                <div className="field">
                  <label>{f("company")}</label>
                  <input name="company" required />
                </div>
                <div className="field">
                  <label>{f("country")}</label>
                  <input name="country" required />
                </div>
              </div>
              <div className="row">
                <div className="field">
                  <label>{f("type")}</label>
                  <select name="type">
                    <option value="Importer">{f("type_imp")}</option>
                    <option value="Retailer / Supermarket">{f("type_ret")}</option>
                    <option value="Distributor">{f("type_dist")}</option>
                    <option value="Brand (private label)">{f("type_brand")}</option>
                  </select>
                </div>
                <div className="field">
                  <label>{f("volume")}</label>
                  <input name="volume" placeholder={f("volume_ph")} />
                </div>
              </div>
              <div className="row">
                <div className="field">
                  <label>{f("email")}</label>
                  <input type="email" name="email" required />
                </div>
                <div className="field">
                  <label>{f("whatsapp")}</label>
                  <input name="whatsapp" />
                </div>
              </div>
              <div className="field">
                <label>{f("product")}</label>
                <input name="product" placeholder={f("product_ph")} />
              </div>
              <div className="field">
                <label>{f("message")}</label>
                <textarea name="message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
                {f("submit")}
              </button>
              {status === "error" ? (
                <p className="form-error">{f("error")}</p>
              ) : (
                <p className="form-note">{f("note")}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
