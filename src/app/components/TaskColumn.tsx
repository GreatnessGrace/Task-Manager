import React, { useState } from 'react';
import { RiMenuFold2Fill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import CreateTaskForm from '../components/TaskForm';

interface Task {
  id: number;
  title: string;
  description: string;
  priority: string;
  date: string;
  time: string;
}

interface TaskColumnProps {
  title: string;
  tasks: Task[];
  onTaskCreated: () => void;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks, onTaskCreated }) => {
  const [isCreatingTask, setIsCreatingTask] = useState(false);
  const [initialStatus, setInitialStatus] = useState('');

  const priorityColors: { [key: string]: string } = {
    Urgent: 'bg-red-400 text-white',
    High: 'bg-orange-400 text-white',
    Medium: 'bg-yellow-400 text-black',
    Low: 'bg-green-400 text-white',
  };

  const handleAddNewClick = () => {
    setInitialStatus(title);
    setIsCreatingTask(true);
  };

  return (
    <div className="flex-1 bg-white p-4 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <RiMenuFold2Fill className="h-6 w-6 text-gray-400" />
      </div>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-gray-100 p-4 rounded-lg shadow-md ">
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <h5 className="text-sm text-gray-500">{task.description}</h5>
            <button className={`text-sm px-2 rounded-lg ${priorityColors[task.priority]}`}>{task.priority}</button>
            <p className="text-sm text-gray-500 font-semibold flex items-center"><MdOutlineWatchLater className='mr-2 font-bold' />{task.date}</p>
            <p className="text-sm text-gray-500">{task.time}</p>
          </div>
        ))}
        <button
          className="px-4 py-2 bg-black text-white rounded-lg shadow-md flex items-center"
          onClick={handleAddNewClick}
        >
          Add new <FaPlus className='ml-2' />
        </button>
      </div>
      {isCreatingTask && (
        <CreateTaskForm
          onClose={() => setIsCreatingTask(false)}
          onTaskCreated={onTaskCreated}
          initialStatus={initialStatus} 
        />
      )}
    </div>
  );
};

export default TaskColumn;
