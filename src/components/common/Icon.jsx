import {
  Plane,
  Hotel,
  Map,
  FileText,
  Car,
  Ticket,
  Phone,
  Mail,
  MapPin,
  CalendarCheck,
  Headset,
  UserRound,
  Menu,
  X,
  ArrowRight,
  Check,
  Compass,
} from "lucide-react";

const icons = {
  plane: Plane,
  hotel: Hotel,
  map: Map,
  visa: FileText,
  "file-text": FileText,
  car: Car,
  ticket: Ticket,
  phone: Phone,
  mail: Mail,
  "map-pin": MapPin,
  calendar: CalendarCheck,
  headset: Headset,
  user: UserRound,
  menu: Menu,
  close: X,
  "arrow-right": ArrowRight,
  check: Check,
  compass: Compass,
};

function Icon({
  name,
  size = 20,
  strokeWidth = 1.8,
  ...props
}) {
  const IconComponent = icons[name];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      size={size}
      strokeWidth={strokeWidth}
      {...props}
    />
  );
}

export default Icon;