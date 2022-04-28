import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import arrow from "assets/images/navbar/arrow.svg";
import search from "assets/images/navbar/search.svg";
import notification from "assets/images/navbar/notification.svg";
import user from "assets/images/navbar/user.png";

const Navbar = () => {
  return (
    <nav className="h-16 py-3 px-6 flex justify-between bg-white border-b border-neutral-400">
      <div className="flex items-center">
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex justify-center w-full p-2 text-sm focus:ring-2 focus:rounded font-medium">
            Starbucks
            <img src={arrow} alt="arrow" className="w-2 h-5 ml-1.5" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute left-0 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  <button className="text-left rounded-md w-full p-2 text-sm  hover:text-primary-">Option 1</button>
                </Menu.Item>
                <Menu.Item>
                  <button className="text-left rounded-md w-full p-2 text-sm  hover:text-primary-">Option 2</button>
                </Menu.Item>
                <Menu.Item>
                  <button className="text-left rounded-md w-full p-2 text-sm  hover:text-primary-">Option 3</button>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <div className="w-96 ml-32 relative hidden md:block">
          <img src={search} alt="search" className="absolute top-3 left-3.5" />
          <input
            type="text"
            placeholder="Search"
            className="bg-neutral-200 rounded-lg w-full py-2 pr-3 pl-10 focus-visible:ring-2 focus-visible:outline-none"
          />
        </div>
      </div>
      <div className="flex items-center">
        <button className="mr-3 p-2 focus:ring-2 focus:rounded">
          <img src={notification} alt="notification" />
        </button>
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex justify-center items-center w-full p-2 focus:ring-2 focus:rounded">
            <img src={user} alt="user" className="w-8 h-8 rounded-full mr-4" />
            <span className="text-sm font-medium">John Doe</span>
            <img src={arrow} alt="arrow" className="w-2 h-5 ml-1.5" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  <button className="text-left rounded-md w-full p-2 text-sm hover:text-primary-">Account</button>
                </Menu.Item>
                <Menu.Item>
                  <button className="text-left rounded-md w-full p-2 text-sm hover:text-primary-">Settings</button>
                </Menu.Item>
                <Menu.Item>
                  <button className="text-left rounded-md w-full p-2 text-sm hover:text-primary-">Logout</button>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
