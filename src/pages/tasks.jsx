import { Button } from "antd";
import { Container } from "../components/container";
import { TaskCard } from "../components/task/taskCard";
import { TaskFilterGroup } from "../components/task/taskFilterGroup";
import Add from "@/assets/icons/add.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import QueryString from "qs";

const tasks = [
  {
    id: "1",
    title: "Qon’g’iroq qilish",
    status: "active",
    assignee: "Elyor Mavlonov",
    assigneePhone: "+998901234567",
    taskDescription:
      "23:15 sanada Inhaga qo’g’iroq qilib mahsulotlar xolati xaqida so’ra",
    sentDate: "19.06.2021  11:36:13",
    author: "Mallayev Ilhom",
    doneDate: "19.06.2021  11:36:13",
  },
];

const TasksPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [filter, setFilter] = useState({
    fromYear: undefined,
    fromMonth: undefined,
    fromDay: undefined,
    toYear: undefined,
    toMonth: undefined,
    toDay: undefined,
    searchString: undefined,
  });

  const updateFilterHandler = (key, value) => {
    setFilter((prevFilter) => {
      const updatedFilter = { ...prevFilter, [key]: value };
      navigate(`?${QueryString.stringify(updatedFilter)}`);
      return updatedFilter;
    });
  };

  useEffect(() => {
    const queryParams = QueryString.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    setFilter((prev) => ({ ...prev, ...queryParams }));
  }, [location.search]);
  return (
    <Container>
      <h1 className="text-[28px] font-nunito font-bold leading-8">
        Topshiriqlar
      </h1>
      <TaskFilterGroup filter={filter} updateFilter={updateFilterHandler} />
      <div className="flex flex-col gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
      <div className="flex justify-end mt-8">
        <Button
          type="primary"
          icon={<img src={Add} alt="add" />}
          onClick={() => navigate()}
          className="flex items-center rounded-2xl bg-primary px-6 py-[20px] font-montserrat text-[18px] font-medium leading-[21px]"
        >
          {"Qo‘shish"}
        </Button>
      </div>
    </Container>
  );
};

export default TasksPage;
