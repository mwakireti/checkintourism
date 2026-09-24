import { Link } from "react-router-dom";
import Icon from "../../components/common/Icon";
import { tours } from "../../data/tours";
import "./Tours.scss";

function Tours() {
  return (
    <div className="tours-page">
      <header className="tours-page__header">
        <div className="container">
          <div className="tours-page__header-content">

            <div className="tours-page__breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Tours & Packages</span>
            </div>

            <span className="tours-page__eyebrow">
              TOURS & PACKAGES
            </span>

            <h1 className="tours-page__title">
              Explore More. Experience More.
            </h1>

            <p className="tours-page__subtitle">
              Discover carefully planned travel experiences designed to help
              you explore new destinations, create memories and enjoy your
              journey with confidence.
            </p>

          </div>
        </div>
      </header>

      {/* Introduction */}
      <section className="tours-page__intro">
        <div className="container">
          <div className="tours-page__intro-grid">
            <div className="tours-page__intro-image">
              <img
                src="/src/assets/images/tours/coastal.jpg"
                alt="Travel experience"
              />
            </div>

            <div className="tours-page__intro-content">
              <span className="section-eyebrow">
                EXPLORE WITH CHECK IN
              </span>

              <h2>
                Your Journey, Your Way
              </h2>

              <p>
                Whether you're looking for a wildlife adventure, a relaxing
                beach escape, a city experience or an unforgettable journey
                across East Africa, we help bring your travel plans together.
              </p>

              <p>
                Our tour packages can be tailored around your destination,
                interests, schedule and travel preferences.
              </p>

              <Link
                to="/contact"
                className="button button--primary"
              >
                Plan Your Journey
                <Icon name="arrow-right" size={17} />
              </Link>
            </div>



          </div>
        </div>
      </section>


      {/* Tours */}
      <section className="tours-page__packages">
        <div className="container">

          <div className="section-heading section-heading--center">
            <span className="section-eyebrow">
              OUR TOURS
            </span>

            <h2>
              Explore Our Travel Experiences
            </h2>

            <p>
              Explore a selection of travel experiences that can be
              customised to suit your journey.
            </p>
          </div>


          <div className="tours-page__grid">
            {tours.map((tour) => (
              <article
                className="tour-card"
                key={tour.id}
              >

                <div className="tour-card__image">
                  <img
                    src={tour.image}
                    alt={tour.title}
                  />

                  <span className="tour-card__category">
                    {tour.category}
                  </span>
                </div>

                <div className="tour-card__content">

                  <div className="tour-card__meta">
                    <span>
                      <Icon name="map-pin" size={15} />
                      {tour.destination}
                    </span>

                    <span>
                      <Icon name="calendar" size={15} />
                      {tour.duration}
                    </span>
                  </div>

                  <h3>{tour.title}</h3>

                  <p>
                    {tour.description}
                  </p>

                  <Link
                    to="/contact"
                    className="tour-card__link"
                  >
                    Enquire About This Tour
                    <Icon name="arrow-right" size={16} />
                  </Link>

                </div>
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* Travel Styles */}
      <section className="tours-page__styles">
        <div className="container">

          <div className="section-heading section-heading--center">
            <span className="section-eyebrow">
              TRAVEL YOUR WAY
            </span>

            <h2>
              Something for Every Journey
            </h2>

            <p>
              Tell us what kind of experience you're looking for and we'll
              help you plan the details.
            </p>
          </div>


          <div className="tours-page__styles-grid">

            <div className="tour-style">
              <div className="tour-style__number">01</div>

              <h3>Safari & Wildlife</h3>

              <p>
                Discover remarkable landscapes and unforgettable wildlife
                experiences.
              </p>
            </div>

            <div className="tour-style">
              <div className="tour-style__number">02</div>

              <h3>Beach & Coastal</h3>

              <p>
                Slow down, relax and enjoy beautiful coastal destinations.
              </p>
            </div>

            <div className="tour-style">
              <div className="tour-style__number">03</div>

              <h3>City & Leisure</h3>

              <p>
                Explore vibrant cities, attractions, shopping and leisure
                experiences.
              </p>
            </div>

            <div className="tour-style">
              <div className="tour-style__number">04</div>

              <h3>Adventure & Culture</h3>

              <p>
                Experience new places, cultures and memorable adventures.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="tours-page__cta">
        <div className="container">

          <div className="tours-page__cta-content">
            <span className="tours-page__cta-eyebrow">
              READY TO TRAVEL?
            </span>

            <h2>
              Let's Plan Your Next Journey
            </h2>

            <p>
              Have a destination in mind? Talk to us and let's create a
              travel experience around your plans.
            </p>

            <div className="tours-page__cta-actions">
              <Link
                to="/book"
                className="button button--primary"
              >
                Book a Trip
                <Icon name="calendar" size={17} />
              </Link>

              <Link
                to="/contact"
                className="button tours-page__cta-secondary"
              >
                Contact Us
                <Icon name="arrow-right" size={17} />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Tours;