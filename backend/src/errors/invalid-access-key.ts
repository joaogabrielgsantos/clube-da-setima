import { ApplicationError } from '../protocols';

export function invalidAccessKey(): ApplicationError {
  return {
    name: 'InvalidAccessKey',
    message: 'Access key is not valid!',
  };
}