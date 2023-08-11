import React from "react";
import polygon from "../icons/polygon.svg";
import circle from "../icons/circle.svg";
import btn1 from "../icons/btn1.svg";
import btn2 from "../icons/btn2.svg";
const Header = () => {
  return (
    <>
      <header className="bg-slate-100 p-4">
        <img src={circle} alt="circle" width={8000} />
      </header>
      <div className="flex flex-col md:flex-row md:ml-12">
        <h3 className="font-bold mb-4 md:mb-0">Employees</h3>
        <div className="flex flex-col md:flex-row md:ml-auto md:ml-0">
          <div className="relative mb-4 md:mb-0 md:mr-8">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="w-full p-4 pl-10 text-sm text-gray-900 border border-green-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
            />
          </div>
          <div className="flex gap-2 md:gap-4">
            <img
              src={btn1}
              alt="circle"
              width={100}
              className="hidden md:block"
            />
            <img
              src={btn2}
              alt="circle"
              width={60}
              className="hidden md:block"
            />
            <svg
              className="w-6 h-6 md:hidden"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
