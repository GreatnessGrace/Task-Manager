import React from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { IoHomeOutline, IoClipboardSharp, IoAnalytics   } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { AiOutlineTeam } from "react-icons/ai";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white shadow-md p-4">
      <div className="flex items-center space-x-4 mb-6">
        <img
          className="w-10 h-10 rounded-full"
          src="/download.jpg"
          
          alt="User Avatar"
        />
        <div>
          <p className="text-lg font-semibold">Joe Gardner</p>
          <p className="text-sm text-gray-500">Good morning!</p>
        </div>
      </div>
      <nav className="space-y-4">
        <a href="#" className="block text-purple-600 flex items-center"> <IoHomeOutline className="mr-2"/>
         Home</a>
        <a href="#" className="block text-gray-700 flex items-center "><IoClipboardSharp className="mr-2"/> Boards</a>
        <a href="#" className="block text-gray-700 flex items-center "><IoIosSettings  className="mr-2"/> Settings</a>
        <a href="#" className="block text-gray-700 flex items-center "><AiOutlineTeam className="mr-2"/> Teams</a>
        <a href="#" className="block text-gray-700 flex items-center "><IoAnalytics className="mr-2"/> Analytics</a>
      </nav>
      <button className="w-full mt-6 py-2 bg-purple-600 text-white rounded-lg flex items-center justify-center">Create new task <CiCirclePlus className='ml-2 bg-white text-black rounded-lg'/></button>
    </div>
  );
};

export default Sidebar;
