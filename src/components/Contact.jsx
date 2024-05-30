import React from 'react';
import './Contact.css';

const ContactPage = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1 className="contact-title">Contact Me</h1>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" name="email" className="form-input" placeholder="Enter a valid email address" required />
          </div>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" name="name" className="form-input" placeholder="Enter your Name" required />
          </div>
          <button type="submit" className="form-submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;