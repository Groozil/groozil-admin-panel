import React from "react";
import { MoveLeft, MoveRight } from "lucide-react";

const OrderHistory = ({ customers }) => {
  return (
    <>
      {/* Table */}
      <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#F7F9FC] text-left text-gray-500">
              <th className="p-3">Order ID</th>
              <th className="p-3">Date</th>
              <th className="p-3">Items</th>
              <th className="p-3">Total</th>
              <th className="p-3">Payment Method</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr
                key={c.id}
                className="border-t border-gray-200 bg-white hover:bg-gray-50 transition"
              >
                <td className="p-3 font-medium text-gray-800">{c.id}</td>
                <td className="p-3">
                  <div className="flex items-center gap-1">
                    <div>
                      <div className="font-medium text-gray-800">
                        3/14/2025{" "}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-3 text-gray-700">8 items</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      c.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    SAR 8.09
                  </span>
                </td>
                <td className="p-3 font-medium">Card</td>
                <td className="p-3 text-gray-600">{c.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-3">
        {/* Prev */}
        <button className="flex px-4 py-2 border border-gray-300 hover:bg-gray-200 text-gray-700 rounded-lg">
          <MoveLeft /> Previous
        </button>

        {/* Page Numbers */}
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded-lg bg-gray-200">1</button>
          <button className="px-3 py-1 rounded-lg hover:bg-gray-200 text-gray-500">
            2
          </button>
          <button className="px-3 py-1 rounded-lg hover:bg-gray-200 text-gray-500">
            3
          </button>
          <span className="px-3 py-1">...</span>
          <button className="px-3 py-1 rounded-lg hover:bg-gray-200 text-gray-500">
            10
          </button>
        </div>

        {/* Next */}
        <button className="flex px-4 py-2 border border-gray-300 hover:bg-gray-200 text-gray-700 rounded-lg">
          Next <MoveRight />
        </button>
      </div>
    </>
  );
};

export default OrderHistory;
