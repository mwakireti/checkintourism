import { Link } from "react-router-dom";

function ServicePreviewCard({ service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="service-preview-card"
      aria-label={`Learn more about ${service.title}`}
    >
      <img
        className="service-preview-card__image"
        src={service.image}
        alt={service.title}
      />

      <div className="service-preview-card__base-overlay" />

      <div className="service-preview-card__overlay" />

      <div className="service-preview-card__content">
        <h3 className="service-preview-card__title">
          {service.title}
        </h3>

        <p className="service-preview-card__description">
          {service.shortDescription}
        </p>

        <span className="service-preview-card__link">
          Learn More
          <span>→</span>
        </span>
      </div>
    </Link>
  );
}

export default ServicePreviewCard;