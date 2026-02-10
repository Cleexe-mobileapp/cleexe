/**
 * Type definitions for shared components and data
 */

import { User } from './index'

/**
 * Goal related types
 */
export interface Goal {
  id: string
  title: string
  description: string
  status: 'active' | 'completed' | 'archived'
  progress: number
  createdAt: string
  updatedAt: string
  dueDate?: string
}

/**
 * User Group types
 */
export interface Group {
  id: string
  name: string
  description: string
  members: User[]
  creator: User
  createdAt: string
  memberCount: number
}

/**
 * Achievement/Badge types
 */
export interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  unlockedAt: string
}

/**
 * Activity/Post types
 */
export interface Activity {
  id: string
  userId: string
  userName: string
  userAvatar: string
  message: string
  type: 'goal-created' | 'goal-completed' | 'joined-group' | 'achievement' | 'post'
  createdAt: string
  likes: number
  comments: number
  shares: number
}

/**
 * Notification types
 */
export interface Notification {
  id: string
  type: 'goal' | 'group' | 'achievement' | 'message'
  title: string
  message: string
  read: boolean
  createdAt: string
  actionUrl?: string
}

/**
 * Feed Item types
 */
export interface FeedItem {
  id: string
  type: 'goal' | 'achievement' | 'group-post'
  content: any
  author: User
  timestamp: string
  interactions: {
    likes: number
    comments: number
  }
}
