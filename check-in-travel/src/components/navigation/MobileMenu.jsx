import { Link } from "react-router-dom";
import { navigation } from "../../data/navigation";
import BookTripButton from "./BookTripButton";
import WhatsAppButton from "./WhatsAppButton";

function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="mobile-menu">
      <div className="mobile-menu__content">
        <nav className="mobile-menu__nav">
          {navigation.map((item) => (
            <Link
              className="mobile-menu__link"
              key={item.path}
              to={item.path}
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mobile-menu__actions">
          <BookTripButton onClick={onClose} />
          <WhatsAppButton />
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;