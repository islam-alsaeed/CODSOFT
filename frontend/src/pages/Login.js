import { Box, Avatar } from '@mui/material'
import React, { useEffect } from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import LockClockOutlined from '@mui/icons-material/LockClockOutlined'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { userLoginAction } from '../redux/actions/userAction'
import { useNavigate } from 'react-router-dom'
import Stylebackground from '../component/StyleBackGround'


const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { ifAuthenticated } = useSelector(state => state.login);
    useEffect(() => {
        if (ifAuthenticated) {
            navigate('/user/Profile');
        }
    }, [ifAuthenticated])

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            //  alert(JSON.stringify(values, null, 2));
            dispatch(userLoginAction(values));
            actions.resetForm();
        }

    })

    return (
        <>
            <Navbar />
            <Stylebackground>
                <Box sx={{
                    height: '82.2vh',
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                }}>


                    <Box onSubmit={formik.handleSubmit} component="form" className='form_style border-style' sx={{
                        backgroundColor: "rgb(255,255,255,0.9)",
                        padding: "20px",
                        borderRadius: "20px"

                    }}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "100%"
                        }}>
                            <Avatar sx={{ m: 1, bgcolor: "primary.main", mb: 3 }}>
                                <LockClockOutlined />
                            </Avatar>
                            <TextField sx={{ mb: 3 }}
                                fullWidth
                                id="email"
                                name='email'
                                label="Email"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                placeholder="Email"
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                helperText={formik.touched.email && formik.errors.email}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                            />
                            <TextField sx={{ mb: 3 }}
                                fullWidth
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                placeholder="Password"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                helperText={formik.touched.password && formik.errors.password}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                            />

                            <Button fullWidth variant="contained" type='submit' >Log In</Button>
                        </Box>
                    </Box>
                </Box></Stylebackground>
            <Footer />
        </>
    )
}

export default Login