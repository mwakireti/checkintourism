import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import "./Services.scss";
import { services } from "../../data/services.js";
import ServiceCard from "./ServiceCard";

function Services() {
  const gridRef = useRef(null);

  useEffect(() => {
    const element = gridRef.current;

    if (!element) {
      return;
    }

    const cards = element.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("service-card--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="services-page">
      {/* PAGE HEADER */}
      <header className="services-page__header">
        <div className="container">
          <div className="services-page__header-content">

            <div className="services-page__breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Services</span>
            </div>

            <span className="services-page__eyebrow">
              OUR SERVICES
            </span>

            <h1 className="services-page__title">
              Travel Services Designed Around You
            </h1>

            <p className="services-page__subtitle">
              From planning your journey to enjoying the experience,
              we bring the essential travel services together in one place.
            </p>

          </div>
        </div>
      </header>

      {/* SERVICES INTRODUCTION */}
      <section className="services-page__intro">
        <div className="container">
          <div className="services-page__intro-content">

            <span className="services-page__intro-eyebrow">
              HOW WE CAN HELP
            </span>

            <h2 className="services-page__intro-title">
              Everything You Need for a Smoother Journey
            </h2>

            <p className="services-page__intro-text">
              At Check In Travel & Tours Ltd, we make travel easier by
              bringing together the services you need to plan, organize
              and enjoy your journey with confidence.
            </p>

            <p className="services-page__intro-text">
              Whether you are travelling for business, leisure, adventure
              or a special occasion, our team can assist with flights,
              accommodation, tours, visas, transportation and activities.
            </p>

          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="services-page__grid-section">
        <div className="container">

          <div className="services-page__grid" ref={gridRef}>
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))}
          </div>

        </div>
      </section>

      {/* SERVICES CTA */}
      <section className="services-page__cta">
        <div className="container">
          <div className="services-page__cta-content">

            <span className="services-page__cta-eyebrow">
              READY TO START YOUR JOURNEY?
            </span>

            <h2 className="services-page__cta-title">
              Let Us Help You Plan Your Next Trip
            </h2>

            <p className="services-page__cta-text">
              Whether you already know where you want to go or need
              help deciding, our team is here to help you bring your
              travel plans together.
            </p>

            <div className="services-page__cta-actions">
              <Link
                to="/book"
                className="button button--primary"
              >
                Book a Trip
              </Link>

              <Link
                to="/contact"
                className="button services-page__cta-contact"
              >
                Contact Us
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="services-page__why">
        <div className="container">

          <div className="services-page__why-header">
            <span className="services-page__why-eyebrow">
              WHY CHOOSE CHECK IN
            </span>

            <h2 className="services-page__why-title">
              Travel Support From Planning to Experience
            </h2>

            <p className="services-page__why-intro">
              We help bring the important pieces of your journey together,
              giving you practical support from the moment you start planning
              until you are ready to travel.
            </p>
          </div>


          <div className="services-page__why-grid">

            {/* 01 */}
            <div className="services-page__why-item">
              <span className="services-page__why-number">
                01
              </span>

              <div>
                <h3>Personalised Service</h3>

                <p>
                  Travel solutions based on your needs,
                  destination and budget.
                </p>
              </div>
            </div>


            {/* 02 */}
            <div className="services-page__why-item">
              <span className="services-page__why-number">
                02
              </span>

              <div>
                <h3>Convenient Planning</h3>

                <p>
                  Bring flights, accommodation, tours, visas,
                  transport and activities together in one place.
                </p>
              </div>
            </div>


            {/* 03 */}
            <div className="services-page__why-item">
              <span className="services-page__why-number">
                03
              </span>

              <div>
                <h3>Expert Assistance</h3>

                <p>
                  Get practical guidance to help you understand
                  your travel options and requirements.
                </p>
              </div>
            </div>


            {/* 04 */}
            <div className="services-page__why-item">
              <span className="services-page__why-number">
                04
              </span>

              <div>
                <h3>Journey-Focused Support</h3>

                <p>
                  We help you organize the important details
                  so you can travel with greater confidence.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </section>
  );
}

export default Services;