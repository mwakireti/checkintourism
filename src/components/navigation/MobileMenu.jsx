// import { Link } from "react-router-dom";
// import { navigation } from "../../data/navigation";
// import BookTripButton from "./BookTripButton";
// import WhatsAppButton from "./WhatsAppButton";

// function MobileMenu({ isOpen, onClose }) {
//   if (!isOpen) {
//     return null;
//   }

//   return (
//     <div className="mobile-menu">
//       <div className="mobile-menu__content">
//         <nav className="mobile-menu__nav">
//           {navigation.map((item) => (
//             <Link
//               className="mobile-menu__link"
//               key={item.path}
//               to={item.path}
//               onClick={onClose}
//             >
//               {item.label}
//             </Link>
//           ))}
//         </nav>

//         <div className="mobile-menu__actions">
//           <BookTripButton onClick={onClose} />
//           <WhatsAppButton />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MobileMenu;

import { NavLink } from "react-router-dom";
import { navigation } from "../../data/navigation";
import BookTripButton from "./BookTripButton";

function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="mobile-menu">
      <div className="mobile-menu__content">

        <nav
          className="mobile-menu__nav"
          aria-label="Mobile navigation"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `mobile-menu__link ${
                  isActive ? "mobile-menu__link--active" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mobile-menu__actions">
          <BookTripButton onClick={onClose} />
        </div>

      </div>
    </div>
  );
}

export default MobileMenu;