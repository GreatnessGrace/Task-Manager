import React from 'react';

interface Task {
  id: number;
  title: string;
  priority: string;
  date: string;
  time: string;
}

interface TaskColumnProps {
  title: string;
  tasks: Task[];
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks }) => {
    const priorityColors: { [key: string]: string } = {
        Urgent: 'bg-red-400 text-white',
        High: 'bg-orange-400 text-white',
        Medium: 'bg-yellow-400 text-black',
        Low: 'bg-green-400 text-white',
      };

  return (
    <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <button className={`text-sm px-2 rounded-lg ${priorityColors[task.priority]}`}>{task.priority}</button>
            {/* <button className="text-sm bg-red-400  px-2 rounded-lg text-gray-500">{task.priority}</button> */}
            <p className="text-sm text-gray-500">{task.date}</p>
            <p className="text-sm text-gray-500">{task.time}</p>
          </div>
        ))}
        <button className="w-full bg-black text-white py-2 rounded-lg shadow-md">Add new</button>
      </div>
    </div>
  );
};

export default TaskColumn;
