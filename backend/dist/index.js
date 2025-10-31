const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/api/tasks', (req, res) => {
  res.json([
    { id: 1, title: "Set up frontend and backend" },
    { id: 2, title: "Dockerize both apps" },
    { id: 3, title: "Deploy to Azure VM" }
  ]);
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Backend running on port 3000');
});