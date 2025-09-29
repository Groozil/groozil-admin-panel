"use client";
import React, { useState } from "react";
import { MoreHorizontal, MoveLeft, MoveRight, Search } from "lucide-react";
import Image from "next/image";

const CustomerDetail = ({ customers }) => {
  const [statusFilter, setStatusFilter] = useState("All");
  return (
    <div className="p-6 bg-[#EEF2F6] rounded-xl shadow-md">
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Customers</h2>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
        {/* Search */}
        <div className="relative w-full md:w-1/3">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, email or phone..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
          />
        </div>

        <div className="flex items-center gap-3">
          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 outline-none text-gray-600"
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          {/* Add Button */}
          <button className="px-4 py-2 bg-[#F46609] hover:bg-[#cf6f2e] text-white rounded-lg shadow-sm transition">
            Export User List
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#F7F9FC] text-left text-gray-500">
              <th className="p-3">
                <input type="checkbox" />
              </th>
              <th className="p-3">ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Contact</th>
              <th className="p-3">Status</th>
              <th className="p-3">Orders</th>
              <th className="p-3">Total Spent</th>
              <th className="p-3">Join Date</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr
                key={c.id}
                className="border-t border-gray-200 bg-white hover:bg-gray-50 transition"
              >
                <td className="p-3">
                  <input type="checkbox" />
                </td>
                <td className="p-3 font-medium text-gray-800">{c.id}</td>
                <td className="p-3">
                  <div className="flex items-center gap-1">
                    <Image
                      src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
                      alt="avatar"
                      width={40}
                      height={40}
                      className="rounded-full border"
                    />
                    <div>
                      <div className="font-medium text-gray-800">{c.name}</div>
                      <div className="text-gray-500 text-xs">{c.email}</div>
                    </div>
                  </div>
                </td>
                <td className="p-3 text-gray-700">{c.phone}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      c.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>
                <td className="p-3 text-gray-700">{c.orders}</td>
                <td className="p-3 font-medium">{c.spent}</td>
                <td className="p-3 text-gray-600">{c.joinDate}</td>
                <td className="p-3 text-center">
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <MoreHorizontal className="w-5 h-5 text-gray-600" />
                  </button>
                </td>
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
    </div>
  );
};

export default CustomerDetail;
