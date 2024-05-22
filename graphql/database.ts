import { connect, Mongoose } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI: string = process.env.MONGO_DB_URI || '';

if (MONGODB_URI === '') {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

interface Cached {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  namespace NodeJS {
    interface Global {
      mongoose: Cached;
    }
  }
}

const globalWithMongoose = global as typeof global & { mongoose: Cached };

let cached: Cached = globalWithMongoose.mongoose;

if (!cached) {
  cached = globalWithMongoose.mongoose = { conn: null, promise: null };
}

async function connectToDatabase(): Promise<Mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = connect(`${MONGODB_URI}/sample_analytics`, opts).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  console.log('🚀 Next.js Connected to MongoDb Database');
  return cached.conn;
}

export default connectToDatabase;
