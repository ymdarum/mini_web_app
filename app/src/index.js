const express = require('express');
const path = require('path');

const app = express();
const PORT = 3002;

// Serve static files
app.use(express.static(path.join(__dirname, '../')));

// Handle root request
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../app/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
