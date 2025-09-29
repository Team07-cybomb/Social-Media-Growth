const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: true,
    trim: true
  },
  username: {
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
  phoneNumber: {
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
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
  },
  platform: {
    type: String,
    required: true,
    enum: [
      "Facebook",
      "Instagram",
      "Twitter",
      "YouTube",
      "TikTok",
      "LinkedIn",
      "Other",
    ],
    trim: true,
  },
  basePrice: {
    type: Number,
    required: true,
    min: 0,
  },
  minQuantity: {
    type: Number,
    required: true,
    min: 0,
  },
  maxQuantity: {
    type: Number,
    required: true,
    min: 0,
  },
  deliveryTime: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["active", "inactive", "out_of_stock"],
    default: "active",
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Likes', 'Followers', 'Views', 'Comments', 'Shares', 'Subscribers', 'Social Media', 'Other'],
    trim: true
  },
  quality: {
    type: String,
    enum: ["premium", "standard", "economy"],
    default: "standard",
  },
  refill: {
    type: Boolean,
    default: false,
  },
  refillPeriod: {
    type: String,
    trim: true,
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
serviceSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Service", serviceSchema);
