import { Input, Space } from "antd";
import { Widget } from "../widget";

export const ProductInput = ({ nameRef, descRef, onCreateProduct }) => {
  return (
    <Widget
      title={"Mahsulotni nomini kiriting"}
      btnText="Saqlash"
      btnStyles={"bg-[#00FF0A]"}
      onClick={onCreateProduct}
    >
      <Space direction="vertical" className="w-full p-4">
        <Input
          ref={nameRef}
          className=""
          placeholder="Yangi mahsulot nomini kiriting"
        />
        <Input.TextArea ref={descRef} rows={4} placeholder="Mahsulot tavsifi" />
      </Space>
    </Widget>
  );
};
