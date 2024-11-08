// /api/contact.js
const mongoose = require('mongoose');
const Contact = require('../Models/contact');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error: ', err));

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { name, phone, email, vehicleType } = req.body;

      // Validate if all fields are provided
      if (!name || !phone || !vehicleType) {
        return res.status(400).json({ message: 'Please provide all fields.' });
      }

      // Get the current date
      const currentDate = new Date();

      // Create a new contact document and save it
      const newContact = new Contact({ 
        name, 
        phone, 
        email, 
        vehicleType, 
        createdAt: currentDate 
      });

      await newContact.save();
      
      // Respond with a success message
      res.status(200).json({ message: 'Thank you! Your details have been submitted successfully.' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error saving contact details' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
