import { useState } from "react";
import { Container } from "../components/container";
import { ProductCategory, ProductSection } from "../components/product";
import ProductGroup from "../components/product/group";
import { Button } from "antd";
import Add from "@/assets/icons/add.svg";
import { useNavigate } from "react-router-dom";

const sections = ["CPU", "CPU", "CPU", "CPU"];

export default function Product() {
  const [category, setCategory] = useState("qismlar");
  const navigate = useNavigate();
  return (
    <Container>
      <h1 className="text-[28px] font-nunito font-bold leading-8">
        Mahsulotlar
      </h1>
      <ProductCategory
        category={category}
        onCategoryChange={(value) => setCategory(value)}
      />
      <div className="flex gap-8">
        <div className="flex flex-1 flex-col gap-4">
          {sections.map((item, i) => (
            <ProductSection key={i} name={item} />
          ))}
          <div className="flex justify-end">
            <Button
              type="primary"
              icon={<img src={Add} alt="add" />}
              onClick={() => navigate("/product/create")}
              className="flex items-center rounded-2xl bg-primary px-6 py-[20px] font-montserrat text-[18px] font-medium leading-[21px]"
            >
              {"Qo‘shish"}
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <ProductGroup />
        </div>
      </div>
    </Container>
  );
}
