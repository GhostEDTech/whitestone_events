import MarbleVeins from "./MarbleVeins";

// A stand-in for event photography: a marble-textured plate carrying the
// event's initial as a monogram. Kept in the site's own palette so the
// gallery reads as one collection rather than mismatched stock imagery.
export default function EventPlate({ title, dark = false, className = "" }) {
  const initial = title.trim().charAt(0).toUpperCase();
  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center ${
        dark ? "bg-charcoal" : "bg-stone"
      } ${className}`}
    >
      <MarbleVeins className="absolute inset-0 w-full h-full" opacity={dark ? 0.5 : 0.7} />
      <span
        className={`relative font-display italic text-6xl md:text-7xl ${
          dark ? "text-brass-light/90" : "text-brass-deep/80"
        }`}
      >
        {initial}
      </span>
    </div>
  );
}
