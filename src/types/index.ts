/**
 * Common API Response Type
 */
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

/**
 * User Type
 */
export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  createdAt: string
}

/**
 * Button Props
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  children: React.ReactNode
}

/**
 * Component Props
 */
export interface HeaderProps {
  title?: string
}
