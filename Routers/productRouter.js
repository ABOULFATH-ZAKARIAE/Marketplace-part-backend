const express = require('express');
const router = express.Router();
const productController = require('../Controllers/productController');
// const auth = require('../Middelware/authentification')

router.post('/productadd', productController.ProductAdd);
router.get('/productget',productController.getAllProduct);
router.get('/getProductById/:id',productController.getProductById);
router.put('/productupdate/:id',productController.UpdateProduct);




module.exports = router;