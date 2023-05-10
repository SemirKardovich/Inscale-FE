import { isBefore } from 'date-fns'
import { object, string } from 'yup'

export const BookingModalMessages = {
  Title: (resource: string) =>
    `What is the estimated number of ${resource.toLowerCase()} needed and over what time period is the demand for their services required?`,
  RequiredField: 'This field is required',
  InvalidDate: 'Invalid Date',
}

export const bookingModalInitialValues = {
  startDate: null,
  endDate: null,
  quantity: '',
}

export const bookingModalSchema = object({
  startDate: string()
    .required(BookingModalMessages.RequiredField)
    .test('invalid date', BookingModalMessages.InvalidDate, (value) => {
      const isInvalidDate = value === BookingModalMessages.InvalidDate
      return !isInvalidDate
    })
    .test('minimum date', 'Start date cannot be in the past.', (value) => {
      const currentDate = new Date().setHours(0, 0, 0, 0)
      const dateSelected = new Date(value ?? '')
      const isMinimumDate = isBefore(dateSelected, currentDate)

      return !isMinimumDate
    }),
  endDate: string()
    .required(BookingModalMessages.RequiredField)
    .test('invalid date', BookingModalMessages.InvalidDate, (value) => {
      const isInvalidDate = value === BookingModalMessages.InvalidDate
      return !isInvalidDate
    })
    .test(
      'minimum date when start date is available',
      'End date cannot be before Start date',
      (value, context) => {
        if (!value || !context.parent.startDate) {
          return true
        }
        const startDate = new Date(context.parent.startDate).setHours(
          0,
          0,
          0,
          0
        )
        const endDate = new Date(value).setHours(0, 0, 0, 0)
        const isMinimumDate = isBefore(endDate, startDate)

        return !isMinimumDate
      }
    )
    .test(
      'minimum date when start date is not available',
      'End date cannot be in the past.',
      (value) => {
        if (!value) {
          return true
        }
        const currentDate = new Date().setHours(0, 0, 0, 0)
        const dateSelected = new Date(value).setHours(0, 0, 0, 0)
        const isMinimumDate = isBefore(dateSelected, currentDate)

        return !isMinimumDate
      }
    ),
  quantity: string()
    .required(BookingModalMessages.RequiredField)
    .test(
      'minimum quantity amount',
      'Quantity value cannot be below 1',
      (value) => {
        if (!value) {
          return true
        }
        const isBelowOne = Number(value) < 1

        return !isBelowOne
      }
    ),
})
