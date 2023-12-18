import { Button, Input, Radio, Space, notification } from "antd";
import { Widget } from "../widget";
import { useRef, useState } from "react";
import { useCreateCategoryMutation } from "../../services/api.service";
import { CustomLoading } from "../../shared/loading/loading";

export const CategorySelect = ({
  categories,
  isSuccess,
  isFetching,
  refetch,
  category,
  onChange,
}) => {
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef();

  const [createCategory] = useCreateCategoryMutation();
  const addCategoryHandler = async () => {
    const categoryName = inputRef.current.input.value;
    if (categoryName) {
      const res = await createCategory({
        name: categoryName,
      });
      if (res?.data?.success) {
        notification.success({
          message: "Yangi kategoriya muvaffaqiyatli qo'shildi!",
        });
        refetch();
        setIsActive(false);
      }
      console.log(res);
    }
  };
  return (
    <Widget title={"Kategoriyani tanlang"} onClick={() => setIsActive(true)}>
      <div className="overflow-auto h-[250px]">
        {isFetching ? (
          <div className="w-full h-[200px] flex items-center justify-center">
            <CustomLoading />
          </div>
        ) : (
          <Radio.Group onChange={onChange} value={category}>
            <Space direction="vertical" className="p-4">
              {isSuccess
                ? categories?.data.map((category, i) => (
                    <Radio key={category?.id} value={i}>{`${i + 1}. ${
                      category?.name
                    }`}</Radio>
                  ))
                : ""}
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
                onClick={addCategoryHandler}
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
