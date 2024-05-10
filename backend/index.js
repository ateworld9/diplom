const port = config.PORT;
const StartServer = async () => {
    const app = express();

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
