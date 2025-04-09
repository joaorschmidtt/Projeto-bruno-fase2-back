import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  userId: { type: String, required: true },
  productId: { type: String, required: true },
  quantity: { type: Number, required: true },
  added_at: { type: Date, default: Date.now }
});

const CartModel = mongoose.model('Cart', schema);
export default CartModel;
