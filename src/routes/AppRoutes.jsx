import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ServiceDetails from "../pages/Services/ServiceDetails/ServiceDetails";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";

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
      </Route>
    </Routes>
  );
}

export default AppRoutes;