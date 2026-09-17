import { Link } from "react-router-dom";
import { navigation } from "../../data/navigation";
import BookTripButton from "./BookTripButton";
import WhatsAppButton from "./WhatsAppButton";

function DesktopNav() {
  return (
    <div className="desktop-nav">
      <div className="desktop-nav__links">
        {navigation.map((item) => (
          <Link
            className="desktop-nav__link"
            key={item.path}
            to={item.path}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* <div className="desktop-nav__actions">
        <BookTripButton />
        <WhatsAppButton />
      </div>  */}
    </div>
  );
}

export default DesktopNav;