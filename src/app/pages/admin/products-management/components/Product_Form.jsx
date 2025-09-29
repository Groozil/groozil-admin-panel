import { ImageUp, Plus, X } from "lucide-react";
import React, { useRef, useState } from "react";

const ProductForm = ({ setIsAddProduct }) => {
  const [images, setImages] = useState("");

  const textareaRef = useRef(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // reset height
      textarea.style.height = textarea.scrollHeight + "px"; // set new height
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages(newImages);
  };

  const handleSubmit = () => {
    setIsAddProduct(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="max-w-2xl w-full mx-4 p-6 bg-white shadow-lg rounded-xl overflow-y-auto max-h-[90vh] hide-scrollbar">
        {/* Close X Button */}
        <button
          onClick={() => setIsAddProduct(false)}
          className="absolute top-8 right-[25%] translate-x-1/2 p-2 rounded-full hover:bg-gray-200"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Add New Product
        </h2>

        {/* Image Upload */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-4">
            <label className="w-full h-32 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg text-gray-400 cursor-pointer hover:bg-gray-50">
              <ImageUp className="w-6 h-6 mb-1" />
              <span className="text-sm">
                <span className="text-[#F46609] font-medium">Click to upload image</span> or
                Drag & Drop
              </span>
              <span className="text-xs">PNG, JPG up to (max. 5MB)</span>
              <span className="text-xs">{images}</span>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* First Set of Inputs (6 inputs, 2 per row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter product name"
            className="border border-gray-300 p-3 rounded-lg w-full"
          />
          <select className="border border-gray-300 text-gray-400 p-3 rounded-lg w-full">
            <option value="">Select Category</option>
            <option value="">Fruits</option>
            <option value="">Vegetables</option>
          </select>
          <input
            type="number"
            placeholder="Enter price(SAR)"
            className="border border-gray-300 p-3 rounded-lg w-full"
          />
          <input
            type="number"
            placeholder="Enter stock quantity"
            className="border border-gray-300 p-3 rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Enter SKU (FRT-BAN-001)"
            className="border border-gray-300 p-3 rounded-lg w-full"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 mb-6">
          <textarea
            ref={textareaRef}
            onInput={handleInput}
            placeholder="Enter product description"
            className="border border-gray-300 p-3 rounded-lg w-full resize-none overflow-hidden"
          />
        </div>

        {/* Bottom Buttons */}
        <div className="flex justify-end gap-4">
          <button
            className="px-5 py-2 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-200"
            onClick={() => setIsAddProduct(false)}
          >
            Cancel
          </button>
          <button
            className="flex items-center gap-2 px-5 py-2 bg-[#F46609] text-white rounded-lg hover:bg-[#e68341]"
            onClick={handleSubmit}
          >
            <Plus className="w-5 h-5" />
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
