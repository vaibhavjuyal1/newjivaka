/**
 * Home Page Component
 * Hero section with welcome message and introduction to Jivaka
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1 className="hero-title fade-in">
            Welcome to <span className="highlight">Jivaka</span>
          </h1>
          <p className="hero-subtitle fade-in">
            Your AI-Powered Healthcare Assistant
          </p>
          <p className="hero-description fade-in">
            Stay healthy through personalized guidance, health education, and intelligent self-check tools.
            Get instant wellness insights whenever you need them.
          </p>
          <Link to="/chatbot" className="btn btn-primary hero-cta fade-in">
            ➜ Talk to Jivaka Bot
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <div className="intro-image">
              <div className="placeholder-image">
                <span className="image-icon">🤖</span>
                <p>AI Healthcare Assistant</p>
              </div>
            </div>
            <div className="intro-text">
              <h2>What is Jivaka?</h2>
              <p>
                Jivaka is an intelligent healthcare platform designed to empower you with 
                knowledge and tools for better health. Our AI assistant provides general health 
                guidance, answers wellness questions, and helps you track your health metrics.
              </p>
              <p>
                While Jivaka offers valuable health information and support, it's important to 
                remember that it's not a substitute for professional medical advice. Always consult 
                with qualified healthcare providers for medical concerns.
              </p>
              <div className="feature-pills">
                <span className="pill">AI-Powered</span>
                <span className="pill">Health Tracking</span>
                <span className="pill">24/7 Available</span>
                <span className="pill">Easy to Use</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">What Jivaka Offers</h2>
          <div className="features-grid">
            <div className="feature-card card">
              <div className="feature-icon">💬</div>
              <h3>AI Chatbot</h3>
              <p>
                Chat with Jivaka Bot using voice or text. Get instant answers to your health 
                questions and wellness guidance anytime.
              </p>
              <Link to="/chatbot" className="feature-link">Try Chatbot →</Link>
            </div>

            <div className="feature-card card">
              <div className="feature-icon">📊</div>
              <h3>Health Tracking</h3>
              <p>
                Use our BMI calculator and vitals checker to monitor your health metrics and 
                get personalized wellness tips.
              </p>
              <Link to="/health-tracker" className="feature-link">Track Health →</Link>
            </div>

            <div className="feature-card card">
              <div className="feature-icon">🎯</div>
              <h3>Wellness Focus</h3>
              <p>
                Focus on prevention and awareness. Learn about healthy habits, nutrition, 
                exercise, and overall wellness.
              </p>
              <Link to="/about" className="feature-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Take Charge of Your Health?</h2>
            <p>Start your wellness journey with Jivaka today</p>
            <Link to="/chatbot" className="btn btn-secondary">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

