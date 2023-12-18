import { useRef, useState } from "react";
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
  const nameRef = useRef();
  const descRef = useRef();
  const [isSectionActive, setIsSectionActive] = useState(false);
  const [isGroupActive, setIsGroupActive] = useState(false);
  const {
    data: categories,
    refetch,
    isSuccess,
    isFetching: isCategoriesFetching,
  } = useGetCategoriesQuery();
  const [getSectionGroups, { data: groups, isFetching: isGroupsFetching }] =
    useLazyGetSectionGroupsQuery();
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
        setIsSectionActive(false);
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
        setIsGroupActive(false);
        await getSectionGroups(section);
      }
    }
  };
  const handleCreateProduct = async () => {
    if (group) {
      const res = await createProduct({
        name: nameRef.current.input.value,
        description: descRef.current.resizableTextArea.textArea.value,
        productGroupId: group,
      });
      if (res?.data?.success) {
        notification.success({
          message: "Yangi mahsulot muvaffaqiyatli qo'shildi!",
        });
        nameRef.current.input.value = "";
        descRef.current.resizableTextArea.textArea.value = "";
      }
    }
  };

  return (
    <Container>
      <h1 className="mb-4 font-nunito text-2xl">Yangi mahsulot kiritish</h1>
      <div className="flex gap-x-4 gap-y-12 flex-wrap">
        <CategorySelect
          categories={categories}
          isSuccess={isSuccess}
          isFetching={isCategoriesFetching}
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
            isActive={isSectionActive}
            setIsActive={setIsSectionActive}
            onCreate={() => {
              setIsSectionActive(true);
              setSection(null);
              setGroup(null);
            }}
          />
        ) : (
          ""
        )}
        {section !== null ? (
          <SectionSelect
            options={groups?.data}
            title={"Guruhni tanlang"}
            section={group}
            onChange={handleGroupChange}
            onAdd={handleAddGroup}
            isActive={isGroupActive}
            setIsActive={setIsGroupActive}
            isFetching={isGroupsFetching}
            onCreate={() => {
              setIsGroupActive(true);
              setGroup(null);
            }}
          />
        ) : (
          ""
        )}
        {group !== null ? (
          <ProductInput
            nameRef={nameRef}
            descRef={descRef}
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
