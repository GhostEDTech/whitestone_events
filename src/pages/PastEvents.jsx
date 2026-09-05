import { Link } from "react-router-dom";
import MarbleVeins from "../components/MarbleVeins";
import EventPlate from "../components/EventPlate";
import { pastEvents } from "../data/pastEvents";

export default function PastEvents() {
  return (
    <>
      <section className="relative bg-ivory-dim pt-36 pb-20 overflow-hidden">
        <MarbleVeins className="absolute inset-0 w-full h-full" opacity={0.35} />
        <div className="relative max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-brass-deep text-sm mb-4">Past events</p>
          <h1 className="font-display text-5xl md:text-6xl text-charcoal max-w-3xl leading-tight">
            A record of the days we've hosted.
          </h1>
          <p className="text-charcoal/70 max-w-prose mt-6 leading-relaxed">
            A selection of weddings, birthdays, corporate galas, book
            launches, festivals, and award nights held across our halls.
            Open any of them for a closer look.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          {pastEvents.map((event, i) => (
            <div
              key={event.slug}
              className="relative grid md:grid-cols-[220px_1fr] gap-6 md:gap-10 py-10 pb-20 md:pb-16 border-t border-charcoal/15 last:border-b"
            >
              <EventPlate title={event.title} dark={i % 2 === 1} className="w-full aspect-[4/3] md:aspect-square" />

              <div className="pr-0 md:pr-32">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <span className="text-brass-deep text-sm">{event.category}</span>
                  <span className="text-charcoal/40 text-sm">&middot; {event.date}</span>
                  <span className="text-charcoal/40 text-sm">&middot; {event.hall}</span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-3">{event.title}</h2>
                <p className="text-charcoal/65 leading-relaxed max-w-xl">{event.summary}</p>
              </div>

              <Link
                to={`/past-events/${event.slug}`}
                className="absolute bottom-6 right-0 md:right-0 inline-flex items-center gap-2 border border-charcoal/30 text-charcoal px-6 py-2.5 text-sm tracking-wide hover:border-brass hover:text-brass-deep transition-colors"
              >
                View this event
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal text-ivory py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl mb-6">
            Ready to add your own day to this list?
          </h2>
          <Link
            to="/contact"
            className="inline-block border border-ivory/30 px-8 py-3.5 text-sm tracking-wide hover:border-brass-light hover:text-brass-light transition-colors"
          >
            Start a booking enquiry
          </Link>
        </div>
      </section>
    </>
  );
}
