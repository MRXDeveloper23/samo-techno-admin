import { useState } from "react";
import { Container } from "../container";
import { CategorySelect } from "./categorySelect";
import { SectionSelect } from "./sectionSelect";

const sections = ["1. CPU", "2. Mother Board"];
const groups = ["1. Core i5 11 generation", "2. Core i7 12 generation"];

const ProductCreate = () => {
  const [category, setCategory] = useState(null);
  const [section, setSection] = useState(null);
  const [group, setGroup] = useState(null);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleSectionChange = (e) => setSection(e.target.value);
  const handleGroupChange = (e) => setGroup(e.target.value);
  console.log(section, group);
  return (
    <Container>
      <h1 className="mb-4 font-nunito text-2xl">Yangi mahsulot kiritish</h1>
      <div className="flex gap-4 flex-wrap">
        <CategorySelect category={category} onChange={handleCategoryChange} />
        {category ? (
          <SectionSelect
            options={sections}
            title={"Bo'limni tanlang"}
            section={section}
            onChange={handleSectionChange}
          />
        ) : (
          ""
        )}
        {section ? (
          <SectionSelect
            options={groups}
            title={"Guruhni tanlang"}
            section={group}
            onChange={handleGroupChange}
          />
        ) : (
          ""
        )}
      </div>
    </Container>
  );
};

export default ProductCreate;
