import { Select } from "antd";
import { useState } from "react";
import { Search } from "./search";
import { getMonthDays } from "../../utils/getMonthDays";
import { getAllMonths } from "../../utils/getMonths";
import { CustomTabs } from "../customTabs";

const tabs = [
  {
    key: "tayyor",
    label: "Tayyor",
  },
  {
    key: "qism",
    label: "Qism",
  },
];

export const FilterGroup = ({ filter, updateFilter }) => {
  const { fromDay, fromMonth, fromYear, toDay, toMonth, toYear, searchString } =
    filter;
  const [monthDays, setMonthDays] = useState([]);

  const getDays = (val, year) => {
    if (!year && val !== 0) {
      return;
    }
    const daysCount = getMonthDays(val, year);
    setMonthDays(daysCount);
  };

  const changeTabHandler = (value) => {
    console.log(value);
  };

  return (
    <div className="my-4">
      <Search
        search={searchString}
        setSearchString={(val) => updateFilter("searchString", val)}
      />
      <div className="filter-group py-[15px] flex flex-wrap gap-4 justify-between items-center font-nunito">
        <CustomTabs
          classes="w-full"
          panes={tabs}
          onChangeTab={changeTabHandler}
          tabBarClasses={
            "flex items-center justify-center w-[90px] h-[32px] gap-2 text-center bg-[#D9E3F0] border ring-white/50 text-primary border-white/20 font-normal font-nunito text-[14px]"
          }
          activeTabBarClasses={"!bg-primary !text-white"}
        />
        <div className="flex flex-wrap gap-4 items-center">
          <Select
            allowClear
            placeholder="Yil"
            className=""
            style={{ width: 131 }}
            options={[
              { label: 2023, value: 2023 },
              { label: 2022, value: 2022 },
              { label: 2022, value: 2021 },
            ]}
            value={fromYear || "Yil"}
            onChange={(val) => updateFilter("fromYear", val)}
          />
          <Select
            allowClear
            placeholder="Oy"
            className=""
            style={{ width: 131 }}
            options={getAllMonths()}
            defaultActiveFirstOption={true}
            value={fromMonth || "Oy"}
            onChange={(val) => {
              updateFilter("fromMonth", val);
              getDays(val, fromYear);
            }}
            disabled={!fromYear}
          />
          <Select
            allowClear
            placeholder="Kun"
            className=""
            style={{ width: 131 }}
            value={fromDay || "Kun"}
            options={monthDays}
            onChange={(val) => updateFilter("fromDay", val)}
            disabled={fromMonth !== 0 && !fromMonth}
          />
          <span>dan</span>
          <Select
            allowClear
            placeholder="Yil"
            className=""
            style={{ width: 131 }}
            options={[{ value: 2023 }, { value: 2022 }, { value: "2021" }]}
            value={toYear || "Yil"}
            onChange={(val) => updateFilter("toYear", +val)}
          />
          <Select
            allowClear
            placeholder="Oy"
            className=""
            style={{ width: 131 }}
            options={getAllMonths()}
            defaultActiveFirstOption={true}
            value={toMonth || "Oy"}
            onChange={(val) => {
              updateFilter("toMonth", +val);
              getDays(val, toYear);
            }}
            disabled={!toYear}
          />
          <Select
            allowClear
            placeholder="Kun"
            className=""
            style={{ width: 131 }}
            value={toDay || "Kun"}
            options={monthDays}
            onChange={(val) => updateFilter("toDay", +val)}
            disabled={toMonth !== 0 && !toMonth}
          />
          <span>gacha</span>
        </div>
      </div>
    </div>
  );
};
