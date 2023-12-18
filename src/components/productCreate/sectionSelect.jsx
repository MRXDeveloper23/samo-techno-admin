import { Button, Input, Radio, Space } from "antd";
import { Widget } from "../widget";
import { useRef } from "react";
import { CustomLoading } from "../../shared/loading/loading";

export const SectionSelect = ({
  options,
  title,
  section,
  onChange,
  onAdd,
  isActive,
  setIsActive,
  isFetching,
  onCreate,
}) => {
  const inputRef = useRef();
  return (
    <Widget title={title} onClick={onCreate}>
      <div className="overflow-auto h-[250px]">
        {isFetching ? (
          <div className="w-full h-[200px] flex items-center justify-center">
            <CustomLoading />
          </div>
        ) : (
          <Radio.Group onChange={onChange} value={section}>
            <Space direction="vertical" className="p-4">
              {options?.map((option, i) => (
                <Radio key={i} value={option?.id}>
                  {option?.title}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        )}
        {isActive ? (
          <div className="p-4">
            <Input ref={inputRef} placeholder="Nom kiriting" className="mb-4" />
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
                onClick={() => onAdd(inputRef.current.input.value)}
              >
                Ok
              </Button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </Widget>
  );
};
