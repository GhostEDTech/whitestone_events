import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <p className="font-display text-2xl mb-4">
            White<span className="text-brass-light">stone</span>
          </p>
          <p className="text-ivory/60 text-sm leading-relaxed max-w-xs">
            Where dreams gather and moments unfold — a pristine events venue
            in the heart of Ikeja, Lagos.
          </p>
        </div>

        <div className="text-sm">
          <p className="uppercase text-[11px] tracking-[0.15em] text-brass-light/80 mb-4">Visit</p>
          <p className="text-ivory/80 leading-relaxed">
            3 Billings Way, Oregun,<br />Ikeja, Lagos, Nigeria
          </p>
          <p className="text-ivory/60 mt-4">
            Jadeite Hall &middot; Moonstone Hall
          </p>
          <Link to="/past-events" className="block text-ivory/60 hover:text-brass-light transition-colors mt-4">
            See past events &rarr;
          </Link>
        </div>

        <div className="text-sm">
          <p className="uppercase text-[11px] tracking-[0.15em] text-brass-light/80 mb-4">Book an event</p>
          <a href="https://wa.me/2348093600009" target="_blank" rel="noreferrer" className="block text-ivory/80 hover:text-brass-light transition-colors">
            WhatsApp: +234 809 360 0009
          </a>
          <a href="mailto:bookings@whitestoneplace.com" className="block text-ivory/80 hover:text-brass-light transition-colors mt-2">
            bookings@whitestoneplace.com
          </a>
        </div>
      </div>

      <div className="hairline max-w-6xl mx-auto" />

      <p className="text-center text-ivory/40 text-xs py-6">
        &copy; {new Date().getFullYear()} Whitestone Events Place. All rights reserved.
      </p>
    </footer>
  );
}
