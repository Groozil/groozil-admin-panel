import { Plus, X } from "lucide-react";
import React, { useRef } from "react";

const SubcategoryForm = ({ setIsAddSubcategory }) => {
  const textareaRef = useRef(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // reset height
      textarea.style.height = textarea.scrollHeight + "px"; // set new height
    }
  };

  const handleSubmit = () => {
    setIsAddSubcategory(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="max-w-2xl w-full mx-4 p-6 bg-white shadow-lg rounded-xl overflow-y-auto max-h-[90vh] hide-scrollbar">
        {/* Close X Button */}
        <button
          onClick={() => setIsAddSubcategory(false)}
          className="absolute top-28 right-[25%] translate-x-1/2 p-2 rounded-full hover:bg-gray-200 cursor-pointer"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Add New Subcategory
        </h2>

        <div className="grid grid-cols-1 gap-4 mb-6">
          <input
            type="text"
            placeholder="Subcategory name (Fruits & vegetables)"
            className="border border-gray-300 p-3 rounded-lg w-full"
          />
          <select
            className="border border-gray-300 p-3 rounded-lg w-fullfocus:ring-2 focus:ring-blue-500 outline-none text-gray-500"
            placeholder="Select Parent Category"
          >
            <option value="">Select Parent Category</option>
            <option value="Fruits & vegetables">Fruits & vegetables</option>
            <option value="Vegetables & fruits">Vegetables & fruits</option>
          </select>
          <textarea
            ref={textareaRef}
            onInput={handleInput}
            placeholder="Enter brief Description of the Subcategory"
            className="border border-gray-300 pb-10 pt-3 px-3 rounded-lg w-full resize-none overflow-hidden"
          />
        </div>

        {/* Bottom Buttons */}
        <div className="flex justify-end gap-4">
          <button
            className="px-5 py-2 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-200 cursor-pointer"
            onClick={() => setIsAddSubcategory(false)}
          >
            Cancel
          </button>
          <button
            className="flex items-center gap-2 px-5 py-2 bg-[#F46609] text-white rounded-lg hover:bg-[#e68341] cursor-pointer"
            onClick={handleSubmit}
          >
            <Plus className="w-5 h-5" />
            Add Subcategory
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubcategoryForm;
