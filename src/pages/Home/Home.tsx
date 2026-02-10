import React from 'react'
import Button from '../../components/Button/Button'
import './Home.css'

/**
 * Home Page
 */
const Home: React.FC = () => {
  const handleGetStarted = () => {
    console.log('Get Started clicked')
    // Add your logic here
  }

  const handleLearnMore = () => {
    console.log('Learn More clicked')
    // Add your logic here
  }

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Near Era Cleexe</h1>
          <p className="hero-description">
            Experience the next generation of mobile innovation. Near Era Cleexe brings
            cutting-edge technology and seamless user experiences to your fingertips.
          </p>
          <div className="hero-actions">
            <Button variant="primary" size="lg" onClick={handleGetStarted}>
              Get Started
            </Button>
            <Button variant="secondary" size="lg" onClick={handleLearnMore}>
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <h2 className="section-title">Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Innovation First</h3>
            <p>Built with the latest technology and best practices for optimal performance.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile Native</h3>
            <p>Designed specifically for mobile platforms with intuitive interfaces.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure</h3>
            <p>Your data and privacy are our top priority with enterprise-grade security.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast</h3>
            <p>Lightning-quick performance and smooth animations for the best UX.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-text">Have questions? We'd love to hear from you.</p>
        <Button variant="primary" size="lg">
          Contact Us
        </Button>
      </section>
    </div>
  )
}

export default Home
