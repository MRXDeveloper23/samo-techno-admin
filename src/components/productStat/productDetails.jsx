import { useState } from "react";
import { MoreOutlined } from "@ant-design/icons";
import { Popover } from "antd";

const ProductDetails = ({ user, date, partner }) => {
  const [isActive, setIsActive] = useState(false);
  const content = (
    <div className="text-base p-4">
      <p className="flex gap-4 justify-between">
        <span className="font-semibold">Tekshirgan shaxs:</span>
        <span>{user}</span>
      </p>
      <p className="flex justify-between">
        <span className="font-semibold">Sana:</span>
        <span className="">{date}</span>
      </p>
      <p className="flex justify-between">
        <span className="font-semibold">Homiy:</span>
        <span>{partner}</span>
      </p>
    </div>
  );
  return (
    <Popover content={content} title="" trigger="hover" placement="topRight">
      <div
        className={`flex justify-center items-center rounded-full hover:bg-white w-8 h-8 mx-auto`}
        onClick={() => setIsActive(!isActive)}
      >
        <MoreOutlined style={{ fontSize: "30px", color: "gray" }} />
      </div>
    </Popover>
  );
};

export default ProductDetails;
