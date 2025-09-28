"use client";
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { Users, Truck, ShoppingBasket, DollarSign } from "lucide-react";
import ChartDataLabels from "chartjs-plugin-datalabels";
import TrendingProducts from "../../components/TrendingProducts";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line, Pie } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export default function AdminDashboard() {
  const [collapsed, setCollapsed] = useState(false);

  // Line chart (Sales Overview)
  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Sales",
        data: [1200, 1900, 1400, 2200, 2000, 2500, 2700],
        borderColor: "#F46609",
        backgroundColor: "rgba(45,91,227,0.2)",
        tension: 0.4, // smooth curve
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      datalabels: {
        display: false,
      },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  // Pie chart (Order Status Distribution)
  const pieData = {
    labels: [
      "Pending",
      "Confirmed",
      "Preparing",
      "Out for Delivery",
      "Delivered",
      "Cancelled",
    ],
    datasets: [
      {
        data: [25, 40, 10, 5, 10, 10], // values sum to 100%
        backgroundColor: [
          "#F59E0B",
          "#3B82F6",
          "#A155B9",
          "#F765A3",
          "#17C653",
          "#DC2626",
        ],
        hoverOffset: 10,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: { position: "right" },
      datalabels: {
        color: "#fff",
        font: { weight: "bold", size: 12 },
        formatter: (value, context) => {
          const total = context.dataset.data.reduce((a, b) => a + b, 0);
          const percentage = ((value / total) * 100).toFixed(0);
          return `${percentage}%`;
        },
      },
      tooltip: { enabled: false },
    },
    maintainAspectRatio: false,
  };

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
      {/* Sidebar */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Navbar title="Dashboard" subTitle="Grocery Store Management"/>

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

          {/* Charts row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Sales Overview (bigger) */}
            <section className="lg:col-span-2 bg-white rounded-xl p-4 shadow-sm min-h-[320px]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">Sales Overview</h3>
                <div className="flex items-center gap-2 p-1 border border-[#F7F9FC] rounded bg-[#F7F9FC]">
                  <button className="px-2 py-1 bg-white rounded">Daily</button>
                  <button className="px-2 py-1">Weekly</button>
                  <button className="px-2 py-1">Monthly</button>
                </div>
              </div>

              {/* Fake line chart */}
              <div className="w-full h-64 bg-gradient-to-b from-white to-[#F5F7FA] rounded-lg flex items-center justify-center">
                <Line data={lineData} options={lineOptions} />
              </div>
            </section>

            {/* Order Status (smaller) */}
            <section className="lg:col-span-1 bg-white rounded-xl p-4 shadow-sm min-h-[320px]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">
                  Order Status Distribution
                </h3>
              </div>

              <div className="flex items-center justify-center gap-6 py-10">
                {/* Pie chart */}
                <div className="flex items-center justify-center ">
                  <Pie data={pieData} options={pieOptions} />
                </div>
              </div>
            </section>
          </div>

          {/* Bottom Section */}
          <TrendingProducts />
        </main>
      </div>
    </div>
  );
}
