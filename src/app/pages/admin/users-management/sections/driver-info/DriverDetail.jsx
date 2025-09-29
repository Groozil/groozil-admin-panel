"use client";
import React, { useState } from "react";
import UserInfo from "../../../profile/sections/UserInfo";
import Personal_Info from "./components/Personal_Info";
import Order_History from "./components/Order_History";
import Activity_Log from "./components/Activity_Log";

const DriverDetail = () => {
  const [isShow, setIsShow] = useState("personal-details");
  return (
    <>
      <UserInfo
        name="Annate Black"
        id="Driver ID: 101"
        status="Online"
        phone="+92 300 1234567"
        email="annate@example.com"
        address="123 Main St, Anytown, USA"
        vehicle="Toyota Camry"
      />
      <div className="p-6 bg-[#EEF2F6] rounded-xl shadow-md">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Driver Details
        </h2>

        <div className="flex gap-6 border-b border-gray-200">
          <p
            className={`text-sm font-medium pb-2 cursor-pointer transition ${
              isShow === "personal-details"
                ? "text-[#F46609] border-b-2 border-[#F46609]"
                : "text-gray-800 hover:text-[#F46609]"
            }`}
            onClick={() => setIsShow("personal-details")}
          >
            Personal Details
          </p>
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
        {isShow === "personal-details" && (
          <div className="mt-4">
            <Personal_Info />
          </div>
        )}
        {isShow === "order-history" && (
          <div className="mt-4">
            <Order_History />
          </div>
        )}
        {isShow === "activity" && (
          <div className="mt-4">
            <Activity_Log />
          </div>
        )}
      </div>
    </>
  );
};

export default DriverDetail;
