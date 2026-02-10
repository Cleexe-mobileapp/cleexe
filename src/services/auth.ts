import apiClient from './api'
import { User, ApiResponse } from '@types/index'

/**
 * Login user
 */
export const login = async (email: string, password: string): Promise<ApiResponse<User>> => {
  const response = await apiClient.post('/auth/login', { email, password })
  return response.data
}

/**
 * Register user
 */
export const register = async (
  name: string,
  email: string,
  password: string,
): Promise<ApiResponse<User>> => {
  const response = await apiClient.post('/auth/register', { name, email, password })
  return response.data
}

/**
 * Logout user
 */
export const logout = (): void => {
  localStorage.removeItem('auth_token')
  localStorage.removeItem('user')
}

/**
 * Get current user
 */
export const getMe = async (): Promise<ApiResponse<User>> => {
  const response = await apiClient.get('/auth/me')
  return response.data
}

/**
 * Refresh token
 */
export const refreshToken = async (): Promise<ApiResponse<{ token: string }>> => {
  const response = await apiClient.post('/auth/refresh')
  return response.data
}
