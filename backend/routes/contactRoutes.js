// routes/contactRoutes.js
const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const { adminAuth } = require("../middleware/auth");

// Submit contact form (public route)
router.post("/submit", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        msg: "Please fill in all required fields"
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        msg: "Please provide a valid email address"
      });
    }

    // Create new contact entry
    const contact = new Contact({
      name,
      email,
      phone: phone || "",
      message
    });

    await contact.save();

    res.status(201).json({
      success: true,
      msg: "Thank you for your message! We'll get back to you soon.",
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email
      }
    });

  } catch (error) {
    console.error("Contact form submission error:", error);
    res.status(500).json({
      success: false,
      msg: "Server error. Please try again later."
    });
  }
});

// Get all contacts (admin only)
router.get("/", adminAuth, async (req, res) => {
  try {
    const { page = 1, limit = 10, status, search } = req.query;
    
    // Build filter object
    const filter = {};
    if (status && status !== "all") {
      filter.status = status;
    }
    
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { message: { $regex: search, $options: "i" } }
      ];
    }

    const contacts = await Contact.find(filter)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .select("-__v");

    const total = await Contact.countDocuments(filter);

    res.json({
      success: true,
      data: contacts,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / limit),
        totalContacts: total,
        hasNext: page * limit < total,
        hasPrev: page > 1
      }
    });

  } catch (error) {
    console.error("Get contacts error:", error);
    res.status(500).json({
      success: false,
      msg: "Failed to fetch contacts"
    });
  }
});

// Get contact by ID (admin only)
router.get("/:id", adminAuth, async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        msg: "Contact not found"
      });
    }

    res.json({
      success: true,
      data: contact
    });

  } catch (error) {
    console.error("Get contact error:", error);
    res.status(500).json({
      success: false,
      msg: "Failed to fetch contact"
    });
  }
});

// Update contact status (admin only)
router.patch("/:id/status", adminAuth, async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!["new", "read", "replied", "archived"].includes(status)) {
      return res.status(400).json({
        success: false,
        msg: "Invalid status"
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        msg: "Contact not found"
      });
    }

    res.json({
      success: true,
      msg: "Contact status updated",
      data: contact
    });

  } catch (error) {
    console.error("Update contact status error:", error);
    res.status(500).json({
      success: false,
      msg: "Failed to update contact status"
    });
  }
});

// Delete contact (admin only)
router.delete("/:id", adminAuth, async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        msg: "Contact not found"
      });
    }

    res.json({
      success: true,
      msg: "Contact deleted successfully"
    });

  } catch (error) {
    console.error("Delete contact error:", error);
    res.status(500).json({
      success: false,
      msg: "Failed to delete contact"
    });
  }
});

// Get contact statistics (admin only)
router.get("/stats/summary", adminAuth, async (req, res) => {
  try {
    const stats = await Contact.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 }
        }
      }
    ]);

    const total = await Contact.countDocuments();
    const newContacts = await Contact.countDocuments({ status: "new" });

    const summary = {
      total,
      new: newContacts,
      byStatus: stats.reduce((acc, stat) => {
        acc[stat._id] = stat.count;
        return acc;
      }, {})
    };

    res.json({
      success: true,
      data: summary
    });

  } catch (error) {
    console.error("Get contact stats error:", error);
    res.status(500).json({
      success: false,
      msg: "Failed to fetch contact statistics"
    });
  }
});

module.exports = router;