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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index path="/" element={<Home />} />
      <Route index path="*" element={<NotFoundPage />} />
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
