import express from 'express';
import ProductController from '../controllers/ProductController.js';

const ProductRouter = express.Router();

ProductRouter.route('/product')
  .post((req, res) => ProductController.createProduct(req, res))
  .get((req, res) => ProductController.getAllProducts(req, res));

ProductRouter.route('/product/:id')
  .get((req, res) => ProductController.getProductById(req, res));

export default ProductRouter;
