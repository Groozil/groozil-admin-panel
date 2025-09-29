"use client";
import { useState } from "react";
import Navbar from "../../../../components/Navbar";
import Sidebar from "../../../../components/Sidebar";
import { Users, Truck, ShoppingBasket, DollarSign } from "lucide-react";
import CustomerDetail from "./sections/CustomerDetail";
import DriverDetail from "./sections/driver-info/DriverDetail";

const page = () => {
  const [isCustomer, setIsCustomer] = useState(false);
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
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar
          title={isCustomer ? "User Management" : "Driver Profile"}
          subTitle={
            isCustomer
              ? "Manage customer accounts and profiles"
              : "Manage driver account"
          }
        />

        <main className="p-6 space-y-6">
          {/* Top 4 Stats Cards */}
          {isCustomer ? (
            <>
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
              <CustomerDetail customers={customers} />
            </>
          ) : (
            <DriverDetail />
          )}
        </main>
      </div>
    </div>
  );
};

export default page;
