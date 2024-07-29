// src/lib/mongodb.ts
import { MongoClient } from 'mongodb';

// Replace this URI with your MongoDB connection string
// const uri = process.env.MONGODB_URI!;
const uri = "mongodb+srv://Grace:<password>@community.h0vtwjy.mongodb.net/";
const client = new MongoClient(uri);

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable to ensure the MongoClient is not
  // recreated on every request
  if (!(global as any)._mongoClientPromise) {
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  // In production mode, create a new client instance each time
  clientPromise = client.connect();
}

export default clientPromise;
