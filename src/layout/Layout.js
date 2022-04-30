import Navbar from "components/navbar/Navbar";
import Sidebar from "components/sidebar/Sidebar";
import React from "react";
import MainRoutes from "./MainRoutes";

const Layout = () => {
  return (
    <main className="bg-neutral-200 min-h-screen">
      <Navbar />
      <Sidebar />
      <div className="md:ml-24 lg:ml-60 mt-16 mb-16 md:mb-0">
        <MainRoutes />
      </div>
    </main>
  );
};

export default Layout;
