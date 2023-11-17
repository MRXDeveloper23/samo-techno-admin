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

const monthData = [
  {
    name: "Yanvar",
    color: "bg-[#335ECC]",
  },
  {
    name: "Fevral",
    color: "bg-[#50C746]",
  },
  {
    name: "Mart",
    color: "bg-[#DBB491]",
  },
  {
    name: "Aprel",
    color: "bg-[#5C9EA0]",
  },
  {
    name: "May",
    color: "bg-[#D9D9D9]",
  },
  {
    name: "Iyun",
    color: "bg-[#D9D9D9]",
  },
  {
    name: "Iyul",
    color: "bg-[#D9D9D9]",
  },
  {
    name: "Avgust",
    color: "bg-[#D9D9D9]",
  },
  {
    name: "Sentyabr",
    color: "bg-[#D9D9D9]",
  },
  {
    name: "Oktyabr",
    color: "bg-[#D9D9D9]",
  },
  {
    name: "Noyabr",
    color: "bg-[#D9D9D9]",
  },
  {
    name: "Dekabr",
    color: "bg-[#D9D9D9]",
  },
];

export const CustomPieChartStat = () => {
  return (
    <div className="grid grid-rows-6 grid-flow-col gap-4 gap-x-12 flex-1">
      {monthData.map((month, i) => (
        <MonthlyStat
          key={i}
          color={month.color}
          month={month.name}
          value={32000000}
        />
      ))}
    </div>
  );
};
