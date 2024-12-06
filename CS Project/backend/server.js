// Sets up the server
const express = require('express');

// Make sure the backend is communicated with the frontend
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

app.use(cors());

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// route
app.get('/', (req, res) => {
  res.send('Welcome to the backend!');
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
