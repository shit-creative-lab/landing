import { useState, useEffect } from "react";
import Index from "./pages/Index";
import { PoliticaDatos } from "./pages/PoliticaDatos";

const App = () => {
  const [page, setPage] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => setPage(window.location.pathname);
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);

  if (page === "/politica-de-datos") return <PoliticaDatos />;
  return <Index />;
};

export default App;
