import { Document, MongoClient, OptionalId } from 'mongodb';
import { hashPassword } from './auth';
import 'dotenv/config';

if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined in .env file');
  }
const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db();

export async function getUserByEmail(email: string) {
  await client.connect();
  return db.collection('users').findOne({ email });
}

export async function createUser(email: string, password: string) {
  await client.connect();
  const hashedPassword = await hashPassword(password);
  return db.collection('users').insertOne({ email, password: hashedPassword });
}


export async function getTasks(userId: string) {
  await client.connect();
  return db.collection('tasks').find({ userId }).toArray();
}

export async function createTask(task: OptionalId<Document>) {
  await client.connect();
  return db.collection('tasks').insertOne(task);
}

export async function updateTask(task: { id: any; }) {
  await client.connect();
  return db.collection('tasks').updateOne({ _id: task.id }, { $set: task });
}

export async function deleteTask(taskId: string) {
  await client.connect();
//   return db.collection('tasks').deleteOne({ _id: taskId });
}
