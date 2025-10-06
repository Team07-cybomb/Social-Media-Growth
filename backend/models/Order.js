const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  // User Information
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  
  // Service Information
  service: {
    type: String,
    required: true,
    trim: true
  },
  serviceBudget: {
    type: String,
    required: true,
    trim: true
  },
  platform: {
    type: String,
    required: true,
    trim: true
  },
  
  // Project Details
  timeline: {
    type: String,
    required: true,
    trim: true
  },
  goals: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    trim: true,
    default: ""
  },
  
  // Order Status
  status: {
    type: String,
    enum: ["pending", "confirmed", "in_progress", "completed", "cancelled"],
    default: "pending"
  },
  
  // Additional Metadata
  source: {
    type: String,
    default: "website_modal"
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the updatedAt field before saving
orderSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Order", orderSchema);