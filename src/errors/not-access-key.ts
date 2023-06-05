import { ApplicationError } from '../protocols';

export function notAccessKey(): ApplicationError {
  return {
    name: 'NotAccessKey',
    message: 'Access key not found!',
  };
}