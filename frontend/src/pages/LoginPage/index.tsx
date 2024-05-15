import { MouseEvent, useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import * as Yup from 'yup';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { API_BASE } from '../../api/axios';
import { RootState, useAppDispatch } from '../../store';
import { fetchLogin } from '../../store/auth/authThunks';
import { useSelector } from 'react-redux';
import { cleanAuthError } from '../../store/auth/slice';

const loginSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Слишком короткое имя пользователя')
        .max(50, 'Слишком длинный имя пользователя')
        .required('Имя пользователя обязательно!'),
    password: Yup.string()
        .min(8, 'Пароль должен быть более 8 символов')
        .required('Пароль обязателен!'),
});

export const LoginPage = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        return () => {
            dispatch(cleanAuthError());
        };
    }, []);
    const error = useSelector((state: RootState) => state.auth.error);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const dispatch = useAppDispatch();
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: async (values) => {
            try {
                const originalPromise: any = await dispatch(
                    fetchLogin(values),
                ).unwrap();
                if (originalPromise.code === 200) {
                    navigate('/apple-dashboard');
                }
            } catch (error) {
                console.log(error);
            }
        },
    });
    const { handleSubmit, handleChange, values, errors } = formik;
    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: `url(${API_BASE}/public/assets/login.jpg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light'
                            ? t.palette.grey[50]
                            : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
            >
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Авторизация
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Имя пользователя"
                            name="username"
                            placeholder=""
                            onChange={handleChange}
                            value={values.username}
                            autoComplete="off"
                            autoFocus
                            error={!!errors.username}
                            helperText={errors.username}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Пароль"
                            placeholder=""
                            name="password"
                            onChange={handleChange}
                            value={values.password}
                            autoComplete="off"
                            type={showPassword ? 'text' : 'password'}
                            error={!!errors.password}
                            helperText={errors.password}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                            edge="end"
                                        >
                                            {showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        {error && (
                            <Typography variant="caption" color="error">
                                {error}
                            </Typography>
                        )}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Войти
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link
                                    component={RouterLink}
                                    to="/registration"
                                    variant="body2"
                                >
                                    {'Еще нет аккаунта? Зарегистрироваться'}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};
