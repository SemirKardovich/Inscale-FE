export interface ResourceType {
  id: number
  name: string
  info: string
  quantity: number
}

export interface AddBookingApiArg {
  ResourceId: number
  DateFrom: Date | null
  DateTo: Date | null
  Quantity?: number
}
