import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MarbleVeins from "../components/MarbleVeins";
import { eventTypes, halls } from "../data/events";

const heroReveal = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-b from-ivory-dim to-ivory">
        <MarbleVeins className="absolute inset-0 w-full h-full" opacity={0.6} />
        <motion.div
          variants={heroReveal}
          initial="hidden"
          animate="show"
          className="relative max-w-6xl mx-auto px-6 md:px-10 pt-28 pb-20"
        >
          <motion.p variants={item} className="text-brass-deep font-body text-sm tracking-wide mb-6">
            3 Billings Way, Oregun &middot; Ikeja, Lagos
          </motion.p>
          <motion.h1
            variants={item}
            className="font-display text-charcoal text-[13vw] leading-[0.95] md:text-[6.4vw] md:leading-[0.95] max-w-4xl"
          >
            Where dreams gather,
            <br />
            <span className="italic font-normal text-brass-deep">moments unfold.</span>
          </motion.h1>
          <motion.div variants={item} className="hairline w-40 my-8" />
          <motion.p variants={item} className="max-w-prose text-charcoal/70 text-lg leading-relaxed">
            Whitestone is a pristine events venue in the heart of Ikeja —
            two halls, a landscaped ground, and a team who has staged
            everything from traditional weddings to award-night productions.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-4 mt-10">
            <Link
              to="/contact"
              className="bg-charcoal text-ivory px-8 py-3.5 text-sm tracking-wide hover:bg-brass-deep transition-colors"
            >
              Enquire about your date
            </Link>
            <Link
              to="/services"
              className="border border-charcoal/30 text-charcoal px-8 py-3.5 text-sm tracking-wide hover:border-brass hover:text-brass-deep transition-colors"
            >
              See what we host
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Halls */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 md:gap-10">
            <div>
              <p className="text-brass-deep text-sm mb-3">Two halls, one address</p>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight">
                A room for every scale of occasion.
              </h2>
            </div>
            <p className="text-charcoal/70 leading-relaxed self-end">
              Whether you're hosting a thousand guests across a full production
              or a close gathering of forty, our halls are built to
              reconfigure around the shape of your day.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2">
            {halls.map((hall, i) => (
              <div
                key={hall.name}
                className={`py-10 md:py-12 border-t border-charcoal/15 ${
                  i === 0 ? "md:pr-12 md:border-r" : "md:pl-12"
                }`}
              >
                <h3 className="font-display text-2xl text-charcoal mb-3">{hall.name}</h3>
                <p className="text-charcoal/65 leading-relaxed max-w-sm">{hall.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme — event types as an editorial list, not a card grid */}
      <section className="bg-charcoal text-ivory py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-brass-light text-sm mb-3">What we host</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight max-w-2xl mb-16">
            Six kinds of gathering, one standard of care.
          </h2>

          <div>
            {eventTypes.map((e) => (
              <div
                key={e.name}
                className="group grid md:grid-cols-[1fr_2fr] gap-3 md:gap-10 py-8 border-t border-ivory/15 last:border-b"
              >
                <h3 className="font-display text-2xl md:text-3xl group-hover:text-brass-light transition-colors">
                  {e.name}
                </h3>
                <p className="text-ivory/65 leading-relaxed max-w-xl">{e.blurb}</p>
              </div>
            ))}
          </div>

          <Link
            to="/services"
            className="inline-block mt-12 border border-ivory/30 px-8 py-3.5 text-sm tracking-wide hover:border-brass-light hover:text-brass-light transition-colors"
          >
            Read the full programme
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ivory py-24 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-6">
            Tell us your date. We'll tell you what's possible.
          </h2>
          <p className="text-charcoal/70 mb-10">
            Reach the events team directly on WhatsApp or by email — most
            enquiries hear back the same day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/2348093600009?text=Hello%20Whitestone%2C%20I%27d%20like%20to%20enquire%20about%20booking%20your%20venue."
              target="_blank"
              rel="noreferrer"
              className="bg-charcoal text-ivory px-8 py-3.5 text-sm tracking-wide hover:bg-brass-deep transition-colors"
            >
              Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              className="border border-charcoal/30 text-charcoal px-8 py-3.5 text-sm tracking-wide hover:border-brass hover:text-brass-deep transition-colors"
            >
              Send booking details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
