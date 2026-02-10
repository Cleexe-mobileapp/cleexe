import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import './NotFound.css'

/**
 * Not Found (404) Page
 */
const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h1>Page Not Found</h1>
        <p>Sorry, the page you're looking for doesn't exist or has been moved.</p>
        <Link to="/">
          <Button variant="primary" size="lg">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
