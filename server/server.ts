import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { USER } from './models/User';
import 'dotenv/config';

const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Database connection
const connectToDatabase = async () => {
  const uri = process.env.MONGODB_URI;
  try {
    const uri = process.env.MONGODB_URI; 
    if (!uri) {
      throw new Error('MONGODB_URI is not defined in .env file');
    }
      console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1); // Exit process if connection fails
  }
};

// Signup route
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);

  try {
    // Check if user already exists
    const existingUser = await USER.findOne({ email });
    if (existingUser) {
      console.log("existingUser", existingUser);
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashed Password", hashedPassword);

    // Create a new user
    const newUser = new USER({ name, email, password: hashedPassword });
    console.log(newUser);
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error', error: error });
  }
});

// Start server
app.listen(5000, async () => {
  await connectToDatabase();
  console.log('Server is running on port 5000');
});
