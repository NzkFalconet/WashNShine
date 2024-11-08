import React, { useState } from 'react';
import './ContactForm.css'; // Make sure to add this CSS file

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleType: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    alert('Thank you! Your details have been submitted.');
    setFormData({ name: '', phone: '', email: '', vehicleType: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Us for a Service</h2>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Phone Number:
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Vehicle Type:
        <select name="vehicleType" value={formData.vehicleType} onChange={handleChange} required>
          <option value="">Select Vehicle Type</option>
          <option value="Car">Car</option>
          <option value="Bike">Bike</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
