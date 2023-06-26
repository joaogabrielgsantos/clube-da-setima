import { Router } from "express";
import { authValidation } from "../middlewares/auth-middleware";
import { getEnrollmentByUser, postCreateOrUpdateEnrollment } from "../controllers";
import { validateSchema } from "../middlewares/validation-schema-middleware";
import { createEnrollmentSchema } from "../schemas";



const enrollmentsRoutes = Router()


enrollmentsRoutes
    .all('/*', authValidation)
    .get("/status", (req, res) => res.send("Estamos online!"))
    .get("/", getEnrollmentByUser)
    .post('/', validateSchema(createEnrollmentSchema), postCreateOrUpdateEnrollment);
    

export { enrollmentsRoutes }