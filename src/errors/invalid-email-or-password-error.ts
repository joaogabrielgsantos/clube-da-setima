import { ApplicationError } from '../protocols';

export function invalidEmailOrPassword(): ApplicationError {
  return {
    name: 'InvalidEmailOrPassword',
    message: 'User or password is incorrect',
  };
}