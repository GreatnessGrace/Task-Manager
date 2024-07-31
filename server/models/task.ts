const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: String, required: true },
  status: { type: String, enum: ['To do', 'In progress', 'Under review', 'Finished'], default: 'To do' },
  date: { type: Date, required: true },
  time: { type: String, required: true }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
