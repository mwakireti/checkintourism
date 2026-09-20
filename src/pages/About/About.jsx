import { Link } from "react-router-dom";
import aboutImage from "../../assets/images/about/image6.jpg";
import Icon from "../../components/common/Icon"

import "./About.scss";

function About() {
  return (
    <section className="about-page">

      {/* PAGE HEADER */}
      <header className="about-page__header">
        <div className="container">
          <div className="about-page__header-content">

            <div className="about-page__breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>About Us</span>
            </div>

            <span className="about-page__eyebrow">
              ABOUT US
            </span>

            <h1 className="about-page__title">
              Travel Made Simple
            </h1>

            <p className="about-page__subtitle">
              Making it easier to plan, organize and enjoy
              your journey with confidence.
            </p>

          </div>
        </div>
      </header>

      {/* ABOUT INTRODUCTION */}
      <section className="about-page__intro">
        <div className="container">
          <div className="about-page__intro-grid">

            {/* IMAGE */}
            <div className="about-page__intro-visual">
              <div className="about-page__intro-image">
                <img
                  src={aboutImage}
                  alt="Travel planning and experiences"
                />
              </div>

              <div className="about-page__intro-badge">
                <span>TRAVEL</span>
                <strong>MADE SIMPLE</strong>
              </div>
            </div>

            {/* CONTENT */}
            <div className="about-page__intro-content">

              <span className="about-page__section-eyebrow">
                WHO WE ARE
              </span>

              <h2 className="about-page__section-title">
                Travel Made Simple
              </h2>

              <p>
                Planning a trip should be exciting—not stressful.
              </p>

              <p>
                Check In Travel & Tours Ltd provides travel planning
                and booking services designed to make your journey
                easier from the moment you start planning until you
                arrive at your destination.
              </p>

              <p>
                Whether you are travelling for business, leisure,
                adventure or a special occasion, our team helps you
                find suitable travel options and organize the
                important details of your trip.
              </p>

              <p>
                From booking your flight and accommodation to
                arranging tours, visas, transport and activities,
                we help you put the pieces of your journey together.
              </p>

              <div className="about-page__intro-highlight">
                <span className="about-page__intro-highlight-icon">
                  ✓
                </span>

                <div>
                  <strong>
                    One Travel Partner
                  </strong>

                  <p>
                    Bringing essential travel services together
                    in one convenient place.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
      {/* WHAT WE OFFER */}
      <section className="about-page__offer">
        <div className="container">

          <div className="about-page__offer-header">
            <span className="about-page__section-eyebrow">
              WHAT WE OFFER
            </span>

            <h2 className="about-page__section-title">
              Support That Makes Travel Easier
            </h2>

            <p className="about-page__offer-intro">
              We believe good travel planning is about more than
              booking tickets and accommodation. It is about
              understanding your needs and helping you organize
              the details that make your journey easier.
            </p>
          </div>

          <div className="about-page__offer-grid">

            {/* 01 */}
            <article className="about-page__offer-card">
              <span className="about-page__offer-number">
                01
              </span>

              <div className="about-page__offer-content">
                <h3>
                  Personalised Service
                </h3>

                <p>
                  Travel solutions based on your needs,
                  destination and budget.
                </p>
              </div>

              <span className="about-page__offer-line" />
            </article>

            {/* 02 */}
            <article className="about-page__offer-card">
              <span className="about-page__offer-number">
                02
              </span>

              <div className="about-page__offer-content">
                <h3>
                  Convenient Planning
                </h3>

                <p>
                  Get multiple travel services through
                  one travel partner.
                </p>
              </div>

              <span className="about-page__offer-line" />
            </article>

            {/* 03 */}
            <article className="about-page__offer-card">
              <span className="about-page__offer-number">
                03
              </span>

              <div className="about-page__offer-content">
                <h3>
                  Expert Assistance
                </h3>

                <p>
                  Guidance to help you make informed
                  travel decisions.
                </p>
              </div>

              <span className="about-page__offer-line" />
            </article>

            {/* 04 */}
            <article className="about-page__offer-card">
              <span className="about-page__offer-number">
                04
              </span>

              <div className="about-page__offer-content">
                <h3>
                  Memorable Experiences
                </h3>

                <p>
                  Go beyond transportation and accommodation—
                  we help you experience your destination.
                </p>
              </div>

              <span className="about-page__offer-line" />
            </article>

          </div>

        </div>
      </section>
      {/* WHY CHECK IN */}
<section className="about-page__why">
  <div className="container">
    <div className="about-page__why-grid">

      {/* INTRODUCTION */}
      <div className="about-page__why-intro">

        <span className="about-page__section-eyebrow">
          WHY CHECK IN
        </span>

        <h2 className="about-page__section-title">
          Travel Support From Planning to Experience
        </h2>

        <p>
          Travel involves many moving pieces. Our role is to
          help bring those pieces together so you can spend
          less time worrying about the details and more time
          looking forward to your journey.
        </p>

        <p>
          From your first travel enquiry to the arrangements
          that help you get ready, we focus on providing
          practical assistance based on your plans, needs
          and destination.
        </p>

        <Link
          to="/services"
          className="button button--primary"
        >
          Explore Our Services
          <span>→</span>
        </Link>

      </div>


      {/* REASONS */}
      <div className="about-page__why-list">

  <div className="about-page__why-item">
    <div className="about-page__why-icon">
      <Icon name="compass" size={22} />
    </div>

    <div>
      <h3>
        One Place to Plan
      </h3>

      <p>
        Bring flights, accommodation, tours, visas,
        transportation and activities together through
        one travel partner.
      </p>
    </div>
  </div>


  <div className="about-page__why-item">
    <div className="about-page__why-icon">
      <Icon name="user" size={22} />
    </div>

    <div>
      <h3>
        Planning Around You
      </h3>

      <p>
        Travel options can be organized around your
        destination, preferences, schedule and budget.
      </p>
    </div>
  </div>


  <div className="about-page__why-item">
    <div className="about-page__why-icon">
      <Icon name="headset" size={22} />
    </div>

    <div>
      <h3>
        Practical Guidance
      </h3>

      <p>
        We help you understand available travel options
        and the important requirements connected to your
        journey.
      </p>
    </div>
  </div>


  <div className="about-page__why-item">
    <div className="about-page__why-icon">
      <Icon name="map" size={22} />
    </div>

    <div>
      <h3>
        A Complete Journey
      </h3>

      <p>
        Our services go beyond individual bookings to
        help you organize more of the journey in one place.
      </p>
    </div>
  </div>

</div>

    </div>
  </div>
      </section>
      <section className="about-page__cta">
  <div className="container">
    <div className="about-page__cta-content">
      <span className="about-page__cta-eyebrow">
        READY TO START YOUR JOURNEY?
      </span>

      <h2 className="about-page__cta-title">
        Let's Plan Your Next Trip
      </h2>

      <p className="about-page__cta-description">
        Whether you already know where you're going or need help planning,
        we're here to bring your travel plans together.
      </p>

      <div className="about-page__cta-actions">
        <Link to="/book" className="button button--primary">
          Book a Trip
        </Link>

        <Link to="/contact" className="button about-page__cta-secondary">
          Contact Us
        </Link>
      </div>
    </div>
  </div>
</section>
    </section>
  );
}

export default About;