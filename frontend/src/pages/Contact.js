/**
 * Contact Page Component
 * Contact form for reaching out to Jivaka team
 */

import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Reset status when user starts typing again
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post(`${API_BASE_URL}/contact`, formData);

      if (response.data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p className="contact-subtitle">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info card">
            <h2>Get in Touch</h2>
            <p>
              Whether you have questions about Jivaka, need assistance, or want to provide 
              feedback, we're here to help. Fill out the form and we'll get back to you soon.
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">📧</div>
                <div>
                  <h3>Email</h3>
                  <p>contact@jivaka.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">💬</div>
                <div>
                  <h3>Support</h3>
                  <p>We typically respond within 24-48 hours</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">⏰</div>
                <div>
                  <h3>Hours</h3>
                  <p>Monday - Friday, 9 AM - 6 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper card">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  className="input textarea"
                  placeholder="Your message here..."
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="status-message success-message">
                  <span className="status-icon">✓</span>
                  <p>Thank you for contacting Jivaka! We will get back to you soon.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="status-message error-message">
                  <span className="status-icon">✗</span>
                  <p>Something went wrong. Please try again later.</p>
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

