import { Link } from "react-router-dom";

function ServicePreviewCard({ service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="service-preview-card"
    >
      <img
        className="service-preview-card__image"
        src={service.image}
        alt={service.title}
      />

      <div className="service-preview-card__overlay" />

      <div className="service-preview-card__content">
        <h3 className="service-preview-card__title">
          {service.title}
        </h3>

        <p className="service-preview-card__description">
          {service.shortDescription}
        </p>
      </div>
    </Link>
  );
}

export default ServicePreviewCard;