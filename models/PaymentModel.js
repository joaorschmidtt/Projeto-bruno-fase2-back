import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  userId: { type: String, required: true },
  cartItems: [
    {
      productId: String,
      quantity: Number,
      price: Number
    }
  ],
  totalAmount: { type: Number, required: true },
  paymentMethod: { type: String, default: 'pix' },
  status: { type: String, default: 'aprovado' },
  createdAt: { type: Date, default: Date.now }
});

const PaymentModel = mongoose.model('Payment', schema);
export default PaymentModel;
