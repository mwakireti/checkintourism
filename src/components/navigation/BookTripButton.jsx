// import { Link } from "react-router-dom";
// import Icon from "../common/Icon";

// function BookTripButton({ onClick }) {
//   return (
//     <Link
//       className="button button--primary"
//       to="/book"
//       onClick={onClick}
//     >
//       <Icon name="calendar" size={17} />
//       <span>Book a Trip</span>
//     </Link>
//   );
// }

// export default BookTripButton;


import { Link } from "react-router-dom";
import Icon from "../common/Icon";

function BookTripButton({ onClick }) {
  return (
    <Link
      className="button button--primary"
      to="/book"
      onClick={onClick}
    >
      <Icon name="calendar" size={17} />
      <span>Book Now</span>
    </Link>
  );
}

export default BookTripButton;