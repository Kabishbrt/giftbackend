const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');


router.get('/getOrderDataTest/:id', orderController.getOrdersForCurrentUser);
router.delete('/deleteorders/:id', orderController.deleteOrdersForCurrentUser);

module.exports = router;
