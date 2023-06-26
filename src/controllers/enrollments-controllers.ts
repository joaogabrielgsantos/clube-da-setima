import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { User } from "protocols";
import enrollmentsService from "../services/enrollments-service";
import { CreateOrUpdateEnrollmentWithAddress } from "protocols/Enrollment";

export async function getEnrollmentByUser(req: Request, res: Response, next: NextFunction) {
    const { id: userId } = res.locals.user as User

    try {
        const enrollmentWithAddress = await enrollmentsService.getEnrollmentWithAddressByUserId(userId);
        return res.status(StatusCodes.OK).send(enrollmentWithAddress);
    } catch (error) {
        next(error);
    }

}

export async function postCreateOrUpdateEnrollment(req: Request, res: Response, next: NextFunction) {
    const { id: userId } = res.locals.user as User
    const newEnrollment = req.body as CreateOrUpdateEnrollmentWithAddress
    try {
        await enrollmentsService.createOrUpdateEnrollmentWithAddress(userId, newEnrollment);
        return res.sendStatus(StatusCodes.OK);

    } catch (error) {
        console.log("Erro:", error);
        
        next(error);
    }

}