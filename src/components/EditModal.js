import React, { useState } from "react";

const EditModal = ({ user, onClose, onSave }) => {
  const [newName, setNewName] = useState("");

  const handleChange = (value) => {
    setNewName(value);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Edit</h2>
        {/* Add input fields and form elements for editing */}
        <form className="flex flex-col w-[600px]">
          <label>Enter Full name</label>
          <input
            type="text"
            placeholder=" e.g enter full name"
            onChange={(e) => handleChange(e.target.value)}
            value={newName}
            className="w-[560px] h-[70px] border rounded-lg"
          />
          <div className="flex justify-end gap-4 mt-2">
            <button
              className="bg-gray-50 text-gray-700 px-4 py-2 rounded-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
              onClick={onSave}
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
