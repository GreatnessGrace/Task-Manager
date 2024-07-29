// src/components/TaskBoard.tsx
'use client';

import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialTasks = {
  'To-Do': [],
  'In Progress': [],
  'Under Review': [],
  'Completed': []
};

const TaskBoard: React.FC = () => {
  const [tasks, setTasks]: any = useState(initialTasks);

  const onDragEnd = (result: any) => {
    const { source, destination } = result;
    if (!destination) return;

    const updatedTasks:any = { ...tasks };
    const [movedTask] = updatedTasks[source.droppableId].splice(source.index, 1);
    updatedTasks[destination.droppableId].splice(destination.index, 0, movedTask);

    setTasks(updatedTasks);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {Object.keys(tasks).map((column) => (
        <Droppable droppableId={column} key={column}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <h2>{column}</h2>
              {tasks[column].map((task: any, index: number) => (
                <Draggable draggableId={task.id} index={index} key={task.id}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {task.title}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
    </DragDropContext>
  );
};

export default TaskBoard;
