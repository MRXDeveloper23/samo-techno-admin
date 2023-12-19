import { useState } from "react";
import { ProductCategory } from "../product/category";
import { useGetCategoriesQuery } from "../../services/api.service";
import { CustomLoading } from "../../shared/loading/loading";
import ProductCollapse from "./productCollapse";

export const TotalStat = () => {
  const [category, setCategory] = useState(0);
  const { data: categories, isFetching } = useGetCategoriesQuery();

  return isFetching ? (
    <CustomLoading />
  ) : (
    <>
      <ProductCategory
        categories={categories?.data}
        selectedCategory={category}
        onCategoryChange={(value) => setCategory(value)}
      />
      <div className="flex flex-col gap-4">
        <ProductCollapse sections={categories?.data[category]?.children} />
      </div>
    </>
  );
};
