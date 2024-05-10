import { NextFunction, Request, Response } from 'express';
import { AppError } from '../app-errors';
import logger from '../logger';

const ErrorMiddleware = async (err, _req, res, next) => {
    if (err) {
        logger.error(err);
        if (err instanceof AppError) {
            return res
                .status(err.statusCode)
                .json({ message: err.message, errors: err.errors });
        } else {
            console.log(
                '==========================\n===========EXIT===========\n==========================\n',
                'process exit // terribly wrong with flow need restart',
            );
            process.exit(1);
        }
    }
    next();
};

export default ErrorMiddleware;
