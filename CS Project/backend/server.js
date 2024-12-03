const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the backend!');
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
