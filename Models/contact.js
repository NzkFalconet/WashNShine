const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  vehicleType: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }, // Automatically saves the current date
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
