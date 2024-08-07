import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

interface NavbarTopItemsProps {
  id: number;
  icon: any;
  text: string;
}
const NavbarTopItems: NavbarTopItemsProps[] = [
  {
    id: 1,
    icon: Mail,
    text: "mail@gmail.com",
  },
  {
    id: 2,
    icon: MapPin,
    text: "Bornova/İzmir",
  },
  {
    id: 3,
    icon: Phone,
    text: "0555 555 55 55",
  },
];
const Navbar = () => {
  return (
    <div className="bg-personal_gray py-3 ">
      <div className="container">
        <div className="flex items-center gap-12">
          {NavbarTopItems.map((item) => (
            <Link
              href="#"
              className="flex gap-2 items-center text-white text-[15px]">
              {<item.icon color="white" size="18" />} <span>{item.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
