function WhatsAppButton() {
  const phoneNumber = "YOUR_PHONE_NUMBER";

  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      className="button button--whatsapp"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      WhatsApp Us
    </a>
  );
}

export default WhatsAppButton;