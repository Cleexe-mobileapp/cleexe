/**
 * Generic HTTP error handler
 */
export class HttpError extends Error {
  constructor(
    public statusCode: number,
    message: string,
  ) {
    super(message)
    this.name = 'HttpError'
  }
}

/**
 * Validation error
 */
export class ValidationError extends Error {
  constructor(
    message: string,
    public fields?: Record<string, string>,
  ) {
    super(message)
    this.name = 'ValidationError'
  }
}

/**
 * Authentication error
 */
export class AuthError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'AuthError'
  }
}
