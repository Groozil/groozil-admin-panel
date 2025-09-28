"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const UserDropdown = ({ collapsed }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Avatar + Info */}
      <div
        className="flex items-center justify-between p-2 rounded-md"
      >
        <div className="flex items-center">
          <img
            src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
            alt="avatar"
            className="w-12 h-12 rounded-full"
          />
          {!collapsed && (
            <div className="text-sm">
              <div className="font-medium text-black">Zaman Ali</div>
              <div className="text-xs text-gray-500">Admin</div>
            </div>
          )}
        </div>

        {/* Chevron Icon */}
        {!collapsed && (
          <ChevronDown
            className={`ml-2 w-5 h-5 text-black transition-transform duration-300 ${
              open ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setOpen(!open)}
          />
        )}
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute left-0 mt-2 w-44 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Settings
              </a>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
