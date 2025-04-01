import express from 'express';
import cors from 'cors';
import { PORT } from './config/env.js';
import connectDB from './database/mongodb.js';
import errorMiddleware from './middleware/error.middleware.js';
import cookieParser from 'cookie-parser';

import authRouter from './routes/auth.routes.js';

const app = express();

// Middleware
app.use(cors({ origin: '*', credentials: true })); // Allow all origins
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(cookieParser());

// Routes
app.use('/api/v1/auth', authRouter);

app.get('/', (req, res) => {
  res.send('JWT Authentication API');
});

// Error handling middleware should be the last middleware
app.use(errorMiddleware);

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await connectDB();
});

export default app;