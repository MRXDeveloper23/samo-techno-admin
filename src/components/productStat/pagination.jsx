import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { PaginationPageItem } from "./paginationPageItem";

export const CustomItemRender = (pageNum, type, originalElement) => {
  const btnStyles =
    "border-[1px] border-[#CDD1DD] rounded-[13px] bg-button-gray w-[155px] h-[39px] flex gap-4 justify-center items-center hover:text-main-blue";
  if (type === "prev") {
    return (
      <div className={btnStyles}>
        <LeftOutlined />
        Oldingi
      </div>
    );
  }
  if (type === "next") {
    return (
      <div className={btnStyles}>
        Keyingi
        <RightOutlined />
      </div>
    );
  }
  if (type === "page") {
    return <PaginationPageItem type={type} pageNum={pageNum} />;
  }
  return originalElement;
};
