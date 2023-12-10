import { useEffect, useState } from "react";
import { Container } from "../components/container";
import { ProductsTable, StatsWidget } from "../components/productStat";
import { FilterGroup } from "../components/productStat/filterGroup";
import qs from "qs";
import { useLocation, useNavigate } from "react-router-dom";

const StatsPage = () => {
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
      navigate(`?${qs.stringify(updatedFilter)}`);
      return updatedFilter;
    });
  };

  useEffect(() => {
    const queryParams = qs.parse(location.search, { ignoreQueryPrefix: true });
    setFilter((prev) => ({ ...prev, ...queryParams }));
  }, [location.search]);

  return (
    <Container>
      <StatsWidget />
      <FilterGroup filter={filter} updateFilter={updateFilterHandler} />
      <ProductsTable />
    </Container>
  );
};

export default StatsPage;
