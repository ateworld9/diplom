import type { AxiosResponse } from 'axios';

import $api from './axios';
import { type User } from '../types/User';

export interface AuthResponse {
    user: User;
    accessToken: string;
    refreshToken: string;
}

const AuthService = {
    async login(
        body: Pick<User, 'username' | 'password'>,
    ): Promise<AxiosResponse<AuthResponse>> {
        const { username, password } = body;
        return $api.post<AuthResponse>('/login', { username, password });
    },
    async registration(
        body: Pick<User, 'username' | 'password'>,
    ): Promise<AxiosResponse<AuthResponse>> {
        const { username, password } = body;
        return $api.post<AuthResponse>('/registration', {
            username,
            password,
        });
    },
    async logout(): Promise<AxiosResponse<{ message: string }>> {
        return $api.post('/logout');
    },
};

export { AuthService };
