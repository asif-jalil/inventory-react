import Navbar from "components/navbar/Navbar";
import Sidebar from "components/sidebar/Sidebar";
import React from "react";
import MainRoutes from "./MainRoutes";

const Layout = () => {
  return (
    <main className="bg-neutral-200 min-h-screen">
      <Navbar />
      <Sidebar />
      <div className="md:ml-24 lg:ml-60">
        <MainRoutes />
      </div>
    </main>
  );
};

export default Layout;
