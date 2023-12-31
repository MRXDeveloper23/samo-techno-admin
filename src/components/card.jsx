import { useNavigate } from "react-router-dom";

const cardTypes = {
  "Omborda mavjud mahsulotlar": "PRESENT",
  "Sotib olingan": "BOUGHT",
  Sotilgan: "SOLD",
};

export const Card = ({ title, cardStats }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F6F6F7] rounded-[26px] w-[280px] h-[327px]">
      <p
        className="px-[20px] pt-[18px] pb-[4px] underline text-[#C81515] cursor-pointer"
        onClick={() => navigate(`/stat?cardType=${cardTypes[title]}`)}
      >
        {title}
      </p>
      <hr className="border-b-[3px] h-[1px] border-dashed" />
      {/* 
      <RangePicker
        className="mx-4 h-[23px] text-[14px] font-nunito text-[#696969] bg-[#EAF0FF] rounded-[13px] custom-range-picker"
        placeholder={["Sanadan", "Sanagacha"]}
      /> */}
      <div className="mx-4 my-4">
        <span className="font-normal text-[14px] font-sans text-[#777B82]">
          Jami mahsulotlar soni
        </span>
        <br />
        <span className="text-[#4732CD] font-sans text-[19px] font-bold">
          {cardStats?.totalProducts || 0}
        </span>
        <br />
        <span className="font-normal text-[14px] font-sans text-[#777B82]">
          Jami mahsulotlar summasi
        </span>
        <br />
        <span className="text-[#4732CD] font-sans text-[19px] font-bold">
          {cardStats?.totalPrice || 0}
        </span>
      </div>
    </div>
  );
};
