import { Link } from "react-router-dom";

import "./VisaServicesPreview.scss";

function VisaServicesPreview() {
  const services = [
    "Visa requirement guidance",
    "Application support",
    "Travel documentation assistance",
  ];

  return (
    <section className="visa-services-preview">
      <div className="container">
        <div className="visa-services-preview__wrapper">
          <div className="visa-services-preview__content">
            <span className="visa-services-preview__eyebrow">
              VISA SERVICES
            </span>

            <h2 className="visa-services-preview__title">
              Travel With Confidence
            </h2>

            <p className="visa-services-preview__description">
              Understanding visa requirements can be an important
              part of planning an international journey. Our team
              can help you understand the requirements and prepare
              the necessary travel documentation.
            </p>

            <Link
              to="/visa-services"
              className="visa-services-preview__link"
            >
              Explore Visa Services
              <span>→</span>
            </Link>
          </div>

          <div className="visa-services-preview__details">
            <div className="visa-services-preview__details-header">
              <span className="visa-services-preview__details-label">
                HOW WE CAN HELP
              </span>

              <h3 className="visa-services-preview__details-title">
                Support When You Need It
              </h3>
            </div>

            <div className="visa-services-preview__list">
              {services.map((service, index) => (
                <div
                  className="visa-services-preview__item"
                  key={service}
                >
                  <span className="visa-services-preview__item-number">
                    0{index + 1}
                  </span>

                  <span className="visa-services-preview__item-text">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisaServicesPreview;