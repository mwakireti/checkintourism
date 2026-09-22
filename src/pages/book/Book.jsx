import "./Book.scss";

function Book() {
  return (
    <section className="book-page">
      <div className="container">
        <div className="book-page__intro">
          <span className="book-page__eyebrow">Plan Your Journey</span>

          <h1 className="book-page__title">
            Tell Us About Your Trip
          </h1>

          <p className="book-page__description">
            Share your travel plans with us and our team will help you
            organize the details of your journey.
          </p>
        </div>

        <div className="book-page__layout">
          <form className="booking-form">
            <div className="booking-form__row">
              <div className="booking-form__field">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="booking-form__field">
                <label htmlFor="email">Email Address</label>
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
                <label htmlFor="phone">Phone / WhatsApp</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="booking-form__field">
                <label htmlFor="destination">Destination</label>
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
                <label htmlFor="departureDate">Departure Date</label>
                <input
                  id="departureDate"
                  name="departureDate"
                  type="date"
                />
              </div>

              <div className="booking-form__field">
                <label htmlFor="returnDate">Return Date</label>
                <input
                  id="returnDate"
                  name="returnDate"
                  type="date"
                />
              </div>
            </div>

            <div className="booking-form__row">
              <div className="booking-form__field">
                <label htmlFor="travellers">Number of Travellers</label>
                <input
                  id="travellers"
                  name="travellers"
                  type="number"
                  min="1"
                  placeholder="e.g. 2"
                />
              </div>

              <div className="booking-form__field">
                <label htmlFor="tripType">Trip Type</label>
                <select id="tripType" name="tripType">
                  <option value="">Select trip type</option>
                  <option value="holiday">Holiday</option>
                  <option value="business">Business Travel</option>
                  <option value="safari">Safari</option>
                  <option value="honeymoon">Honeymoon</option>
                  <option value="family">Family Trip</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="booking-form__field">
              <label htmlFor="message">Tell Us About Your Trip</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell us about your plans, preferences or anything else we should know..."
              />
            </div>

            <button
              type="submit"
              className="button button--primary booking-form__submit"
            >
              Send Trip Request
            </button>
          </form>

          <aside className="book-page__contact-card">
            <span className="book-page__eyebrow">
              Need Help?
            </span>

            <h2>Let's Plan It Together</h2>

            <p>
              If you prefer, you can contact our team directly and
              discuss your travel plans with us.
            </p>

            {/* Contact / WhatsApp actions will go here */}
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Book;