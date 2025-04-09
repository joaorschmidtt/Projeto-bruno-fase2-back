import CartModel from '../models/CartModel.js';

const CartController = {
  addToCart: async (req, res) => {
    try {
      const result = await CartModel.create(req.body);
      res.status(201).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Erro ao adicionar ao carrinho' });
    }
  },

  getCartByUserId: async (req, res) => {
    try {
      const result = await CartModel.find({ userId: req.params.userId });
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Erro ao buscar carrinho' });
    }
  },

  deleteCart: async (req, res) => {
    try {
      const result = await CartModel.findByIdAndDelete(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Erro ao remover item do carrinho' });
    }
  },
};

export default CartController;
