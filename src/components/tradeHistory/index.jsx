import { Button, Input } from "antd";
import { TradeCard } from "./card";

import { SearchIcon } from "@/utils/icons";
import { TradeFilterGroup } from "./filterGroup";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import QueryString from "qs";
import { useGetHistoryQuery } from "../../services/api.service";
import { CustomLoading } from "../../shared/loading/loading";
import { CustomPagination } from "../customPagination";

export const TradeHistory = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [status, setStatus] = useState("BUY");
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({
    fromYear: undefined,
    fromMonth: undefined,
    fromDay: undefined,
    toYear: undefined,
    toMonth: undefined,
    toDay: undefined,
    searchString: undefined,
  });
  const { data: history, isFetching } = useGetHistoryQuery({
    status: status,
    body: {
      page: page - 1,
      size: 10,
    },
  });
  console.log(history);

  const updateFilterHandler = (key, value) => {
    setFilter((prevFilter) => {
      const updatedFilter = { ...prevFilter, [key]: value };
      navigate(`?${QueryString.stringify(updatedFilter)}`);
      return updatedFilter;
    });
  };

  const changePageHandler = (page) => {
    console.log(page);
    setPage(page);
  };

  const changeTabHandler = (value) => {
    setStatus(value);
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
      <TradeFilterGroup
        filter={filter}
        updateFilter={updateFilterHandler}
        onChangeTab={changeTabHandler}
      />
      {isFetching ? (
        <div className="w-full h-[200px] flex items-center justify-center">
          <CustomLoading />
        </div>
      ) : (
        <div className="flex flex-col gap-4 mt-8">
          {history?.data?.data.map((trade) => (
            <TradeCard
              key={trade.transactionId}
              trade={trade}
              status={"input"}
            />
          ))}
          <CustomPagination
            className="self-end mb-8 tableHeader"
            onChange={changePageHandler}
            total={history?.data?.totalPage * history?.data?.size}
            current={page}
          />
        </div>
      )}
    </div>
  );
};
