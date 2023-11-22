import { Outlet } from "react-router-dom";
import { Header } from "./header";

const Layout = () => {
  return (
    <main className="">
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
