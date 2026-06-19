import { useState, useEffect, lazy, Suspense } from "react";
import Index from "./pages/Index";

const PoliticaDatos = lazy(() => import("./pages/PoliticaDatos"));

const App = () => {
  const [page, setPage] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => setPage(window.location.pathname);
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);

  if (page === "/politica-de-datos")
    return <Suspense fallback={null}><PoliticaDatos /></Suspense>;
  return <Index />;
};

export default App;
