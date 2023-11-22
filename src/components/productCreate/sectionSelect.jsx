import { Radio, Space } from "antd";
import { Widget } from "../widget";

export const SectionSelect = ({ options, title, section, onChange }) => {
  return (
    <Widget title={title}>
      <Radio.Group onChange={onChange} value={section}>
        <Space direction="vertical" className="p-4">
          {options.map((option, i) => (
            <Radio key={i} value={i + 1}>
              {option}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    </Widget>
  );
};
