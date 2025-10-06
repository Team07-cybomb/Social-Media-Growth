const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6
  },
  role: {
    type: String,
    enum: ['customer', 'admin'],
    default: 'customer'
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'premium'],
    default: 'active'
  },
  joinDate: {
    type: Date,
    default: Date.now
  },
  totalRequests: {
    type: Number,
    default: 0
  },
  completedRequests: {
    type: Number,
    default: 0
  },
  totalSpent: {
    type: Number,
    default: 0
  },
  // Add OTP fields
  otp: {
    type: String,
    default: null
  },
  otpExpires: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Compare password method
userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// Virtual for formatted total spent (with $ sign)
userSchema.virtual('formattedTotalSpent').get(function() {
  return `$${this.totalSpent}`;
});

// Virtual for formatted join date
userSchema.virtual('formattedJoinDate').get(function() {
  return this.joinDate.toISOString().split('T')[0];
});

// Method to increment requests
userSchema.methods.incrementRequests = function() {
  this.totalRequests += 1;
  return this.save();
};

// Method to increment completed requests
userSchema.methods.incrementCompletedRequests = function() {
  this.completedRequests += 1;
  return this.save();
};

// Method to add to total spent
userSchema.methods.addToTotalSpent = function(amount) {
  this.totalSpent += amount;
  return this.save();
};

module.exports = mongoose.model('User', userSchema);