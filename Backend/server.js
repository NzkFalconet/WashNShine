const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection string (replace with your own Atlas connection string)
const mongoURI = 'your-mongodb-connection-string-here';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error: ', err));

// Create Mongoose Schema
const formSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  vehicleType: String,
});

const FormData = mongoose.model('FormData', formSchema);

// POST route to handle form data
app.post('/submit-form', async (req, res) => {
  const { name, phone, email, vehicleType } = req.body;

  try {
    // Save the form data to the database
    const newFormData = new FormData({
      name,
      phone,
      email,
      vehicleType
    });

    await newFormData.save();
    res.status(200).json({ message: 'Form data saved successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving data to database', error: err });
  }
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
