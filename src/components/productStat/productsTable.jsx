import { Table } from "antd";
import { useState } from "react";
import { CustomItemRender } from "./pagination";
import { productColumns } from "./productColumns";
import { reformProductData } from "./reformProductData";

export const ProductsTable = ({ isFetching, data }) => {
  const [page, setPage] = useState(0);
  const paginationConfig = {
    showLessItems: true,
    pageSize: 10,
    total: data?.data?.count,
    itemRender: CustomItemRender,
    showSizeChanger: false,
    onChange: (page) => {
      setPage(page - 1);
      //   refetch();
    },
  };
  return (
    <Table
      loading={isFetching}
      pagination={paginationConfig}
      columns={productColumns}
      className="tableHeader"
      dataSource={reformProductData(data, page)}
      rowClassName="font-montserrat font-medium text-center text-[14px] odd:bg-row-odd even:bg-row-even mb-16"
      bordered
    />
  );
};
