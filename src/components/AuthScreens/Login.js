import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Typography,
  Box,
  IconButton,
  Container,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import { AiTwotoneLock, AiTwotoneMail } from "react-icons/ai";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { setAuth } from "../../redux/slicers/auth";
import { BASE_URL } from "../../api/base_url";
import { apiRequest } from "../../utils/apiRequest";
import { setAuthCookie } from "../../utils/authHelpers";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const initialValues = { email: "", password: "" };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const { data, status } = await apiRequest({
        endUrl: `${BASE_URL}/user/login`,
        method: "POST",
        body: values,
        showMsg: true,
      });
      setLoading(false);

      if (status) {
        setAuthCookie(data?.token);
        dispatch(
          setAuth({ token: data?.token, isAuth: true, userType: data?.userType })
        );
        navigate("/");
      } else {
        navigate("/sign-in");
      }
    } catch (error) {
      setLoading(false);
      console.error("Login failed", error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleLogin,
  });

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Box
        sx={{
          padding: 4,
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Box mb={3}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              InputProps={{
                startAdornment: <AiTwotoneMail style={{ marginRight: 8 }} />,
              }}
            />
          </Box>

          <Box mb={3}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputProps={{
                startAdornment: <AiTwotoneLock style={{ marginRight: 8 }} />,
                endAdornment: (
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
            />
          </Box>

          <Box display="flex" justifyContent="flex-end" mb={3}>
            <Link href="/forget-password" underline="hover">
              <Typography variant="body2" color="primary">
                Forgot password?
              </Typography>
            </Link>
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loading}
            startIcon={loading && <CircularProgress size={20} />}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
          <Box mt={3} textAlign="center">
            <Link to="/sign-up" underline="hover">
              <Typography variant="body2" color="primary">
                Don&apos;t have an account? Signup
              </Typography>
            </Link>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
