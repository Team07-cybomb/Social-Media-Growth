const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { auth, adminAuth } = require('../middleware/auth'); // Correct destructuring
 
// ============================
// Get all customers (admin only)
// ============================
router.get('/admin/customers', adminAuth, async (req, res) => {
  try {
    const customers = await User.find({})
      .select('-password') // Exclude password
      .sort({ createdAt: -1 });
 
    const transformedCustomers = customers.map(customer => ({
      _id: customer._id,
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      joinDate: customer.createdAt
        ? new Date(customer.createdAt).toISOString().split('T')[0]
        : new Date().toISOString().split('T')[0],
      totalRequests: 0,
      completedRequests: 0,
      totalSpent: '$0',
      status: customer.status || 'active',
      role: customer.role,
      createdAt: customer.createdAt
    }));
 
    res.json({
      success: true,
      customers: transformedCustomers
    });
  } catch (error) {
    console.error('Error fetching customers:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});
 
// ============================
// Update customer status (admin only)
// ============================
router.patch('/admin/customers/:id', adminAuth, async (req, res) => {
  try {
    const { status } = req.body;
    const customerId = req.params.id;
 
    const validStatuses = ['active', 'inactive', 'premium'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status'
      });
    }
 
    const customer = await User.findByIdAndUpdate(
      customerId,
      { status },
      { new: true }
    ).select('-password');
 
    if (!customer) {
      return res.status(404).json({
        success: false,
        message: 'Customer not found'
      });
    }
 
    res.json({
      success: true,
      message: 'Status updated successfully',
      customer
    });
  } catch (error) {
    console.error('Error updating customer status:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});
 
// ============================
// Send message to customer (admin only)
// ============================
router.post('/admin/send-message', adminAuth, async (req, res) => {
  try {
    const { customerId, message } = req.body;
 
    if (!customerId || !message) {
      return res.status(400).json({
        success: false,
        message: 'Customer ID and message are required'
      });
    }
 
    const customer = await User.findById(customerId).select('-password');
    if (!customer) {
      return res.status(404).json({
        success: false,
        message: 'Customer not found'
      });
    }
 
    console.log(`Admin message to ${customer.name} (${customer.email}): ${message}`);
 
    res.json({
      success: true,
      message: 'Message sent successfully',
      to: customer.email,
      customerName: customer.name
    });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});
 
// ============================
// Get customer details by ID (admin or normal auth)
// ============================
router.get('/admin/customers/:id', adminAuth, async (req, res) => {
  try {
    const customer = await User.findById(req.params.id).select('-password');
 
    if (!customer) {
      return res.status(404).json({
        success: false,
        message: 'Customer not found'
      });
    }
 
    res.json({
      success: true,
      customer
    });
  } catch (error) {
    console.error('Error fetching customer details:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});
 
module.exports = router;