import { Link } from "react-router-dom";

import { navigation } from "../../data/navigation";
import { services } from "../../data/services";

import "./Footer.scss";

function Footer() {
  return (
    <footer className="site-footer">

      {/* MAIN FOOTER */}
      <div className="site-footer__main">
        <div className="container">

          <div className="site-footer__grid">

            {/* BRAND */}
            <div className="site-footer__brand">

              <Link
                to="/"
                className="site-footer__brand-name"
              >
                CHECK IN
                <span>TRAVEL & TOURS LTD</span>
              </Link>

              <p className="site-footer__tagline">
                Your Journey Starts Here.
              </p>

              <p className="site-footer__motto">
                Travel <span>|</span> Explore <span>|</span> Experience
              </p>

              <Link
                to="/contact"
                className="button button--primary site-footer__button"
              >
                Contact Us
              </Link>

            </div>


            {/* QUICK LINKS */}
            <div className="site-footer__column">

              <h3 className="site-footer__heading">
                Quick Links
              </h3>

              <nav className="site-footer__links">
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

            </div>


            {/* SERVICES */}
            <div className="site-footer__column">

              <h3 className="site-footer__heading">
                Services
              </h3>

              <nav className="site-footer__links">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.slug}`}
                  >
                    {service.footerTitle}
                  </Link>
                ))}
              </nav>

            </div>

          </div>

        </div>
      </div>


      {/* CONTACT */}
      <div className="site-footer__contact">
        <div className="container">

          <h3 className="site-footer__heading">
            Contact
          </h3>

          <div className="site-footer__contact-grid">

            <div className="site-footer__contact-item">
              <span>Phone</span>
              <strong>+254 XXX XXX XXX</strong>
            </div>

            <div className="site-footer__contact-item">
              <span>WhatsApp</span>
              <strong>+254 XXX XXX XXX</strong>
            </div>

            <div className="site-footer__contact-item">
              <span>Email</span>
              <strong>info@example.com</strong>
            </div>

            <div className="site-footer__contact-item">
              <span>Address</span>
              <strong>Coming Soon</strong>
            </div>

          </div>

        </div>
      </div>


      {/* LEGAL & SOCIAL */}
      <div className="site-footer__secondary">
        <div className="container">

          <div className="site-footer__secondary-grid">

            {/* LEGAL */}
            <div>
              <h3 className="site-footer__heading">
                Legal
              </h3>

              <nav className="site-footer__legal-links">
                <Link to="/privacy-policy">
                  Privacy Policy
                </Link>

                <Link to="/terms">
                  Terms & Conditions
                </Link>

                <Link to="/cookie-policy">
                  Cookie Policy
                </Link>

                <Link to="/visa-disclaimer">
                  Visa Disclaimer
                </Link>

                <Link to="/booking-cancellation">
                  Booking & Cancellation Policy
                </Link>
              </nav>
            </div>


            {/* SOCIAL MEDIA */}
            <div>
              <h3 className="site-footer__heading">
                Social Media
              </h3>

              <div className="site-footer__social">
                <a href="#" aria-label="Facebook">
                  Facebook
                </a>

                <a href="#" aria-label="Instagram">
                  Instagram
                </a>

                <a href="#" aria-label="TikTok">
                  TikTok
                </a>

                <a href="#" aria-label="WhatsApp">
                  WhatsApp
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>


      {/* COPYRIGHT */}
      <div className="site-footer__bottom">
        <div className="container">

          <p>
            © 2026 Check In Travel & Tours Ltd.
            All Rights Reserved.
          </p>

        </div>
      </div>

    </footer>
  );
}

export default Footer;
