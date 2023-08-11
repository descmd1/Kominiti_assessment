import { useState, useEffect } from "react";
import clear from "../icons/delete.svg";
import drag from "../icons/drag.svg";
import edit from "../icons/edit.svg";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditUserToast from "./EditTUserToast";
import DeleteUserToast from "./DeleteUserToast";

const UserList = ({ users }) => {
  const initialOneItems = JSON.parse(localStorage.getItem("listOne")) || users;
  const initialTwoItems = JSON.parse(localStorage.getItem("listTwo")) || [];

  const [draggedList, setDraggedList] = useState(initialTwoItems);
  const [isDragging, setIsDragging] = useState(false);
  const [list, setList] = useState(initialOneItems);
  const [page1, setPage1] = useState(initialOneItems);
  // const [page2, setPage2] = useState(users.slice(10));
  const [currentPage, setCurrentPage] = useState(1);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);

  useEffect(() => {
    const savedDraggedList =
      JSON.parse(localStorage.getItem("draggedList")) || [];
    setDraggedList(savedDraggedList);
  }, []);

  const handleEditClick = (user) => {
    setUserToEdit(user);
    // setShowEditModal(true);
    const toastId = toast(
      <EditUserToast
        user={user}
        onClose={() => toast.dismiss(toastId)}
        onEdit={handleEdit}
      />,
      {
        position: "top-center",
        autoClose: false,
        closeOnClick: false,
        closeButton: false,
        onOpen: () => {},
        onClose: () => {},
      }
    );
  };

  const handleDelete = (userToDelete) => {
    const updatedList = list.filter(
      (user) => user?.user_id !== userToDelete?.user_id
    );
    setList(updatedList);
    localStorage.setItem("listOne", JSON.stringify(updatedList));
    const updatedPage1 = page1.filter(
      (user) => user?.user_id !== userToDelete?.user_id
    );
    setPage1(updatedPage1);
    const updatedDraggedList = draggedList.filter(
      (user) => user?.user_id !== userToDelete?.user_id
    );
    setDraggedList(updatedDraggedList);

    // const updatedPage2 = page2.filter(
    //   (user) => user.user_id !== userToDelete.user_id
    // );
    // setPage2(updatedPage2);
    setTimeout(() => {
      // Show a success toast
      toast.success(
        "The user has been successfully deleted. you can now breathe a sign of releief as the task is completed.",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
    }, 1000);
  };

  const handleEdit = (userToEdit, newName) => {
    const currentList = [...page1];
    const updatedList = currentList.map((user) => {
      if (user?.user_id === userToEdit.user_id) {
        return { ...user, fullname: newName };
      } else {
        return user;
      }
    });
    setPage1(updatedList);
    localStorage.setItem("listOne", JSON.stringify(updatedList));
    setTimeout(() => {
      // Show a success toast
      toast.success("updated successful!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }, 1000);
  };

  const handleDeleteClick = (user) => {
    // Show custom toast for delete
    const toastId = toast(
      <DeleteUserToast
        user={user}
        onCancel={() => toast.dismiss(toastId)}
        onDelete={() => handleDelete(user)}
      />,
      {
        position: "top-center",
        autoClose: false,
        closeOnClick: false,
        closeButton: false,
        onOpen: () => {},
        onClose: () => {},
      }
    );
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragStart = (event, user, index) => {
    // event.dataTransfer.setData("user_id", user_id);
    event.dataTransfer.setData("application/json", JSON.stringify(user, index));
  };

  const targetClassName = `mt-4 p-4 bg-white rounded-lg shadow-lg border-dash border-2 min-h-60 ${
    isDragging ? "border-green" : "border-indigo-300"
  }`;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.persist();
    const transferredUser = JSON.parse(
      event.dataTransfer.getData("application/json")
    );

    const updatedList = page1.filter(
      (user) => user?.user_id !== transferredUser?.user_id
    );

    setDraggedList([...draggedList, transferredUser]);
    setPage1(updatedList);
    setIsDragging(false);

    // Save the updated dragged list to localStorage
    localStorage.setItem(
      "draggedList",
      JSON.stringify([...draggedList, transferredUser])
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3">
      {" "}
      {/* Adjust the grid layout for small screens */}
      <div className="p-4 mt-5 bg-white rounded-lg shadow-lg">
        {currentPage === 1 && (
          <ul className="list-none p-0 m-0 border min-h-40">
               <div className="flex flex-col sm:flex-row border mb-2 px-4 sm:px-6 py-2 sm:py-4">
              <div className="font-bold mb-2 sm:mb-0 sm:ml-16 w-[20%]">id</div>
              <div className="font-bold mb-2 sm:mb-0 w-[40%]">Full name</div>
              <div className="font-bold mb-2 sm:mb-0 w-[20%]">Priority</div>
              <div className="font-bold w-[20%]">Action</div>
            </div>
            {page1.map((user) => (
              <li
              key={user?.user_id}
              user_id={user?.user_id}
              draggable={true}
              onDragStart={(event) => handleDragStart(event, user)}
              className="bg-white border p-2 sm:p-4 mb-2 cursor-move flex flex-col sm:flex-row items-start sm:items-center justify-between"
            >
               <div className="flex items-center w-full sm:w-1/5 mb-2 sm:mb-0">
                <img src={drag} alt="Drag" className="mr-2" />
                <p className="text-left p-2 ml-4 sm:ml-6 font-semibold ">
                  {user?.user_id}
                </p>
              </div>
              <div className="flex-grow sm:mt-0 sm:ml-6 w-full sm:w-2/5 mb-2 sm:mb-0">
                <p className="font-semibold sm:ml-6">{user.fullname}</p>
              </div>
              <div className="flex-grow sm:mt-0 sm:ml-6 w-full sm:w-1/5 mb-2 sm:mb-0">
                <p className="font-semibold sm:ml-6 text-align-start">
                  {user.priority}
                </p>
              </div>
              <div className="flex cursor-pointer w-full sm:w-1/5">
                <img
                  src={edit}
                  alt="Edit"
                  className="mr-2"
                  onClick={() => handleEditClick(user)}
                />
                <img
                  src={clear}
                  alt="Delete"
                  onClick={() => handleDeleteClick(user)}
                />
              </div>
            </li>
            ))}
            {/* Edit Modal */}
            {showEditModal && (
              <EditModal
                user={userToEdit}
                onClose={() => setShowEditModal(false)}
                onSave={() => {
                  // Implement your save logic here
                  setShowEditModal(false);
                }}
              />
            )}

            {/* Delete Modal */}
            {showDeleteModal && (
              <DeleteModal
                user={userToDelete}
                onClose={() => setShowDeleteModal(false)}
                onDelete={() => {
                  // Implement your delete logic here
                  setShowDeleteModal(false);
                }}
              />
            )}
          </ul>
        )}
      </div>
      <div
        className={targetClassName}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {/* Target container */}
        <p className="font-bold text-center">Drag items here</p>
        <ul className="list-none p-0 m-0 border min-h-40">
          {draggedList.map((user, index) => (
            <li
              key={user.user_id}
              user_id={user?.user_id}
              draggable={true}
              onDragStart={(event) => handleDragStart(event, user, index)}
              className="bg-white border p-2 sm:p-4 mb-2 cursor-move flex flex-col sm:flex-wrap sm:flex-row items-start sm:items-center justify-between"
            >
              <div className="flex items-center">
                <img src={drag} alt="Drag" className="mr-2  w-[20%]" />
                <p className="text-left p-2 ml-4 sm:ml-6 font-semibold">
                  {user?.user_id}
                </p>
              </div>
              <div className="flex-grow mt-2 sm:mt-0 sm:ml-6  w-[40%]">
                <p className="font-semibold sm:ml-6">{user.fullname}</p>
              </div>
              <div className="flex-grow mt-2 sm:mt-0 sm:ml-6  w-[20%]">
                <p className="font-semibold sm:ml-6">{user.priority}</p>
              </div>
              <div className="flex cursor-pointer mt-2 sm:mt-0  w-[20%]">
                <img
                  src={edit}
                  alt="Edit"
                  className="mr-2"
                  onClick={() => handleEditClick(user)}
                />
                <img
                  src={clear}
                  alt="Delete"
                  onClick={() => handleDeleteClick(user)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Pagination buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-5">
        <button onClick={() => handlePageChange(1)} className="font-bold">
          Prev{" "}
          <span className="bg-white-500 hover:bg-green-600 active:bg-green-700 active:text-white rounded-xl focus:outline-none focus:ring focus:ring-green-300 px-4">
            1
          </span>
        </button>
        <button onClick={() => handlePageChange(2)} className="font-bold">
          {" "}
          <span className="bg-white-500 hover:bg-green-600 active:bg-green-700 active:text-white rounded-xl focus:outline-none focus:ring focus:ring-green-300 px-4">
            2
          </span>{" "}
          Next
        </button>
      </div>
      <ToastContainer position="bottom-center" style={{ width: "100%", maxWidth: "30rem" }}/>
    </div>
  );
};

export default UserList;

 