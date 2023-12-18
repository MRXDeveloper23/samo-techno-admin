import { Button, Input } from "antd";
import { TradeCard } from "./card";

import { SearchIcon } from "@/utils/icons";
import { TradeFilterGroup } from "./filterGroup";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import QueryString from "qs";

export const TradeHistory = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filter, setFilter] = useState({
    fromYear: undefined,
    fromMonth: undefined,
    fromDay: undefined,
    toYear: undefined,
    toMonth: undefined,
    toDay: undefined,
    searchString: undefined,
  });

  const updateFilterHandler = (key, value) => {
    setFilter((prevFilter) => {
      const updatedFilter = { ...prevFilter, [key]: value };
      navigate(`?${QueryString.stringify(updatedFilter)}`);
      return updatedFilter;
    });
  };

  useEffect(() => {
    const queryParams = QueryString.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    setFilter((prev) => ({ ...prev, ...queryParams }));
  }, [location.search]);
  return (
    <div>
      <h1 className="text-[28px] font-nunito font-bold leading-8">
        Kirim chiqim tarixi
      </h1>
      <div className="flex gap-4 my-4">
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
      <TradeFilterGroup filter={filter} updateFilter={updateFilterHandler} />
      <div className="flex flex-col gap-4 mt-8">
        <TradeCard status={"reject"} />
        <TradeCard status={"output"} />
        <TradeCard status={"input"} />
      </div>
    </div>
  );
};
