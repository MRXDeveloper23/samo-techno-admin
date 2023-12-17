import { Collapse } from "antd";
import { reformProductGroups } from "./reformProductGroups";

const ProductGroup = ({ groups }) => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <section className="flex flex-col gap-4">
      {reformProductGroups(groups).map((group, i) => (
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
