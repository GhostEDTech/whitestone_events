import { useEffect, useRef } from "react";

// Plays the event's highlight video automatically only while it's visible
// in the viewport, and pauses it once scrolled away — rather than
// autoplaying immediately on page load. Muted + playsInline so autoplay is
// allowed across browsers; native controls stay available so the visitor
// can pause, replay, or unmute. Respects prefers-reduced-motion by leaving
// autoplay off (the visitor can still press play manually).
export default function EventVideo({ video, title, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!video) return;
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [video]);

  if (!video) {
    return (
      <div className={`bg-stone flex items-center justify-center border border-charcoal/15 ${className}`}>
        <span className="text-charcoal/40 text-xs uppercase tracking-[0.15em] text-center px-4">
          Video coming soon
        </span>
      </div>
    );
  }

  return (
    <video
      ref={ref}
      src={video}
      muted
      loop
      playsInline
      controls
      preload="metadata"
      aria-label={`${title} — event highlights`}
      className={`bg-charcoal ${className}`}
    />
  );
}
