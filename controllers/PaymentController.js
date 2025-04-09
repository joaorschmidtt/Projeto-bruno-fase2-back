import PaymentModel from '../models/PaymentModel.js';

const PaymentController = {
  processPayment: async (req, res) => {
    try {
      const payment = await PaymentModel.create(req.body);
      res.status(201).json(payment);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Erro ao processar pagamento' });
    }
  },

  getPaymentsByUser: async (req, res) => {
    try {
      const payments = await PaymentModel.find({ userId: req.params.userId });
      res.status(200).json(payments);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Erro ao buscar pagamentos' });
    }
  }
};

export default PaymentController;
