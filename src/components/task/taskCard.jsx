import { useNavigate } from "react-router-dom";

export const TaskCard = ({ task }) => {
  const {
    id,
    title,
    status,
    assignee,
    assigneePhone,
    taskDescription,
    sentDate,
  } = task;
  const navigate = useNavigate();
  let content = "";
  if (status === "active")
    content = (
      <span className="w-[140px] px-8 py-2 rounded-2xl bg-[#067AAB] text-center text-white text-[14px] font-semibold">
        Jarayonda
      </span>
    );
  else if (status === "inactive") {
    content = (
      <span className="w-[140px] px-8 py-2 rounded-2xl bg-[#F21616] text-center text-white text-[14px] font-semibold">
        Bajarilmadi
      </span>
    );
  } else if (status === "done") {
    content = (
      <span className="w-[140px] px-8 py-2 rounded-2xl bg-[#13CD13] text-center text-white text-[14px] font-semibold">
        Bajarildi
      </span>
    );
  }
  return (
    <div
      onClick={() => navigate(`/task/${id}`)}
      className="cursor-pointer flex flex-col gap-4 p-4 font-montserrat rounded-[8px] shadow-[0_0_8px_0_rgba(0,0,0,0.25)]"
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <span className="text-[24px]">{title}</span>
        </div>
        {content}
      </div>
      <hr />
      <div className="flex gap-4">
        <span className="text-[20px] font-medium text-black/60">
          Xodim: {assignee}
        </span>
        <span className="text-[20px] font-medium text-black/60">
          Tel: {assigneePhone}
        </span>
      </div>
      <div className="flex">
        <p className="text-[20px] font-bold text-black/60">{taskDescription}</p>
      </div>
      <div className="flex justify-between">
        <span className="text-[20px] font-medium text-black/60">
          Yuborilgan sana
        </span>
        <span className="text-[20px] font-semibold">{sentDate}</span>
      </div>
    </div>
  );
};
