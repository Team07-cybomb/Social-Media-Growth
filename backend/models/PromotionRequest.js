const mongoose = require('mongoose');

const promotionRequestSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  service: {
    type: String,
    required: true,
    enum: ['YouTube Subscribers', 'Instagram Followers', 'Facebook Page Likes', 'Twitter Followers', 'TikTok Followers', 'Website Traffic']
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed', 'rejected'],
    default: 'pending'
  },
  details: {
    targetCount: Number,
    currentCount: Number,
    budget: Number,
    timeline: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('PromotionRequest', promotionRequestSchema);