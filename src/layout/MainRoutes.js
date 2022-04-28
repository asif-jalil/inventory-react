import React from "react";
import { Routes, Route } from "react-router-dom";
import Inventory from "components/inventory/Inventory";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Inventory />} />
    </Routes>
  );
};

export default MainRoutes;
