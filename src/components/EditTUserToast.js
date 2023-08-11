import React, { useState } from "react";

const EditUserToast = ({ user, onClose, onEdit }) => {
  const [newName, setNewName] = useState(user.fullname);

  const handleChange = (value) => {
    setNewName(value);
  };

  const handleApply = (e) => {
    e.preventDefault();
    onEdit(user, newName);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg custom-toast">
      <h2 className="text-xl font-semibold mb-4">Edit</h2>
      <label htmlFor="fullName" className="block mb-2">
        Enter Full Name
      </label>
      <input
        type="text"
        id="fullName"
        className="w-full border rounded p-2 mb-4"
        defaultValue={user.fullname}
        value={newName}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          className="bg-gray-50 text-gray-700 px-4 py-2 rounded-md"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
          onClick={handleApply}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default EditUserToast;
