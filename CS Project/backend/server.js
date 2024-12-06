// Sets up the server
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


// Create Express app
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/testDatabase';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define Schema and Model to check database connection
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});
const User = mongoose.model('User', userSchema);


app.get('/data', async (_req, res) => {
  try {
    // Fetch all documents from the 'users' collection
    const users = await mongoose.connection.db.collection('users').find({}).toArray();
    
    // Log the data to see if it's being fetched correctly
    console.log('Users data:', users);

    // Send the data back to the client
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).send('Failed to fetch data');
  }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
