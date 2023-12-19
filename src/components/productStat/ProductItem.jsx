export const ProductItem = ({ name }) => {
  return (
    <div className="flex justify-between rounded-[13px] py-2 px-4 shadow-[0_1px_1px_0_rgba(0,0,0,0.25)] hover:ring cursor-pointer active:scale-105">
      <div className="flex gap-4">
        <span className="font-montserrat font-semibold text-[14px]">
          {name}
        </span>
      </div>
      <div className="flex gap-4"></div>
    </div>
  );
};
