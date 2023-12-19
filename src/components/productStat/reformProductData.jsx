import ProductDetails from "./productDetails";

export const reformProductData = (products, page = 0) => {
  const data = [];
  for (let i = 0; i < products?.length; i++) {
    data.push({
      key: i + 1 + page * 10,
      id: products[i]?.id,
      name: products[i]?.fio,
      phone: products[i]?.phone,
      productName: products[i]?.productName,
      quantity: products[i]?.quantity,
      cost: products[i]?.perPrice,
      totalSum: products[i]?.totPrice,
      date: products[i]?.createdDate,
      status: <span className="text-[#19A037]">{"O'tkazilgan"}</span>,
      more: (
        <ProductDetails
          user={products[i]?.checkedPersonName}
          date={products[i]?.checkedDate}
          partner={products[i]?.tradePlaceName}
        />
      ),
    });
  }
  return data;
};
