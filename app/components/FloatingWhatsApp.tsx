type FloatingWhatsAppProps = { href: string };

export function FloatingWhatsApp({ href }: FloatingWhatsAppProps) {
  return (
    <a className="floating-whatsapp" href={href} target="_blank" rel="noreferrer" aria-label="Conversar com Felipe pelo WhatsApp">
      <span>Conversar pelo WhatsApp</span>
    </a>
  );
}
