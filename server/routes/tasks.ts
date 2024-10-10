import express from 'express';
const router = express.Router();
const Task = require('../models/task');

// Get all tasks
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err:any) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new task
router.post('/tasks', async (req, res) => {
  const { title, description, priority, status, date, time } = req.body;

  const task = new Task({
    title,
    description,
    priority,
    status,
    date,
    time
  });

  try {
    const newTask = await task.save();
    res.json(newTask);
  } catch (err:any) {
    res.status(400).json({ message: err.message });
  }
});

// Update a task
router.put('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    Object.assign(task, req.body);
    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (err:any) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a task
router.delete('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    await task.remove();
    res.json({ message: 'Task deleted' });
  } catch (err:any) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
