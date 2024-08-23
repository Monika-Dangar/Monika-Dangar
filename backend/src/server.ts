import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fellowRouter from './routes/fellow';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json()); 

// CORS configuration
app.use(cors({
  origin: 'https://monika-dangar-portfoliosite.vercel.app/', // Allow your frontend domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));


const uri = process.env.ATLAS_URI
if (!uri) {
  throw new Error('MongoDB connection string is not defined in environment variables');
}

mongoose.connect(uri)
  .then(() => console.log("MongoDB database connection established successfully"))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/fellow', fellowRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
