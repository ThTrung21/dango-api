// import express,{Request,Response} from 'express';
// import http from 'http';
// import bodyParser from 'body-parser';
// import cookieParser from 'cookie-parser';
// import compression from 'compression';
// import cors from 'cors';

// const app = express();
// app.use(cors({
//     credentials: true,
// }));


// app.use(compression());
// app.use(cookieParser());
// app.use(bodyParser.json());

// app.get('/', (req: Request, res: Response) => {
//     res.send('Hello, world!');
// });

// const server = http.createServer(app);


// // server.listen(8080, () => {
// //     console.log('Server running on http://localhost:8080/');
// // });
// const PORT = process.env.PORT || 8080;
// server.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}/`);
// });
import express, { Request, Response } from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

const app = express();
app.use(cors({
    credentials: true,
}));


app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

// Define a simple route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
});

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`);
});
