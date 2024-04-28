// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Connect to MongoDB without deprecated options
mongoose.connect('mongodb://localhost:27017/profile')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/profile.html');
});

// Route to handle form submission
app.post('/updateprofile', async (req, res) => {
  // Extract data from request body
  const { name, email, department, cabin_no } = req.body;

  // Check if a file has been uploaded
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  // Create a new user instance
  const newUser = new User({
    name,
    email,
    department,
    cabin_no,
    profile_photo: req.file.path // Assuming you're using multer for file upload
  });

  try {
    // Save the user data to MongoDB using async/await
    const savedUser = await newUser.save();
    console.log('User saved successfully:', savedUser);
    res.status(200).json({ message: 'User data saved successfully' });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: 'Failed to save user data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
