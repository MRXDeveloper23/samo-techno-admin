import ReloadSvg from "@/assets/icons/reload.svg";

export const StatsWidget = () => {
  //   const { year, month, day, module } = filter;

  return (
    <div className="stats-widget__wrap w-full py-[15px] rounded-[20px] border bg-white">
      <div className="stats-widget__inner flex flex-wrap bg-white rounded-[20px]">
        <div className="stats-widget__head pt-[15px] w-full flex justify-between items-center border-b-[2px] border-b-[#E9E9E9]">
          <h3 className="text-2xl font-medium ml-[30px]">
            Balans haqida umumiy ma’lumot{" "}
            <span className="text-[#2FAE5A]">(Faol) </span>
          </h3>
          <div className="active-bar flex mr-[10px] pb-[7px]">
            <img
              src={ReloadSvg}
              alt="reload data"
              className="cursor-pointer mr-[10px] active:opacity-90"
            />
          </div>
        </div>
        <div className="stats-widget__body flex w-full">
          <div className="body-item w-1/2 text-center pb-[30px] pt-[40px]">
            <h4 className="text-4xl font-semibold text-primary pb-[10px]">
              {4371}
            </h4>
            <span className="text-primary font-medium text-lg">
              Jami Mahsulotlar Soni
            </span>
          </div>
          <div className="body-separator h-full w-[2px] py-[15px]">
            <span className="separator block w-[2px] bg-[#E9E9E9] h-full"></span>
          </div>
          <div className="body-item w-1/2 text-center pb-[30px] pt-[40px]">
            <h4 className="text-4xl font-semibold text-[#2FAE5A] pb-[10px]">
              6 000 000 UZS
            </h4>
            <span className="text-[#2FAE5A] font-medium text-lg">
              TaxPayga hisoblangan xizmat haqi
              <br />
              summasi
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
