import jwt from 'jsonwebtoken';

import { TokenModel } from './token.model.js';

export class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
            expiresIn: '30m',
        });
        const refreshToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
            expiresIn: '30d',
        });

        return {
            accessToken,
            refreshToken,
        };
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            return userData;
        } catch (e) {
            console.log('validateAccessToken', e);
            throw e;
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
            return userData;
        } catch (e) {
            console.log('validateRefreshToken', e);
            throw e;
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await TokenModel.findOne({ user: userId });
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }

        const token = await TokenModel.create({ user: userId, refreshToken });
        return token;
    }

    async removeToken(refreshToken) {
        const tokenData = await TokenModel.deleteOne({ refreshToken });
        return tokenData;
    }

    async findToken(refreshToken) {
        const tokenData = await TokenModel.findOne({ refreshToken });
        return tokenData;
    }
}
