import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import aboutImage from "../../../assets/images/about/image6.jpg";
import "./About.scss";

function About() {

  const aboutRef = useRef(null);

  useEffect(() => {
    const section = aboutRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("about--visible");
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="container">
        <div className="about__grid">

          {/* Image */}
          <div className="about__visual">
            
            <div className="about__image">
              <div className="about__image-placeholder">
                <img src={aboutImage} alt="About Us" />
              </div>
            </div>

            <div className="about__services-card">
              <div className="about__services-item">
                <span>✓</span>
                <span>Travel Planning</span>
              </div>

              <div className="about__services-item">
                <span>✓</span>
                <span>Tours & Packages</span>
              </div>

              <div className="about__services-item">
                <span>✓</span>
                <span>Visa Assistance</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="about__content">

            <span className="about__eyebrow">
              ABOUT US
            </span>

            <h2 className="about__title">
              Travel Made Simple
            </h2>

            <p className="about__lead">
              Planning a trip should be exciting—not stressful.
            </p>

            <p className="about__description">
              <strong>Check In Travel & Tours Ltd</strong> provides
              travel planning and booking services designed to make
              your journey easier from the moment you start planning
              until you arrive at your destination.
            </p>

            <p className="about__description">
              Whether you are travelling for business, leisure,
              adventure or a special occasion, our team helps you
              find suitable travel options and organize the important
              details of your trip.
            </p>

            <p className="about__description">
              From booking your flight and accommodation to arranging
              tours, visas, transport and activities,{" "}
              <strong>
                we help you put the pieces of your journey together.
              </strong>
            </p>

            <div className="about__features">

              <div className="about__feature">
                <span className="about__feature-number">01</span>

                <div>
                  <h3>Personalised Service</h3>
                  <p>
                    Travel solutions based on your needs,
                    destination and budget.
                  </p>
                </div>
              </div>

              <div className="about__feature">
                <span className="about__feature-number">02</span>

                <div>
                  <h3>Convenient Planning</h3>
                  <p>
                    Get multiple travel services through one
                    travel partner.
                  </p>
                </div>
              </div>

              <div className="about__feature">
                <span className="about__feature-number">03</span>

                <div>
                  <h3>Expert Assistance</h3>
                  <p>
                    Guidance to help you make informed travel
                    decisions.
                  </p>
                </div>
              </div>

              <div className="about__feature">
                <span className="about__feature-number">04</span>

                <div>
                  <h3>Memorable Experiences</h3>
                  <p>
                    Go beyond transportation and accommodation—we
                    help you experience your destination.
                  </p>
                </div>
              </div>

            </div>

            <Link
              to="/about"
              className="about__link"
            >
              Learn More About Us
              <span>→</span>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;