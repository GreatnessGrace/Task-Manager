import React from 'react';
import { CiCirclePlus, CiLight } from "react-icons/ci";
import { IoHomeOutline, IoClipboardSharp, IoAnalytics } from "react-icons/io5";
import { IoIosSettings, IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineTeam } from "react-icons/ai";
import { TbPlayerTrackNext } from "react-icons/tb";
import { TfiDownload } from "react-icons/tfi";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white shadow-md flex flex-col h-screen p-4">
      <div className="flex items-center space-x-4 mb-2">
        <img
          className="w-10 h-10 rounded-full"
          src="/download.jpg"
          alt="User Avatar"
        />
        <div>
          <p className="text-lg font-semibold">Joe Gardner</p>
        </div>
      </div>
      <div className='flex items-center mb-4'>
        <IoIosNotificationsOutline className="mr-3" /> 
        <CiLight className="mr-3" />
        <TbPlayerTrackNext className="mr-3" />
        <button className="w-1/2 rounded-sm bg-gray-200 ml-5">Logout</button>
      </div>
      <nav className="space-y-4 flex-1">
        <a href="#" className="block text-purple-600 flex items-center">
          <IoHomeOutline className="mr-2" />
          Home
        </a>
        <a href="#" className="block text-gray-700 flex items-center">
          <IoClipboardSharp className="mr-2" /> 
          Boards
        </a>
        <a href="#" className="block text-gray-700 flex items-center">
          <IoIosSettings className="mr-2" /> 
          Settings
        </a>
        <a href="#" className="block text-gray-700 flex items-center">
          <AiOutlineTeam className="mr-2" /> 
          Teams
        </a>
        <a href="#" className="block text-gray-700 flex items-center">
          <IoAnalytics className="mr-2" /> 
          Analytics
        </a>
        <button className="w-full mt-6 py-2 bg-purple-600 text-white rounded-lg flex items-center justify-center">
        Create new task <CiCirclePlus className='ml-2 bg-white text-black rounded-lg' />
      </button>
      </nav>
     
      <div className='flex items-center mt-auto bg-gray-200 rounded-sm p-2'>
        <TfiDownload className='h-full' />
        <div className='ml-2'>
          <h2 className='text-sm'>Download the app</h2>
          <h5 className='text-sm'>Get the full experience</h5>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
