/**
 * Format error for display
 */
export const formatError = (error: any): string => {
  if (typeof error === 'string') return error
  if (error?.message) return error.message
  if (error?.response?.data?.message) return error.response.data.message
  return 'An error occurred'
}

/**
 * Delay helper for async operations
 */
export const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Retry wrapper for async operations
 */
export const withRetry = async <T,>(
  fn: () => Promise<T>,
  retries: number = 3,
  delayMs: number = 1000,
): Promise<T> => {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn()
    } catch (error) {
      if (i === retries - 1) throw error
      await delay(delayMs * (i + 1))
    }
  }
  throw new Error('Max retries exceeded')
}

/**
 * Debounce function
 */
export const debounce = <T extends (...args: any[]) => any>(
  fn: T,
  delayMs: number,
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delayMs)
  }
}

/**
 * Throttle function
 */
export const throttle = <T extends (...args: any[]) => any>(
  fn: T,
  delayMs: number,
): ((...args: Parameters<T>) => void) => {
  let lastCall = 0

  return (...args: Parameters<T>) => {
    const now = Date.now()
    if (now - lastCall >= delayMs) {
      fn(...args)
      lastCall = now
    }
  }
}

/**
 * Deep clone object
 */
export const deepClone = <T,>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * Merge objects
 */
export const mergeObjects = <T extends Record<string, any>>(
  ...objects: Partial<T>[]
): Partial<T> => {
  return objects.reduce((acc, obj) => ({ ...acc, ...obj }), {} as Partial<T>)
}
