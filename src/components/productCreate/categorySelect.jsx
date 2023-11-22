import { Radio, Space } from "antd";
import { Widget } from "../widget";

export const CategorySelect = ({ category, onChange }) => {
  return (
    <Widget title={"Kategoriyani tanlang"}>
      <Radio.Group onChange={onChange} value={category}>
        <Space direction="vertical" className="p-4">
          <Radio value={1}>1. Tayyor</Radio>
          <Radio value={2}>2. Qismlar</Radio>
        </Space>
      </Radio.Group>
    </Widget>
  );
};
