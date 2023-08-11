import React from "react";

const DeleteModal = ({ user, onClose, onDelete }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Delete User</h2>
        {/* Display user information and confirmation message */}
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
          onClick={onDelete}
        >
          Delete
        </button>
        <button
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
