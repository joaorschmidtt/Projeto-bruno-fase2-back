import express from 'express';
import PurchaseController from '../controllers/PurchaseController.js';

const PurchaseRouter = express.Router();

PurchaseRouter.route('/purchase')
  .post(PurchaseController.createPurchase);

PurchaseRouter.route('/purchase/user/:userId')
  .get(PurchaseController.getPurchasesByUser);

export default PurchaseRouter;
