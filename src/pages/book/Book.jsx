import { useState } from "react";
import "./Book.scss";

function Book() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

const handleSubmit = async (event) => {
  event.preventDefault();

  setIsSubmitting(true);

  setStatus({
    type: "",
    message: "",
  });

  const form = event.currentTarget;
  const formData = new FormData(form);
  const bookingData = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("/api/send-booking.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(
        result.message || "Something went wrong. Please try again."
      );
    }

    setStatus({
      type: "success",
      message:
        "Thank you. Your trip request has been sent successfully. Our team will get back to you soon.",
    });

    form.reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
      setStatus({
        type: "",
        message: "",
      });
    }, 5000);
  } catch (error) {
    setStatus({
      type: "error",
      message:
        error.message ||
        "We could not send your request. Please try again.",
    });

    // Hide error message after 5 seconds
    setTimeout(() => {
      setStatus({
        type: "",
        message: "",
      });
    }, 5000);
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section className="book-page">
      <div className="container">
        <div className="book-page__intro">
          <span className="book-page__eyebrow">
            Plan Your Journey
          </span>

          <h1 className="book-page__title">
            Tell Us About Your Trip
          </h1>

          <p className="book-page__description">
            Share your travel plans with us and our team will help you
            organize the details of your journey.
          </p>
        </div>

        <div className="book-page__layout">
          <div className="book-page__form-card">
            <h2>Trip Details</h2>

            <p>
              Complete the form below and we'll use your information to
              understand what you're looking for.
            </p>

            <form
              className="booking-form"
              onSubmit={handleSubmit}
            >
              <div className="booking-form__row">
                <div className="booking-form__field">
                  <label htmlFor="fullName">
                    Full Name
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="booking-form__field">
                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="booking-form__row">
                <div className="booking-form__field">
                  <label htmlFor="phone">
                    Phone / WhatsApp
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="booking-form__field">
                  <label htmlFor="destination">
                    Destination
                  </label>

                  <input
                    id="destination"
                    name="destination"
                    type="text"
                    placeholder="Where would you like to go?"
                    required
                  />
                </div>
              </div>

              <div className="booking-form__row">
                <div className="booking-form__field">
                  <label htmlFor="departureDate">
                    Departure Date
                  </label>

                  <input
                    id="departureDate"
                    name="departureDate"
                    type="date"
                  />
                </div>

                <div className="booking-form__field">
                  <label htmlFor="returnDate">
                    Return Date
                  </label>

                  <input
                    id="returnDate"
                    name="returnDate"
                    type="date"
                  />
                </div>
              </div>

              <div className="booking-form__row">
                <div className="booking-form__field">
                  <label htmlFor="travellers">
                    Number of Travellers
                  </label>

                  <input
                    id="travellers"
                    name="travellers"
                    type="number"
                    min="1"
                    placeholder="e.g. 2"
                  />
                </div>

                <div className="booking-form__field">
                  <label htmlFor="tripType">
                    Trip Type
                  </label>

                  <select
                    id="tripType"
                    name="tripType"
                  >
                    <option value="">
                      Select trip type
                    </option>

                    <option value="holiday">
                      Holiday
                    </option>

                    <option value="business">
                      Business Travel
                    </option>

                    <option value="safari">
                      Safari
                    </option>

                    <option value="honeymoon">
                      Honeymoon
                    </option>

                    <option value="family">
                      Family Trip
                    </option>

                    <option value="other">
                      Other
                    </option>
                  </select>
                </div>
              </div>

              <div className="booking-form__field">
                <label htmlFor="message">
                  Tell Us About Your Trip
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us about your plans, preferences or anything else we should know..."
                />
              </div>

              {status.message && (
                <div
                  className={`booking-form__status booking-form__status--${status.type}`}
                  role="alert"
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="button button--primary booking-form__submit"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Sending..."
                  : "Send Trip Request"}
              </button>
            </form>
          </div>

          <aside className="book-page__contact-card">
            <span className="book-page__eyebrow">
              Need Help?
            </span>

            <h2>Let's Plan It Together</h2>

            <p>
              Not sure where to start? Tell us what you have in
              mind and our team can help you put the journey
              together.
            </p>

            <div className="book-page__contact-list">
              <div className="book-page__contact-item">
                <span className="book-page__contact-label">
                  Email
                </span>

                <a href="mailto:sales@checkintourism.com">
                  sales@checkintourism.com
                </a>
              </div>

              <div className="book-page__contact-item">
                <span className="book-page__contact-label">
                  WhatsApp
                </span>

                <p>
                  Chat with our travel team about your trip plans.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/256777093069"
              target="_blank"
              rel="noopener noreferrer"
              className="button button--whatsapp book-page__whatsapp"
            >
              Chat on WhatsApp
            </a>

            <div className="book-page__note">
              <strong>Planning something specific?</strong>

              <p>
                You can mention your preferred destination,
                dates, number of travellers and any special
                requirements in the form.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Book;