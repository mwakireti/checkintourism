import { contact } from "../../data/contact";

function WhatsAppButton() {
  return (
    <a
      className="button button--whatsapp"
      href={contact.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      WhatsApp Us
    </a>
  );
}

export default WhatsAppButton;