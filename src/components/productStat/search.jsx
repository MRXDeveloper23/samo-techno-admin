import { useRef } from "react";
import SearchIcon from "../../assets/icons/search.svg";

export const Search = ({ search, setSearch, placeholder = "Qidiruv" }) => {
  const inputRef = useRef();

  function handlerSearch() {
    setSearch(inputRef.current.value);
  }

  return (
    <div className="relative">
      <input
        ref={inputRef}
        type="text"
        defaultValue={search}
        className="w-full rounded-[20px] h-[60px] px-8 bg-search-background text-[20px] outline-none"
        placeholder={placeholder}
        onKeyDown={(v) => {
          if (v.key == "Enter") {
            handlerSearch();
          }
        }}
      />
      <span
        className="inline-block cursor-pointer active:opacity-80"
        onClick={handlerSearch}
      >
        <img src={SearchIcon} alt="search" className="absolute right-4 top-4" />
      </span>
    </div>
  );
};
