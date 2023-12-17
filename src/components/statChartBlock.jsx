import { Button, Select } from "antd";
import { CustomTabs } from "./customTabs";
import ExcelIcon from "@/assets/icons/excel.svg";
import { CustomPieChart } from "./pieChart";
import { CustomPieChartStat } from "./pieChartStat";

const tabs = [
  {
    key: "BUY",
    label: "Kirim",
  },
  {
    key: "SELL",
    label: "Chiqim",
  },
];

export const StatChartBlock = ({ stats, onYearChange, onTabChange }) => {
  return (
    <div className="w-full rounded-[20px] border border-[#CDD1DD] p-4">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <Select
            defaultValue="2023"
            className="h-[40px]"
            style={{ width: 120 }}
            onChange={onYearChange}
            options={[
              { value: "2023", label: "2023" },
              { value: "2022", label: "2022" },
              { value: "2021", label: "2021" },
            ]}
          />
          <CustomTabs
            classes="w-full px-4"
            panes={tabs}
            onChangeTab={onTabChange}
            tabBarClasses={
              "flex items-center justify-center w-[100px] h-[40px] gap-2 text-center bg-[#D9E3F0] border ring-white/50 text-primary border-white/20 font-normal font-nunito text-[14px]"
            }
            activeTabBarClasses={"!bg-primary !text-white"}
          />
        </div>
        <Button
          type="primary"
          htmlType="submit"
          icon={<img src={ExcelIcon} alt="excel" width={24} height={24} />}
          className="flex items-center justify-center h-[40px] w-[140px] border-[#ccc] rounded-[13px] bg-transparent font-ptsans text-[17px] text-black font-normal"
        >
          Yuklab olish
        </Button>
      </div>
      <div className="grid grid-cols-3 items-center justify-around gap-8 h-[300px]">
        <CustomPieChart stats={stats} />
        <div className="col-span-2">
          <CustomPieChartStat stats={stats} />
        </div>
      </div>
    </div>
  );
};
