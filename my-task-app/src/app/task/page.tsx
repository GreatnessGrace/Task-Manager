import React from 'react';
import Sidebar from '../components/SideBar';
import TaskBoard from '../components/TaskBoard';

const TaskPage: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Good morning, Joe!</h1>
          <button className="text-gray-500">Help & feedback</button>
        </header>
        <TaskBoard />
      </div>
    </div>
  );
};

export default TaskPage;
