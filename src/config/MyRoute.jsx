import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

function MyRoute() {
  const HomePage = lazy(() => import("../pages/HomePage"));
  const SinglePage = lazy(()=>import("../pages/SinglePage"))
  return (
    <div>
      <Suspense fallback="loading...">
        <Routes>
          
            <Route path="/" element={<HomePage />} />
          <Route path="/:slug" element={<SinglePage/>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default MyRoute;
