import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../components/Loading";

function MyRoute() {
  const HomePage = lazy(() => import("../pages/HomePage"));
  const SinglePage = lazy(() => import("../pages/SinglePage"));
  const Basket = lazy(()=>import("../pages/Basket"))
  const Login = lazy(()=>import("../pages/Login"))
  const Register = lazy(()=>import("../pages/Register"))
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:slug" element={<SinglePage />} />
          <Route path="/basket" element={<Basket/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default MyRoute;
