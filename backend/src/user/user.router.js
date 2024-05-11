import { Router } from 'express';
import { body, validationResult } from 'express-validator';

import { ApiError } from '../exceptions/api.error.js';
import { UserService } from './user.service.js';

const userRouter = Router();
const userService = new UserService();

userRouter.post(
    '/registration',
    body('username').isString(),
    body('password').isLength({ min: 3, max: 32 }),
    async (req, res, next) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(
                    ApiError.BadRequest('Ошибка при валидации', errors.array()),
                );
            }

            const { username, password } = req.body;
            const userData = await userService.registration(username, password);

            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                // secure: true
            });

            res.json(userData);
        } catch (e) {
            next(e);
        }
    },
);

userRouter.post(
    '/login',
    body('username').isString(),
    body('password').isLength({ min: 3, max: 32 }),
    async (req, res, next) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(
                    ApiError.BadRequest('Ошибка при валидации', errors.array()),
                );
            }

            const { username, password } = req.body;
            const userData = await userService.login(username, password);

            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                // secure: true
            });

            res.json(userData);
        } catch (e) {
            next(e);
        }
    },
);
userRouter.post('/logout', async (req, res, next) => {
    try {
        const { refreshToken } = req.cookies;
        const token = await userService.logout(refreshToken);
        res.clearCookie('refreshToken');
        res.json(token);
    } catch (e) {
        next(e);
    }
});

userRouter.get('/refresh');

export { userRouter };
