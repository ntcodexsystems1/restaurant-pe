const User = require('../models/User');

// Create a new user (order)
const createUser = async (req, res) => {
  try {
    
    
    const { orderName, tableNo } = req.body;

    // Save to MongoDB
    const newUser = new User({ orderName, tableNo });
    await newUser.save();

    res.status(201).json({
      message: 'User saved successfully!',
      user: newUser,
    });
  } 
  
  catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createUser, getUsers };
