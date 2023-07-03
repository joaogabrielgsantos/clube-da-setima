import { ApplicationError } from '../protocols';

export function forBiddenError(): ApplicationError {
  return {
    name: 'ForbiddenError',
    message: 'Forbidden Error!',
  };
}
