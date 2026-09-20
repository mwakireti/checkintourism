import { Link } from "react-router-dom";
import Icon from "../../components/common/Icon";
import "./Destinations.scss";

const destinations = [
  {
    id: 1,
    name: "Kenya",
    region: "East Africa",
    description:
      "Discover diverse landscapes, vibrant cities, beautiful coastlines and unforgettable wildlife experiences across Kenya.",
    image: "/src/assets/images/destinations/kenya.jpg",
  },
  {
    id: 2,
    name: "Tanzania",
    region: "East Africa",
    description:
      "Experience remarkable wildlife, breathtaking landscapes and the tropical beauty of Tanzania and Zanzibar.",
    image: "/src/assets/images/destinations/tanzania.jpg",
  },
  {
    id: 3,
    name: "Uganda",
    region: "East Africa",
    description:
      "Explore beautiful scenery, rich wildlife and memorable cultural experiences in the Pearl of Africa.",
    image: "/src/assets/images/destinations/uganda.jpg",
  },
  {
    id: 4,
    name: "Rwanda",
    region: "East Africa",
    description:
      "Discover Rwanda's scenic landscapes, vibrant culture and remarkable experiences in a welcoming destination.",
    image: "/src/assets/images/destinations/rwanda.jpg",
  },
  {
    id: 5,
    name: "Dubai",
    region: "Middle East",
    description:
      "Enjoy a blend of modern attractions, shopping, entertainment, luxury and unforgettable city experiences.",
    image: "/src/assets/images/destinations/dubai.jpg",
  },
  {
    id: 6,
    name: "United Arab Emirates",
    region: "Middle East",
    description:
      "Explore dynamic cities, remarkable architecture, cultural experiences and exciting opportunities across the UAE.",
    image: "/src/assets/images/destinations/uae.jpg",
  },
];

function Destinations() {
  return (
    <section className="destinations-page">

      {/* PAGE HEADER */}
      <header className="destinations-page__header">
        <div className="container">
          <div className="destinations-page__header-content">

            <div className="destinations-page__breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Destinations</span>
            </div>

            <span className="destinations-page__eyebrow">
              DESTINATIONS
            </span>

            <h1 className="destinations-page__title">
              Discover Your Next Destination
            </h1>

            <p className="destinations-page__subtitle">
              From unforgettable experiences across Africa to exciting
              international destinations, we help bring your travel plans
              together.
            </p>

          </div>
        </div>
      </header>

      {/* INTRO */}
      <section className="destinations-page__intro">
        <div className="container">

          <div className="destinations-page__intro-grid">

            <div className="destinations-page__intro-content">

              <span className="destinations-page__section-eyebrow">
                EXPLORE THE WORLD
              </span>

              <h2>
                Places Worth Discovering
              </h2>

              <p>
                Every journey starts with a destination. Whether you're
                planning a relaxing holiday, an exciting adventure, a
                business trip or a memorable getaway, choosing the right
                destination is an important part of the experience.
              </p>

              <p>
                At Check In Travel & Tours Ltd, we make it easier to plan
                your journey by bringing travel arrangements together in
                one place. From flights and accommodation to tours,
                activities and travel documentation, we're here to help
                you prepare for your trip.
              </p>

              <Link
                to="/contact"
                className="button button--primary"
              >
                Plan Your Journey
              </Link>

            </div>

            <div className="destinations-page__intro-image">
              <img
                src="/src/assets/images/destinations/destinations-intro.jpg"
                alt="Beautiful travel destination"
              />
            </div>

          </div>

        </div>
      </section>

      {/* DESTINATIONS GRID */}
      <section className="destinations-page__explore">
        <div className="container">

          <div className="destinations-page__section-heading">

            <span className="destinations-page__section-eyebrow">
              WHERE WILL YOU GO?
            </span>

            <h2>
              Explore Our Destinations
            </h2>

            <p>
              Explore a selection of destinations that can inspire your
              next journey. More destinations and travel options can be
              added as our collection grows.
            </p>

          </div>

          <div className="destinations-page__grid">

            {destinations.map((destination) => (
              <article
                className="destination-card"
                key={destination.id}
              >

                <div className="destination-card__image">
                  <img
                    src={destination.image}
                    alt={destination.name}
                  />

                  <span className="destination-card__region">
                    {destination.region}
                  </span>
                </div>

                <div className="destination-card__content">

                  <h3>{destination.name}</h3>

                  <p>
                    {destination.description}
                  </p>

                  <Link
                    to="/contact"
                    className="destination-card__link"
                  >
                    Plan a Trip
                    <Icon name="arrow-right" size={17} />
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* TRAVEL TYPES */}
      <section className="destinations-page__travel">
        <div className="container">

          <div className="destinations-page__section-heading">
            <span className="destinations-page__section-eyebrow">
              FIND YOUR KIND OF JOURNEY
            </span>

            <h2>
              Travel Your Way
            </h2>

            <p>
              Different journeys call for different experiences. Tell us
              what you're looking for and we can help you bring the
              details together.
            </p>
          </div>

          <div className="destinations-page__travel-grid">

            <article className="destination-travel-card">
              <div className="destination-travel-card__icon">
                <Icon name="compass" size={25} />
              </div>

              <h3>Leisure & Holidays</h3>

              <p>
                Take time to relax, explore new places and create
                memorable experiences.
              </p>
            </article>

            <article className="destination-travel-card">
              <div className="destination-travel-card__icon">
                <Icon name="plane" size={25} />
              </div>

              <h3>Business Travel</h3>

              <p>
                Organise the practical details of your business journey
                so you can focus on what matters.
              </p>
            </article>

            <article className="destination-travel-card">
              <div className="destination-travel-card__icon">
                <Icon name="map" size={25} />
              </div>

              <h3>Adventure & Exploration</h3>

              <p>
                Discover new destinations, cultures and experiences
                beyond the familiar.
              </p>
            </article>

            <article className="destination-travel-card">
              <div className="destination-travel-card__icon">
                <Icon name="user" size={25} />
              </div>

              <h3>Family Getaways</h3>

              <p>
                Plan comfortable and memorable journeys designed around
                the people travelling with you.
              </p>
            </article>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="destinations-page__cta">
        <div className="container">

          <div className="destinations-page__cta-content">

            <span className="destinations-page__cta-eyebrow">
              READY TO EXPLORE?
            </span>

            <h2>
              Let's Plan Your Next Journey
            </h2>

            <p>
              Have a destination in mind or still deciding where to go?
              Talk to us about your travel plans and let's start putting
              your journey together.
            </p>

            <div className="destinations-page__cta-actions">

              <Link
                to="/book"
                className="button button--primary"
              >
                Book a Trip
              </Link>

              <Link
                to="/contact"
                className="button destinations-page__cta-secondary"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>
      </section>

    </section>
  );
}

export default Destinations;