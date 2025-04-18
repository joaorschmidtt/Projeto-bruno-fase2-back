import ProductModel from "../models/ProductModel.js";


const ProductController = {
    getAllProducts: async (req, res) => {
        try {
            const result = await ProductModel.find();
            res.status(200).json(result);
        }
        catch (error) {
            console.error(error);
            res.status(500).send({ message: 'Error fetching products' });

        }
    },
    getProductById: async (req, res) => {
        try {
            const result = await ProductModel.findById(req.params.id);
            res.status(200).json(result);

        }
        catch (error) {
            console.error(error);
            res.status(500).send({ message: 'error fetching product' });


        }
    },

    createProduct: async (req, res) => {
        try {
            const newProduct = new ProductModel(req.body);
            const result = await newProduct.save();
            res.status(201).json(result);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'Error creating product' });
        }
    },
}

export default ProductController;