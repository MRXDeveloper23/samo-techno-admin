// import { SearchIcon } from "@/utils/icons";
import { Container } from "./container";
// import { Button, Input } from "antd";
import { Card } from "./card";
import { StatChartBlock } from "./statChartBlock";
import { useState } from "react";
import {
  useGetCardListStatsQuery,
  useGetPieChartStatsQuery,
} from "../services/api.service";
import { reformPieChartStats } from "./reformPieChartStats";
import { Skeleton } from "antd";

export const MainContent = () => {
  const [year, setYear] = useState(2023);
  const [status, setStatus] = useState("BUY");
  const { data: pieChartStats } = useGetPieChartStatsQuery({ year, status });
  const { data: cardStats, isFetching } = useGetCardListStatsQuery();

  return (
    <Container>
      <div className="flex flex-wrap my-8 gap-4">
        {isFetching
          ? Array.from({ length: 3 }).map((_, i) => (
              <Skeleton.Button
                key={i}
                active
                style={{
                  width: "280px",
                  height: "327px",
                  borderRadius: "26px",
                }}
              />
            ))
          : cardStats?.data.map((stat, idx) => (
              <Card key={idx} title={stat.name} cardStats={stat.response} />
            ))}
      </div>
      <StatChartBlock
        stats={reformPieChartStats(pieChartStats?.data)}
        onTabChange={(e) => setStatus(e)}
        onYearChange={(year) => setYear(year)}
      />
    </Container>
  );
};
