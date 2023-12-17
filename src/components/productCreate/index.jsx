import { useState } from "react";
import { Container } from "../container";
import { CategorySelect } from "./categorySelect";
import { SectionSelect } from "./sectionSelect";
import { ProductInput } from "./productInput";
import {
  useCreateGroupMutation,
  useCreateProductMutation,
  useCreateSectionMutation,
  useGetCategoriesQuery,
  useLazyGetSectionGroupsQuery,
} from "../../services/api.service";
import { notification } from "antd";

const ProductCreate = () => {
  const [category, setCategory] = useState(null);
  const [section, setSection] = useState(null);
  const [group, setGroup] = useState(null);
  const [productTitle, setProductTitle] = useState("");
  const { data: categories, refetch, isSuccess } = useGetCategoriesQuery();
  const [getSectionGroups, { data: groups }] = useLazyGetSectionGroupsQuery();
  const [createSection] = useCreateSectionMutation();
  const [createGroup] = useCreateGroupMutation();
  const [createProduct] = useCreateProductMutation();

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSection(null);
    setGroup(null);
  };
  const handleSectionChange = async (e) => {
    setSection(e.target.value);
    await getSectionGroups(e.target.value);
  };
  const handleGroupChange = (e) => setGroup(e.target.value);
  const handleAddSection = async (sectionName) => {
    if (sectionName) {
      const res = await createSection({
        categoryId: categories?.data[category]?.id,
        section: {
          name: sectionName,
        },
      });
      if (res?.data?.success) {
        notification.success({
          message: "Yangi bo'lim muvaffaqiyatli qo'shildi!",
        });
        refetch();
      }
    }
  };
  const handleAddGroup = async (groupName) => {
    if (groupName) {
      const res = await createGroup({
        categoryId: categories?.data[category]?.id,
        group: {
          id: section,
          name: groupName,
        },
      });
      if (res?.data?.success) {
        notification.success({
          message: "Yangi guruh muvaffaqiyatli qo'shildi!",
        });
        await getSectionGroups(section);
      }
    }
  };
  const handleCreateProduct = async (product) => {
    console.log("here");
    if (group) {
      const res = await createProduct({
        ...product,
        productGroupId: group,
      });
      if (res?.data?.success) {
        notification.success({
          message: "Yangi mahsulot muvaffaqiyatli qo'shildi!",
        });
      }
    }
  };

  return (
    <Container>
      <h1 className="mb-4 font-nunito text-2xl">Yangi mahsulot kiritish</h1>
      <div className="flex gap-4 flex-wrap">
        <CategorySelect
          categories={categories}
          isSuccess={isSuccess}
          refetch={refetch}
          category={category}
          onChange={handleCategoryChange}
        />
        {category !== null ? (
          <SectionSelect
            options={categories?.data[category]?.children}
            title={"Bo'limni tanlang"}
            section={section}
            onChange={handleSectionChange}
            onAdd={handleAddSection}
          />
        ) : (
          ""
        )}
        {section ? (
          <SectionSelect
            options={groups?.data}
            title={"Guruhni tanlang"}
            section={group}
            onChange={handleGroupChange}
            onAdd={handleAddGroup}
          />
        ) : (
          ""
        )}
        {group ? (
          <ProductInput
            value={productTitle}
            onChange={(value) => setProductTitle(value)}
            onCreateProduct={handleCreateProduct}
          />
        ) : (
          ""
        )}
      </div>
    </Container>
  );
};

export default ProductCreate;
