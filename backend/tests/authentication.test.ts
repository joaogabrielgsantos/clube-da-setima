import supertest from 'supertest';
import { cleanDb } from './helpers';
import app from '../src/app';
import { StatusCodes } from 'http-status-codes';
import { main as seedDatabase } from '../prisma/seed';

beforeAll(async () => {
    await cleanDb();
    await seedDatabase();
});

const server = supertest(app);

describe('POST /sign-up', () => {
    it('should respond with status 422 when body is not given', async () => {
        const response = await server.post('/sign-up');
        expect(response.status).toBe(StatusCodes.UNPROCESSABLE_ENTITY);
    });

});