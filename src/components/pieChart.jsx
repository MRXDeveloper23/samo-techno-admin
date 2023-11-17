import { useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400, fill: "#0088FE" },
  { name: "Group B", value: 300, fill: "#00C49F" },
  { name: "Group C", value: 300, fill: "#FFBB28" },
  { name: "Group D", value: 200, fill: "#FF8042" },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    percent,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 5) * cos;
  const sy = cy + (outerRadius + 5) * sin;
  const ex = cx + (outerRadius + 5) * cos;
  const ey = cy + (outerRadius + 5) * sin;

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        Jami
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />

      <circle
        cx={sx}
        cy={sy}
        r={30}
        fill={"white"}
        filter="url(#filter0_d_2641_339)"
        stroke="none"
      />
      <text x={ex} y={ey + 2} textAnchor="middle" fill="black">
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    </g>
  );
};

export const CustomPieChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={90}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};
