const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// Create new order from modal
router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      service,
      serviceBudget,
      platform,
      timeline,
      goals,
      message
    } = req.body;

    // Validation
    if (!name || !email || !phone || !service || !serviceBudget || !platform || !timeline || !goals) {
      return res.status(400).json({
        success: false,
        msg: "Please provide all required fields",
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        msg: 'Please provide a valid email address'
      });
    }

    const order = new Order({
      name,
      email,
      phone,
      service,
      serviceBudget,
      platform,
      timeline,
      goals,
      message: message || ""
    });

    await order.save();

    res.status(201).json({
      success: true,
      msg: "Order submitted successfully! We will contact you within 24 hours.",
      data: order,
    });
  } catch (error) {
    console.error("Create order error:", error);

    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        msg: Object.values(error.errors)
          .map((val) => val.message)
          .join(", "),
      });
    }

    res.status(500).json({
      success: false,
      msg: "Server error while submitting order",
    });
  }
});

// Get all orders (for admin)
router.get("/", async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;

    const filter = {};
    if (status) filter.status = status;

    const orders = await Order.find(filter)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Order.countDocuments(filter);

    res.json({
      success: true,
      data: orders,
      pagination: {
        current: parseInt(page),
        total: Math.ceil(total / limit),
        results: orders.length,
        totalResults: total,
      },
    });
  } catch (error) {
    console.error("Get orders error:", error);
    res.status(500).json({
      success: false,
      msg: "Server error while fetching orders",
    });
  }
});

// Get order by ID
router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        msg: "Order not found",
      });
    }

    res.json({
      success: true,
      data: order,
    });
  } catch (error) {
    console.error("Get order error:", error);
    res.status(500).json({
      success: false,
      msg: "Server error while fetching order",
    });
  }
});

// Update order status
router.put("/:id", async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        msg: "Order not found",
      });
    }

    res.json({
      success: true,
      msg: "Order updated successfully",
      data: order,
    });
  } catch (error) {
    console.error("Update order error:", error);
    res.status(500).json({
      success: false,
      msg: "Server error while updating order",
    });
  }
});

// Delete order
router.delete("/:id", async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        msg: "Order not found",
      });
    }

    res.json({
      success: true,
      msg: "Order deleted successfully",
    });
  } catch (error) {
    console.error("Delete order error:", error);
    res.status(500).json({
      success: false,
      msg: "Server error while deleting order",
    });
  }
});

module.exports = router;