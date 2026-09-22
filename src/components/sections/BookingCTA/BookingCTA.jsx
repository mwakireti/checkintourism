import { Link } from "react-router-dom";

import "./BookingCTA.scss";

function BookingCTA() {
  return (
    <section className="booking-cta">
      <div className="container">
        <div className="booking-cta__content">
          <span className="booking-cta__eyebrow">
            START YOUR JOURNEY
          </span>

          <h2 className="booking-cta__title">
            Ready to Start Planning Your Next Adventure?
          </h2>

          <p className="booking-cta__description">
            Tell us where you want to go, when you want to travel,
            and what you have in mind. We'll help you bring the
            details together.
          </p>

          <Link
            to="/book"
            className="booking-cta__button"
          >
            Plan Your Trip
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BookingCTA;