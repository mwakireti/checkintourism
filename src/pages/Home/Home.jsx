import Hero from "../../components/sections/Hero/Hero";
import About from "../../components/sections/About/About";
import Services from "../../components/sections/Services/Services";
import FeaturedTours from "../../components/sections/FeaturedTours/FeaturedTours";
import DestinationsPreview from "../../components/sections/Destinations/DestinationsPreview";
import WhyChooseUs from "../../components/sections/WhyChooseUs/WhyChooseUs";
import VisaServicesPreview from "../../components/sections/VisaServicesPreview/VisaServicesPreview";
import BookingCTA from "../../components/sections/BookingCTA/BookingCTA";
import PlanJourney from "../../components/sections/PlanJourney/PlanJourney";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <DestinationsPreview />
      <PlanJourney />
      {/* <FeaturedTours />
      <VisaServicesPreview />
      <BookingCTA /> */}
    </>
  );
}

export default Home;