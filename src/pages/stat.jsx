import { Container } from "../components/container";
import { ProductsTable, StatsWidget } from "../components/productStat";

const StatsPage = () => {
  return (
    <Container>
      <StatsWidget />
      <ProductsTable />
    </Container>
  );
};

export default StatsPage;
