import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Spinner from "./components/Spinner";

const Home = lazy(() => import("./pages/Home"));
const ShampPage = lazy(() => import("./pages/ProductPageSh"));
const CosmPage = lazy(() => import("./pages/ProductPageCosm"));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/shamp" element={<ShampPage />} />
        <Route path="/cosmetic" element={<CosmPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default App;
