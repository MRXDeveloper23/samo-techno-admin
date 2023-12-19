import { Collapse } from "antd";
import { reformProductCollapse } from "./reformProductCollapse";
import { useLazyGetInProductsAllQuery } from "../../services/api.service";
import { useState } from "react";

const SectionCollapse = ({ sections }) => {
  const [getInProducts, { data }] = useLazyGetInProductsAllQuery();
  const [key, setKey] = useState([]);
  const onChange = async (key) => {
    setKey(key);
    if (key.length > 0) {
      await getInProducts(key[0], true);
    }
  };
  //   console.log(data);

  return (
    <section className="flex flex-col gap-4">
      {reformProductCollapse(sections, data?.data, key).map((section) => (
        <>
          <Collapse
            accordion={false}
            className="custom-collapse"
            key={section?.key}
            collapsible="header"
            items={[section]}
            onChange={onChange}
          ></Collapse>
        </>
      ))}
    </section>
  );
};

export default SectionCollapse;
