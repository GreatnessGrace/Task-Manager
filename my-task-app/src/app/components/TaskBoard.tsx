"use client"
import React, {useEffect, useState } from 'react';
import TaskColumn from './TaskColumn';
import { CiCirclePlus, CiCalendar, CiFilter, CiShare2, CiSearch } from "react-icons/ci";
import { BsStars } from "react-icons/bs";
import TaskForm from './TaskForm';
import CreateTaskForm from '../components/TaskForm';

const TaskBoard: React.FC<{ tasks: any[] }> = ({ tasks }) => {
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/tasks');
        const data = await response.json();
        setTasks(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const [task, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState('');
  const [isCreatingTask, setIsCreatingTask] = useState(false);

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );
  const handleTaskCreated = async () => {
    const response = await fetch('http://localhost:5000/api/tasks');
    const data = await response.json();
    setTasks(data);
  };
 
  const columns = ['To do', 'In progress', 'Under review', 'Finished'];
  if (loading) {
    return <div>Loading...</div>;
  }
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
          {/* <button className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md flex items-center"> */}
            {/* Create new <CiCirclePlus className='ml-2 bg-white text-black rounded-lg'/> */}
          {/* </button> */}
          <div className="flex justify-end mb-4">
          <button
            className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md flex items-center"
            onClick={() => setIsCreatingTask(true)}
          >
            Create new <CiCirclePlus className='ml-2 bg-white text-black rounded-lg'/>
          </button>
          {isCreatingTask && (
        <CreateTaskForm
                onClose={() => setIsCreatingTask(false)}
                onTaskCreated={handleTaskCreated} initialStatus={''}        />
      )}
        </div>
        </div>
      </div>
      <div className="flex space-x-0">
        {columns.map(column => (
          <TaskColumn
            key={column}
            title={column}
            tasks={filteredTasks.filter(task => task.status === column)} onTaskCreated={function (): void {
              throw new Error('Function not implemented.');
            } }          />
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
