import { Link } from "react-router-dom";

import FeaturedTourCard from "./FeaturedTourCard";

import { tours } from "../../../data/tours";

import "./FeaturedTours.scss";

function FeaturedTours() {
  const featuredTours = tours.slice(0, 3);

  return (
    <section className="featured-tours">
      <div className="container">
        <div className="featured-tours__header">
          <span className="featured-tours__eyebrow">
            FEATURED TOURS
          </span>

          <h2 className="featured-tours__title">
            Discover Your Next Adventure
          </h2>

          <p className="featured-tours__intro">
            From unforgettable safaris to relaxing coastal escapes,
            explore some of the experiences we can help you arrange.
          </p>
        </div>

        <div className="featured-tours__grid">
          {featuredTours.map((tour) => (
            <FeaturedTourCard
              key={tour.id}
              tour={tour}
            />
          ))}
        </div>

        <div className="featured-tours__footer">
          <Link
            to="/tours"
            className="featured-tours__view-all"
          >
            Explore All Tours
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedTours;