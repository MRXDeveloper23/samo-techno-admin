import { ProductItem } from "./item";

import EditIcon from "@/assets/icons/edit.svg";
import DeleteIcon from "@/assets/icons/delete.svg";

export const reformProductGroups = (groups = []) => {
  const data = [];
  for (let i = 0; i < groups?.length; i++) {
    data.push({
      key: groups[i]?.id,
      label: (
        <div className="w-full flex justify-between">
          <div className="flex gap-4">
            <span className="font-montserrat font-medium text-[14px]">
              {groups[i]?.name}
            </span>
          </div>
          <div className="flex gap-4">
            <img src={EditIcon} alt="" />
            <img src={DeleteIcon} alt="" />
          </div>
        </div>
      ),
      children: (
        <div className="flex flex-col gap-2">
          {groups[i]?.children?.length === 0 ? "Mahsulotlar mavjud emas!" : ""}
          {groups[i]?.children.map((groupItem, idx) => {
            return <ProductItem key={idx} name={groupItem?.name} />;
          })}
        </div>
      ),
    });
  }
  return data;
};
