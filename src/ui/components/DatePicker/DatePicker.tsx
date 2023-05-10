import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import {
    DatePicker as MUIDatePicker
} from '@mui/x-date-pickers/DatePicker'
import { Field, FieldProps } from 'formik'
import { isValid } from 'date-fns'
import { BookingModalMessages } from '../BookingModal/BookingModal.utils'
interface DatePickerProps {
    name: string,
    label: string
    minDate?: Date
}

export default function DatePicker({ name, label, minDate = new Date(), ...props }: DatePickerProps) {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Field name={name}>
                {({ field, form, meta }: FieldProps) => {
                    return (
                        <MUIDatePicker
                            {...props}
                            {...field}
                            label={label}
                            minDate={minDate}
                            onChange={(date) => {
                                const isValidDate = isValid(date)
                                form.setFieldTouched(name, true)
                                if (isValidDate) {
                                    form.setFieldValue(field.name, date ? new Date(date) : null)
                                    return
                                }
                                form.setFieldValue(field.name, date)
                                form.setFieldError(field.name, BookingModalMessages.InvalidDate)
                            }}
                            slotProps={{
                                textField: {
                                    helperText: meta.error,
                                    error: !!meta.error
                                },
                            }}
                        />

                    )
                }}
            </Field>
        </LocalizationProvider>
    )
}
