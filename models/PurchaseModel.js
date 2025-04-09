import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  userId: { type: String, required: true },
  products: [
    {
      name: String,
      price: Number
    }
  ],
  total: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const PurchaseModel = mongoose.model('Purchase', schema);
export default PurchaseModel;
