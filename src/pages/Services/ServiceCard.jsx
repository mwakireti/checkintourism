import { Link } from "react-router-dom";

function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-card__image">
        <img
          src={service.image}
          alt={service.title}
        />
      </div>

      <div className="service-card__content">
        <span className="service-card__tagline">
          {service.tagline}
        </span>

        <h3 className="service-card__title">
          {service.title}
        </h3>

        <p className="service-card__description">
          {service.description}
        </p>

        <div className="service-card__footer">
          <Link
            to={`/services/${service.slug}`}
            className="service-card__link"
          >
            Learn More
            <span>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;