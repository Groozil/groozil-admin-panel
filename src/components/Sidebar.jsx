"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  Handbag,
  Truck,
  ShoppingBasket,
  AlignEndHorizontal,
  Wallet,
  BadgePercent,
  BellDot,
  Award,
  PanelRight,
  ChevronDown,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();
  const router = useRouter();

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const Items = [
    { name: "Dashboard", icon: <LayoutDashboard />, link: "/" },
    {
      name: "Orders Management",
      icon: <Handbag />,
      link: "/pages/admin/orders-management",
    },
    {
      name: "User Management",
      icon: <Users />,
      link: "/pages/admin/users-management",
    },
    {
      name: "Drivers Management",
      icon: <Truck />,
      link: "/pages/admin/drivers-management",
    },
    {
      name: "Product Management",
      icon: <ShoppingBasket />,
      link: "/pages/admin/products-management",
    },
    {
      name: "Manage Categories",
      icon: <AlignEndHorizontal />,
      subItems: [
        {
          name: "Categories",
          icon: <ShoppingCart />,
          link: "/pages/admin/categories",
        },
        {
          name: "Subcategories",
          icon: <ShoppingCart />,
          link: "/pages/admin/subcategories",
        },
      ],
    },
    {
      name: "Payments & Wallets",
      icon: <Wallet />,
      link: "/pages/admin/payment-details",
    },
    {
      name: "Coupens & Offers",
      icon: <BadgePercent />,
      link: "/pages/admin/offers",
    },
    {
      name: "Manage Notifications",
      icon: <BellDot />,
      link: "/pages/admin/notifications",
    },
    {
      name: "Reviews & Ratings",
      icon: <Award />,
      link: "/pages/admin/reviews-rating",
    },
  ];

  return (
    <aside
      className={`flex flex-col bg-black text-white shadow-lg transition-all duration-300 ease-in-out min-h-screen p-4 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Logo & Toggle */}
      <div className="flex items-center justify-between mb-6">
        <div
          className={`flex items-center gap-3 ${
            collapsed ? "justify-center w-full" : ""
          }`}
        >
          {!collapsed && (
            <div className="text-lg font-semibold">
              <Image
                src="/assets/images/groozil-logo.png"
                alt="groozil-logo"
                width="100"
                height="40"
              />
            </div>
          )}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-md hover:bg-gray-700"
          aria-label="Toggle sidebar"
        >
          <PanelRight />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-1">
          {Items.map((item, index) => {
            const isActive =
              pathname === item.link ||
              item?.subItems?.some((s) => s.link === pathname);

            return (
              <li key={index}>
                {/* Parent Item */}
                <button
                  onClick={() => {
                    if (item.subItems) toggleDropdown(index);
                    else router.push(item.link);
                  }}
                  className={`flex w-full items-center gap-3 rounded-md p-2 transition 
                    ${collapsed ? "justify-center" : "justify-between"} 
                    ${isActive ? "bg-gray-700" : "hover:bg-gray-700"}
                  `}
                  aria-expanded={openDropdown === index}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 flex items-center justify-center text-gray-200">
                      {item.icon}
                    </span>
                    {!collapsed && (
                      <span className="text-sm text-gray-200">{item.name}</span>
                    )}
                  </div>
                  {!collapsed && item.subItems && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Dropdown Items */}
                {item.subItems && openDropdown === index && !collapsed && (
                  <ul className="ml-9 mt-1 space-y-1 text-sm">
                    {item.subItems.map((subItem, subIndex) => {
                      const subActive = pathname === subItem.link;

                      return (
                        <li key={subIndex}>
                          <button
                            onClick={() => router.push(subItem.link)}
                            className={`flex items-center gap-2 p-2 rounded-md transition 
                              ${subActive ? "bg-gray-700" : "hover:bg-gray-600"}
                            `}
                          >
                            {/* <span className="w-4 h-4 text-gray-200">
                              {subItem.icon}
                            </span> */}
                            <span className="ml-2 text-gray-200">
                              {subItem.name}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
