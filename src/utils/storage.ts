/**
 * Storage utility for localStorage and sessionStorage
 */
const storage = {
  /**
   * Get item from localStorage
   */
  getItem: (key: string, defaultValue?: any) => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      console.error(`Error getting item from storage: ${key}`, error)
      return defaultValue
    }
  },

  /**
   * Set item in localStorage
   */
  setItem: (key: string, value: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`Error setting item in storage: ${key}`, error)
    }
  },

  /**
   * Remove item from localStorage
   */
  removeItem: (key: string) => {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error(`Error removing item from storage: ${key}`, error)
    }
  },

  /**
   * Clear all localStorage
   */
  clear: () => {
    try {
      localStorage.clear()
    } catch (error) {
      console.error('Error clearing storage', error)
    }
  },
}

export default storage
