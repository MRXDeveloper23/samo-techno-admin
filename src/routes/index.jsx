import { lazy } from "react";
import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import { PrivateRoute } from "./privateRoute";

const Home = lazy(() => import("@/pages/home"));
const NotFoundPage = lazy(() => import("@/pages/notFoundPage"));
const LoginPage = lazy(() => import("@/pages/login"));
const ProductPage = lazy(() => import("@/pages/product"));
const StatsPage = lazy(() => import("@/pages/stat"));
const TradeHistoryPage = lazy(() => import("@/pages/tradeHistory"));
const ProductCreate = lazy(() => import("@/components/productCreate"));
const Layout = lazy(() => import("@/components/layout"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
          // <PrivateRoute>
          <Layout />
          // </PrivateRoute>
        }
      >
        <Route index path="/" element={<Home />} />
        <Route path="stat" element={<StatsPage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="product/create" element={<ProductCreate />} />
        <Route path="trade-history" element={<TradeHistoryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to={"/login"} />} />
    </Route>
  )
);
