import React from "react";
import home from "assets/images/sidebar/icon1.svg";
import inventory from "assets/images/sidebar/icon2.svg";
import documents from "assets/images/sidebar/icon3.svg";
import settings from "assets/images/sidebar/icon4.svg";

const Sidebar = () => {
  return (
    <div className="fixed bottom-0 md:bottom-[unset] md:left-0 w-full md:w-24 lg:w-60 border-r border-neutral-400 md:h-full p-4 md:p-6 bg-white md:bg-transparent">
      <ul className="flex justify-between items-center md:block">
        <li className="md:mb-2 rounded hover:bg-neutral-400">
          <a href="#!" className="text-neutral-700 text-sm font-medium flex items-center justify-center lg:justify-start p-2 md:py-2.5 md:px-3">
            <img src={home} alt="home" className="lg:pr-2 w-4 lg:w-6" /> <span className="hidden lg:inline-block">Dashboard</span>
          </a>
        </li>
        <li className="md:mb-2 rounded md:bg-white md:shadow-md">
          <a href="#!" className="text-sm font-medium flex items-center justify-center lg:justify-start p-2 md:py-2.5 md:px-3 text-primary-">
            <img src={inventory} alt="inventory" className="lg:pr-2 w-4 lg:w-6" /> <span className="hidden lg:inline-block">Inventory</span>
          </a>
        </li>
        <li className="md:mb-2 rounded hover:bg-neutral-400">
          <a href="#!" className="text-neutral-700 text-sm font-medium flex items-center justify-center lg:justify-start p-2 md:py-2.5 md:px-3">
            <img src={documents} alt="documents" className="lg:pr-2 w-4 lg:w-6" /> <span className="hidden lg:inline-block">Documents</span>
          </a>
        </li>
        <li className="md:mb-2 rounded hover:bg-neutral-400">
          <a href="#!" className="text-neutral-700 text-sm font-medium flex items-center justify-center lg:justify-start p-2 md:py-2.5 md:px-3">
            <img src={settings} alt="settings" className="lg:pr-2 w-4 lg:w-6" /> <span className="hidden lg:inline-block">Settings</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
