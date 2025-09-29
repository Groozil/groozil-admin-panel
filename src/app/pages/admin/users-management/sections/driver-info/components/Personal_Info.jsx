// components/DriverInfo.js
import React from "react";

const driver = {
  id: "D-101",
  fullName: "John Doe",
  email: "john.doe@example.com",
  phone: "+123 456 7890",
  license: "DL-123456",
  vehicle: "Toyota Corolla",
  zone: "Zone 5",
  emergencyContact: "+987 654 3210",
  address: "123 Main Street, New York, NY",
  joinDate: "2023-05-10",
};

const DriverInfo = () => {
  const info = [
    { label: "Full Name", value: driver.fullName },
    { label: "Driver ID", value: driver.id },
    { label: "Email", value: driver.email },
    { label: "License Number", value: driver.license },
    { label: "Phone Number", value: driver.phone },
    { label: "Assigned Zone", value: driver.zone },
    { label: "Emergency Contact", value: driver.emergencyContact },
    { label: "Address", value: driver.address },
    { label: "Join Date", value: driver.joinDate },
    { label: "Vehicle", value: driver.vehicle },
  ];

  // Split into two parts: all rows except last, and last row
  const firstRows = info.slice(0, info.length - 2);
  const lastRows = info.slice(info.length - 2);

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* First rows */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {firstRows.map((item, index) => (
          <div key={index}>
            <p className="text-gray-500 font-normals">{item.label}:</p>
            <p className="text-gray-900 font-semibold">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Horizontal line before last row */}
      <hr className="border-gray-300 my-6" />

      {/* Last row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {lastRows.map((item, index) => (
          <div key={index}>
            <p className="text-gray-500 font-normals">{item.label}:</p>
            <p className="text-gray-900 font-semibold">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriverInfo;
