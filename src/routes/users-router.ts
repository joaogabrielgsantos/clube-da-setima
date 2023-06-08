import { userSignIn, userSignUp } from "../controllers";
import { Router } from "express";
import { validateSchema } from "../middlewares/validation-schema-middleware";
import { createUserSchema } from "../schemas";


const userRoutes = Router()


userRoutes
    .get("/status", (req, res) => res.send("Estamos online!"))
    .post("/signup", validateSchema(createUserSchema), userSignUp)
    .post("/signin", userSignIn)

export { userRoutes }