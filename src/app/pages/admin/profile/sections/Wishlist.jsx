import React from "react";
import { Store } from "lucide-react";

const Wishlist = () => {
  const stats = [
    {
      id: 1,
      title: "Fresh Fruits Bundle",
      desc: "12,345",
      status: "Active",
    },
    {
      id: 2,
      title: "Fresh Vegetables Bundle",
      desc: "65",
      status: "Out of Stock",
    },
    {
      id: 3,
      title: "Fresh Grains Bundle",
      desc: "1,204",
      status: "Active",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {stats.map((s, index) => (
        <div
          key={s.id}
          className="bg-white rounded-xl p-4 shadow-sm flex flex-col"
        >
          {/* Top Row: Icon + Info */}
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200">
              <Store className="h-6 w-6 text-gray-500" />
            </div>

            <div className="flex-1">
              <div className="text-md font-semibold text-gray-700">
                {s.title}
              </div>
              <div className="text-sm font-semibold text-[#F46609]">
                SAR {s.desc}
              </div>

              {/* Status + Action Button in one row */}
              <div className="flex items-center justify-between mt-1">
                <div
                  className="text-xs font-medium text-gray-700 px-2 py-1 rounded-full"
                  style={{
                    color: s.status.startsWith("Active") ? "green" : "red",
                    backgroundColor: s.status.startsWith("Active")
                      ? "#ECFDF3"
                      : "#FEF3F2",
                  }}
                >
                  {s.status}
                </div>
                <button className="text-red-600 text-sm px-3 py-1 underline">
                  Remove Item
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
