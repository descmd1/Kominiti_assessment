import React from "react";
import polygon from '../icons/polygon.svg'
import circle from '../icons/circle.svg'
import btn1 from '../icons/btn1.svg'
import btn2 from '../icons/btn2.svg'
const Header = () => {
  return (
    <>
    <header className="bg-slate-100 p-4">
      <img src={circle} alt="circle" width={8000}/>
    </header>
    <div className="flex flex-row ml-12">
        <h3 className="font-bold">Employees</h3>
        <div className="flex flex-row ml-[60%]">        
            <div class="relative mr-8">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="w-[20rem] p-4 pl-10 text-sm text-gray-900 border border-green-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
         <div className="flex flex-row gap-4">
         <img src={btn1} alt="circle" width={150}/>
         <img src={btn2} alt="circle" width={100}/>
         </div>
         </div>
    </div>
    </>
  );
};

export default Header;