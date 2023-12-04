import { Button, Input, Radio, Space } from "antd";
import { Widget } from "../widget";
import { useState } from "react";

export const CategorySelect = ({ category, onChange }) => {
  const [isActive, setIsActive] = useState(false);
  const addCategoryHandler = () => {};
  return (
    <Widget title={"Kategoriyani tanlang"} onClick={() => setIsActive(true)}>
      <Radio.Group onChange={onChange} value={category}>
        <Space direction="vertical" className="p-4">
          <Radio value={1}>1. Tayyor</Radio>
          <Radio value={2}>2. Qismlar</Radio>
        </Space>
      </Radio.Group>
      {isActive ? (
        <div className="p-4">
          <Input placeholder="Nom kiriting" className="mb-4" />
          <div className="flex gap-[2px] justify-end">
            <Button
              className="bg-red-500 hover:bg-red-400 hover:!text-white text-white rounded-2xl w-[80px]"
              onClick={() => setIsActive(false)}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              className="bg-primary rounded-2xl w-[80px]"
              onClick={addCategoryHandler}
            >
              Ok
            </Button>
          </div>
        </div>
      ) : (
        ""
      )}
    </Widget>
  );
};
