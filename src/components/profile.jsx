import Notifiation from "@/assets/icons/notification.svg";
import Person from "@/assets/icons/person.svg";
import Arrow from "@/assets/icons/arrow.svg";
import { Popover } from "antd";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();
  const handleExit = () => {
    localStorage.removeItem("crm_token");
    localStorage.removeItem("refresh_token");
    navigate("/login");
  };
  return (
    <div className="flex justify-end gap-4 items-center">
      {/* <Search
        placeholder="Search"
        style={{ backgroundColor: "#EAF0FF" }}
        className="w-[600px] custom-search rounded-[25px]"
        onSearch={onSearch}
        enterButton={<SearchIcon />}
      /> */}
      <img src={Notifiation} alt="notification" />
      <span className="w-[24px] h-[24px] rounded-full bg-[#EAF0FF] flex items-center justify-center">
        <img src={Person} alt="person" />
      </span>
      <div className="flex flex-col nunito-text leading-[14px] text-white">
        <div className="flex">
          <span className="text-[14px] font-medium">
            Mamasoliev Khurmatillo
          </span>
          <Popover
            arrow={false}
            trigger={"hover"}
            placement="bottomRight"
            content={
              <div className="cursor-pointer" onClick={handleExit}>
                Chiqish
              </div>
            }
          >
            <img
              src={Arrow}
              alt="arrow"
              style={{ color: "white" }}
              className="transform hover:rotate-180 transition-all"
            />
          </Popover>
        </div>
        <span className="text-[12px] font-light">
          Telefon raqami: 973462512
        </span>
      </div>
    </div>
  );
};
