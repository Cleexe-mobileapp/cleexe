import React from 'react'
import { ButtonProps } from '@types/index'
import './Button.css'

/**
 * Button Component
 */
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className = '',
  children,
  ...props
}) => {
  const classes = `btn btn-${variant} btn-${size} ${disabled || loading ? 'disabled' : ''} ${className}`

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <span className="spinner-small"></span>
          {children}
        </>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
