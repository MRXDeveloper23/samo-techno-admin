export const ProductCategory = ({ category, onCategoryChange }) => {
  return (
    <div className="flex h-[48px] flex-1 rounded-[13px] border my-4 w-[300px]">
      <span
        className={`flex flex-1 cursor-pointer items-center justify-center rounded-[13px] border-none ${
          category === "tayyor" ? "bg-primary text-white" : ""
        }`}
        onClick={() => onCategoryChange("tayyor")}
      >
        Tayyor
      </span>
      <span
        className={`flex flex-1 cursor-pointer items-center justify-center rounded-[13px] border-none ${
          category === "qismlar" ? "bg-primary text-white" : ""
        }`}
        onClick={() => onCategoryChange("qismlar")}
      >
        Qismlar
      </span>
    </div>
  );
};
