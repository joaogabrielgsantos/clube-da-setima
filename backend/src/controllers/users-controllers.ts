import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import userService from '../services/users-service';
import { CreateUserParams, ValidateUserParams } from '../protocols/User';


export async function userSignUp(req: Request, res: Response, next: NextFunction) {
    const { email, password, key } = req.body as CreateUserParams

    try {
        const user = await userService.createUser(email, password, key);
        return res.sendStatus(StatusCodes.CREATED)
    } catch (error) {        
        next(error);
    }
}

export async function userSignIn(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body as ValidateUserParams

    try {
        const result = await userService.loginUser(email, password);
        return res.status(StatusCodes.OK).send(result)
    } catch (error) {
        next(error);
    }
}