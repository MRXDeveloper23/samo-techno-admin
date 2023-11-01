import { Navigate, Outlet } from "react-router-dom";
import { checkAuth } from "../checkAuth";

export default function PrivateRoutes() {
  const token = checkAuth();
  return token ? <Outlet /> : <Navigate to={"/login"} />;
}
