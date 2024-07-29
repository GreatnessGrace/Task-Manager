import express from 'express';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';
import { hashPassword, verifyPassword } from './utils/auth';
import { createUser, getUserByEmail } from './utils/db';

const app = express();
app.use(bodyParser.json());

// MongoDB Connection
const client = new MongoClient(process?.env?.MONGODB_URI);
const db = client.db('mytaskapp');

// User Routes
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await hashPassword(password);
  await db.collection('users').insertOne({ email, password: hashedPassword });
  res.status(201).end();
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await db.collection('users').findOne({ email });
  if (user && await verifyPassword(password, user.password)) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Task Routes (similar to the provided API routes)

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
