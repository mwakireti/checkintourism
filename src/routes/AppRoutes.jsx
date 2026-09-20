import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ServiceDetails from "../pages/Services/ServiceDetails/ServiceDetails";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import VisaServices from "../pages/VisaServices/VisaServices";
import Destinations from "../pages/Destinations/Destinations";
import Tours from "../pages/Tours/Tours";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/services"
          element={<Services />}
        />
        <Route
          path="/services/:slug"
          element={<ServiceDetails />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/visa-services"
          element={<VisaServices />} />
        <Route 
          path="/destinations"
          element={<Destinations />}
        />
        <Route
          path="/tours"
          element={<Tours />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;