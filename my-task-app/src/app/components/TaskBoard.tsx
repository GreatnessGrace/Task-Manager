// // src/components/TaskBoard.tsx
'use client';

import React, { useState } from 'react';
import TaskColumn from './TaskColumn';
import { CiCirclePlus, CiCalendar, CiFilter, CiShare2, CiSearch    } from "react-icons/ci";
import { BsStars } from "react-icons/bs";

const TaskBoard: React.FC = () => {

  const [search, setSearch] = useState('');

  
  return (
    <div>
      <div className="flex px-4 py-2 justify-between items-center mb-6 ">
        <div className="flex space-x-4">
              <div className="relative flex items-center">
      <input
        type="search"
        value={search}
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        required
        className="pl-5 pr-4 py-2 border rounded-lg focus:outline-none focus:border-gray-400 bg-white w-full" 
      />
      <CiSearch className="absolute right-3 text-gray-500 text-xl" />
    </div>
    </div>
    <div className="flex space-x-4 items-center">
          <button className="px-4 flex items-center">Calendar view <CiCalendar className='ml-2 text-3xl'/></button>
          <button className="px-4 flex items-center">Automation <BsStars className='ml-2 text-3xl'/></button>
          <button className="px-4 flex items-center">Filter <CiFilter className='ml-2 text-3xl'/></button>
          <button className="px-4 flex items-center">Share <CiShare2 className='ml-2 text-3xl'/></button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md flex items-center">Create new <CiCirclePlus className='ml-2 bg-white text-black rounded-lg'/></button>
        </div>
      </div>
      <div className="flex space-x-0">
        <TaskColumn title="To do" tasks={[{ id: 1, title: 'Implement User Authentication', description:"Develop and Integrate user authentication using email and password.", priority: 'Urgent', date: '2024-08-15', time: '1 hr ago' }, /* more tasks */]} />
        <TaskColumn title="In progress" tasks={[{ id: 2, title: 'Design Home Page UI',  description:"Develop and Integrate user authentication using email and password.", priority: 'Medium', date: '2024-08-15', time: '1 hr ago' },{ id: 3, title: 'Develop and Integrate user authentication using email and password.',description:"Some Description", priority: 'Low', date: '2024-08-15', time: '3 hr ago' }, /* more tasks */]} />
        <TaskColumn title="Under review" tasks={[{ id: 4, title: 'Integrate Cloud Storage',description:"Develop and Integrate user authentication using email and password.", priority: 'Urgent', date: '2024-08-20', time: '2 days ago' }, /* more tasks */]} />
        <TaskColumn title="Finished" tasks={[{ id: 5, title: 'Test Cross-browser Compatibility',description:"Develop and Integrate user authentication using email and password.", priority: 'Medium', date: '2024-07-30', time: '4 days ago' }, /* more tasks */]} />
      </div>
    </div>
  );
};

export default TaskBoard;
