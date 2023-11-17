import ProfileIcon from "@/assets/icons/profile.svg";
import { NavLinks } from "./navbar";

export const Header = () => {
  return (
    <header className="w-full bg-primary px-[94px] py-[25px]">
      <div className="mx-auto flex w-full max-w-[1366px] items-center justify-between">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex items-center justify-center w-[90px] h-[90px] bg-white rounded-full">
            <img src={ProfileIcon} alt="profile" />
          </div>
        </div>
        <NavLinks />
      </div>
    </header>
  );
};
