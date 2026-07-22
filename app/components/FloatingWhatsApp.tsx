type FloatingWhatsAppProps = { href: string };

export function FloatingWhatsApp({ href }: FloatingWhatsAppProps) {
  return (
    <a className="floating-whatsapp" href={href} target="_blank" rel="noreferrer" aria-label="Conversar com Felipe pelo WhatsApp">
      <svg viewBox="0 0 448 512" aria-hidden="true" focusable="false"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 438.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.5-186.6 184.5z" /></svg>
      <span>Conversar pelo WhatsApp</span>
    </a>
  );
}
