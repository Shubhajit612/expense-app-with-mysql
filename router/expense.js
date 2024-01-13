const express = require('express');
const router = express.Router();

const Product = require('../models/expense');

const productController = require('../controllers/expense');

router.post('/product/add-product',productController.addProduct);

router.get('/product/get-product',productController.getProduct);

router.delete('/product/delete-product/:id',productController.deleteProduct);

router.put('/product/update-product/:id',productController.updateProduct);

module.exports = router;