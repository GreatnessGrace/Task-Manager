"use client"
import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import TaskBoard from '../components/TaskBoard';
import TaskCards from '../components/TaskCards';
import CreateTaskForm from '../components/TaskForm';
import { CiCircleQuestion, CiCirclePlus } from "react-icons/ci";

const TaskPage: React.FC = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCreatingTask, setIsCreatingTask] = useState(false);

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

  const handleTaskCreated = async () => {
    const response = await fetch('http://localhost:5000/api/tasks');
    const data = await response.json();
    setTasks(data);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Good morning, Joe!</h1>
          <button className="text-gray-800 font-semibold flex flex-center justify-center">
            Help & feedback <CiCircleQuestion className='font-semibold text-xl mt-1 ml-1'/>
          </button>
        </header>
        <TaskCards />
      
        <TaskBoard tasks={tasks} />
      </div>
      {isCreatingTask && (
        <CreateTaskForm
          onClose={() => setIsCreatingTask(false)}
          onTaskCreated={handleTaskCreated} initialStatus={''}        />
      )}
    </div>
  );
};

export default TaskPage;

