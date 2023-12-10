import ProductDetails from "./productDetails";

export const reformProductData = (_, page = 0) => {
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      key: i + 1 + page * 10,
      name: "Mamasoliev Khurmatillo",
      phone: "+998973462512",
      productName: "CORE i5 9 generation",
      quantity: 43,
      cost: 1,
      totalSum: 43,
      date: "30.11.2023  12:14:16",
      status: <span className="text-[#19A037]">{"O'tkazilgan"}</span>,
      more: (
        <ProductDetails
          user={"Mamasoliev Khurmatillo"}
          date={"30.11.2023  12:14:16"}
          partner={"Abu-Sahiy"}
        />
      ),
    });
  }
  return data;
};
