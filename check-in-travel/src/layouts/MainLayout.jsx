import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";

function MainLayout() {
  return (
    <div>
      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;