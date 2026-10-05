import Hero from "../../components/sections/Hero/Hero";
import About from "../../components/sections/About/About";
import Services from "../../components/sections/Services/Services";
import DestinationsPreview from "../../components/sections/Destinations/DestinationsPreview";
import WhyChooseUs from "../../components/sections/WhyChooseUs/WhyChooseUs";
import PlanJourney from "../../components/sections/PlanJourney/PlanJourney";
import TeamPreview from "../../components/sections/TeamPreview/TeamPreview";

function Home() {
  return (
    <>
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