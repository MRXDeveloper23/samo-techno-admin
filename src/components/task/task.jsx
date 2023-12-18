import { Container } from "../container";

const Task = () => {
  const task = {
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
  };
  const {
    title,
    status,
    assignee,
    assigneePhone,
    taskDescription,
    sentDate,
    doneDate,
    author,
  } = task;
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
    <Container>
      <h1 className="text-[28px] font-nunito font-bold leading-8 mb-8">
        Topshiriq
      </h1>
      <div className="flex flex-col gap-4 p-4 font-montserrat rounded-[8px] shadow-[0_0_8px_0_rgba(0,0,0,0.25)]">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <span className="text-[24px]">{title || ""}</span>
          </div>
          {content}
        </div>
        <hr />
        <div className="flex flex-col gap-4">
          <span className="text-[20px] font-medium text-black/60">
            Xodim: {assignee || ""}
          </span>
          <span className="text-[20px] font-medium text-black/60">
            Tel: {assigneePhone || ""}
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-[20px] font-bold text-black/60">Batafsil</span>
          <p className="text-[20px] font-bold text-black/60">
            {taskDescription || ""}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <span className="text-[20px] font-medium text-black/60">
            Topshiriq bergan shaxs
          </span>
          <span className="text-[20px] font-medium text-black/60">
            {author || ""}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[20px] font-medium text-black/60">
            Berilgan sana
          </span>
          <span className="text-[20px] font-medium text-black/60">
            {sentDate || ""}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[20px] font-medium text-black/60">
            Bajarilgan sana
          </span>
          <span className="text-[20px] font-medium text-black/60">
            {doneDate || ""}
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Task;
