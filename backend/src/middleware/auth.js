import TokenUseCases from '../modules/auth/tokens.use-cases';
import { AppError } from '../app-errors';

const tokensUseCases = new TokenUseCases();

const AuthMiddleware = (req, res, next) => {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return next(AppError.UnAuthorized());
        }

        const accessToken = authorizationHeader.split(' ')[1];
        if (!accessToken) {
            return next(AppError.UnAuthorized());
        }

        const userData = tokensUseCases.validateAccessToken(accessToken);
        if (!userData) {
            return next(AppError.UnAuthorized());
        }

        // req.user = userData;
        next();
    } catch (error) {
        return next(AppError.UnAuthorized());
    }
};

export default AuthMiddleware;
