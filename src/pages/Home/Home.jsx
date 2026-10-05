import Hero from "../../components/sections/Hero/Hero";
import About from "../../components/sections/About/About";
import Services from "../../components/sections/Services/Services";
import DestinationsPreview from "../../components/sections/Destinations/DestinationsPreview";
import WhyChooseUs from "../../components/sections/WhyChooseUs/WhyChooseUs";
import PlanJourney from "../../components/sections/PlanJourney/PlanJourney";
import TeamPreview from "../../components/sections/TeamPreview/TeamPreview";
import SEO from "../../components/common/SEO/SEO";

function Home() {
  return (
    <>
      <SEO
  title="Travel & Tours"
  description="Check In Travel & Tours Ltd helps you plan, book and enjoy your journey with tours, safaris, flights, hotels, visa services, car rentals and more."
  path="/"
/>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <TeamPreview />
      <DestinationsPreview />
      <PlanJourney />
    </>
  );
}

export default Home;