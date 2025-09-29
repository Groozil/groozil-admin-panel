import { CloudUpload, ImageUp, Plus, X } from "lucide-react";
import React, { useState } from "react";

const BulkProducts = ({ setIsAddBulkProduct }) => {
  const [images, setImages] = useState("");

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages(newImages);
  };

  const handleSubmit = () => {
    setIsAddBulkProduct(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="max-w-2xl w-full mx-4 p-6 bg-white shadow-lg rounded-xl overflow-y-auto max-h-[90vh] hide-scrollbar">
        {/* Close X Button */}
        <button
          onClick={() => setIsAddBulkProduct(false)}
          className="absolute top-9 right-[25%] translate-x-1/2 p-2 rounded-full hover:bg-gray-200"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Bulk Upload Products
        </h2>

        {/* Image Upload */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-4">
            <label className="w-full h-32 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg text-gray-400 cursor-pointer hover:bg-gray-50">
              <ImageUp className="w-6 h-6 mb-1" />
              <span className="text-sm">
                <span className="text-[#F46609] font-medium">
                  Click to upload image
                </span>{" "}
                or Drag & Drop
              </span>
              <span className="text-xs">CSV, XLSX files up to (max. 10MB)</span>
              <span className="text-xs">{images}</span>
              <input
                type="file"
                multiple
                accept=".csv,.xlsx"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* First Set of Inputs (6 inputs, 2 per row) */}
        <div className="grid grid-cols-1 gap-4 mb-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Required Columns
          </h2>
          <ul className="list-disc list-inside text-gray-500 ml-2">
            <li>Name</li>
            <li>Category</li>
            <li>Price</li>
            <li>Stock</li>
            <li>SKU</li>
          </ul>
        </div>

        {/* Bottom Buttons */}
        <div className="flex justify-end gap-4">
          <button
            className="px-5 py-2 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-200 cursor-pointer"
            onClick={() => setIsAddBulkProduct(false)}
          >
            Cancel
          </button>
          <button
            className="flex items-center gap-2 px-5 py-2 bg-[#F46609] text-white rounded-lg hover:bg-[#e68341] cursor-pointer"
            onClick={handleSubmit}
          >
            <CloudUpload className="w-5 h-5" />
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default BulkProducts;
