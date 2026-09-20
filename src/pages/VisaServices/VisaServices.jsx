import { Link } from "react-router-dom";
import Icon from "../../components/common/Icon";
import { contact } from "../../data/contact";
import "./VisaServices.scss";
import visaServicesImage from "../../assets/images/visaServices/image6.jpg"

function VisaServices() {
  return (
    <section className="visa-page">

      {/* Page Header */}
      <header className="visa-page__header">
        <div className="container">
          <div className="visa-page__header-content">

            <div className="visa-page__breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Visa Services</span>
            </div>

            <span className="visa-page__eyebrow">
              VISA SERVICES
            </span>

            <h1 className="visa-page__title">
              Visa Assistance Made Simpler
            </h1>

            <p className="visa-page__subtitle">
              Practical support to help you prepare your visa
              application and travel documentation.
            </p>

          </div>
        </div>
      </header>

      {/* Introduction */}
      <section className="visa-page__intro">
        <div className="container">
          <div className="visa-page__intro-grid">

           

            <div className="visa-page__intro-content">

              <span className="visa-page__section-eyebrow">
                GET READY FOR YOUR JOURNEY
              </span>

              <h2>
                Visa Assistance & Travel Documentation
              </h2>

              <p>
                Preparing for international travel can involve
                important documents, application requirements and
                careful planning.
              </p>

              <p>
                Our visa assistance service helps you understand
                the documentation and preparation involved in your
                travel plans and provides practical support
                throughout the process.
              </p>

              <p>
                Whether you're travelling for business, leisure,
                visiting family or another purpose, we help you
                organize the important details before your journey.
              </p>

              <Link
                to="/contact"
                className="button button--primary"
              >
                Start Your Visa Process
              </Link>

            </div>
             <div className="visa-page__intro-image">
              <div className="visa-page__intro-image-placeholder">
               <img src={`${visaServicesImage}`} alt="" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What We Help With */}
      <section className="visa-page__help">
        <div className="container">

          <div className="visa-page__section-heading">
            <span className="visa-page__section-eyebrow">
              OUR VISA SUPPORT
            </span>

            <h2>
              How We Can Help
            </h2>

            <p>
              We help you prepare and organize the important
              elements of your visa application and travel
              documentation.
            </p>
          </div>

          <div className="visa-page__help-grid">

            <article className="visa-page__help-card">
              <div className="visa-page__help-icon">
                <Icon name="file-text" size={24} />
              </div>

              <h3>Documentation Guidance</h3>

              <p>
                Assistance with understanding and organizing
                the documents required for your application.
              </p>
            </article>

            <article className="visa-page__help-card">
              <div className="visa-page__help-icon">
                <Icon name="headset" size={24} />
              </div>

              <h3>Application Support</h3>

              <p>
                Practical assistance as you prepare your
                visa application and supporting information.
              </p>
            </article>

            <article className="visa-page__help-card">
              <div className="visa-page__help-icon">
                <Icon name="check" size={24} />
              </div>

              <h3>Document Preparation</h3>

              <p>
                Help with organizing the relevant travel
                documents before submission.
              </p>
            </article>

            <article className="visa-page__help-card">
              <div className="visa-page__help-icon">
                <Icon name="compass" size={24} />
              </div>

              <h3>Travel Preparation</h3>

              <p>
                Support with bringing your visa preparation
                together with the rest of your travel plans.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* Process */}
      <section className="visa-page__process">
        <div className="container">

          <div className="visa-page__section-heading">
            <span className="visa-page__section-eyebrow">
              OUR APPROACH
            </span>

            <h2>
              A Clearer Way to Prepare
            </h2>
          </div>

          <div className="visa-page__process-list">

            <div className="visa-page__process-item">
              <span className="visa-page__process-number">01</span>

              <div>
                <h3>Consultation</h3>
                <p>
                  Tell us about your destination and travel plans
                  so we can understand the assistance you need.
                </p>
              </div>
            </div>

            <div className="visa-page__process-item">
              <span className="visa-page__process-number">02</span>

              <div>
                <h3>Document Preparation</h3>
                <p>
                  Organize the relevant information and
                  supporting documents for your application.
                </p>
              </div>
            </div>

            <div className="visa-page__process-item">
              <span className="visa-page__process-number">03</span>

              <div>
                <h3>Application Support</h3>
                <p>
                  Receive practical assistance as you work
                  through the application process.
                </p>
              </div>
            </div>

            <div className="visa-page__process-item">
              <span className="visa-page__process-number">04</span>

              <div>
                <h3>Travel Preparation</h3>
                <p>
                  Bring your visa preparation together with
                  your wider travel arrangements.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="visa-page__disclaimer">
        <div className="container">

          <div className="visa-page__disclaimer-inner">

            <div className="visa-page__disclaimer-icon">
              <Icon name="file-text" size={26} />
            </div>

            <div>
              <h2>Important Visa Information</h2>

              <p>
                Check In Travel & Tours Ltd provides visa
                assistance and documentation support. Visa
                applications are subject to the requirements
                and decisions of the relevant embassy, consulate
                or immigration authority.
              </p>

              <p>
                Visa approval is not guaranteed. Requirements,
                processing times and applicable fees may vary
                depending on the destination and applicant.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="visa-page__cta">
        <div className="container">

          <div className="visa-page__cta-content">

            <span className="visa-page__cta-eyebrow">
              READY TO GET STARTED?
            </span>

            <h2>
              Let's Prepare Your Journey
            </h2>

            <p>
              Have questions about your visa preparation?
              Get in touch with our team and let's discuss
              your travel plans.
            </p>

            <div className="visa-page__cta-actions">

              <Link
                to="/contact"
                className="button button--primary"
              >
                Contact Us
              </Link>

              <a
                href={contact.whatsapp.href}
                className="button visa-page__cta-whatsapp"
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

export default VisaServices;