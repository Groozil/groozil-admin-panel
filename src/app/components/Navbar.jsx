import React from "react";
import { Settings, Bell } from "lucide-react";
import UserDropdown from "./UserDropdown";

const Navbar = ({ collapsed, title, subTitle }) => {
  return (
    <header className="flex items-center justify-between px-6 bg-white shadow-sm">
      <div>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-sm text-gray-500">{subTitle}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full bg-gray-100">
            <Bell />
          </button>
          <button className="p-2 rounded-full bg-gray-100">
            <Settings />
          </button>
          <UserDropdown collapsed={collapsed} />
          {/* <div className="flex items-center p-2 rounded-md">
            <img
              src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
              alt="avatar"
              className="w-14 h-14 rounded-full"
            />
            {!collapsed && (
              <div className="text-sm">
                <div className="font-medium">Zaman Ali</div>
                <div className="text-xs text-gray-500">Admin</div>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
