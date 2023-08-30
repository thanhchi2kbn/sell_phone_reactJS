import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Grid } from '@mui/material';
import "./style.css"

const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Họ và tên không được để trống'),
    address: Yup.string().required('Địa chỉ không được để trống'),
    phoneNumber: Yup.string().required('Số điện thoại không được để trống'),
    // Thêm các quy tắc xác thực khác nếu cần
});

export default function CheckoutForm({ setStep, setShowCheckoutForm, handlePlaceOrder ,setUserInfo}) {
    const handleSubmit = () => {
        setStep(3);
        handlePlaceOrder()
    };

    const handleCancel = () => {
        setStep(1);
        setShowCheckoutForm(false);
    };

    return (
        <div className='checkout-form'>
            <Formik
                initialValues={{
                    fullName: '',
                    address: '',
                    phoneNumber: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    setUserInfo({
                        fullName: values.fullName,
                        address: values.address,
                        phoneNumber: values.phoneNumber,
                    });
                    handleSubmit();
                }}
            >
                <Form>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Field
                                as={TextField}
                                required
                                label="Họ và tên"
                                fullWidth
                                name="fullName"
                            />
                            <ErrorMessage name="fullName" component="div" className="error-message" />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                as={TextField}
                                required
                                label="Địa chỉ"
                                fullWidth
                                name="address"
                            />
                            <ErrorMessage name="address" component="div" className="error-message" />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                as={TextField}
                                required
                                label="Số điện thoại"
                                fullWidth
                                name="phoneNumber"
                            />
                            <ErrorMessage name="phoneNumber" component="div" className="error-message" />
                        </Grid>
                        {/* Thêm các trường khác nếu cần */}
                        <Grid item xs={6}>
                            <Button type="submit" variant="contained" color="error" fullWidth>
                                Đặt hàng
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button onClick={handleCancel} variant="contained" fullWidth>
                                Quay lại
                            </Button>
                        </Grid>
                    </Grid>
                </Form>
            </Formik>
        </div>
    );
}
