import mongoose from "mongoose";
import { DB_URI } from '../config/env.js';

if (!DB_URI) {
  throw new Error("Please define the DB_URI environment variable inside .env.local");
}

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error(`Error connecting to database: ${error.message}`);
    process.exit(1);
  }
}

export default connectDB;
