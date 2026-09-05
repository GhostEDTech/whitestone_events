export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/2348093600009?text=Hello%20Whitestone%2C%20I%27d%20like%20to%20enquire%20about%20booking%20your%20venue."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Whitestone on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-charcoal text-ivory px-5 py-3.5 shadow-lg hover:bg-brass-deep transition-colors duration-300 group"
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.87.51 3.65 1.4 5.15L2 22l4.98-1.31A9.96 9.96 0 0 0 12.02 22C17.5 22 22 17.52 22 12S17.5 2 12.02 2zm0 18.1c-1.68 0-3.32-.45-4.75-1.3l-.34-.2-3.3.87.88-3.22-.22-.33A8.1 8.1 0 1 1 20.1 12c0 4.47-3.63 8.1-8.08 8.1z" />
      </svg>
      <span className="hidden sm:inline text-sm font-body">Book on WhatsApp</span>
    </a>
  );
}
