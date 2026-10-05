import { Link } from "react-router-dom";
import "./TravelInsurance.scss";
import SEO from "../../components/common/SEO/SEO";

function TravelInsurance() {
  return (
    <>
      <SEO
        title="Travel Insurance"
        description="Review important travel insurance, safety and responsibility information before travelling with Check In Travel & Tours Ltd."
        path="/travel-insurance"
      />
      <main className="travel-insurance-page">

        {/* Page Header */}
        <section className="travel-insurance-page__header">
          <div className="container">

            <div className="travel-insurance-page__breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Travel Insurance</span>
            </div>

            <div className="travel-insurance-page__heading">
              <span className="travel-insurance-page__eyebrow">
                TRAVEL INSURANCE
              </span>

              <h1>Travel Insurance</h1>

              <p>
                Important travel insurance, security and safety information
                for travelers joining our trips.
              </p>
            </div>

          </div>
        </section>

        {/* Content */}
        <section className="travel-insurance-page__content">
          <div className="container">

            <article className="travel-insurance-page__article">

              <h2>Travel Insurance</h2>

              <p>
                All travelers taking trips with us must have valid travel
                insurance, without exception, and no-one will be permitted to
                join any of our trips until we have had sight of your insurance
                certificate and taken note of the details.
              </p>

              <p>
                Please ensure that all members of your party are covered by
                insurance and that it includes medical cover and adequate cover
                for emergency rescue and repatriation. We would also recommend
                that your policy cover trip cancellation, personal liability,
                curtailment and loss of luggage/personal effects.
              </p>

              <p>
                If your travel insurance has been arranged in conjunction with
                your credit card provider, we will require proof of purchase of
                the cover. Please contact your bank/credit card provider for
                details of the participating insurer, together with the level
                of cover provided and the emergency (24-hour) contact telephone
                number.
              </p>

              <h2>Security &amp; Safety</h2>

              <p>
                Safety advice is issued by most national governments and updated
                regularly and we would suggest that all travelers check the
                appropriate website for updates both prior to booking, and again
                prior to traveling. Traveling to countries against your own
                government’s advice can adversely affect the validity of certain
                travel insurance policies.
              </p>

              <p>
                We strongly advise all travelers to use a money belt or neck
                wallet for the safekeeping of cash, passport, airline tickets
                and any other valuables. Please leave other valuables, such as
                jewelry, at home. Most accommodations provide safety deposit
                boxes, an excellent way of storing your valuables. We also
                advise you to keep a photocopy of your passport, separate from
                your actual passport when you travel.
              </p>

              <p>
                We reserve the right to make changes to, or even cancel, any
                part of the planned trip if in their opinion safety and security
                concerns deem this necessary. Your driver-guide will accompany
                you throughout your safari and it is important that you always
                follow his instructions, in the interests of safety.
              </p>

              {/* <p>
              If you spend time in Arusha, you will find that most Tanzanians
              are friendly and helpful, but as in most cities in any part of
              the world, you should exercise caution. Carrying expensive
              cameras or jewelry or waving large amounts of cash around, is
              always a bad idea and will invariably attract unwanted attention.
            </p> */}

              <p>
                Be aware of people approaching you and trying to ‘befriend’ you:
                often these people are con-men and you should be polite but firm
                in saying ‘no’ to them. We would strongly advise using taxis
                after dark for trips to restaurants or other nighttime trips and
                would urge you to keep to the main streets during the daytime.
              </p>

              <p>
                We also advise that you travel in small groups, wherever
                possible. In the unlikely event that you find yourself in an
                area where a political protest or demonstration is taking place,
                we would advise you to leave the area immediately, as these can
                turn violent or provoke counter-demonstrations or reaction from
                the police.
              </p>

              <p>
                Please note that you should use your own judgment when choosing
                activities or excursions, which do not form part of the trip you
                have booked with Check In. We can offer you assistance in
                choosing how to spend your free time, but neither Check In nor
                any of its representatives can provide any guarantee about the
                safety or suitability of any activities or excursions, nor about
                the operators who organize these.
              </p>

              <p>
                As in all countries, taking photos of police stations, border
                crossings, immigration controls, army barracks, military
                personnel or checkpoints, airports or political demonstrations
                is never a good idea, often illegal, and very likely to land you
                in trouble with the authorities.
              </p>

              <p>
                Swimming, snorkeling and other water-based activities are
                undertaken at your own risk.
              </p>

            </article>

          </div>
        </section>

      </main>
    </>
  );
}

export default TravelInsurance;
