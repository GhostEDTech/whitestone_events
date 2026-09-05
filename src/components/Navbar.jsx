import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "What We Host" },
  { to: "/past-events", label: "Past Events" },
  { to: "/contact", label: "Contact & Booking" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-ivory/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(168,130,61,0.3)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <NavLink to="/" className="font-display text-xl tracking-tight text-charcoal">
          White<span className="text-brass">stone</span>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-8 font-body text-[15px]">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative pb-1 transition-colors ${
                  isActive ? "text-brass-deep" : "text-charcoal/80 hover:text-charcoal"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && <span className="absolute -bottom-1 left-0 right-0 h-px bg-brass" />}
                </>
              )}
            </NavLink>
          ))}
          <a
            href="https://wa.me/2348093600009"
            target="_blank"
            rel="noreferrer"
            className="border border-charcoal/30 text-charcoal px-5 py-2 text-sm hover:border-brass hover:text-brass-deep transition-colors"
          >
            Enquire on WhatsApp
          </a>
        </nav>

        <button
          className="lg:hidden flex flex-col gap-1.5 w-8"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-px bg-charcoal transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-px bg-charcoal transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px bg-charcoal transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-ivory border-t border-brass/30 px-6 py-6 flex flex-col gap-5 font-body">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-charcoal text-lg">
              {l.label}
            </NavLink>
          ))}
          <a href="https://wa.me/2348093600009" target="_blank" rel="noreferrer" className="text-brass-deep text-lg">
            Enquire on WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
