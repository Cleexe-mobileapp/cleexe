import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderProps } from '../../types'
import './Header.css'

/**
 * Header Component
 */
const Header: React.FC<HeaderProps> = ({ title = 'Near Era Cleexe' }) => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <span className="logo-icon">⚡</span>
          <h1 className="logo-text">{title}</h1>
        </Link>
        <nav className="header-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <a href="#features" className="nav-link">
            Features
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
