import { CheckCircleTwoTone, CloseCircleFilled } from "@ant-design/icons";
import CustomUser from "@/assets/icons/custom-user.svg";

export const TradeCard = ({ trade }) => {
  let content;
  if (trade?.tradeStatus === "BUY") {
    content = (
      <span className="w-[140px] px-8 py-2 rounded-2xl bg-green-500 text-center text-white text-[10px] font-semibold">
        Sotib olindi
      </span>
    );
  } else if (trade?.tradeStatus === "SELL") {
    content = (
      <span className="w-[140px] px-8 py-2 rounded-2xl bg-yellow-500 text-center text-white text-[10px] font-semibold">
        Sotildi
      </span>
    );
  }
  return (
    <div className="flex flex-col gap-4 p-4 font-montserrat rounded-[8px] shadow-[0_0_8px_0_rgba(0,0,0,0.25)]">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <span>
            <img src={CustomUser} alt="user" />
          </span>
          <span className="text-[24px]">{trade?.fio || ""}</span>
        </div>
        {trade?.status === "REJECTED" ? (
          <CloseCircleFilled className="text-red-500 text-2xl cursor-pointer" />
        ) : (
          <CheckCircleTwoTone
            twoToneColor={"#13CD13"}
            className="text-2xl cursor-pointer"
          />
        )}
      </div>
      <hr />
      <div className="flex justify-between">
        <span className="text-[20px] font-medium text-black/60">
          Qayerdan olib kelindi
        </span>
        <span className="text-[20px] font-semibold">{trade?.tradePlace}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-[20px] font-medium text-black/60">Holat</span>
        {content}
      </div>
      <div className="flex justify-between">
        <span className="text-[20px] font-medium text-black/60">
          Ketgan sana
        </span>
        <span className="text-[20px] font-semibold">{trade?.createdDate}</span>
      </div>
    </div>
  );
};
