"use client";
import { useState } from "react";
import Navbar from "../../../../components/Navbar";
import Sidebar from "../../../../components/Sidebar";
import DriverForm from "./sections/DriverForm";
import {
  MoreHorizontal,
  Users,
  Truck,
  ShoppingBasket,
  DollarSign,
  MoveLeft,
  MoveRight,
  Plus,
  Search,
} from "lucide-react";
import Image from "next/image";

const page = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);

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

  // Static stats
  const stats = [
    {
      id: 1,
      title: "Total Users",
      desc: "12,345",
      subDesc: "+12.5% vs last month",
      icon: <Users className="h-6 w-6 text-[#2563EB]" />,
    },
    {
      id: 2,
      title: "Active Drivers",
      desc: "65",
      subDesc: "+8.5% vs last month",
      icon: <Truck className="h-6 w-6 text-[#10B981]" />,
    },
    {
      id: 3,
      title: "Active Orders",
      desc: "1,204",
      subDesc: "-5.7% vs last month",
      icon: <ShoppingBasket className="h-6 w-6 text-[#EC4899]" />,
    },
    {
      id: 4,
      title: "Daily Sales",
      desc: "SAR 24,546",
      subDesc: "+15.5% vs last day",
      icon: <DollarSign className="h-6 w-6 text-[#D97706]" />,
    },
  ];
  return (
    <div className="min-h-screen bg-[#EEF2F6] text-[#212529] flex">
      {showModal && <DriverForm setShowModal={setShowModal} />}
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar
          title="Drivers Management"
          subTitle="Manage delivery drivers and their assignments"
        />

        <main className="p-6 space-y-6">
          {/* Top 4 Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, index) => (
              <div
                key={s.id}
                className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between"
              >
                <div>
                  <div className="text-sm text-gray-500">{s.title}</div>
                  <div className="text-lg font-semibold mt-1">{s.desc}</div>
                  <div
                    className="text-xs mt-1"
                    style={{
                      color: s.subDesc.startsWith("-") ? "red" : "green",
                    }}
                  >
                    {s.subDesc}
                  </div>
                </div>
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor:
                      index == 0
                        ? "#EFF6FF"
                        : index == 1
                        ? "#ECFDF5"
                        : index == 2
                        ? "#FDF2F8"
                        : index == 3
                        ? "#FFFBEB"
                        : "",
                  }}
                >
                  {s.icon}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#EEF2F6] rounded-xl shadow-md">
            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Drivers List
            </h2>

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
                {/* Zone Filter */}
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 outline-none text-gray-600"
                >
                  <option value="All">All Zones</option>
                  <option value="Active">Riyadh North</option>
                  <option value="Inactive">Riyadh South</option>
                </select>
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
                  className="flex items-center px-4 py-2 bg-[#F46609] hover:bg-[#cf6f2e] text-white rounded-lg shadow-sm transition"
                  onClick={() => setShowModal(true)}
                >
                  <Plus className="w-5 h-5" /> Add New Driver
                </button>
              </div>
            </div>

            {/* Table */}
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
                    <th className="p-3">Assigned Zone</th>
                    <th className="p-3">Vehicle Type</th>
                    <th className="p-3">Rating</th>
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
                            <div className="font-medium text-gray-800">
                              {c.name}
                            </div>
                            <div className="text-gray-500 text-xs">
                              {c.email}
                            </div>
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
                      <td className="p-3 text-gray-700">
                        <select
                          value={statusFilter}
                          onChange={(e) => setStatusFilter(e.target.value)}
                          className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 outline-none text-gray-600"
                        >
                          <option value="All">All Zones</option>
                          <option value="Active">Riyadh North</option>
                          <option value="Inactive">Riyadh South</option>
                        </select>
                      </td>
                      <td className="p-3 font-medium">Toyota Hilux</td>
                      <td className="p-3 text-gray-600">⭐4.8</td>
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
