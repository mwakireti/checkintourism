// import { Link } from "react-router-dom";

// import { destinations } from "../../../data/destinations";

// import "./DestinationsPreview.scss";

// function DestinationsPreview() {
//   const featuredDestinations = destinations.slice(0, 3);

//   return (
//     <section className="destinations-preview">
//       <div className="container">
//         <div className="destinations-preview__header">
//           <span className="destinations-preview__eyebrow">
//             POPULAR DESTINATIONS
//           </span>

//           <h2 className="destinations-preview__title">
//             Explore Amazing Places Around the World
//           </h2>

//           <p className="destinations-preview__intro">
//             From unforgettable African adventures to relaxing
//             coastal escapes, discover destinations we can help
//             you experience.
//           </p>
//         </div>

//         <div className="destinations-preview__list">
//           {featuredDestinations.map((destination, index) => (
//             <article
//               className={`destination-feature ${
//                 index % 2 !== 0
//                   ? "destination-feature--reverse"
//                   : ""
//               }`}
//               key={destination.id}
//             >
//               <div className="destination-feature__image-wrapper">
//                 <img
//                   className="destination-feature__image"
//                   src={destination.image}
//                   alt={destination.title}
//                 />
//               </div>

//               <div className="destination-feature__content">
//                 <span className="destination-feature__country">
//                   {destination.country}
//                 </span>

//                 <h3 className="destination-feature__title">
//                   {destination.title}
//                 </h3>

//                 <div className="destination-feature__divider" />

//                 <p className="destination-feature__description">
//                   {destination.description}
//                 </p>

//                 <Link
//                   to="/destinations"
//                   className="destination-feature__link"
//                 >
//                   Explore Destination
//                   <span>→</span>
//                 </Link>
//               </div>
//             </article>
//           ))}
//         </div>

//         <div className="destinations-preview__footer">
//           <Link
//             to="/destinations"
//             className="destinations-preview__view-all"
//           >
//             Explore All Destinations
//             <span>→</span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default DestinationsPreview;


import { Link } from "react-router-dom";
import "./DestinationsPreview.scss";

const destinations = [
  {
    name: "Kenya",
    region: "East Africa",
    description:
      "Discover incredible wildlife, beautiful landscapes and unforgettable safari experiences.",
    image: "/src/assets/images/destinations/kenya.jpg",
  },
  {
    name: "Tanzania",
    region: "East Africa",
    description:
      "Experience iconic wildlife, the Serengeti and the beauty of Zanzibar.",
    image: "/src/assets/images/destinations/tanzania.jpg",
  },
  {
    name: "Rwanda",
    region: "East Africa",
    description:
      "Explore Rwanda's beautiful landscapes, wildlife and vibrant culture.",
    image: "/src/assets/images/destinations/rwanda.jpg",
  },
  {
    name: "Dubai",
    region: "Middle East",
    description:
      "Enjoy a blend of modern attractions, shopping, luxury and adventure.",
    image: "/src/assets/images/destinations/dubai.jpg",
  },
];

function DestinationsPreview() {
  const [featuredDestination, ...otherDestinations] = destinations;

  return (
    <section className="destinations-preview">
      <div className="container">
        <div className="destinations-preview__heading">
          <div>
            <span className="destinations-preview__eyebrow">
              Explore With Us
            </span>

            <h2 className="destinations-preview__title">
              Discover Your Next Destination
            </h2>
          </div>

          <Link
            to="/destinations"
            className="destinations-preview__view-all"
          >
            View All Destinations
          </Link>
        </div>

        <div className="destinations-preview__grid">
          <Link
            to="/destinations"
            className="destination-feature"
          >
            <img
              src={featuredDestination.image}
              alt={featuredDestination.name}
              className="destination-feature__image"
            />

            <div className="destination-feature__overlay" />

            <div className="destination-feature__content">
              <span className="destination-feature__region">
                {featuredDestination.region}
              </span>

              <h3>{featuredDestination.name}</h3>

              <p>{featuredDestination.description}</p>

              <span className="destination-feature__link">
                Explore Destination
              </span>
            </div>
          </Link>

          <div className="destinations-preview__list">
            {otherDestinations.map((destination) => (
              <Link
                to="/destinations"
                className="destination-item"
                key={destination.name}
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="destination-item__image"
                />

                <div className="destination-item__content">
                  <span className="destination-item__region">
                    {destination.region}
                  </span>

                  <h3>{destination.name}</h3>

                  <p>{destination.description}</p>

                  <span className="destination-item__link">
                    Explore
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DestinationsPreview;