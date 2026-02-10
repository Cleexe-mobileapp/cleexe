import React, { createContext, useContext, ReactNode } from 'react'
import { User } from '@types/index'

/**
 * App Context Type
 */
interface AppContextType {
  user: User | null
  setUser: (user: User | null) => void
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

/**
 * Create App Context
 */
const AppContext = createContext<AppContextType | undefined>(undefined)

/**
 * App Context Provider
 */
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null)
  const [isLoading, setIsLoading] = React.useState(false)

  const value: AppContextType = {
    user,
    setUser,
    isLoading,
    setIsLoading,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

/**
 * useApp hook
 */
export const useApp = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}
