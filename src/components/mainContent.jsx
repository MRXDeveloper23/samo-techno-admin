import Search from "antd/es/input/Search";
import { SearchIcon } from "@/utils/icons";
import { Container } from "./container";

import Notifiation from "@/assets/icons/notification.svg";
import Person from "@/assets/icons/person.svg";
import Arrow from "@/assets/icons/arrow.svg";
import { Button, Input } from "antd";

export const MainContent = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <Container>
      <div className="flex justify-end gap-4 items-center">
        <Search
          placeholder="Search"
          style={{ backgroundColor: "#EAF0FF" }}
          className="w-[600px] custom-search rounded-[25px]"
          onSearch={onSearch}
          enterButton={<SearchIcon />}
        />
        <img src={Notifiation} alt="notification" />
        <span className="w-[24px] h-[24px] rounded-full bg-[#EAF0FF] flex items-center justify-center">
          <img src={Person} alt="person" />
        </span>
        <div className="flex flex-col nunito-text leading-[14px]">
          <div className="flex">
            <span className="text-[14px] font-medium">
              Olimov Asqarali Turg’unovich
            </span>
            <img src={Arrow} alt="arrow" />
          </div>
          <span className="text-[12px] font-light">JShShIR:31511943620023</span>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-[28px] font-nunito font-bold leading-8 mb-8">
          Kirim Chiqim Tarixi
        </h1>
        <div className="flex gap-4">
          <Input
            placeholder="ID yoki telefon nomer"
            className="custom-input h-[45px] rounded-[16px] bg-[#eaf0ff]/20"
          />
          <Button
            icon={<SearchIcon color="white" />}
            type="primary"
            className="flex items-center justify-center w-[130px] h-[45px] bg-primary rounded-[25px]"
          >
            Qidirish
          </Button>
        </div>
      </div>
    </Container>
  );
};
