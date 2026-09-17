import { Link } from "react-router-dom";

function BookTripButton({ onClick }) {
  return (
    <Link
      className="button button--primary"
      to="/book"
      onClick={onClick}
    >
      Book a Trip
    </Link>
  );
}

export default BookTripButton;