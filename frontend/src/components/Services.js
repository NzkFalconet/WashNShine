import React from 'react';
import './Services.css'; // Ensure to create and link this CSS file

function Services() {
  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="card-container">
        <div className="service-card">
          <h3>Car Washing</h3>
          <p>Professional exterior and interior car cleaning services for a sparkling ride.</p>
        </div>
        <div className="service-card">
          <h3>Bike Washing</h3>
          <p>Complete bike wash and detailing to keep your two-wheeler shining and clean.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
