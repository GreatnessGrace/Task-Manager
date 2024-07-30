import React from 'react';
import { CiCirclePlus } from "react-icons/ci";

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
        <a href="#" className="block text-purple-600">Home</a>
        <a href="#" className="block text-gray-700">Boards</a>
        <a href="#" className="block text-gray-700">Settings</a>
        <a href="#" className="block text-gray-700">Teams</a>
        <a href="#" className="block text-gray-700">Analytics</a>
      </nav>
      <button className="w-full mt-6 py-2 bg-purple-600 text-white rounded-lg flex items-center justify-center">Create new task <CiCirclePlus className='ml-2 bg-white text-black rounded-lg'/></button>
    </div>
  );
};

export default Sidebar;
