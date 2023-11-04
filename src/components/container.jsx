export const Container = ({ children }) => {
  return (
    <section className="w-full px-[94px] py-[25px]">
      <div className="mx-auto max-w-[1366px]">{children}</div>
    </section>
  );
};
