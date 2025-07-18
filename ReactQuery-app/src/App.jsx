import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Data from "./pages/Data";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import DetailPage from "./pages/DetailPage";
import InfiniteData from "./pages/InfiniteData";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="data" element={<Data />} />
          <Route path="data/:id" element={<DetailPage />} />
          <Route path="inf-data" element={<InfiniteData />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
