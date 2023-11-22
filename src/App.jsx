import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loading } from "./components/loading";

const Home = lazy(() => import("@/pages/home"));
const NotFoundPage = lazy(() => import("@/pages/notFoundPage"));
const LoginPage = lazy(() => import("@/pages/login"));
const TradeHistoryPage = lazy(() => import("@/pages/tradeHistory"));
const ProductCreate = lazy(() => import("@/components/productCreate"));
const Layout = lazy(() => import("@/components/layout"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="product/create" element={<ProductCreate />} />
        <Route path="trade-history" element={<TradeHistoryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route index path="/login" element={<LoginPage />} />
    </Route>
  )
);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
}

export default App;
