import { Button } from "antd";

export const Widget = ({
  title,
  children,
  btnText = "Yangi qo'shish",
  btnStyles,
  onClick,
}) => {
  return (
    <div className="bg-[#F6F6F7] rounded-[26px] w-[250px] h-[327px] relative">
      <p className="px-[20px] pt-[18px] pb-[4px] underline text-[#C81515] cursor-pointer">
        {title}
      </p>
      <hr className="border-b-[3px] h-[1px] border-dashed" />
      {children}

      <Button
        type="primary"
        onClick={onClick}
        className={`absolute bottom-[-26px] left-0 w-full h-[50px] rounded-b-[26px] bg-primary rounded-t-none ${btnStyles}`}
      >
        {btnText}
      </Button>
    </div>
  );
};
