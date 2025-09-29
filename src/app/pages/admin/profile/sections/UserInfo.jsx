"use client";

import {
  Mail,
  Phone,
  Calendar,
  LogIn,
  MapPin,
  RotateCcw,
  Shield,
  Truck,
} from "lucide-react";
import Image from "next/image";

export default function UserInfo({
  name,
  id,
  status,
  phone,
  email,
  address,
  vehicle,
}) {
  return (
    <div className="w-full bg-white rounded-2xl shadow-lg p-6 mb-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row w-full justify-between gap-6">
        {/* Left: Profile + Details */}
        <div className="flex-1 flex flex-col">
          {/* Profile */}
          <div className="flex items-center gap-3">
            <Image
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Customer"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                <span className="text-sm px-3 bg-green-100 text-green-700 rounded-full">
                  {status}
                </span>
              </div>
              <p className="text-gray-500 text-sm">{id}</p>
            </div>
          </div>

          {/* Details Section */}
          <div className="mt-4 ml-[4.5rem] text-gray-700 space-y-4">
            {/* Info in one row (wrap on small screens) */}
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-gray-500" />
                <span className="text-sm md:text-base">{email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-gray-500" />
                <span className="text-sm md:text-base">{phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gray-500" />
                <span className="text-sm md:text-base">3/14/2025</span>
              </div>
              <div className="flex items-center gap-2">
                <LogIn className="w-5 h-5 text-gray-500" />
                <span className="text-sm md:text-base">3/14/2025</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {/* Address full width below */}
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gray-500" />
                <span className="text-sm md:text-base">{address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-gray-500" />
                <span className="text-sm md:text-base">{vehicle}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:self-start">
          <button className="flex items-center gap-2 px-5 py-2 rounded-lg hover:bg-gray-200 transition border border-gray-200">
            <RotateCcw className="w-4 h-4" /> Reset Password
          </button>
          <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition">
            <Shield className="w-4 h-4" /> Block User
          </button>
        </div>
      </div>
    </div>
  );
}
