import 'express-async-errors';
import express, { Response } from 'express';
import cors from 'cors';
import { userRoutes } from './routes';
import { handleApplicationErrors } from './middlewares/error-handling-middleware';

const app = express();
app
    .use(cors())
    .use(express.json())
    .get('/health', (_req, res: Response) => res.status(200).send('OK!'))
    .use('/', userRoutes)
    .use(handleApplicationErrors);

export default app;