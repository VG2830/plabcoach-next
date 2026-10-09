export default function WhatsAppButton() {
  const message =
    "Hello..\nI’m interested in learning more about PLABCoach courses.\n\nCould you please guide me on the available courses, the content and pricing?";

  return (
    <a
      href={`https://wa.me/919996312468?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with PLABcoach on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-[100] grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_4px_14px_rgba(0,0,0,0.24)] transition hover:scale-105 hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 sm:bottom-6 sm:right-6"
    >
      <svg viewBox="0 0 32 32" className="h-8 w-8 fill-current" aria-hidden="true">
        <path d="M16.01 3.2C8.96 3.2 3.23 8.9 3.23 15.93c0 2.24.59 4.43 1.71 6.36L3.2 28.8l6.68-1.7a12.83 12.83 0 0 0 6.12 1.55h.01c7.04 0 12.77-5.71 12.78-12.74a12.65 12.65 0 0 0-3.75-9.02 12.72 12.72 0 0 0-9.03-3.69Zm0 23.28h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.96 1.01 1.06-3.85-.25-.4a10.56 10.56 0 0 1-1.62-5.6c0-5.84 4.76-10.58 10.6-10.58 2.83 0 5.49 1.1 7.49 3.1a10.5 10.5 0 0 1 3.1 7.49c0 5.84-4.76 10.58-10.62 10.58Zm5.81-7.92c-.32-.16-1.88-.93-2.17-1.03-.29-.1-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.83-1.58-1.86-1.77-2.18-.18-.32-.02-.49.14-.65.15-.14.32-.37.48-.55.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.55-.08-.16-.71-1.72-.97-2.36-.25-.62-.51-.53-.71-.54h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.64s1.13 3.06 1.29 3.27c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.88-.77 2.14-1.51.26-.74.26-1.37.18-1.51-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}
