const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Mock database (in-memory)
let tasks = [
  { id: 1, title: "Set up frontend and backend", description: "", createdAt: new Date(), status: "pending" },
  { id: 2, title: "Dockerize both apps", description: "", createdAt: new Date(), status: "pending" },
  { id: 3, title: "Deploy to Azure VM", description: "", createdAt: new Date(), status: "pending" }
];

// GET all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// POST new task
app.post('/api/tasks', (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    description: description || "",
    createdAt: new Date(),
    status: "pending"
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// DELETE task by ID
app.delete('/api/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  tasks.splice(index, 1);
  res.json({ message: "Task deleted" });
});

// PUT mark as complete
app.put('/api/tasks/:id/complete', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  task.status = "complete";
  res.json(task);
});

// PUT mark as pending
app.put('/api/tasks/:id/pending', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  task.status = "pending";
  res.json(task);
});

// Start server
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on port ${PORT}`);
});