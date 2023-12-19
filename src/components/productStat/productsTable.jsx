import { Table } from "antd";
import { CustomItemRender } from "./pagination";
import { productColumns } from "./productColumns";
import { reformProductData } from "./reformProductData";

export const ProductsTable = ({ isFetching, data, refetch, setPage, page }) => {
  const paginationConfig = {
    showLessItems: true,
    pageSize: 10,
    total: data?.totalElements,
    itemRender: CustomItemRender,
    showSizeChanger: false,
    onChange: (page) => {
      setPage(page - 1);
      refetch();
    },
  };
  return (
    <Table
      loading={isFetching}
      pagination={paginationConfig}
      columns={productColumns}
      className="tableHeader"
      dataSource={reformProductData(data?.data, page)}
      rowClassName="font-montserrat font-medium text-center text-[14px] odd:bg-row-odd even:bg-row-even mb-16"
      bordered
    />
  );
};
