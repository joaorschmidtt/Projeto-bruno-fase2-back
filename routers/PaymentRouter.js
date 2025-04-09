import express from 'express';
import PaymentController from '../controllers/PaymentController.js';

const PaymentRouter = express.Router();

PaymentRouter.route('/payment')
  .post(PaymentController.processPayment);

PaymentRouter.route('/payment/user/:userId')
  .get(PaymentController.getPaymentsByUser);

export default PaymentRouter;
