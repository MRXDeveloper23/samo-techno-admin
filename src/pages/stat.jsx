import { useEffect, useState } from "react";
import { Container } from "../components/container";
import { ProductsTable, StatsWidget } from "../components/productStat";
import { FilterGroup } from "../components/productStat/filterGroup";
import qs from "qs";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetCardDetailsQuery } from "../services/api.service";
import { CustomTabs } from "../components/customTabs";
import { TotalStat } from "../components/productStat/totalStat";

const tabs = [
  {
    key: "list",
    label: "List",
  },
  {
    key: "umumiy",
    label: "Umumiy",
  },
];

const StatsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [tab, setTab] = useState("list");
  const queryParams = qs.parse(location.search, { ignoreQueryPrefix: true });
  const [filter, setFilter] = useState({
    fromYear: queryParams.fromYear,
    fromMonth: queryParams.fromMonth,
    fromDay: queryParams.fromDay,
    toYear: queryParams.toYear,
    toMonth: queryParams.toMonth,
    toDay: queryParams.toDay,
    // searchString: queryParams.searchString,
    // status: queryParams.status,
  });

  const {
    data: cardDetails,
    isFetching,
    refetch,
  } = useGetCardDetailsQuery({
    ...queryParams,
    page: page,
    size: 10,
  });

  const updateFilterHandler = (key, value) => {
    setFilter((prevFilter) => {
      const updatedFilter = { ...prevFilter, [key]: value };
      navigate(`?${qs.stringify(updatedFilter)}`);
      return updatedFilter;
    });
  };

  useEffect(() => {
    const queryParams = qs.parse(location.search, { ignoreQueryPrefix: true });
    setFilter((prev) => ({ ...prev, ...queryParams }));
  }, [location.search]);

  const changeTabHandler = (value) => {
    console.log(value);
    setTab(value);
  };

  return (
    <Container>
      <CustomTabs
        classes="w-full mb-4"
        panes={tabs}
        onChangeTab={changeTabHandler}
        tabBarClasses={
          "flex items-center justify-center w-[90px] h-[32px] gap-2 text-center bg-[#D9E3F0] border ring-white/50 text-primary border-white/20 font-normal font-nunito text-[14px]"
        }
        activeTabBarClasses={"!bg-primary !text-white"}
      />
      {tab === "list" ? (
        <>
          <StatsWidget totalSums={cardDetails?.data?.totalSums} />
          <FilterGroup filter={filter} updateFilter={updateFilterHandler} />
          <ProductsTable
            data={cardDetails?.data}
            isFetching={isFetching}
            refetch={refetch}
            setPage={setPage}
            page={page}
          />
        </>
      ) : (
        <TotalStat />
      )}
    </Container>
  );
};

export default StatsPage;
