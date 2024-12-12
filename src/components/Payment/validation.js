import * as Yup from 'yup';

export const paymentValidationSchema = Yup.object().shape({
    to: Yup.string().email("Please enter a valid email").required("Please enter email"),
    from: Yup.string().required('Currency is required'),
    amount: Yup.number().positive('Amount must be positive').required('Amount is required'),
    description: Yup.string(),
});
