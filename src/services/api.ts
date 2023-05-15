import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AddBookingApiArg, ResourceType } from './types'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5014/api/',
  }),
  endpoints: (builder) => ({
    getResources: builder.query<ResourceType[], void>({
      query: () => 'resource',
    }),
    addBooking: builder.mutation<unknown, AddBookingApiArg>({
      query: (queryArg) => ({
        url: 'booking',
        method: 'POST',
        body: queryArg,
      }),
    }),
  }),
})

export const { useGetResourcesQuery, useAddBookingMutation } = api
