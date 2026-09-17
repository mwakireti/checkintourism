import { Link } from "react-router-dom";
import "./Services.scss";
import {services} from "../../data/services.js";
import ServiceCard from "./ServiceCard";

function Services() {
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

          <div className="services-page__grid">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))}
          </div>

        </div>
      </section>
    </section>
  );
}

export default Services;