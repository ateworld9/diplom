import axios from 'axios';

import type { AuthResponse } from './auth';

export interface ResponseError {
    message: string;
    errors: any;
}

export const API_BASE = 'http://localhost:3001';
export const API_PREFIX = `${API_BASE}/api`;

const $api = axios.create({
    withCredentials: true,
    baseURL: API_PREFIX,
});

$api.interceptors.request.use(
    (config) => {
        if (config && config.headers) {
            // eslint-disable-next-line no-param-reassign
            config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
        }
        return config;
    },
    (error) => {
        // eslint-disable-next-line no-console
        console.log('ошибка в перехватчике запроса', error);
        // Сделайте что-нибудь с ошибкой запроса
        return Promise.reject(error);
    },
);

$api.interceptors.response.use(
    (config) => config,
    async (error) => {
        const originalRequest = error.config;

        if (
            error.response.status === 401 &&
            error.config &&
            !error.config.isRetry
        ) {
            originalRequest.isRetry = true;
            try {
                const response = await axios.get<AuthResponse>(
                    `${API_PREFIX}/refresh`,
                    {
                        withCredentials: true,
                    },
                );
                localStorage.setItem('token', response.data.accessToken);
                return await $api.request(originalRequest);
            } catch (err) {
                // eslint-disable-next-line no-console
                console.log('Не авторизован', err);
            }
        }
        throw error;
    },
);

export default $api;
