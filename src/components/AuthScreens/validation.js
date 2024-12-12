import * as Yup from 'yup'

export const _loginSchema = Yup.object().shape({
  email: Yup.string().email().required("Please enter email"),
  password: Yup.string().required("Please enter password").min(8, "password should be atleast of 8 character")

})

export const _signupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Please enter a valid email").required("Please enter email"),
  password: Yup.string()
    .required("Please enter password")
    .min(8, "Password should be at least 8 characters"),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref('password'), null], "Passwords must match"),
});
