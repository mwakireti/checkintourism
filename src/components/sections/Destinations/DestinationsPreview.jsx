import { Link } from "react-router-dom";
import "./DestinationsPreview.scss";

const destinations = [
  {
    name: "Kenya",
    region: "East Africa",
    description:
      "Discover incredible wildlife, beautiful landscapes and unforgettable safari experiences.",
    image: "/src/assets/images/destinations/kenya.jpg",
  },
  {
    name: "Tanzania",
    region: "East Africa",
    description:
      "Experience iconic wildlife, the Serengeti and the beauty of Zanzibar.",
    image: "/src/assets/images/destinations/tanzania.jpg",
  },
  {
    name: "Rwanda",
    region: "East Africa",
    description:
      "Explore Rwanda's beautiful landscapes, wildlife and vibrant culture.",
    image: "/src/assets/images/destinations/rwanda.jpg",
  },
  {
    name: "Dubai",
    region: "Middle East",
    description:
      "Enjoy a blend of modern attractions, shopping, luxury and adventure.",
    image: "/src/assets/images/destinations/dubai.jpg",
  },
];

function DestinationsPreview() {
  const [featuredDestination, ...otherDestinations] = destinations;

  return (
    <section className="destinations-preview">
      <div className="container">
        <div className="destinations-preview__heading">
          <div>
            <span className="destinations-preview__eyebrow">
              Explore With Us
            </span>

            <h2 className="destinations-preview__title">
              Discover Your Next Destination
            </h2>
          </div>

          <Link
            to="/destinations"
            className="destinations-preview__view-all"
          >
            View All Destinations
          </Link>
        </div>

        <div className="destinations-preview__grid">
          <Link
            to="/destinations"
            className="destination-feature"
          >
            <img
              src={featuredDestination.image}
              alt={featuredDestination.name}
              className="destination-feature__image"
            />

            <div className="destination-feature__overlay" />

            <div className="destination-feature__content">
              <span className="destination-feature__region">
                {featuredDestination.region}
              </span>

              <h3>{featuredDestination.name}</h3>

              <p>{featuredDestination.description}</p>

              <span className="destination-feature__link">
                Explore Destination
              </span>
            </div>
          </Link>

          <div className="destinations-preview__list">
            {otherDestinations.map((destination) => (
              <Link
                to="/destinations"
                className="destination-item"
                key={destination.name}
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="destination-item__image"
                />

                <div className="destination-item__content">
                  <span className="destination-item__region">
                    {destination.region}
                  </span>

                  <h3>{destination.name}</h3>

                  <p>{destination.description}</p>

                  <span className="destination-item__link">
                    Explore
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DestinationsPreview;