import { Link, useParams } from "react-router-dom";
import { services } from "../../../data/services";
import "./ServiceDetails.scss";

function ServiceDetails() {
  const { slug } = useParams();

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return (
      <section className="service-details service-details--not-found">
        <div className="container">
          <h1>Service Not Found</h1>
          <p>
            The service you are looking for could not be found.
          </p>

          <Link
            to="/services"
            className="button button--primary"
          >
            View All Services
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="service-details">

      {/* Page Header */}
      <header className="service-page-header">
        <div className="container">
          <div className="service-page-header__content">

            <div className="service-page-header__breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/services">Services</Link>
              <span>/</span>
              <span>{service.title}</span>
            </div>

            <span className="service-page-header__eyebrow">
              WELCOME TO OUR SERVICES
            </span>

            <h1 className="service-page-header__title">
              {service.title}
            </h1>

            <p className="service-page-header__tagline">
              {service.tagline}
            </p>

          </div>
        </div>
      </header>

      {/* Service Content */}
      <div className="container">
        <div className="service-details__layout">

          <main className="service-details__main">

            {/* Service Image */}
            <div className="service-details__image">
              <img
                src={service.image}
                alt={service.title}
              />
            </div>

            {/* Description */}
            <div className="service-details__intro">
              <h2>{service.tagline}</h2>

              <p className="service-details__description">
                {service.description}
              </p>
            </div>

            {/* Features */}
            <div className="service-details__features-section">
              <h3>What We Offer</h3>

              <ul className="service-details__features">
                {service.features.map((feature) => (
                  <li key={feature}>
                    <span className="service-details__check">
                      ✓
                    </span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Disclaimer */}
            {service.disclaimer && (
              <div className="service-details__disclaimer">
                <strong>Important:</strong>

                <p>{service.disclaimer}</p>
              </div>
            )}

          </main>

          {/* Sidebar */}
          <aside className="service-details__sidebar">

            <div className="service-details__card">

              <span className="service-details__card-eyebrow">
                READY TO GET STARTED?
              </span>

              <h3>
                Let us help you plan your journey.
              </h3>

              <p>
                Get assistance with your travel plans
                and let us help organize this part of
                your journey.
              </p>

              <Link
                to={service.ctaPath}
                className="button button--primary"
              >
                {service.cta}
              </Link>

              <Link
                to="/services"
                className="service-details__back"
              >
                ← See All Services
              </Link>

            </div>

          </aside>

        </div>
      </div>
    </section>
  );
}

export default ServiceDetails;