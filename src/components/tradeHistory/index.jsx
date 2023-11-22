import { Button, Input } from "antd";
import { TradeCard } from "./card";

import { SearchIcon } from "@/utils/icons";

export const TradeHistory = () => {
  return (
    <div>
      <h1 className="text-[28px] font-nunito font-bold leading-8">
        Kirim chiqim tarixi
      </h1>
      <div className="flex gap-4 my-4">
        <Input
          placeholder="ID yoki telefon nomer"
          className="custom-input h-[45px] rounded-[16px] bg-[#eaf0ff]/20"
        />
        <Button
          icon={<SearchIcon color="white" />}
          type="primary"
          className="flex items-center justify-center w-[130px] h-[45px] bg-primary rounded-[25px]"
        >
          Qidirish
        </Button>
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <TradeCard status={"reject"} />
        <TradeCard status={"output"} />
        <TradeCard status={"input"} />
      </div>
    </div>
  );
};
