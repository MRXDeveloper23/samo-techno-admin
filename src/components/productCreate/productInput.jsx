import { Input, Space } from "antd";
import { Widget } from "../widget";
import { useRef } from "react";

export const ProductInput = ({ value, onChange, onCreateProduct }) => {
  const nameRef = useRef();
  const descRef = useRef();

  return (
    <Widget
      title={"Mahsulotni nomini kiriting"}
      btnText="Saqlash"
      btnStyles={"bg-[#00FF0A]"}
      onClick={() =>
        onCreateProduct({
          name: nameRef.current.input.value,
          description: descRef.current.resizableTextArea.textArea.value,
        })
      }
    >
      <Space direction="vertical" className="w-full p-4">
        <Input
          ref={nameRef}
          className=""
          defaultValue={value}
          placeholder="Yangi mahsulot nomini kiriting"
          onChange={onChange}
        />
        <Input.TextArea ref={descRef} rows={4} placeholder="Mahsulot tavsifi" />
      </Space>
    </Widget>
  );
};
