const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// Get all services
router.get('/', async (req, res) => {
  try {
    const { platform, status, category, page = 1, limit = 10 } = req.query;
    
    const filter = {};
    if (platform) filter.platform = platform;
    if (status) filter.status = status;
    if (category) filter.category = category;

    const services = await Service.find(filter)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Service.countDocuments(filter);

    res.json({
      success: true,
      data: services,
      pagination: {
        current: parseInt(page),
        total: Math.ceil(total / limit),
        results: services.length,
        totalResults: total
      }
    });
  } catch (error) {
    console.error('Get services error:', error);
    res.status(500).json({
      success: false,
      msg: 'Server error while fetching services'
    });
  }
});

// Get service by ID
router.get('/:id', async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    
    if (!service) {
      return res.status(404).json({
        success: false,
        msg: 'Service not found'
      });
    }

    res.json({
      success: true,
      data: service
    });
  } catch (error) {
    console.error('Get service error:', error);
    res.status(500).json({
      success: false,
      msg: 'Server error while fetching service'
    });
  }
});

// Create new service
router.post('/', async (req, res) => {
  try {
    const {
      name,
      platform,
      basePrice,
      minQuantity,
      maxQuantity,
      deliveryTime,
      status,
      description,
      category,
      quality,
      refill,
      refillPeriod
    } = req.body;

    // Validation
    if (!name || !platform || !basePrice || !minQuantity || !maxQuantity || !deliveryTime || !description || !category) {
      return res.status(400).json({
        success: false,
        msg: 'Please provide all required fields'
      });
    }

    if (minQuantity >= maxQuantity) {
      return res.status(400).json({
        success: false,
        msg: 'Minimum quantity must be less than maximum quantity'
      });
    }

    const service = new Service({
      name,
      platform,
      basePrice: parseFloat(basePrice),
      minQuantity: parseInt(minQuantity),
      maxQuantity: parseInt(maxQuantity),
      deliveryTime,
      status: status || 'active',
      description,
      category,
      quality: quality || 'standard',
      refill: refill || false,
      refillPeriod: refill ? refillPeriod : undefined
    });

    await service.save();

    res.status(201).json({
      success: true,
      msg: 'Service created successfully',
      data: service
    });
  } catch (error) {
    console.error('Create service error:', error);
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        msg: Object.values(error.errors).map(val => val.message).join(', ')
      });
    }

    res.status(500).json({
      success: false,
      msg: 'Server error while creating service'
    });
  }
});

// Update service
router.put('/:id', async (req, res) => {
  try {
    const {
      name,
      platform,
      basePrice,
      minQuantity,
      maxQuantity,
      deliveryTime,
      status,
      description,
      category,
      quality,
      refill,
      refillPeriod
    } = req.body;

    if (minQuantity && maxQuantity && minQuantity >= maxQuantity) {
      return res.status(400).json({
        success: false,
        msg: 'Minimum quantity must be less than maximum quantity'
      });
    }

    const updateData = {};
    if (name) updateData.name = name;
    if (platform) updateData.platform = platform;
    if (basePrice) updateData.basePrice = parseFloat(basePrice);
    if (minQuantity) updateData.minQuantity = parseInt(minQuantity);
    if (maxQuantity) updateData.maxQuantity = parseInt(maxQuantity);
    if (deliveryTime) updateData.deliveryTime = deliveryTime;
    if (status) updateData.status = status;
    if (description) updateData.description = description;
    if (category) updateData.category = category;
    if (quality) updateData.quality = quality;
    if (refill !== undefined) updateData.refill = refill;
    if (refillPeriod) updateData.refillPeriod = refillPeriod;

    const service = await Service.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        msg: 'Service not found'
      });
    }

    res.json({
      success: true,
      msg: 'Service updated successfully',
      data: service
    });
  } catch (error) {
    console.error('Update service error:', error);
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        msg: Object.values(error.errors).map(val => val.message).join(', ')
      });
    }

    res.status(500).json({
      success: false,
      msg: 'Server error while updating service'
    });
  }
});

// Delete service
router.delete('/:id', async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        msg: 'Service not found'
      });
    }

    res.json({
      success: true,
      msg: 'Service deleted successfully'
    });
  } catch (error) {
    console.error('Delete service error:', error);
    res.status(500).json({
      success: false,
      msg: 'Server error while deleting service'
    });
  }
});

// Bulk create services (for initial setup)
router.post('/bulk', async (req, res) => {
  try {
    const services = req.body;

    if (!Array.isArray(services)) {
      return res.status(400).json({
        success: false,
        msg: 'Please provide an array of services'
      });
    }

    const createdServices = await Service.insertMany(services);

    res.status(201).json({
      success: true,
      msg: `${createdServices.length} services created successfully`,
      data: createdServices
    });
  } catch (error) {
    console.error('Bulk create services error:', error);
    res.status(500).json({
      success: false,
      msg: 'Server error while creating services'
    });
  }
});

module.exports = router;