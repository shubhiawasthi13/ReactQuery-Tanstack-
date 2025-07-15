// src/Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
