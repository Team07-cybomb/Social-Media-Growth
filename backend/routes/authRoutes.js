const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Service = require('../models/Service');
const router = express.Router();

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// Register User
router.post('/register', async (req, res) => {
  try {
    const { name, email, phone, password, confirmPassword } = req.body;

    // Validation
    if (!name || !email || !phone || !password) {
      return res.status(400).json({ 
        success: false,
        message: 'Please fill all fields' 
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ 
        success: false,
        message: 'Passwords do not match' 
      });
    }

    if (password.length < 6) {
      return res.status(400).json({ 
        success: false,
        message: 'Password must be at least 6 characters' 
      });
    }

    // Phone number validation
    const phoneRegex = /^\+?[\d\s-()]{10,}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ 
        success: false,
        message: 'Please enter a valid phone number' 
      });
    }

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ 
        success: false,
        message: 'User already exists with this email' 
      });
    }

    // Check if phone number already exists
    const phoneExists = await User.findOne({ phone });
    if (phoneExists) {
      return res.status(400).json({ 
        success: false,
        message: 'User already exists with this phone number' 
      });
    }

    // Create user
    const user = await User.create({
      name,
      email,
      phone,
      password
    });

    if (user) {
      res.status(201).json({
        success: true,
        data: {
          _id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role,
          token: generateToken(user._id)
        }
      });
    }
  } catch (error) {
    // Handle duplicate email error
    if (error.code === 11000) {
      if (error.keyPattern.email) {
        return res.status(400).json({ 
          success: false,
          message: 'User already exists with this email' 
        });
      }
      if (error.keyPattern.phone) {
        return res.status(400).json({ 
          success: false,
          message: 'User already exists with this phone number' 
        });
      }
    }
    res.status(500).json({ 
      success: false,
      message: 'Server error', 
      error: error.message 
    });
  }
});

// Login User
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    
    if (user && (await user.correctPassword(password, user.password))) {
      res.json({
        success: true,
        data: {
          _id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role,
          token: generateToken(user._id)
        }
      });
    } else {
      res.status(401).json({ 
        success: false,
        message: 'Invalid email or password' 
      });
    }
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Server error', 
      error: error.message 
    });
  }
});

// Get user profile (protected route)
// router.get('/profile', async (req, res) => {
//   try {
//     const token = req.header('Authorization')?.replace('Bearer ', '');
    
//     if (!token) {
//       return res.status(401).json({ 
//         success: false,
//         message: 'No token provided' 
//       });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findById(decoded.id).select('-password');
    
//     if (!user) {
//       return res.status(404).json({ 
//         success: false,
//         message: 'User not found' 
//       });
//     }

//     res.json({
//       success: true,
//       data: user
//     });
//   } catch (error) {
//     res.status(401).json({ 
//       success: false,
//       message: 'Invalid token' 
//     });
//   }
// });
router.get('/profile', async (req, res) => {
  try {
    const users = await User.find().select('-password'); // exclude passwords
 
    res.json({
      success: true,
      data: users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// Get dashboard statistics
router.get('/dashboard-stats', async (req, res) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ 
        success: false,
        message: 'No token provided' 
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    
    if (!user) {
      return res.status(401).json({ 
        success: false,
        message: 'Invalid token' 
      });
    }

    // Get statistics
    const totalCustomers = await User.countDocuments({ role: 'customer' });
    const totalRequests = await Service.countDocuments();
    const activeRequests = await Service.countDocuments({ status: 'active' });
    const inactiveRequests = await Service.countDocuments({ status: 'inactive' });
    const outOfStockRequests = await Service.countDocuments({ status: 'out_of_stock' });

    // Calculate platform distribution
    const platformStats = await Service.aggregate([
      {
        $group: {
          _id: '$platform',
          count: { $sum: 1 }
        }
      },
      {
        $sort: { count: -1 }
      }
    ]);

    // Calculate category distribution
    const categoryStats = await Service.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 }
        }
      },
      {
        $sort: { count: -1 }
      }
    ]);

    // Recent requests (last 10)
    const recentRequests = await Service.find()
      .sort({ createdAt: -1 })
      .limit(10)
      .select('serviceName username platform status createdAt');

    res.json({
      success: true,
      data: {
        totalRequests,
        activeRequests,
        inactiveRequests,
        outOfStockRequests,
        totalCustomers,
        platformStats,
        categoryStats,
        recentRequests: recentRequests.map(req => ({
          _id: req._id,
          serviceName: req.serviceName,
          username: req.username,
          platform: req.platform,
          status: req.status,
          createdAt: req.createdAt
        }))
      }
    });
  } catch (error) {
    console.error('Dashboard stats error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error while fetching dashboard statistics',
      error: error.message 
    });
  }
});

module.exports = router;