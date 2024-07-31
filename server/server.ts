import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { USER } from './models/User';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
const taskRoutes = require('./routes/tasks');

const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Database connection
// const connectToDatabase = async () => {
//   try {
//     const uri = process.env.MONGODB_URI; 
//     if (!uri) {
//       throw new Error('MONGODB_URI is not defined in .env file');
//     }
//       console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Failed to connect to MongoDB', error);
//     process.exit(1); // Exit process if connection fails
//   }
// };
const MONGO_URI = process.env.MONGO_URI ;

export const connectToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) return;
  if (!MONGO_URI) {
          throw new Error('MONGODB_URI is not defined in .env file');
        }
  try {
    await mongoose.connect(MONGO_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};
// if (!process.env.JWT_SECRET) {
//   throw new Error('MONGODB_URI is not defined in .env file');
// }
const JWT_SECRET = '12345'
app.use('/api', taskRoutes);

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

// Login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
console.log(req.body)
  try {
    // Find the user
    const user = await USER.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password as string);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a token
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start server
// app.listen(5000, async () => {
//   await connectToDatabase();
//   console.log('Server is running on port 5000');
// });
connectToDatabase().then(() => {
  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });
});