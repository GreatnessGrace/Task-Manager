"use client";
import React, { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";
import Sidebar from '../components/Sidebar';
import TaskBoard from '../components/TaskBoard';
import TaskCards from '../components/TaskCards';
import CreateTaskForm from '../components/TaskForm';
import { CiCircleQuestion } from "react-icons/ci";

interface DecodedToken {
  username: string; 
}

const TaskPage: React.FC = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCreatingTask, setIsCreatingTask] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

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

    fetchTasks();
    getUsernameFromToken();
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
          <h1 className="text-3xl font-semibold">
            Good morning, {username || 'User'}!
          </h1>
          <button className="text-gray-800 font-semibold flex items-center">
            Help & feedback <CiCircleQuestion className='font-semibold text-xl mt-1 ml-1'/>
          </button>
        </header>
        <TaskCards />
        <TaskBoard tasks={tasks} />
      </div>
      {isCreatingTask && (
        <CreateTaskForm
          onClose={() => setIsCreatingTask(false)}
          onTaskCreated={handleTaskCreated}
          initialStatus={''}
        />
      )}
    </div>
  );
};

export default TaskPage;
