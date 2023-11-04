import Home from "@/assets/icons/home.svg";
import Settings from "@/assets/icons/settings.svg";
import UserAccess from "@/assets/icons/user-access.svg";
import Report from "@/assets/icons/report.svg";
import { Link } from "react-router-dom";

const navlinks = [
  {
    label: "Statistika",
    icon: Home,
    link: "/stat",
  },
  {
    label: "Yangi mahsulot",
    icon: Settings,
    link: "/product",
  },
  {
    label: "Kirim chiqim tarixi",
    icon: UserAccess,
    link: "/monitoring",
  },
  {
    label: "KPI amallari",
    icon: Report,
    link: "/kpi",
  },
];

export const NavLinks = () => {
  return (
    <nav className="flex gap-8 px-8">
      {navlinks.map((navlink, i) => (
        <Link to={navlink.link} key={i} className="flex gap-4 items-center">
          <img src={navlink.icon} alt="" width={21} height={21} />
          <span className="text-white nunito-text">{navlink.label}</span>
        </Link>
      ))}
    </nav>
  );
};
