import express, { Response } from 'express';
import cors from 'cors';

const app = express();
app
    .use(cors())
    .use(express.json())
    .get('/health', (_req, res: Response) => res.status(200).send('OK!'));

export default app;