export const ProductCategory = ({
  categories = [],
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap my-4">
      {categories.map((category, i) => (
        <span
          key={category?.id}
          className={`cursor-pointer items-center justify-center rounded-[13px] py-2 px-8 border-none ${
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
