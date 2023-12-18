// import { SearchIcon } from "@/utils/icons";
import { Container } from "./container";
// import { Button, Input } from "antd";
import { Card } from "./card";
import { StatChartBlock } from "./statChartBlock";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import {
  useGetCardListStatsQuery,
  useGetPieChartStatsQuery,
} from "../services/api.service";
import { reformPieChartStats } from "./reformPieChartStats";
import { CustomLoading } from "../shared/loading/loading";

export const MainContent = () => {
  const location = useLocation();
  const [year, setYear] = useState(2023);
  const [status, setStatus] = useState("BUY");
  const { data: pieChartStats } = useGetPieChartStatsQuery({ year, status });
  const { data: cardStats, isFetching } = useGetCardListStatsQuery();

  return (
    <Container>
      <div className="mt-8">
        <h1 className="text-[28px] font-nunito font-bold leading-8 mb-8">
          {location.state}
        </h1>
        {/* <div className="flex gap-4">
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
        </div> */}
      </div>
      <div className="flex flex-wrap my-8 gap-4">
        {isFetching ? (
          <div className="w-full h-[300px] flex items-center justify-center">
            <CustomLoading />
          </div>
        ) : (
          cardStats?.data.map((stat, idx) => (
            <Card key={idx} title={stat.name} cardStats={stat.response} />
          ))
        )}
      </div>
      <StatChartBlock
        stats={reformPieChartStats(pieChartStats?.data)}
        onTabChange={(e) => setStatus(e)}
        onYearChange={(year) => setYear(year)}
      />
    </Container>
  );
};
