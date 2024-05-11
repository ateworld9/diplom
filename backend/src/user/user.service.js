import bcrypt from 'bcrypt';

import { ApiError } from '../exceptions/api.error.js';

import { UserModel } from './user.model.js';
import { TokenService } from '../token/token.service.js';

import { userModelToUserDto } from './mappers/index.js';

const tokenService = new TokenService();

export class UserService {
    async registration(username, password) {
        const candidate = await UserModel.findOne({ username });
        if (candidate) {
            throw ApiError.BadRequest(
                `Пользователь с таким именем ${username} уже существует`,
            );
        }

        const hashPassword = await bcrypt.hash(password, 3);

        const user = await UserModel.create({
            username,
            password: hashPassword,
        });

        const userDto = userModelToUserDto(user);
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return { ...tokens, user: userDto };
    }

    async login(username, password) {
        const user = await UserModel.findOne({ username });
        if (!user) {
            throw ApiError.BadRequest(
                'Пользователь с таким username не найден!',
            );
        }

        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            throw ApiError.BadRequest('Неверный пароль!');
        }

        const userDto = userModelToUserDto(user);
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return { ...tokens, user: userDto };
    }

    async logout(refreshToken) {
        return await tokenService.removeToken(refreshToken);
    }
}
