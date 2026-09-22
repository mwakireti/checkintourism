import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Hero.scss";

import heroImage1 from "../../../assets/images/hero/image1.jpg";
import heroImage2 from "../../../assets/images/hero/image2.jpg";
import heroImage3 from "../../../assets/images/hero/image3.jpg";
import heroImage4 from "../../../assets/images/hero/image4.jpg";
import heroImage5 from "../../../assets/images/hero/image5.jpg";
import heroImage6 from "../../../assets/images/hero/image6.jpg";
import heroImage7 from "../../../assets/images/hero/image7.jpg";

const heroImages = [
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  heroImage6,
  heroImage7
];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previous) => {
        return (previous + 1) % heroImages.length;
      });
    }, 16000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">

      {/* Background Images */}
      <div className="hero__background">
        {heroImages.map((image, index) => (
          <div
            className={`hero__image ${index === currentImage ? "hero__image--active" : ""
              }`}
            key={image}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="hero__overlay">
        <div className="container">
          <div className="hero__content">

            <h1 className="hero__title">
              Your Journey Starts Here.
            </h1>

            <h2 className="hero__subtitle">
              Travel. Explore. Experience.
            </h2>

            <p className="hero__description">
              At <strong>Check In Travel & Tours Ltd</strong>, we make
              travel easier by helping you plan, book and enjoy your
              journey with confidence.
              <br />
              From flights and hotels to tours, visas, car rentals and
              activities, we bring your travel plans together in one place.
            </p>

            <div className="hero__actions">
              <Link
                to="/book"
                className="button button--primary"
              >
                Plan Your Trip
              </Link>

              <Link
                to="/tours"
                className="button button--secondary"
              >
                Explore Our Tours
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;