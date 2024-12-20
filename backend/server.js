import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoutes.js';
import fridgeRouter from './routes/fridgeRoutes.js';
import recipeRouter from './routes/recipeRoutes.js';
const PORT = process.env.PORT;

connectDB();

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/fridge', fridgeRouter);
app.use('/api/recipies', recipeRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
