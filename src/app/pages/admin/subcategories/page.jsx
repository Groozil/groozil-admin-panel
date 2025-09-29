"use client";
import { useState } from "react";
import Navbar from "../../../../components/Navbar";
import Sidebar from "../../../../components/Sidebar";
import SubcategoryForm from "./models/Subcategory_Form";
import {
  MoreHorizontal,
  MoveLeft,
  MoveRight,
  Plus,
  Search,
} from "lucide-react";

const page = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [isAddSubcategory, setIsAddSubcategory] = useState(false);

  const customers = [
    {
      id: "C-101",
      name: "John Doe",
      email: "john@example.com",
      phone: "+92 300 1234567",
      status: "Active",
      orders: 12,
      spent: "$1,250",
      joinDate: "2024-06-21",
    },
    {
      id: "C-102",
      name: "Sarah Khan",
      email: "sarah@example.com",
      phone: "+92 301 7654321",
      status: "Inactive",
      orders: 3,
      spent: "$210",
      joinDate: "2024-02-10",
    },
    {
      id: "C-103",
      name: "Ali Raza",
      email: "ali@example.com",
      phone: "+92 322 5556677",
      status: "Active",
      orders: 7,
      spent: "$750",
      joinDate: "2024-01-05",
    },
  ];

  return (
    <div className="min-h-screen bg-[#EEF2F6] text-[#212529] flex">
      {isAddSubcategory && (
        <SubcategoryForm setIsAddSubcategory={setIsAddSubcategory} />
      )}
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar
          title="Manage Categories"
          subTitle="Organize your products with main categories and their subcategories"
        />

        <main className="p-6 space-y-6">
          <div className="p-6 bg-[#EEF2F6] rounded-xl shadow-md">
            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Subcategories
            </h2>

            {/* Filters */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
              {/* Search */}
              <div className="relative w-full md:w-1/3">
                <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search Categories..."
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
                <button
                  onClick={() => setIsAddSubcategory(true)}
                  className="flex items-center px-4 py-2 bg-[#F46609] hover:bg-[#cf6f2e] text-white rounded-lg shadow-sm transition cursor-pointer"
                >
                  <Plus className="w-5 h-5" /> Add Subcategory
                </button>
              </div>
            </div>

            {/* Table */}
            {/* Table */}
            <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F7F9FC] text-left text-gray-500">
                    <th className="p-3">Subcategory name</th>
                    <th className="p-3">Parent Category</th>
                    <th className="p-3">Description</th>
                    <th className="p-3">Products</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((c) => (
                    <tr
                      key={c.id}
                      className="border-t border-gray-200 bg-white hover:bg-gray-50 transition"
                    >
                      <td className="p-3 font-medium text-gray-800">
                        Fresh Fruits
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-1">
                          <div>
                            <div className="font-medium text-gray-800">
                              {c.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3 text-gray-700">Good Fruits</td>
                      <td className="p-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            c.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          123
                        </span>
                      </td>
                      <td className="p-3 text-gray-600">{c.status}</td>
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
        </main>
      </div>
    </div>
  );
};

export default page;
