import { ImageUp, Plus, X } from "lucide-react";
import React, { useState } from "react";

const DriverForm = ({ setShowModal }) => {
  const [images, setImages] = useState("");

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages(newImages);
  };

  const handleSubmit = () => {
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="max-w-5xl w-full mx-4 p-6 bg-white shadow-lg rounded-xl overflow-y-auto max-h-[90vh] hide-scrollbar">
        {/* Close X Button */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-8 right-[12%] translate-x-1/2 p-2 rounded-full hover:bg-gray-200"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Add New Driver
        </h2>

        {/* Image Upload Section */}
        <div className="mb-6 flex items-center gap-4">
          <div className="flex flex-wrap gap-4 mb-4">
            {images ? (
              images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`preview-${idx}`}
                  className="w-32 h-32 object-cover rounded-lg border border-gray-300"
                />
              ))
            ) : (
              <div className="w-32 h-32 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg text-gray-400">
                <ImageUp className="w-6 h-6" />
              </div>
            )}
          </div>
          <label className="inline-block">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <span className="px-4 py-2 text-gray-500 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-200">
              Choose Profile Image
            </span>
          </label>
        </div>

        {/* First Set of Inputs (6 inputs, 2 per row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter driver’s full name"
            className="border border-gray-300 p-3 rounded-lg w-full"
          />
          <input
            type="email"
            placeholder="Enter email address"
            className="border border-gray-300 p-3 rounded-lg w-full"
          />
          <input
            type="tel"
            placeholder="Enter phone no"
            className="border border-gray-300 p-3 rounded-lg w-full"
          />
          <input
            type="tel"
            placeholder="Enter emergency contact no"
            className="border border-gray-300 p-3 rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Enter Address"
            className="border border-gray-300 p-3 rounded-lg w-full"
          />
          <select className="border border-gray-300 text-gray-400 p-3 rounded-lg w-full">
            <option value="">Select assign zone</option>
            <option value="">Riyadh North</option>
            <option value="">Riyadh South</option>
          </select>
        </div>

        {/* Second Title + 2 Inputs */}
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Vehicle Information
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter vehicle type"
            className="border border-gray-300 p-3 rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Enter license number"
            className="border border-gray-300 p-3 rounded-lg w-full"
          />
        </div>

        {/* Bottom Buttons */}
        <div className="flex justify-end gap-4">
          <button
            className="px-5 py-2 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-200"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
          <button
            className="flex items-center gap-2 px-5 py-2 bg-[#F46609] text-white rounded-lg hover:bg-[#e68341]"
            onClick={handleSubmit}
          >
            <Plus className="w-5 h-5" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default DriverForm;
