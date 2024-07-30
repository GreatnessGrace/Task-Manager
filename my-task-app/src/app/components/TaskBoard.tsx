// // src/components/TaskBoard.tsx
// 'use client';

// import React, { useState } from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// const initialTasks = {
//   'To-Do': [],
//   'In Progress': [],
//   'Under Review': [],
//   'Completed': []
// };

// const TaskBoard: React.FC = () => {
//   const [tasks, setTasks]: any = useState(initialTasks);

//   const onDragEnd = (result: any) => {
//     const { source, destination } = result;
//     if (!destination) return;

//     const updatedTasks:any = { ...tasks };
//     const [movedTask] = updatedTasks[source.droppableId].splice(source.index, 1);
//     updatedTasks[destination.droppableId].splice(destination.index, 0, movedTask);

//     setTasks(updatedTasks);
//   };

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       {Object.keys(tasks).map((column) => (
//         <Droppable droppableId={column} key={column}>
//           {(provided) => (
//             <div ref={provided.innerRef} {...provided.droppableProps}>
//               <h2>{column}</h2>
//               {tasks[column].map((task: any, index: number) => (
//                 <Draggable draggableId={task.id} index={index} key={task.id}>
//                   {(provided) => (
//                     <div
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                     >
//                       {task.title}
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       ))}
//     </DragDropContext>
//   );
// };

// export default TaskBoard;


import React from 'react';
import TaskColumn from './TaskColumn';
import { CiCirclePlus } from "react-icons/ci";

const TaskBoard: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-white rounded-lg shadow-md">Search</button>
          <button className="px-4 py-2 bg-white rounded-lg shadow-md">Calendar view</button>
          <button className="px-4 py-2 bg-white rounded-lg shadow-md">Automation</button>
          <button className="px-4 py-2 bg-white rounded-lg shadow-md">Filter</button>
          <button className="px-4 py-2 bg-white rounded-lg shadow-md">Share</button>
        </div>
        {/* <div className="flex justify-between items-center mb-4"> */}

        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md flex items-center justify-between">Create new &nbsp;<CiCirclePlus className='bg-white text-black rounded-lg'/>
        </button>
      </div>
      <div className="flex space-x-4">
        <TaskColumn title="To do" tasks={[{ id: 1, title: 'Implement User Authentication', priority: 'Urgent', date: '2024-08-15', time: '1 hr ago' }, /* more tasks */]} />
        <TaskColumn title="In progress" tasks={[{ id: 2, title: 'Design Home Page UI', priority: 'Medium', date: '2024-08-15', time: '1 hr ago' },{ id: 3, title: 'Conduct User Feedback Survey', priority: 'Low', date: '2024-08-15', time: '3 hr ago' }, /* more tasks */]} />
        <TaskColumn title="Under review" tasks={[{ id: 4, title: 'Integrate Cloud Storage', priority: 'Urgent', date: '2024-08-20', time: '2 days ago' }, /* more tasks */]} />
        <TaskColumn title="Finished" tasks={[{ id: 5, title: 'Test Cross-browser Compatibility', priority: 'Medium', date: '2024-07-30', time: '4 days ago' }, /* more tasks */]} />
      </div>
    </div>
  );
};

export default TaskBoard;
