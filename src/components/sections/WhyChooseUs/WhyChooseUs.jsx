import "./WhyChooseUs.scss";

const reasons = [
  {
    number: "01",
    title: "Personalized Travel Planning",
    description:
      "We take time to understand your needs and help create a journey that suits your plans, preferences and budget.",
  },
  {
    number: "02",
    title: "Convenient Travel Services",
    description:
      "From flights and accommodation to visas, transport and tours, we bring important travel services together in one place.",
  },
  {
    number: "03",
    title: "Support When You Need It",
    description:
      "Our team is available to help you understand your options and make informed travel arrangements.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="why-choose-us__layout">
          <div className="why-choose-us__intro">
            <span className="why-choose-us__eyebrow">
              Why Check In?
            </span>

            <h2 className="why-choose-us__title">
              Travel Planning Made Easier
            </h2>

            <p className="why-choose-us__description">
              Your journey should feel exciting, not complicated.
              We help bring the important details together so you
              can travel with greater clarity and confidence.
            </p>
          </div>

          <div className="why-choose-us__reasons">
            {reasons.map((reason) => (
              <article
                className="why-choose-us__reason"
                key={reason.number}
              >
                <span className="why-choose-us__number">
                  {reason.number}
                </span>

                <div>
                  <h3 className="why-choose-us__reason-title">
                    {reason.title}
                  </h3>

                  <p className="why-choose-us__reason-description">
                    {reason.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;