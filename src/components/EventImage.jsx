import MarbleVeins from "./MarbleVeins";

// Renders the event's real photo once one is set in src/data/pastEvents.js.
// Until then (image is null), a soft placeholder holds its place so the
// layout doesn't shift when photos are dropped in.
export default function EventImage({ image, title, className = "" }) {
  if (image) {
    return (
      <img
        src={image}
        alt={title}
        loading="lazy"
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <div className={`relative overflow-hidden bg-stone flex items-center justify-center ${className}`}>
      <MarbleVeins className="absolute inset-0 w-full h-full" opacity={0.4} />
      <span className="relative text-charcoal/40 text-xs uppercase tracking-[0.15em] text-center px-4">
        Photo coming soon
      </span>
    </div>
  );
}
