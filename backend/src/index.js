import { createServer } from 'node:http';
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';

import { errorMiddleware } from './middlewares/error.js';
import { userRouter } from './user/user.router.js';
import path from 'node:path';

const port = process.env.PORT;
const StartServer = async () => {
    const app = express();

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('database successfully connected');
    } catch (error) {
        console.log('database not connected', error);
    }

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());

    const whitelist = [
        undefined,
        'http://localhost:3000',
        'http://localhost:3001',
    ];

    app.use(
        cors({
            credentials: true,
            origin: function (origin, cb) {
                if (whitelist.indexOf(origin) !== -1) {
                    cb(null, true);
                } else {
                    cb(new Error('Not allowed by CORS'));
                }
            },
        }),
    );

    app.use(
        '/public',
        express.static(
            process.env.PATH_TO_PUBLIC ?? path.join(process.cwd(), '/public'),
        ),
    );
    app.use('/api', userRouter);
    app.use(errorMiddleware);

    const httpServer = createServer(app);
    httpServer
        .listen(port, () => {
            console.log(`listening to port ${port}`);
        })
        .on('error', (err) => {
            console.log('Error', err);
            process.exit();
        });
};
StartServer();
