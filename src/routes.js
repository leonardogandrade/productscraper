const express = require('express');
const routes = express.Router();
const productController = require('./controllers/product-controller');

routes.get('/info', productController.info);
routes.post('/product', productController.storeProduct);
routes.get('/scrap/:url?', productController.getProductInfo);

module.exports = routes;