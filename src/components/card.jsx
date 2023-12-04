import { useNavigate } from "react-router-dom";
import { CustomTabs } from "./customTabs";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

const tabs = [
  {
    key: "tayyor",
    label: "Tayyor",
  },
  {
    key: "qism",
    label: "Qism",
  },
  {
    key: "hammasi",
    label: "Hammasi",
  },
];

export const Card = ({ title }) => {
  const changeTabHandler = (value) => {
    console.log(value);
  };
  const navigate = useNavigate();
  return (
    <div className="bg-[#F6F6F7] rounded-[26px] w-[250px] h-[327px]">
      <p
        className="px-[20px] pt-[18px] pb-[4px] underline text-[#C81515] cursor-pointer"
        onClick={() => navigate("/stat")}
      >
        {title}
      </p>
      <hr className="border-b-[3px] h-[1px] border-dashed" />
      <CustomTabs
        classes="w-full py-4 px-2"
        panes={tabs}
        onChangeTab={changeTabHandler}
        tabBarClasses={
          "flex items-center justify-center w-[80px] h-[28px] gap-2 text-center bg-[#D9E3F0] border ring-white/50 text-primary border-white/20 font-normal font-nunito text-[14px]"
        }
        activeTabBarClasses={"!bg-primary !text-white"}
      />
      <RangePicker
        className="mx-4 h-[23px] text-[14px] font-nunito text-[#696969] bg-[#EAF0FF] rounded-[13px] custom-range-picker"
        placeholder={["Sanadan", "Sanagacha"]}
      />
      <div className="mx-4 my-4">
        <span className="font-normal text-[14px] font-sans text-[#777B82]">
          Jami mahsulotlar soni
        </span>
        <br />
        <span className="text-[#4732CD] font-sans text-[19px] font-bold">
          0
        </span>
        <br />
        <span className="font-normal text-[14px] font-sans text-[#777B82]">
          Jami mahsulotlar summasi
        </span>
        <br />
        <span className="text-[#4732CD] font-sans text-[19px] font-bold">
          0
        </span>
      </div>
    </div>
  );
};
