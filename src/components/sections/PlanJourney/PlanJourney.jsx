import { Link } from "react-router-dom";
import "./PlanJourney.scss";

function PlanJourney() {
  return (
    <section className="plan-journey">
      <div className="container">
        <div className="plan-journey__content">
          <div className="plan-journey__text">
            <span className="plan-journey__eyebrow">
              Start Your Journey
            </span>

            <h2 className="plan-journey__title">
              Ready to Plan Your Next Adventure?
            </h2>

            <p className="plan-journey__description">
              Tell us where you want to go, and let our team help
              bring the details together. From flights and stays
              to tours, visas and more, we're here to help.
            </p>
          </div>

          <div className="plan-journey__actions">
            <Link
              to="/book"
              className="button button--primary plan-journey__button"
            >
              Book Your Trip
            </Link>

            <Link
              to="/contact"
              className="button button--secondary plan-journey__button"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlanJourney;