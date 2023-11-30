import { Collapse } from "antd";
import { ProductItem } from "./item";
import EditIcon from "@/assets/icons/edit.svg";
import DeleteIcon from "@/assets/icons/delete.svg";

const products = [
  "1-Core i3 11 generation",
  "1-Core i3 11 generation",
  "1-Core i3 11 generation",
  "1-Core i3 11 generation",
];

const groups = [
  {
    key: "1",
    label: (
      <div className="w-full flex justify-between">
        <div className="flex gap-4">
          <span className="font-montserrat font-medium text-[14px]">
            Core i3 11 generation
          </span>
        </div>
        <div className="flex gap-4">
          <img src={EditIcon} alt="" />
          <img src={DeleteIcon} alt="" />
        </div>
      </div>
    ),
    children: (
      <div className="flex flex-col gap-2">
        {products.map((item, i) => (
          <ProductItem key={i} name={products[i]} />
        ))}
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div className="w-full flex justify-between">
        <div className="flex gap-4">
          <span className="font-montserrat font-medium text-[14px]">
            Core i3 11 generation
          </span>
        </div>
        <div className="flex gap-4">
          <img src={EditIcon} alt="" />
          <img src={DeleteIcon} alt="" />
        </div>
      </div>
    ),
    children: (
      <div className="flex flex-col gap-2">
        {products.map((item, i) => (
          <ProductItem key={i} name={products[i]} />
        ))}
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <div className="w-full flex justify-between">
        <div className="flex gap-4">
          <span className="font-montserrat font-medium text-[14px]">
            Core i3 11 generation
          </span>
        </div>
        <div className="flex gap-4">
          <img src={EditIcon} alt="" />
          <img src={DeleteIcon} alt="" />
        </div>
      </div>
    ),
    children: (
      <div className="flex flex-col gap-2">
        {products.map((item, i) => (
          <ProductItem key={i} name={products[i]} />
        ))}
      </div>
    ),
  },
  {
    key: "4",
    label: (
      <div className="w-full flex justify-between">
        <div className="flex gap-4">
          <span className="font-montserrat font-medium text-[14px]">
            Core i3 11 generation
          </span>
        </div>
        <div className="flex gap-4">
          <img src={EditIcon} alt="" />
          <img src={DeleteIcon} alt="" />
        </div>
      </div>
    ),
    children: (
      <div className="flex flex-col gap-2">
        {products.map((item, i) => (
          <ProductItem key={i} name={products[i]} />
        ))}
      </div>
    ),
  },
];

const ProductGroup = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <section className="flex flex-col gap-4">
      {groups.map((group, i) => (
        <Collapse
          className="custom-collapse"
          key={i}
          collapsible="header"
          items={[group]}
          onChange={onChange}
        />
      ))}
    </section>
  );
};

export default ProductGroup;
