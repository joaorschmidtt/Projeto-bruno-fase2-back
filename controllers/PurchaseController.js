import PurchaseModel from '../models/PurchaseModel.js';

const PurchaseController = {
  createPurchase: async (req, res) => {
    try {
      const purchase = await PurchaseModel.create(req.body);
      res.status(201).json(purchase);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Erro ao registrar compra' });
    }
  },

  getPurchasesByUser: async (req, res) => {
    try {
      const result = await PurchaseModel.find({ userId: req.params.userId });
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Erro ao buscar compras' });
    }
  }
};

export default PurchaseController;
