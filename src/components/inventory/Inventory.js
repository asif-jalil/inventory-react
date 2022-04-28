import PageLayout from "components/common/PageLayout";
import PageTitle from "components/common/PageTitle";
import React from "react";
import search from "assets/images/navbar/search.svg";
import arrowDown from "assets/images/arrow-down.svg";
import { inventoryTable } from "data/inventoryTable";
import classNames from "classnames";
import { ALRIGHT } from "data/inventoryStatus.const";
import { IN_PROGRESS } from "data/inventoryStatus.const";
import { OUT_OF_STOCK } from "data/inventoryStatus.const";

const Inventory = () => {
  return (
    <>
      <PageTitle title="Inventory" />
      <PageLayout>
        <div className="bg-white">
          <div className="py-6 px-4">
            <div className="w-full md:w-96 relative">
              <img src={search} alt="search" className="absolute top-3 left-3.5" />
              <input
                type="text"
                placeholder="Search"
                className="bg-neutral-200 rounded-lg w-full py-2 pr-3 pl-10 focus-visible:ring-2 focus-visible:outline-none"
              />
            </div>
          </div>

          <table className="w-full">
            <thead className="bg-warning-100">
              <th className="py-2 pl-4 pr-2 text-xs font-medium hidden md:table-cell text-left">
                <div className="flex">
                  <input type="checkbox" name="" className="form-check" id="" />
                </div>
              </th>
              <th className="p-2 text-xs font-medium hidden md:table-cell text-left">
                <div className="flex">
                  <span className="mr-1">Date Updated</span>
                  <img src={arrowDown} alt="" />
                </div>
              </th>
              <th className="py-2 pl-4 pr-2 md:p-2 text-xs font-medium text-left">
                <div className="flex">
                  <span className="mr-1">Title</span>
                  <img src={arrowDown} alt="" />
                </div>
              </th>
              <th className="p-2 text-xs font-medium hidden lg:table-cell text-left">
                <span>Details</span>
              </th>
              <th className="p-2 text-xs font-medium text-left">
                <span>Status</span>
              </th>
              <th className="p-2 text-xs font-medium text-right">
                <span>Quantity</span>
              </th>
              <th className="p-2 text-xs font-medium hidden lg:table-cell text-right">
                <span>Unit Price</span>
              </th>
              <th className="p-2 text-xs font-medium">
                <div className="flex justify-end">
                  <span className="mr-1">Amount</span>
                  <img src={arrowDown} alt="" />
                </div>
              </th>
            </thead>
            <tbody>
              {inventoryTable.map((row) => (
                <tr key={row.id}>
                  <td className="py-2 pl-4 pr-2 text-xs font-medium hidden md:table-cell">
                    <div className="flex">
                      <input type="checkbox" name="" className="form-check" id="" />
                    </div>
                  </td>
                  <td className="text-sm py-4 px-2 hidden md:table-cell">{row.date}</td>
                  <td className="text-sm py-4 pl-4 pr-2 md:px-2">{row.title}</td>
                  <td className="text-sm py-4 px-2 hidden lg:table-cell">{row.details}</td>
                  <td className="text-sm py-4 px-2 text-left">
                    <span className="hidden md:inline">{row.status}</span>
                    <span
                      className={classNames("inline-block w-2 h-2 rounded-full bg-success ml-2", {
                        "bg-success-": row.status === ALRIGHT,
                        "bg-warning-": row.status === IN_PROGRESS,
                        "bg-error-": row.status === OUT_OF_STOCK,
                      })}
                    ></span>
                  </td>
                  <td className="text-sm py-4 px-2 text-right">{row.quantity}</td>
                  <td className="text-sm py-4 px-2 text-right hidden lg:table-cell">{row.unitPrice}</td>
                  <td className="text-sm py-4 px-2 text-right">{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pt-6 pb-10 px-4 flex justify-between">
            <div className="w-[200px]">
              <select className="bg-select bg-white appearance-none border border-neutral-500 text-sm text-neutral-800 p-2 rounded shadow w-full block bg-clip-padding bg-no-repeat bg-right">
                <option value="10">10 Items per page</option>
                <option value="20">20 Items per page</option>
                <option value="30">30 Items per page</option>
                <option value="40">40 Items per page</option>
              </select>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Inventory;
