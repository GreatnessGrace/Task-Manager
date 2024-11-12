'use client';

import React, { useEffect, useState } from 'react';
import { CiCirclePlus, CiLight } from "react-icons/ci";
import { IoHomeOutline, IoClipboardSharp, IoAnalytics } from "react-icons/io5";
import { IoIosSettings, IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineTeam } from "react-icons/ai";
import { TbPlayerTrackNext } from "react-icons/tb";
import { TfiDownload } from "react-icons/tfi";
import { useRouter } from 'next/navigation';
import CreateTaskForm from '../components/TaskForm';
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  username: string; 
}


const Sidebar: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null);

  const [task, setTasks] = useState([]);
  const router = useRouter();
  const [isCreatingTask, setIsCreatingTask] = useState(false);
  const handleTaskCreated = async () => {
    const response = await fetch('http://localhost:5000/api/tasks');
    const data = await response.json();
    setTasks(data);
  };
  const handleLogout = () => {
    localStorage.removeItem('token'); 
    router.push('/');
  };

  useEffect(() => {

  const getUsernameFromToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode<DecodedToken>(token);
        setUsername(decodedToken.username);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  };
  getUsernameFromToken();
}, []);

  return (
    <div className="w-64 bg-white shadow-md flex flex-col h-screen p-4">
      <div className="flex items-center space-x-4 mb-2">
        <img
          className="w-10 h-10 rounded-full"
          src="/download.jpg"
          alt="User Avatar"
        />
        <div>
          <p className="text-lg font-semibold">{username}</p>
        </div>
      </div>
      <div className='flex items-center mb-4'>
        <IoIosNotificationsOutline className="mr-3" /> 
        <CiLight className="mr-3" />
        <TbPlayerTrackNext className="mr-3" />
        <button onClick={handleLogout} className="w-1/2 rounded-sm bg-gray-200 ml-5">Logout</button>
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
        {/* <button className="w-full mt-6 py-2 bg-purple-600 text-white rounded-lg flex items-center justify-center">
        Create new task <CiCirclePlus className='ml-2 bg-white text-black rounded-lg' />
      </button> */}
      <button
            className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md flex items-center"
            onClick={() => setIsCreatingTask(true)}
          >
            Create new task<CiCirclePlus className='ml-2 bg-white text-black rounded-lg'/>
          </button>
          {isCreatingTask && (
        <CreateTaskForm
                onClose={() => setIsCreatingTask(false)}
                onTaskCreated={handleTaskCreated} initialStatus={''}        />)}
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
