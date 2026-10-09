import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/common/Footer";
import StructuredData from "../components/common/StructuredData";

function MainLayout() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;