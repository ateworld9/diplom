import { ApiError } from '../exceptions/api.error.js';

export const errorMiddleware = (err, req, res, next) => {
    if (err) {
        if (err instanceof ApiError) {
            return res
                .status(err.status)
                .json({ message: err.message, errors: err.errors });
        } else {
            console.log(err);
            return res.status(500).json({ message: 'Непредвиденная ошибка' });
        }
    } else {
        next();
    }
};
