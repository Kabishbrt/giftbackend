// controllers/orderController.js

const Order = require('../models/Order');

exports.getOrdersForCurrentUser = async (req, res) => {
  try {
    const userId = req.params.id

    const orders = await Order.find({ userId:userId });

    if (orders.length === 0) {
      return res.status(404).json({ message: 'No orders found for the current user' });
    }

    res.status(200).json({ status: 'success', data: orders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

exports.deleteOrdersForCurrentUser = async (req, res) => {
    try {
      // Assuming user ID is available in the request object after authentication
      const userId = req.params.id;
  
      // Delete all orders for the current user
      const result = await Order.deleteMany({ userId });
  
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'No orders found for the current user' });
      }
  
      res.status(200).json({ status: 'success', message: `${result.deletedCount} orders deleted` });
    } catch (error) {
      console.error('Error deleting orders:', error);
      res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
  };
