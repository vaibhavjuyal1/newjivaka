/**
 * About Us Page Component
 * Describes Jivaka's mission and purpose
 */

import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-header">
          <h1>About Jivaka</h1>
          <p className="about-subtitle">
            Empowering Health Through AI
          </p>
        </div>

        <div className="about-content">
          <section className="mission-section card">
            <div className="section-icon">🎯</div>
            <h2>Our Mission</h2>
            <p className="mission-text">
              <strong>Jivaka aims to make healthcare knowledge accessible and personalized through AI 
              — empowering people to take charge of their health and wellness.</strong>
            </p>
            <p>
              We believe that everyone deserves access to reliable health information and tools 
              that help them make informed decisions about their wellbeing. Jivaka bridges the gap 
              between medical knowledge and everyday health management.
            </p>
          </section>

          <section className="values-section">
            <h2>What We Stand For</h2>
            <div className="values-grid">
              <div className="value-card card">
                <div className="value-icon">💡</div>
                <h3>Accessibility</h3>
                <p>
                  Healthcare information should be available to everyone, anytime, anywhere. 
                  Jivaka makes health guidance accessible through an easy-to-use platform.
                </p>
              </div>

              <div className="value-card card">
                <div className="value-icon">🛡️</div>
                <h3>Safety First</h3>
                <p>
                  We prioritize user safety by providing general wellness information only. 
                  We always recommend consulting healthcare professionals for medical concerns.
                </p>
              </div>

              <div className="value-card card">
                <div className="value-icon">🌟</div>
                <h3>Empowerment</h3>
                <p>
                  Knowledge is power. We empower users with information and tools to understand 
                  their health better and make informed lifestyle choices.
                </p>
              </div>

              <div className="value-card card">
                <div className="value-icon">🤝</div>
                <h3>Prevention</h3>
                <p>
                  Prevention is better than cure. Jivaka focuses on wellness, prevention, and 
                  awareness to help users maintain good health proactively.
                </p>
              </div>
            </div>
          </section>

          <section className="features-section card">
            <h2>What Jivaka Offers</h2>
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-number">1</div>
                <div className="feature-content">
                  <h3>AI-Powered Chatbot</h3>
                  <p>
                    Interact with Jivaka Bot through voice or text. Get instant answers to general 
                    health questions and receive wellness guidance powered by AI technology.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-number">2</div>
                <div className="feature-content">
                  <h3>Health Tracking Tools</h3>
                  <p>
                    Use our BMI calculator and vitals checker to monitor your health metrics. 
                    Get personalized suggestions based on your results.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-number">3</div>
                <div className="feature-content">
                  <h3>Wellness Education</h3>
                  <p>
                    Access general health information, wellness tips, and educational content 
                    to help you make informed decisions about your health.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-number">4</div>
                <div className="feature-content">
                  <h3>24/7 Availability</h3>
                  <p>
                    Jivaka is available around the clock to provide health guidance whenever 
                    you need it, without appointments or waiting times.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="disclaimer-section card">
            <div className="disclaimer-icon">⚠️</div>
            <h2>Important Disclaimer</h2>
            <p>
              <strong>Jivaka provides general health information and wellness guidance only.</strong>
            </p>
            <p>
              Jivaka is not a substitute for professional medical consultation, diagnosis, or treatment. 
              Our AI assistant is designed to provide general health information, answer wellness questions, 
              and offer tools for health tracking. It cannot diagnose medical conditions, prescribe medications, 
              or provide emergency medical advice.
            </p>
            <p>
              Always consult with qualified healthcare professionals for:
            </p>
            <ul>
              <li>Medical diagnoses or treatment plans</li>
              <li>Emergency medical situations</li>
              <li>Prescription medications</li>
              <li>Specific medical conditions or concerns</li>
              <li>Any health-related decisions that require professional expertise</li>
            </ul>
            <p>
              If you experience a medical emergency, please contact emergency services immediately.
            </p>
          </section>

          <section className="contact-cta">
            <h2>Have Questions?</h2>
            <p>We'd love to hear from you. Get in touch with our team.</p>
            <a href="/contact" className="btn btn-primary">
              Contact Us
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;

