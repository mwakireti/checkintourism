// import { Link } from "react-router-dom";

// import "./WhyChooseUs.scss";

// function WhyChooseUs() {
//   const reasons = [
//     {
//       id: 1,
//       title: "Personalized Service",
//       description:
//         "We take the time to understand your travel plans and help create an experience that suits your needs.",
//     },
//     {
//       id: 2,
//       title: "Expert Travel Support",
//       description:
//         "From planning to departure, we are here to help you navigate the details of your journey.",
//     },
//     {
//       id: 3,
//       title: "Carefully Planned Trips",
//       description:
//         "We bring together flights, accommodation, tours, transport and other travel arrangements in one place.",
//     },
//     {
//       id: 4,
//       title: "Reliable Assistance",
//       description:
//         "Our team is available to guide you through your travel arrangements and answer your questions.",
//     },
//   ];

//   return (
//     <section className="why-choose-us">
//       <div className="container">
//         <div className="why-choose-us__layout">
//           <div className="why-choose-us__intro">
//             <span className="why-choose-us__eyebrow">
//               WHY CHOOSE US
//             </span>

//             <h2 className="why-choose-us__title">
//               Travel Should Be Exciting, Not Stressful.
//             </h2>

//             <p className="why-choose-us__description">
//               At Check In Travel & Tours LTD, we believe planning
//               your journey should be just as enjoyable as the
//               journey itself.
//             </p>

//             <p className="why-choose-us__description">
//               Whether you're planning a holiday, business trip,
//               safari, honeymoon or international adventure, our
//               team helps bring the important details together so
//               you can travel with confidence.
//             </p>

//             <Link
//               to="/about"
//               className="why-choose-us__link"
//             >
//               Learn More About Us
//               <span>→</span>
//             </Link>
//           </div>

//           <div className="why-choose-us__reasons">
//             {reasons.map((reason) => (
//               <div
//                 className="why-choose-us__reason"
//                 key={reason.id}
//               >
//                 <div className="why-choose-us__number">
//                   0{reason.id}
//                 </div>

//                 <div className="why-choose-us__reason-content">
//                   <h3 className="why-choose-us__reason-title">
//                     {reason.title}
//                   </h3>

//                   <p className="why-choose-us__reason-description">
//                     {reason.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default WhyChooseUs;

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