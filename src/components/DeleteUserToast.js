import React from "react";
import { toast } from "react-toastify";
import clear from "../icons/delete.svg";

const DeleteUserToast = ({ user, onCancel, onDelete }) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg custom-toast"
    style={{ width: "100%", maxWidth: "28rem" }}>
      <img
        src={clear}
        alt="delete"
        onClick={() => {
          onDelete(user);
          toast.dismiss();
        }}
        className="cursor-pointer bg-green-50  border rounded-3xl mb-2"
      />
      <h3 className="text-start mb-2 font-bold">Delete User</h3>
      <p className="text-start mb-4">
        Are you sure you want to delete this user's details?
      </p>
      <div className="flex justify-end">
        <button
          className="bg-gray-50 text-gray-700 px-4 py-2 rounded-md"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
          onClick={() => {
            onDelete(user);
            toast.dismiss();
          }}
        >
          Yes, delete
        </button>
      </div>
    </div>
  );
};

export default DeleteUserToast;
