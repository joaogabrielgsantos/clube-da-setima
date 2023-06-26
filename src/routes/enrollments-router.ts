import { Router } from "express";
import { authValidation } from "../middlewares/auth-middleware";
import { getEnrollmentByUser } from "../controllers";



const enrollmentsRoutes = Router()


enrollmentsRoutes
    .all('/*', authValidation)
    .get("/status", (req, res) => res.send("Estamos online!"))
    .get("/", getEnrollmentByUser)
    

export { enrollmentsRoutes }