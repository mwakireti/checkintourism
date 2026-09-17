import { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import Logo from "../common/Logo";
import BookTripButton from "./BookTripButton";
import WhatsAppButton from "./WhatsAppButton";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((previous) => !previous);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="site-header__nav">
        <div className="site-header__nav-content">
           <div className="site-header__logo">
          <Logo onClick={closeMobileMenu} />
        </div>

        <div className="site-header__desktop">
          <DesktopNav />
        </div>
       </div>
        <div className="desktop-nav__actions">
          <BookTripButton />
          <WhatsAppButton />
        </div>
        <button
          className="site-header__menu-button"
          type="button"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />
    </header>
  );
}

export default Navbar;