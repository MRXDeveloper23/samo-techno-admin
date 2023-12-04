import { Input, Space } from "antd";
import { Widget } from "../widget";

export const ProductInput = ({ value, onChange }) => {
  return (
    <Widget
      title={"Mahsulotni nomini kiriting"}
      btnText="Saqlash"
      btnStyles={"bg-[#00FF0A]"}
      onClick={() => {}}
    >
      <Space direction="vertical" className="w-full p-4">
        <Input
          className=""
          defaultValue={value}
          placeholder="Yangi mahsulot nomini kiriting"
          onChange={onChange}
        />
      </Space>
    </Widget>
  );
};
