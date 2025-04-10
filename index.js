import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './routers/UserRouter.js';
import productRouter from './routers/ProductRouter.js';
import dotenv from 'dotenv';
import UserRouter from './routers/UserRouter.js';
import ProductRouter from './routers/ProductRouter.js';
import CartRouter from './routers/CartRouter.js';
import PaymentRouter from './routers/PaymentRouter.js';
import PurchaseRouter from './routers/PurchaseRouter.js';
import loginRouter from './routers/loginRouter.js';


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', PurchaseRouter);
app.use('/api', PaymentRouter);
app.use('/api', CartRouter);
app.use('/api', UserRouter)
app.use('/api', ProductRouter);
app.use('/api', loginRouter);
mongoose.connect(process.env.MONGO_URI)
app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta  ${process.env.PORT}`);
}
);