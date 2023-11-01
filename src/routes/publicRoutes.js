import { Navigate, Outlet } from "react-router-dom";
import { checkAuth } from "../checkAuth";

export default function PublicRoutes() {
  const token = checkAuth();
  return token ? <Navigate to={"/"} /> : <Outlet />;
}
