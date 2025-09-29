// components/ActivityLog.js
import React from "react";

const Activity_Log = () => {
  const activities = [
    { id: 1, date: "3/14/2025", time: "2 hours ago" },
    { id: 2, date: "6/14/2025", time: "3 hours ago" },
    { id: 3, date: "9/14/2025", time: "4 hours ago" },
  ];

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div
          key={activity.id}
          className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between"
        >
          {/* Left: Dot + Title */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full flex items-center justify-center bg-[#F46609]"></div>
            <div>
              <div className="text-md font-semibold text-gray-800">
                Place Order #{activity.id}
              </div>
              <div className="text-sm text-gray-600">{activity.date}</div>
            </div>
          </div>

          {/* Right: Time */}
          <div className="text-sm text-gray-500 font-normal">
            {activity.time}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activity_Log;
