import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import Logo from "../common/Logo";
import Icon from "../common/Icon";
import BookTripButton from "./BookTripButton";
import "./Navbar.scss";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((previous) => !previous);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`site-header ${isHomePage && !isScrolled
          ? "site-header--top"
          : "site-header--scrolled"
        } ${isMobileMenuOpen ? "site-header--menu-open" : ""}`}
    >
      <nav className="site-header__nav">
        <div className="site-header__logo">
          <Logo onClick={closeMobileMenu} />
        </div>

        <div className="site-header__desktop">
          <DesktopNav />
        </div>

        <div className="site-header__actions">
          <BookTripButton />
        </div>

        <button
          className="site-header__menu-button"
          type="button"
          onClick={toggleMobileMenu}
          aria-label={
            isMobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <Icon name="close" size={24} />
          ) : (
            <Icon name="menu" size={24} />
          )}
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