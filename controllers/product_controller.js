const Product = require('../models/product_model');

module.exports = {

    // add product
    addProduct: async (req, res) => {
        try {
            let newProduct = new Product(req.body);
            await newProduct.save();
            return res.status(201).json({ status: 1, message: 'Product added successfully', data: newProduct });
        } catch (error) {
            return res.status(400).json({ status: 0, message: error.message });
        }

    },
    // fetch all products
    getProduct: async (req, res) => {
        try {
            let products = await Product.find();
            return res.status(200).json({ status: 1, message: 'Products fetched successfully', data: products });
        } catch (error) {
            return res.status(400).json({ status: 0, message: error.message });
        }
    }
}
// this is product api end points
// http://localhost:4090/getProduct
// http://localhost:4090/addProduct