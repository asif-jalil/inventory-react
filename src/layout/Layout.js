import Navbar from "components/navbar/Navbar";
import React from "react";
import MainRoutes from "./MainRoutes";

const Layout = () => {
  return (
    <main className="bg-neutral-200 min-h-screen">
      <Navbar />
      <MainRoutes />
    </main>
  );
};

export default Layout;
