import { Select } from "antd";
import { useState } from "react";
import { Search } from "./search";
import { getMonthDays } from "../../utils/getMonthDays";
import { getAllMonths } from "../../utils/getMonths";

export const FilterGroup = ({
  day,
  setDay,
  month,
  setMonth,
  year,
  setYear,
  setSearchString,
}) => {
  const [monthDays, setMonthDays] = useState([]);

  const getDays = (val) => {
    if (!year && val !== 0) {
      return;
    }
    const daysCount = getMonthDays(val, year);
    setMonthDays(daysCount);
  };

  return (
    <div className="my-4">
      <Search setSearchString={setSearchString} />
      <div className="filter-group py-[15px] flex flex-wrap justify-between items-center font-nunito">
        <div>
          <Select
            placeholder="Yil"
            className="mr-[20px]"
            style={{ width: 131 }}
            options={[{ value: "2023" }, { value: "2022" }, { value: "2021" }]}
            value={year || "Yil"}
            onChange={(val) => setYear(val)}
          />
          <Select
            placeholder="Oy"
            className="mr-[20px]"
            style={{ width: 131 }}
            options={getAllMonths()}
            defaultActiveFirstOption={true}
            value={month || "Oy"}
            onChange={(val) => {
              setMonth(val);
              getDays(val);
            }}
            disabled={!year}
          />
          <Select
            placeholder="Kun"
            className="mr-[20px]"
            style={{ width: 131 }}
            value={day || "Kun"}
            options={monthDays}
            onChange={(val) => setDay(val)}
            disabled={month !== 0 && !month}
          />
        </div>
      </div>
    </div>
  );
};
