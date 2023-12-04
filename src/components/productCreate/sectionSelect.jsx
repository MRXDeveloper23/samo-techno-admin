import { Button, Input, Radio, Space } from "antd";
import { Widget } from "../widget";
import { useState } from "react";

export const SectionSelect = ({ options, title, section, onChange }) => {
  const [isActive, setIsActive] = useState(false);
  const addCategoryHandler = () => {};
  return (
    <Widget title={title} onClick={() => setIsActive(true)}>
      <Radio.Group onChange={onChange} value={section}>
        <Space direction="vertical" className="p-4">
          {options.map((option, i) => (
            <Radio key={i} value={i + 1}>
              {option}
            </Radio>
          ))}
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
