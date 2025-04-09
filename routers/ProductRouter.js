import express from 'express';
import ProductController from '../controllers/ProductController.js';

const ProductRouter = express.Router();

ProductRouter.route('/product')
  .get((req, res) => ProductController.getAllProducts(req, res));

// Essa linha está duplicada e vazia, pode ser removida:
// ProductRouter.route('/product').get((req, res) => {}); // Remover essa

ProductRouter.route('/product/:id')
  .get((req, res) => ProductController.getProductById(req, res));

export default ProductRouter;
