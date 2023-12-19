export const reformProductCollapse = (section = [], products, selectedKey) => {
  const data = [];
  for (let i = 0; i < section?.length; i++) {
    if (+selectedKey[0] === +section[i]?.id) {
      data.push({
        key: section[i]?.id,
        label: (
          <div className="w-full flex justify-between">
            <div className="flex gap-4">
              <span className="font-montserrat font-medium text-[14px]">
                {section[i]?.title}
              </span>
            </div>
            <div className="flex gap-4"></div>
          </div>
        ),
        children: (
          <div className="flex flex-col gap-2">
            {products?.length === 0 ? "Mahsulotlar mavjud emas!" : ""}
            {products?.map((product, idx) => {
              return (
                <div key={idx}>
                  <p>{product?.name}</p>
                  <p>Umumiy soni: {product?.totalNumber}</p>
                  <p>Umumiy narxi: {product?.totalPrice} $</p>
                  {product?.children?.map((item, i) => {
                    return (
                      <div key={i} className="flex justify-between">
                        <p>{item?.name}</p>
                        <div className="flex gap-4">
                          <span>{item?.price} $</span>
                          <span>|</span>
                          <span>{item?.quantity}</span>
                        </div>
                      </div>
                    );
                  })}
                  <hr />
                </div>
              );
            })}
          </div>
        ),
      });
    } else {
      data.push({
        key: section[i]?.id,
        label: (
          <div className="w-full flex justify-between">
            <div className="flex gap-4">
              <span className="font-montserrat font-medium text-[14px]">
                {section[i]?.title}
              </span>
            </div>
            <div className="flex gap-4"></div>
          </div>
        ),
      });
    }
  }
  return data;
};
