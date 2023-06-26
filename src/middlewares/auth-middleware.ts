import userRepositories from "../repositories/user-repository"
import { NextFunction, Request, Response } from "express";
import { unauthorizedError } from "../errors";

export async function authValidation(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    if (!token) throw unauthorizedError();
    try {
        const session = await userRepositories.findSessionByToken(token);
        if (!session) throw unauthorizedError();

        const user = await userRepositories.findUserById(session.userId);
        if (!user) throw unauthorizedError();

        res.locals.user = user;
        next();
    } catch (error) {
        throw error
    }
}