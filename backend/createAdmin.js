const mongoose = require('mongoose');
const Admin = require('./models/Admin');
require('dotenv').config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    
    const adminExists = await Admin.findOne({ username: 'admin' });
    
    if (!adminExists) {
      const admin = new Admin({
        username: 'admin',
        password: 'admin123'
      });
      
      await admin.save();
      console.log('✅ Default admin created:');
      console.log('Username: admin2');
      console.log('Password: admin123');
    } else {
      console.log('ℹ️ Admin user already exists');
    }
    
  } catch (error) {
    console.error('Error creating admin:', error);
  } finally {
    await mongoose.connection.close();
  }
};

createAdmin();