import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loading } from "./components/loading";

const Home = lazy(() => import("@/pages/home"));

const router = createBrowserRouter(
  createRoutesFromElements(<Route index path="/" element={<Home />} />)
);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
}

export default App;
