import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import type { AxiosError } from 'axios';

import { AuthService, AuthResponse } from '../../api/auth';
import { API_PREFIX, ResponseError } from '../../api/axios';
import { redirect } from 'react-router-dom';

export const fetchLogin = createAsyncThunk<
    AuthResponse,
    { username: string; password: string },
    { rejectValue: ResponseError }
>('auth/login', async ({ username, password }, thunkAPI) => {
    try {
        const response = await AuthService.login({ username, password });
        localStorage.setItem('token', response.data.accessToken);
        // thunkAPI.dispatch(userModel.actions.addUser(response.data.user));
        return { ...response.data, code: response.status };
    } catch (err) {
        console.log(err);
        const error: AxiosError<ResponseError> =
            err as AxiosError<ResponseError>; // cast the error for access
        if (!error.response) {
            throw err;
        }
        // We got validation errors, let's return those so we can reference in our component and set form errors
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const fetchRegistration = createAsyncThunk<
    AuthResponse,
    { username: string; password: string },
    { rejectValue: ResponseError }
>('auth/registration', async ({ username, password }, thunkAPI) => {
    try {
        const response = await AuthService.registration({
            username,
            password,
        });
        localStorage.setItem('token', response.data.accessToken);
        // thunkAPI.dispatch(userModel.actions.addUser(response.data.user));
        return { ...response.data, code: response.status };
    } catch (err) {
        const error: AxiosError<ResponseError> =
            err as AxiosError<ResponseError>; // cast the error for access
        if (!error.response) {
            throw err;
        }
        // We got validation errors, let's return those so we can reference in our component and set form errors
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const fetchLogout = createAsyncThunk<
    { message: string },
    undefined,
    { rejectValue: ResponseError }
>('auth/logout', async (_, thunkAPI) => {
    try {
        const response = await AuthService.logout();
        localStorage.removeItem('token');
        return response.data;
    } catch (err) {
        const error: AxiosError<ResponseError> =
            err as AxiosError<ResponseError>; // cast the error for access
        if (!error.response) {
            throw err;
        }
        // We got validation errors, let's return those so we can reference in our component and set form errors
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const fetchCheckAuth = createAsyncThunk<
    AuthResponse,
    undefined,
    { rejectValue: ResponseError }
>('auth/refresh', async (_, thunkAPI) => {
    try {
        const response = await axios.get<AuthResponse>(
            `${API_PREFIX}/refresh`,
            {
                withCredentials: true,
            },
        );
        localStorage.setItem('token', response.data.accessToken);

        // thunkAPI.dispatch(userModel.actions.addUser(response.data.user));

        return response.data;
    } catch (err) {
        const error: AxiosError<ResponseError> =
            err as AxiosError<ResponseError>; // cast the error for access
        if (!error.response) {
            throw err;
        }
        // We got validation errors, let's return those so we can reference in our component and set form errors
        return thunkAPI.rejectWithValue(error.response.data);
    }
});
