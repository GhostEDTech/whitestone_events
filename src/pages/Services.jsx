import { Link } from "react-router-dom";
import MarbleVeins from "../components/MarbleVeins";
import { eventTypes, halls } from "../data/events";

export default function Services() {
  return (
    <>
      <section className="relative bg-ivory-dim pt-36 pb-20 overflow-hidden">
        <MarbleVeins className="absolute inset-0 w-full h-full" opacity={0.35} />
        <div className="relative max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-brass-deep text-sm mb-4">What we host</p>
          <h1 className="font-display text-5xl md:text-6xl text-charcoal max-w-3xl leading-tight">
            Six kinds of occasion, staged with the same standard of care.
          </h1>
          <p className="text-charcoal/70 max-w-prose mt-6 leading-relaxed">
            Every booking includes access to our grounds, security, and event
            staff. What changes is the layout, the lighting, and the small
            details we shape around the occasion.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          {eventTypes.map((e, i) => (
            <div
              key={e.name}
              className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-6 md:gap-16 py-12 border-t border-charcoal/15 last:border-b"
            >
              <div>
                <span className="text-brass-deep font-display italic text-lg">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-charcoal mt-2">{e.name}</h2>
              </div>
              <div>
                <p className="text-charcoal/75 text-lg leading-relaxed">{e.blurb}</p>
                <p className="text-charcoal/55 leading-relaxed mt-4">{e.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal text-ivory py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-brass-light text-sm mb-3">Choosing a hall</p>
          <h2 className="font-display text-3xl md:text-4xl mb-12 max-w-xl">
            Jadeite for scale. Moonstone for intimacy.
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {halls.map((hall) => (
              <div key={hall.name} className="border-t border-ivory/20 pt-6">
                <h3 className="font-display text-2xl mb-3">{hall.name}</h3>
                <p className="text-ivory/65 leading-relaxed">{hall.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-6">
            Ready to put a date on hold?
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-charcoal text-ivory px-8 py-3.5 text-sm tracking-wide hover:bg-brass-deep transition-colors"
          >
            Start a booking enquiry
          </Link>
        </div>
      </section>
    </>
  );
}
