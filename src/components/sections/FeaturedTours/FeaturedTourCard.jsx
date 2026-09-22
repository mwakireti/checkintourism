import { Link } from "react-router-dom";

function FeaturedTourCard({ tour }) {
  return (
    <article className="featured-tour-card">
      <img
        className="featured-tour-card__image"
        src={tour.image}
        alt={tour.title}
      />

      <div className="featured-tour-card__base-overlay" />

      <div className="featured-tour-card__overlay" />

      <div className="featured-tour-card__content">
        <span className="featured-tour-card__category">
          {tour.category}
        </span>

        <h3 className="featured-tour-card__title">
          {tour.title}
        </h3>

        <p className="featured-tour-card__description">
          {tour.description}
        </p>

        <Link
          to="/book"
          className="featured-tour-card__link"
        >
          Plan This Trip
          <span>→</span>
        </Link>
      </div>
    </article>
  );
}

export default FeaturedTourCard;