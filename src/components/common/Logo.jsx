import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-dark.jpeg";

function Logo({ onClick }) {
  return (
    <Link to="/" onClick={onClick} aria-label="Check In Travel & Tours LTD">
      <img
        src={logo}
        alt="Check In Travel & Tours LTD"
      />
    </Link>
  );
}

export default Logo;