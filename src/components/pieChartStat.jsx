import { formatNumber } from "@/utils/formatNumber";

const MonthlyStat = ({ color, month, value }) => {
  return (
    <div className="flex gap-4 items-center justify-between">
      <div className="flex gap-4 items-center">
        <span className={`w-[10px] h-[10px] rounded-[3px] ${color}`}></span>
        <span className="font-ptsans font-normal text-[17px]">{month}</span>
      </div>
      <div className="flex w-[150px] overflow-hidden">
        <span className="block border-b-2 border-dotted w-full"></span>
        <p className="font-bold text-primary leading-[22px] whitespace-nowrap">
          {formatNumber(value)}
        </p>
      </div>
    </div>
  );
};

const monthColors = {
  Yanvar: "bg-[#335ECC]",
  Fevral: "bg-[#50C746]",
  Mart: "bg-[#DBB491]",
  Aprel: "bg-[#5C9EA0]",
  May: "bg-[#26de9d]",
  Iyun: "bg-[#E45C5E]",
  Iyul: "bg-[#D04B2F]",
  Avgust: "bg-[#7F00FF]",
  Sentabr: "bg-[#F4D730]",
  Oktabr: "bg-[#7A5901]",
  Noyabr: "bg-[#FF3E00]",
  Dekabr: "bg-[#D9D9D9]",
};

export const CustomPieChartStat = ({ stats }) => {
  return (
    <div className="grid grid-rows-6 grid-flow-col gap-4 gap-x-12 flex-1">
      {stats?.map((month, i) => (
        <MonthlyStat
          key={i}
          color={monthColors[month.name]}
          month={month.name}
          value={month.value || 0}
        />
      ))}
    </div>
  );
};
