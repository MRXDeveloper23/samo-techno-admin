import { useEffect, useState } from "react";
import { Container } from "../components/container";
import { ProductCategory, ProductSection } from "../components/product";
import ProductGroup from "../components/product/group";
import { Button, Form } from "antd";
import Add from "@/assets/icons/add.svg";
import { useNavigate } from "react-router-dom";
import {
  useGetCategoriesQuery,
  useLazyGetProductGroupsQuery,
  useLazySearchProductQuery,
} from "../services/api.service";
import { CustomLoading } from "../shared/loading/loading";
import Search from "antd/es/input/Search";

export default function Product() {
  const [category, setCategory] = useState(0);
  const [selectedSection, setSelectedSection] = useState(null);
  const [groups, setGroups] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [form] = Form.useForm();

  const { data: categories, refetch, isFetching } = useGetCategoriesQuery();
  const navigate = useNavigate();
  const [getProductGroups, { isFetching: isGroupsFetching }] =
    useLazyGetProductGroupsQuery();
  const [searchProduct, { isFetching: isSearchFetching }] =
    useLazySearchProductQuery();

  const sectionClickHandler = async (parentId) => {
    setSelectedSection(parentId);
    const res = await getProductGroups(parentId, true);
    console.log(res?.data?.data);
    setGroups(res?.data?.data);
  };

  const onSearch = async (value) => {
    setIsSearching(true);
    const res = await searchProduct(value);
    setGroups(res?.data?.data);
  };
  const handleSearchInput = async (e) => {
    if (e.target.value === "") {
      setIsSearching(false);
    }
  };

  let code = "";
  let reading = false;

  document.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
      if (code.length > 10) {
        console.log("Barcode: ", code);
        setSearchTerm(code);
        form.setFieldValue("searchTerm", code);
        onSearch();
        code = "";
      }
    } else {
      code += e.key;
    }

    if (!reading) {
      reading = true;
      setTimeout(() => {
        code = "";
        reading = false;
      }, 200);
    }
  });

  useEffect(() => {
    refetch();
  }, [navigate]);

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
      <div className="my-4">
        <Form form={form} initialValues={{}}>
          <Form.Item name={"searchTerm"}>
            <Search
              loading={isSearchFetching}
              className="input-search"
              placeholder="Mahsulot nomi yoki shtrix kod"
              allowClear
              enterButton="Search"
              size="large"
              onSearch={onSearch}
              value={searchTerm}
              onChange={handleSearchInput}
            />
          </Form.Item>
        </Form>
      </div>

      {isSearching ? (
        <ProductGroup groups={groups} />
      ) : isFetching ? (
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
