import Joi from 'joi';
import { CreateUserParams } from 'protocols/User';

export const createUserSchema = Joi.object<CreateUserParams>({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  key: Joi.string().min(6).required(),
});