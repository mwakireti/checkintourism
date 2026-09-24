import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.scss";
import Icon from "../../components/common/Icon";
import { contact } from "../../data/contact";

function Contact() {
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

  const contactData = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("/api/send-contact.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(
        result.message ||
          "Something went wrong. Please try again."
      );
    }

    setStatus({
      type: "success",
      message:
        "Thank you. Your message has been sent successfully. Our team will get back to you soon.",
    });

    form.reset();
  } catch (error) {
    setStatus({
      type: "error",
      message:
        error.message ||
        "We could not send your message. Please try again.",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section className="contact-page">
      {/* PAGE HEADER */}
      <header className="contact-page__header">
        <div className="container">
          <div className="contact-page__header-content">
            <div className="contact-page__breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Contact Us</span>
            </div>

            <span className="contact-page__eyebrow">
              CONTACT US
            </span>

            <h1 className="contact-page__title">
              Let's Plan Your Journey
            </h1>

            <p className="contact-page__subtitle">
              Have a question, need help with your travel plans,
              or ready to start your next adventure? We're here
              to help.
            </p>
          </div>
        </div>
      </header>
      {/* CONTACT INFORMATION */}
      <section className="contact-page__info">
        <div className="container">
          <div className="contact-page__info-header">
            <span className="contact-page__info-eyebrow">
              LET'S TALK ABOUT YOUR TRIP
            </span>

            <h2 className="contact-page__info-title">
              We're Here to Help
            </h2>

            <p className="contact-page__info-intro">
              Whether you're planning a holiday, business trip,
              safari or simply need travel advice, our team is
              here to help you bring your travel plans together.
            </p>
          </div>

          <div className="contact-page__info-grid">

            {/* PHONE */}
            <a
              href={contact.phone.href}
              className="contact-page__info-card"
            >
              <div className="contact-page__info-icon">
                <Icon name="phone" size={23} />
              </div>

              <div className="contact-page__info-content">
                <span>Phone</span>

                <strong>
                  {contact.phone.display}
                </strong>
              </div>
            </a>

            {/* WHATSAPP */}
            <a
              href={contact.whatsapp.href}
              className="contact-page__info-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-page__info-icon">
                <Icon name="phone" size={23} />
              </div>

              <div className="contact-page__info-content">
                <span>WhatsApp</span>

                <strong>
                  {contact.whatsapp.display}
                </strong>
              </div>
            </a>

            {/* EMAIL */}
            <a
              href={contact.email.href}
              className="contact-page__info-card"
            >
              <div className="contact-page__info-icon">
                <Icon name="mail" size={23} />
              </div>

              <div className="contact-page__info-content">
                <span>Email</span>

                <strong>
                  {contact.email.display}
                </strong>
              </div>
            </a>

            {/* ADDRESS */}
            <div className="contact-page__info-card">
              <div className="contact-page__info-icon">
                <Icon name="map-pin" size={23} />
              </div>

              <div className="contact-page__info-content">
                <span>Address</span>

                <strong>
                  {contact.address.display}
                </strong>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEND US A MESSAGE */}
      <section className="contact-page__message">
        <div className="container">
          <div className="contact-page__message-grid">

            {/* FORM */}
            <div className="contact-page__form-wrapper">
              <div className="contact-page__section-heading">
                <span className="contact-page__section-eyebrow">
                  SEND US A MESSAGE
                </span>

                <h2 className="contact-page__section-title">
                  Let's Talk About Your Trip
                </h2>

                <p className="contact-page__section-intro">
                  Tell us a little about what you need and our team
                  will be happy to help you plan the next steps of
                  your journey.
                </p>
              </div>

             <form
  className="contact-page__form"
  onSubmit={handleSubmit}
>

                <div className="contact-page__form-row">
                  <div className="contact-page__field">
                    <label htmlFor="name">
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="contact-page__field">
                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      required
                    />
                  </div>
                </div>

                <div className="contact-page__form-row">
                  <div className="contact-page__field">
                    <label htmlFor="phone">
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      required
                    />
                  </div>

                  <div className="contact-page__field">
                    <label htmlFor="service">
                      Travel Service
                    </label>

                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      <option value="flight-booking">
                        Flight Booking
                      </option>

                      <option value="hotel-reservations">
                        Hotel Reservations
                      </option>

                      <option value="tour-packages">
                        Tour Packages
                      </option>

                      <option value="visa-services">
                        Visa Assistance
                      </option>

                      <option value="car-rentals">
                        Car Rentals
                      </option>

                      <option value="activity-bookings">
                        Activity Bookings
                      </option>

                      <option value="other">
                        Other Travel Enquiry
                      </option>
                    </select>
                  </div>
                </div>

                <div className="contact-page__field">
                  <label htmlFor="subject">
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="contact-page__field">
                  <label htmlFor="message">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell us about your travel plans..."
                    required
                  />
                </div>

                {status.message && (
  <div
    className={`contact-page__status contact-page__status--${status.type}`}
    role="alert"
  >
    {status.message}
  </div>
)}

             <button
  type="submit"
  className="button button--primary contact-page__submit"
  disabled={isSubmitting}
>
  {isSubmitting ? "Sending..." : "Send Message"}
</button>

              </form>
            </div>

            {/* SUPPORT PANEL */}
            <aside className="contact-page__support">

              <div className="contact-page__support-content">

                <span className="contact-page__support-eyebrow">
                  NEED HELP?
                </span>

                <h2 className="contact-page__support-title">
                  We're Here When You Need Us
                </h2>

                <p className="contact-page__support-text">
                  Whether you have already planned your trip or are
                  still deciding where to go, we're happy to help.
                </p>

                <div className="contact-page__support-list">

                  <a
                    href={contact.phone.href}
                    className="contact-page__support-item"
                  >
                    <span className="contact-page__support-icon">
                      <Icon name="phone" size={19} />
                    </span>

                    <span>
                      <small>Call Us</small>
                      <strong>{contact.phone.display}</strong>
                    </span>
                  </a>

                  <a
                    href={contact.whatsapp.href}
                    className="contact-page__support-item"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="contact-page__support-icon">
                      <Icon name="phone" size={19} />
                    </span>

                    <span>
                      <small>WhatsApp Us</small>
                      <strong>{contact.whatsapp.display}</strong>
                    </span>
                  </a>

                  <a
                    href={contact.email.href}
                    className="contact-page__support-item"
                  >
                    <span className="contact-page__support-icon">
                      <Icon name="mail" size={19} />
                    </span>

                    <span>
                      <small>Email Us</small>
                      <strong>{contact.email.display}</strong>
                    </span>
                  </a>

                </div>

              </div>

              <div className="contact-page__support-bottom">
                <span>TRAVEL WITH CONFIDENCE</span>

                <strong>
                  Your Journey Starts Here.
                </strong>
              </div>

            </aside>

          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="contact-page__cta">
        <div className="container">
          <div className="contact-page__cta-content">

            <div className="contact-page__cta-text">
              <span className="contact-page__cta-eyebrow">
                READY TO GET STARTED?
              </span>

              <h2 className="contact-page__cta-title">
                Your Journey Starts Here.
              </h2>

              <p className="contact-page__cta-description">
                Whether you know exactly where you want to go or need
                help planning your trip, we're here to help bring your
                travel plans together.
              </p>
            </div>

            <div className="contact-page__cta-actions">
              <Link
                to="/book"
                className="button button--primary"
              >
                Plan Your Trip
              </Link>

              <a
                href={contact.whatsapp.href}
                className="button contact-page__cta-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </div>

          </div>
        </div>
      </section>
    </section>
  );
}

export default Contact;