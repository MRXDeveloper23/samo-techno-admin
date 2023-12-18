import { Pagination } from "antd";
import { CustomItemRender } from "./productStat/pagination";

export const CustomPagination = ({ current, onChange, total, ...props }) => {
  return (
    <Pagination
      current={current}
      defaultPageSize={10}
      itemRender={CustomItemRender}
      onChange={onChange}
      total={total}
      {...props}
    />
  );
};
