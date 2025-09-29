import React from "react";
import { Store } from "lucide-react";

const ActivityLog = () => {
  const stats = [
    {
      id: 1,
      date: "3/14/2025",
    },
    {
      id: 2,
      date: "6/14/2025",
    },
    {
      id: 3,
      date: "9/14/2025",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      {stats.map((s, index) => (
        <div
          key={s.id}
          className="bg-white rounded-xl p-4 shadow-sm flex flex-col"
        >
          {/* Top Row: Icon + Info */}
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#FEF2F2]">
              <Store className="h-6 w-6 text-[#F46609]" />
            </div>

            <div className="flex-1">
              <div className="text-md font-semibold text-gray-800">
                Place Order # {s.id}
              </div>
              <div className="text-sm font-semibold text-gray-600">
                {s.date}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityLog;
