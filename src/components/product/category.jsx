export const ProductCategory = ({
  categories = [],
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex h-[48px] flex-1 rounded-[13px] border my-4">
      {categories.map((category, i) => (
        <span
          key={category?.id}
          className={`flex flex-1 cursor-pointer items-center justify-center rounded-[13px] border-none ${
            i === selectedCategory ? "bg-primary text-white" : ""
          }`}
          onClick={() => onCategoryChange(i)}
        >
          {category?.name}
        </span>
      ))}
    </div>
  );
};
