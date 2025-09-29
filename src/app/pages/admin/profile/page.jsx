"use client";
import { useState } from "react";
import Navbar from "../../../../components/Navbar";
import Sidebar from "../../../../components/Sidebar";
import UserInfo from "./sections/UserInfo";
import OrderHistory from "./sections/OrderHistory";
import Wishlist from "./sections/Wishlist";
import ActivityLog from "./sections/ActivityLog";

const page = () => {
  const [isShow, setIsShow] = useState("order-history");

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
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar title="User Profile" subTitle="Managing user account" />

        <main className="p-6 space-y-6">
          {/* user info  */}
          <UserInfo
            name="John Doe"
            id="Customer ID:101"
            status="Active"
            phone="+92 300 1234567"
            email="john@example.com"
            address="123 Main St, Anytown, USA"
            vehicle=""
          />
          <div className="p-6 bg-[#EEF2F6] rounded-xl shadow-md">
            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Customer Details
            </h2>

            <div className="flex gap-6 border-b border-gray-200">
              <p
                className={`text-sm font-medium pb-2 cursor-pointer transition ${
                  isShow === "order-history"
                    ? "text-[#F46609] border-b-2 border-[#F46609]"
                    : "text-gray-800 hover:text-[#F46609]"
                }`}
                onClick={() => setIsShow("order-history")}
              >
                Order History
              </p>
              <p
                className={`text-sm font-medium pb-2 cursor-pointer transition ${
                  isShow === "wishlist"
                    ? "text-[#F46609] border-b-2 border-[#F46609]"
                    : "text-gray-800 hover:text-[#F46609]"
                }`}
                onClick={() => setIsShow("wishlist")}
              >
                Wishlist
              </p>
              <p
                className={`text-sm font-medium pb-2 cursor-pointer transition ${
                  isShow === "activity"
                    ? "text-[#F46609] border-b-2 border-[#F46609]"
                    : "text-gray-800 hover:text-[#F46609]"
                }`}
                onClick={() => setIsShow("activity")}
              >
                Activity Log
              </p>
            </div>

            <hr className="w-full border-gray-200 mb-2" />

            {isShow === "order-history" && (
              <OrderHistory customers={customers} />
            )}
            {isShow === "wishlist" && <Wishlist />}
            {isShow === "activity" && <ActivityLog />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;
