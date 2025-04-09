import express from 'express';
import CartController from '../controllers/CartController.js';

const CartRouter = express.Router();

CartRouter.route('/cart')
  .post(CartController.addToCart);

CartRouter.route('/cart/user/:userId')
  .get(CartController.getCartByUserId);

CartRouter.route('/cart/:id')
  .delete(CartController.deleteCart);

export default CartRouter;
