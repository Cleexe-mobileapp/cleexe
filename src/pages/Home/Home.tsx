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
          <h1 className="hero-title">Cleexe: Productivity Meets Community</h1>
          <p className="hero-description">
            Connect with like-minded professionals, share your goals, and build accountability together. The social platform designed for productive people who want to achieve more.
          </p>
          <div className="hero-actions">
            <Button variant="primary" size="lg" onClick={handleGetStarted}>
              Join Now
            </Button>
            <Button variant="secondary" size="lg" onClick={handleLearnMore}>
              Explore Features
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <h2 className="section-title">Why Choose Cleexe?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Goal Tracking</h3>
            <p>Set, track, and achieve your goals with built-in progress tracking and milestones.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Accountability Groups</h3>
            <p>Join groups with similar goals and keep each other motivated through shared progress.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Achievements & Badges</h3>
            <p>Earn recognition for your progress with a gamified achievement system.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Community Support</h3>
            <p>Get encouragement and tips from a supportive community of productive professionals.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Analytics & Insights</h3>
            <p>Understand your productivity patterns with detailed analytics and data visualization.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔔</div>
            <h3>Smart Notifications</h3>
            <p>Get timely reminders and updates that help you stay on track without distractions.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2 className="section-title">Ready to Boost Your Productivity?</h2>
        <p className="contact-text">Join thousands of professionals achieving their goals together on Cleexe.</p>
        <Button variant="primary" size="lg">
          Start Your Journey
        </Button>
      </section>
    </div>
  )
}

export default Home
