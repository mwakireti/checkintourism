import { useEffect, useState } from "react";
import ServicePreviewCard from "./ServicePreviewCard";
import { services } from "../../../data/services";
import "./Services.scss";

function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth <= 767) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 991) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();

    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  const maxIndex = Math.max(0, services.length - visibleCards);

  // Prevent the carousel from landing on an invalid
  // position when the screen is resized.
  useEffect(() => {
    setCurrentIndex((previous) => Math.min(previous, maxIndex));
  }, [maxIndex]);

  const handlePrevious = () => {
    setCurrentIndex((previous) => Math.max(previous - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((previous) =>
      Math.min(previous + 1, maxIndex)
    );
  };

  return (
    <section className="services" id="services">
      <div className="container">

        <div className="services__header">
          <div>
            <span className="services__eyebrow">
              OUR SERVICES
            </span>

            <h2 className="services__title">
              Everything You Need for Your Journey
            </h2>

            <p className="services__intro">
              From flights and accommodation to tours, visas,
              transport and activities, we help bring your travel
              plans together in one place.
            </p>
          </div>
        </div>

        <div className="services__carousel">

          <button
            type="button"
            className="services__arrow services__arrow--previous"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            aria-label="Previous services"
          >
            ←
          </button>

          <div className="services__viewport">
            <div
              className="services__track"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleCards)
                }%)`,
              }}
            >
              {services.map((service) => (
                <div
                  className="services__slide"
                  key={service.id}
                  style={{
                    flex: `0 0 ${100 / visibleCards}%`,
                  }}
                >
                  <ServicePreviewCard service={service} />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="services__arrow services__arrow--next"
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            aria-label="Next services"
          >
            →
          </button>

        </div>

        <div className="services__dots">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              type="button"
              key={index}
              className={`services__dot ${
                index === currentIndex
                  ? "services__dot--active"
                  : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to services slide ${index + 1}`}
              aria-current={
                index === currentIndex ? "true" : undefined
              }
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;