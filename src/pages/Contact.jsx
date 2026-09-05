import { useState } from "react";
import { eventTypes } from "../data/events";

const WHATSAPP_NUMBER = "2348093600009";
const BOOKING_EMAIL = "bookings@whitestoneplace.com";

const initialForm = {
  name: "",
  phone: "",
  eventType: eventTypes[0].name,
  date: "",
  guests: "",
  message: "",
};

function buildMessage(form) {
  const lines = [
    `Hello Whitestone, I'd like to enquire about booking your venue.`,
    ``,
    `Name: ${form.name || "-"}`,
    `Phone: ${form.phone || "-"}`,
    `Event type: ${form.eventType}`,
    `Preferred date: ${form.date || "-"}`,
    `Estimated guests: ${form.guests || "-"}`,
    form.message ? `Message: ${form.message}` : null,
  ].filter(Boolean);
  return lines.join("\n");
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const message = buildMessage(form);
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const mailHref = `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(
    `Booking enquiry — ${form.eventType}`
  )}&body=${encodeURIComponent(message)}`;

  const canSend = form.name.trim().length > 0 && form.date.trim().length > 0;

  return (
    <>
      <section className="bg-ivory-dim pt-36 pb-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-brass-deep text-sm mb-4">Contact & booking</p>
          <h1 className="font-display text-5xl md:text-6xl text-charcoal max-w-2xl leading-tight">
            Let's put your date on hold.
          </h1>
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid lg:grid-cols-[1.1fr_1fr] gap-16">
          {/* Form */}
          <div>
            <p className="text-charcoal/70 leading-relaxed mb-10 max-w-prose">
              Fill in as much as you know — you can always add details later.
              When you're ready, send it straight to our events team on
              WhatsApp or by email.
            </p>

            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                setTouched(true);
                if (canSend) window.open(whatsappHref, "_blank", "noopener,noreferrer");
              }}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Full name" required>
                  <input
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    className="field"
                    placeholder="Your name"
                  />
                </Field>
                <Field label="Phone number">
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    className="field"
                    placeholder="080..."
                  />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Event type">
                  <select value={form.eventType} onChange={update("eventType")} className="field">
                    {eventTypes.map((e) => (
                      <option key={e.name} value={e.name}>
                        {e.name}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Preferred date" required>
                  <input type="date" value={form.date} onChange={update("date")} className="field" />
                </Field>
              </div>

              <Field label="Estimated guests">
                <input
                  type="number"
                  min="1"
                  value={form.guests}
                  onChange={update("guests")}
                  className="field"
                  placeholder="e.g. 250"
                />
              </Field>

              <Field label="Anything else we should know">
                <textarea
                  value={form.message}
                  onChange={update("message")}
                  rows={4}
                  className="field resize-none"
                  placeholder="Hall preference, timing, special requests..."
                />
              </Field>

              {touched && !canSend && (
                <p className="text-wine text-sm">Please add your name and a preferred date first.</p>
              )}

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  type="submit"
                  className="bg-charcoal text-ivory px-8 py-3.5 text-sm tracking-wide hover:bg-brass-deep transition-colors"
                >
                  Send via WhatsApp
                </button>
                <a
                  href={canSend ? mailHref : undefined}
                  onClick={(e) => {
                    if (!canSend) {
                      e.preventDefault();
                      setTouched(true);
                    }
                  }}
                  className={`border border-charcoal/30 text-charcoal px-8 py-3.5 text-sm tracking-wide transition-colors ${
                    canSend ? "hover:border-brass hover:text-brass-deep cursor-pointer" : "opacity-40 cursor-not-allowed"
                  }`}
                >
                  Send via email
                </a>
              </div>
            </form>
          </div>

          {/* Direct details + map */}
          <div className="space-y-10">
            <div>
              <p className="uppercase text-[11px] tracking-[0.15em] text-brass-deep mb-4">Prefer to reach us directly?</p>
              <a href="https://wa.me/2348093600009" target="_blank" rel="noreferrer" className="block text-charcoal text-lg hover:text-brass-deep transition-colors">
                WhatsApp: +234 809 360 0009
              </a>
              <a href={`mailto:${BOOKING_EMAIL}`} className="block text-charcoal text-lg hover:text-brass-deep transition-colors mt-2">
                {BOOKING_EMAIL}
              </a>
            </div>

            <div>
              <p className="uppercase text-[11px] tracking-[0.15em] text-brass-deep mb-4">Address</p>
              <p className="text-charcoal/80 leading-relaxed">
                3 Billings Way, Oregun,<br />Ikeja, Lagos, Nigeria
              </p>
            </div>

            <div className="border border-charcoal/15 overflow-hidden aspect-[4/3]">
              <iframe
                title="Whitestone Events Place location"
                src="https://www.google.com/maps?q=3+Billings+Way+Oregun+Ikeja+Lagos&output=embed"
                className="w-full h-full grayscale-[20%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block text-sm text-charcoal/70 mb-2">
        {label} {required && <span className="text-brass-deep">*</span>}
      </span>
      {children}
    </label>
  );
}
