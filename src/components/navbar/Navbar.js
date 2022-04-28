import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import arrow from "assets/images/navbar/arrow.svg"

const Navbar = () => {
  return (
    <nav className="h-16 py-3 px-6 flex">
      <div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex justify-center w-full p-2 text-sm focus:ring-2 focus:rounded font-medium text-sm">
              Starbucks
              <img src={ arrow} alt="arrow" className="w-2 h-5 ml-1.5" />
            </Menu.Button>
          </div>
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
                  <button className="text-left rounded-md w-full p-2 text-sm hover:bg-violet-500 hover:text-white">Option 1</button>
                </Menu.Item>
                <Menu.Item>
                  <button className="text-left rounded-md w-full p-2 text-sm hover:bg-violet-500 hover:text-white">Option 2</button>
                </Menu.Item>
                <Menu.Item>
                  <button className="text-left rounded-md w-full p-2 text-sm hover:bg-violet-500 hover:text-white">Option 3</button>
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
