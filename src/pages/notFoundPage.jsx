import { Link, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="content text-center">
        <div className="animate-pulse">
          <span
            className={`counter-item nunito relative m-[5px] inline-block w-[67px] rounded-[12px] bg-primary py-[13px] text-center text-6xl font-extrabold text-white`}
          >
            4
            <div className="line-separator absolute inset-y-2/4 h-[2px] w-full bg-white/[.5]"></div>
            <div className="side-box absolute inset-y-1/3 left-0 h-[33%] w-[6px] rounded-[1px] bg-[#C4C4C4]"></div>
            <div className="side-box absolute inset-y-1/3 right-0 h-[33%] w-[6px] rounded-[1px] bg-[#C4C4C4]"></div>
          </span>
          <span
            className={`counter-item nunito relative m-[5px] inline-block w-[67px] rounded-[12px] bg-primary py-[13px] text-center text-6xl font-extrabold text-white`}
          >
            0
            <div className="line-separator absolute inset-y-2/4 h-[2px] w-full bg-white/[.5]"></div>
            <div className="side-box absolute inset-y-1/3 left-0 h-[33%] w-[6px] rounded-[1px] bg-[#C4C4C4]"></div>
            <div className="side-box absolute inset-y-1/3 right-0 h-[33%] w-[6px] rounded-[1px] bg-[#C4C4C4]"></div>
          </span>
          <span
            className={`counter-item nunito relative m-[5px] inline-block w-[67px] rounded-[12px] bg-primary py-[13px] text-center text-6xl font-extrabold text-white`}
          >
            4
            <div className="line-separator absolute inset-y-2/4 h-[2px] w-full bg-white/[.5]"></div>
            <div className="side-box absolute inset-y-1/3 left-0 h-[33%] w-[6px] rounded-[1px] bg-[#C4C4C4]"></div>
            <div className="side-box absolute inset-y-1/3 right-0 h-[33%] w-[6px] rounded-[1px] bg-[#C4C4C4]"></div>
          </span>
        </div>
        <h3 className="nunito text-main-blue my-4 text-5xl font-bold">Oops!</h3>
        <Link
          className="inline-block rounded-lg bg-primary px-[35px] py-[5px] text-2xl text-white"
          to="/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          Ortga
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
