export const Card = ({ title }) => {
  return (
    <div className="bg-[#F6F6F7] rounded-[26px] w-[250px]">
      <span className="p-4 underline text-[#C81515]">{title}</span>
      <hr className="" />
    </div>
  );
};
