import ProfileIcon from "@/assets/icons/profile.svg";
import { NavLinks } from "./navbar";

export const Sidebar = () => {
  return (
    <aside className="w-[311px] bg-primary h-screen flex flex-col">
      <div className="flex flex-col gap-4 items-center w-full p-8">
        <div className="flex items-center justify-center w-[100px] h-[100px] bg-white rounded-full">
          <img src={ProfileIcon} alt="profile" />
        </div>
        <span className="text-white nunito-text text-center">
          Samo Techno Admin
        </span>
        <hr className="w-[149px]" />
      </div>
      <NavLinks />
    </aside>
  );
};
