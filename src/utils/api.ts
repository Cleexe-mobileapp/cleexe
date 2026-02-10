/**
 * API helper utilities
 */

/**
 * Format API error message
 */
export const formatApiError = (error: any): string => {
  if (typeof error === 'string') {
    return error
  }

  if (error?.response?.data?.message) {
    return error.response.data.message
  }

  if (error?.response?.data?.error) {
    return error.response.data.error
  }

  if (error?.message) {
    return error.message
  }

  return 'An unexpected error occurred'
}

/**
 * Build query string from object
 */
export const buildQueryString = (params: Record<string, any>): string => {
  const searchParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      searchParams.append(key, String(value))
    }
  })

  return searchParams.toString()
}

/**
 * Build URL with query parameters
 */
export const buildUrl = (baseUrl: string, params?: Record<string, any>): string => {
  if (!params || Object.keys(params).length === 0) {
    return baseUrl
  }

  const queryString = buildQueryString(params)
  return queryString ? `${baseUrl}?${queryString}` : baseUrl
}

/**
 * Retry a promise with exponential backoff
 */
export const retryPromise = async <T,>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  delayMs: number = 1000,
): Promise<T> => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn()
    } catch (error) {
      if (i === maxRetries - 1) {
        throw error
      }
      await new Promise((resolve) => setTimeout(resolve, delayMs * Math.pow(2, i)))
    }
  }
  throw new Error('Max retries exceeded')
}
