import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'

const DefaultError = 'Something went wrong. Please try again later.'

const getErrorMessage = (
  error: FetchBaseQueryError | SerializedError | undefined,
  defaultErrorMessage = DefaultError as string
): string => {
  if (!error) {
    return defaultErrorMessage
  }

  if (typeof error === 'string') {
    return error
  }

  if ('message' in error) {
    return String(error.message)
  }

  if ('data' in error) {
    return String(error.data)
  }

  return defaultErrorMessage
}

export default getErrorMessage
