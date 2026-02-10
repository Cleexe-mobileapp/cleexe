/**
 * Configuration constants
 */

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    ME: '/auth/me',
  },
  USERS: {
    LIST: '/users',
    GET: (id: string) => `/users/${id}`,
    UPDATE: (id: string) => `/users/${id}`,
    DELETE: (id: string) => `/users/${id}`,
  },
}

export const APP_CONFIG = {
  appName: import.meta.env.VITE_APP_NAME || 'Near Era Cleexe',
  appVersion: import.meta.env.VITE_APP_VERSION || '1.0.0',
  apiTimeout: parseInt(import.meta.env.VITE_API_TIMEOUT || '30000'),
  enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  enableNotifications: import.meta.env.VITE_ENABLE_NOTIFICATIONS === 'true',
}

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
}
