// middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Admin = require('../models/Admin');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({
        success: false,
        msg: 'No token, authorization denied'
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    
    if (!user) {
      return res.status(401).json({
        success: false,
        msg: 'Token is not valid'
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    res.status(401).json({
      success: false,
      msg: 'Token is not valid'
    });
  }
};

// Admin middleware
const adminAuth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({
        success: false,
        msg: 'No token, authorization denied'
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Check if it's an admin token
    if (decoded.role === 'admin') {
      const admin = await Admin.findById(decoded.id);
      if (!admin) {
        return res.status(401).json({
          success: false,
          msg: 'Admin token is not valid'
        });
      }
      req.admin = admin;
    } else {
      // Regular user token
      const user = await User.findById(decoded.id).select('-password');
      if (!user) {
        return res.status(401).json({
          success: false,
          msg: 'Token is not valid'
        });
      }
      
      if (user.role !== 'admin') {
        return res.status(403).json({
          success: false,
          msg: 'Access denied. Admin privileges required.'
        });
      }
      
      req.admin = user; // Treat admin user as admin
    }

    next();
  } catch (error) {
    console.error('Admin auth middleware error:', error);
    res.status(401).json({
      success: false,
      msg: 'Token is not valid'
    });
  }
};

module.exports = { auth, adminAuth };