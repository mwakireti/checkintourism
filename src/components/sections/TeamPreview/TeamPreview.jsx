import { Link } from "react-router-dom";
import "./TeamPreview.scss";
import SalesPersonImage from "../../../assets/images/team/Sales.jpg";

function TeamPreview() {
  return (
    <section className="team-preview">
      <div className="container">
        <div className="team-preview__header">
          <div>
            <span className="team-preview__eyebrow">
              Meet Your Travel Team
            </span>

            <h2 className="team-preview__title">
              Someone You Can Talk To
            </h2>
          </div>

          <p className="team-preview__intro">
            Have questions about your next journey? Our sales team is here
            to help you plan, book, and prepare for your trip.
          </p>
        </div>

        <div className="team-preview__member">
          <div className="team-preview__image">
            <img
              src={SalesPersonImage}
              alt="Fatima Shareef - Sales Person"
            />
          </div>

          <div className="team-preview__details">
            <span className="team-preview__role">
              Sales Person
            </span>

            <h3>Fatima Shareef</h3>

            <p>
              Fatima is available to assist with travel enquiries,
              bookings, and questions about our services.
            </p>

            <div className="team-preview__contacts">
              <a href="tel:+256766422688">
                <span className="team-preview__contact-label">
                  Call
                </span>
                <span className="team-preview__contact-value">
                  +256 766 422 688
                </span>
              </a>

              <a href="mailto:sales@checkintourism.com">
                <span className="team-preview__contact-label">
                  Email
                </span>
                <span className="team-preview__contact-value">
                  sales@checkintourism.com
                </span>
              </a>
            </div>

            <div className="team-preview__actions">
              <a
                href="tel:+256766422688"
                className="button button--primary"
              >
                Call Fatima
              </a>

              <Link
                to="/contact"
                className="button button--secondary"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamPreview;