import { useState } from "react";
import { Container } from "../components/container";
import { ProductCategory, ProductSection } from "../components/product";
import ProductGroup from "../components/product/group";
import { Button } from "antd";
import Add from "@/assets/icons/add.svg";
import { useNavigate } from "react-router-dom";
import {
  useGetCategoriesQuery,
  useLazyGetProductGroupsQuery,
} from "../services/api.service";
import { CustomLoading } from "../shared/loading/loading";

export default function Product() {
  const [category, setCategory] = useState(1);
  const [selectedSection, setSelectedSection] = useState(null);
  const [groups, setGroups] = useState([]);
  const navigate = useNavigate();
  const { data: categories, isFetching } = useGetCategoriesQuery();
  const [getProductGroups, { isFetching: isGroupsFetching }] =
    useLazyGetProductGroupsQuery();

  const sectionClickHandler = async (parentId) => {
    setSelectedSection(parentId);
    const res = await getProductGroups(parentId, true);
    console.log(res?.data?.data);
    setGroups(res?.data?.data);
  };
  return (
    <Container>
      <div className="flex justify-between">
        <h1 className="text-[28px] font-nunito font-bold leading-8">
          Mahsulotlar
        </h1>
        <Button
          type="primary"
          icon={<img src={Add} alt="add" />}
          onClick={() => navigate("/product/create")}
          className="flex items-center rounded-2xl bg-primary px-6 py-[20px] font-montserrat text-[18px] font-medium leading-[21px]"
        >
          {"Qo‘shish"}
        </Button>
      </div>

      {isFetching ? (
        <CustomLoading />
      ) : (
        <>
          <ProductCategory
            categories={categories?.data}
            selectedCategory={category}
            onCategoryChange={(value) => setCategory(value)}
          />
          <div className="flex gap-8">
            <div className="flex flex-1 flex-col gap-4">
              {categories?.data &&
                categories?.data[category]?.children.map((section) => (
                  <ProductSection
                    sections={categories?.data[category]}
                    section={selectedSection}
                    key={section?.id}
                    id={section?.id}
                    name={section?.title}
                    image={section?.imageUrl}
                    onSectionClick={sectionClickHandler}
                  />
                ))}
            </div>

            <div className="flex-1">
              {isGroupsFetching ? (
                <div className="w-full h-[200px] flex items-center justify-center">
                  <CustomLoading />
                </div>
              ) : (
                <ProductGroup groups={groups} />
              )}
            </div>
          </div>
        </>
      )}
    </Container>
  );
}
