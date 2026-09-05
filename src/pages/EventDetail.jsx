import { Link, useParams, Navigate } from "react-router-dom";
import MarbleVeins from "../components/MarbleVeins";
import EventPlate from "../components/EventPlate";
import { getPastEventBySlug, pastEvents } from "../data/pastEvents";

export default function EventDetail() {
  const { slug } = useParams();
  const event = getPastEventBySlug(slug);

  if (!event) return <Navigate to="/past-events" replace />;

  const index = pastEvents.findIndex((e) => e.slug === slug);
  const next = pastEvents[(index + 1) % pastEvents.length];

  return (
    <>
      <section className="relative bg-ivory-dim pt-36 pb-16 overflow-hidden">
        <MarbleVeins className="absolute inset-0 w-full h-full" opacity={0.35} />
        <div className="relative max-w-6xl mx-auto px-6 md:px-10">
          <Link to="/past-events" className="text-brass-deep text-sm hover:text-brass-deep/70 transition-colors">
            &larr; All past events
          </Link>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mt-6 mb-3">
            <span className="text-brass-deep text-sm">{event.category}</span>
            <span className="text-charcoal/40 text-sm">&middot; {event.date}</span>
            <span className="text-charcoal/40 text-sm">&middot; {event.hall}</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-charcoal max-w-3xl leading-tight">
            {event.title}
          </h1>
        </div>
      </section>

      <section className="bg-ivory py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16">
          <div className="space-y-6">
            {event.detail.map((para, i) => (
              <p key={i} className="text-charcoal/75 text-lg leading-relaxed">
                {para}
              </p>
            ))}
          </div>
          <EventPlate title={event.title} dark className="w-full aspect-[4/5]" />
        </div>
      </section>

      <section className="bg-charcoal text-ivory py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-wrap items-center justify-between gap-8">
          <div>
            <p className="text-brass-light text-sm mb-2">Hosting something similar?</p>
            <h2 className="font-display text-2xl md:text-3xl max-w-md">
              Let's talk about your {event.category.toLowerCase()}.
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-ivory text-charcoal px-8 py-3.5 text-sm tracking-wide hover:bg-brass-light transition-colors"
            >
              Start a booking enquiry
            </Link>
            <Link
              to={`/past-events/${next.slug}`}
              className="border border-ivory/30 px-8 py-3.5 text-sm tracking-wide hover:border-brass-light hover:text-brass-light transition-colors"
            >
              Next event &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
