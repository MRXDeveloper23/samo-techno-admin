import Home from "@/assets/icons/home.svg";
import Settings from "@/assets/icons/settings.svg";
import UserAccess from "@/assets/icons/user-access.svg";
import Report from "@/assets/icons/report.svg";
import Person from "@/assets/icons/person.svg";
import { Link } from "react-router-dom";

const navlinks = [
  {
    label: "Statistika",
    icon: Home,
    link: "/",
  },
  {
    label: "Yangi mahsulot",
    icon: Settings,
    link: "/product",
  },
  {
    label: "Kirim chiqim tarixi",
    icon: UserAccess,
    link: "/trade-history",
  },
  {
    label: "Xodimga topshiriq berish",
    icon: Report,
    link: "/task",
  },
  {
    label: "Xodim tayinlash",
    icon: Person,
    link: "/assign",
  },
];

export const NavLinks = () => {
  return (
    <nav className="flex gap-8 pl-8">
      {navlinks.map((navlink, i) => (
        <Link to={navlink.link} key={i} className="flex gap-4 items-center">
          <img src={navlink.icon} alt="" width={21} height={21} />
          <span className="text-white font-nunito text-base font-semibold">
            {navlink.label}
          </span>
        </Link>
      ))}
    </nav>
  );
};
