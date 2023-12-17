import EditIcon from "@/assets/icons/edit.svg";
import DeleteIcon from "@/assets/icons/delete.svg";

export const ProductSection = ({
  id,
  section,
  name,
  image,
  onSectionClick,
}) => {
  return (
    <div
      onClick={() => onSectionClick(id)}
      className={`flex justify-between rounded-[13px] p-4 shadow-[0_2px_4px_0_rgba(0,0,0,0.25)] hover:ring cursor-pointer active:bg-primary/20 ${
        section === id ? "bg-primary/20" : ""
      }`}
    >
      <div className="flex gap-4">
        <img src={image} alt="" width={24} height={24} />
        <span className="font-montserrat font-semibold text-[14px]">
          {name}
        </span>
      </div>
      <div className="flex gap-4">
        <img src={EditIcon} alt="" />
        <img src={DeleteIcon} alt="" />
      </div>
    </div>
  );
};
