import { Box, Button, Grid, IconButton, Modal, TextField, Typography } from "@mui/material";
import { ModalPaper } from "./BookingModal.style";
import { BookingModalMessages, bookingModalInitialValues, bookingModalSchema } from "./BookingModal.utils";
import { Form, FormikProvider, useFormik } from "formik";
import DatePicker from "../DatePicker";
import CloseIcon from '@mui/icons-material/Close';

interface BookingModalProps {
    resource: string,
    onClose: () => void,
}
export default function BookingModal({ resource, onClose }: BookingModalProps) {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: bookingModalInitialValues,
        validationSchema: bookingModalSchema,
        onSubmit: (values) => { alert('Submit') },
    })
    const handleCloseModal = () => {
        onClose()
        formik.resetForm()
    }

    return (
        <Modal open={!!resource} onClose={handleCloseModal}>
            <ModalPaper>
                <Box display='flex' alignItems='center'>
                    <Typography variant='h6' >{BookingModalMessages.Title(resource)}</Typography>
                    <IconButton sx={{ ml: 2, mb: 4 }} onClick={handleCloseModal}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <FormikProvider value={formik}>
                    <Form style={{ width: "100%" }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={4}><DatePicker name='startDate' label='Start Date' /></Grid>
                            <Grid item xs={12} md={4}><DatePicker minDate={formik.values.startDate ? new Date(formik.values.startDate) : new Date()} name='endDate' label='End Date' /></Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    name='quantity'
                                    label='Quantity'
                                    onChange={formik.handleChange}
                                    type="number"
                                    InputProps={{ inputProps: { min: 1 } }}
                                    error={!!formik.errors.quantity}
                                    helperText={formik.errors.quantity}
                                />
                            </Grid>
                        </Grid>
                        <Button sx={{ mt: 2, minWidth: '10rem', p: 1.5 }} type='submit' disabled={!formik.isValid} variant='contained'>Book</Button>
                    </Form>
                </FormikProvider>

            </ModalPaper>
        </Modal>
    )
}
