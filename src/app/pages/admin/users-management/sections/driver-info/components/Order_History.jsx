// components/OrderHistory.js
import React from "react";

const orders = [
  {
    id: "D-101",
    customer: "John Doe",
    amount: "SAR 123.45",
    status: "Delivered",
    date: "3/14/2025",
  },
  {
    id: "D-102",
    customer: "Jane Smith",
    amount: "SAR 89.90",
    status: "Pending",
    date: "3/15/2025",
  },
  {
    id: "D-103",
    customer: "Robert Brown",
    amount: "SAR 210.00",
    status: "Active",
    date: "3/16/2025",
  },
  // Add more orders as needed
];

const OrderHistory = () => {
  return (
    <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[#F7F9FC] text-left text-gray-500">
            <th className="p-3">Order ID</th>
            <th className="p-3">Customer</th>
            <th className="p-3">Date</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-t border-gray-200 bg-white hover:bg-gray-50 transition"
            >
              <td className="p-3 font-medium text-gray-800">{order.id}</td>
              <td className="p-3 font-medium text-gray-800">
                {order.customer}
              </td>
              <td className="p-3 text-gray-700">{order.date}</td>
              <td className="p-3 text-gray-700">{order.amount}</td>
              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    order.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : order.status === "Delivered"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;
