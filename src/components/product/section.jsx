import BarcodeIcon from "@/assets/icons/barcode.svg";
import EditIcon from "@/assets/icons/edit.svg";
import DeleteIcon from "@/assets/icons/delete.svg";

export const ProductSection = ({ name }) => {
  return (
    <div className="flex justify-between rounded-[13px] p-4 shadow-[0_2px_4px_0_rgba(0,0,0,0.25)] hover:ring cursor-pointer active:bg-primary/20">
      <div className="flex gap-4">
        <img src={BarcodeIcon} alt="barcode" />
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
