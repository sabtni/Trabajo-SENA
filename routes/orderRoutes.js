const express = require('express');
const router = express.Router();
const orderController = require('../controllers/OrderController.JS'); 

// Rutas
router.get('/orders', orderController.getOrders);
router.post('/orders', orderController.createOrder);

module.exports = router;
