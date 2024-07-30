import React from 'react';
import Sidebar from '../components/Sidebar';
import TaskBoard from '../components/TaskBoard';
import TaskCards from '../components/TaskCards';
import { CiCircleQuestion } from "react-icons/ci";

const TaskPage: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Good morning, Joe!</h1>
          <button className="text-gray-800 font-semibold flex flex-center justify-center">Help & feedback <CiCircleQuestion className='font-semibold text-xl mt-1 ml-1'/></button>
        </header>
        <TaskCards />
        <TaskBoard />
      </div>
    </div>
  );
};

export default TaskPage;
