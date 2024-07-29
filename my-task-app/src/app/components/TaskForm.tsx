import { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ task, onSave }: any) => {
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const [status, setStatus] = useState(task?.status || 'To-Do');
  const [priority, setPriority] = useState(task?.priority || 'Low');
  const [deadline, setDeadline] = useState(task?.deadline || '');

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    await axios.post('/api/tasks', { title, description, status, priority, deadline });
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="To-Do">To-Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Under Review">Under Review</option>
        <option value="Completed">Completed</option>
      </select>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="Urgent">Urgent</option>
      </select>
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default TaskForm;
