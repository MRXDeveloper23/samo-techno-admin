export const PaginationPageItem = ({ pageNum }) => {
  return (
    <div className="paginationPageItem pt_sans flex h-[39px] w-[47px] items-center justify-center rounded-[13px] border-[1px] border-[#B6BCCD] text-base font-bold outline-none hover:bg-primary hover:text-white focus:ring">
      {pageNum}
    </div>
  );
};
