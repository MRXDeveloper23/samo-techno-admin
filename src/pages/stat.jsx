import { Container } from "../components/container";
import { ProductsTable, StatsWidget } from "../components/productStat";
import { FilterGroup } from "../components/productStat/filterGroup";

const StatsPage = () => {
  return (
    <Container>
      <StatsWidget />
      <FilterGroup />
      <ProductsTable />
    </Container>
  );
};

export default StatsPage;
