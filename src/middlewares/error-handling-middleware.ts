import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';


export function handleApplicationErrors(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {

  if (err.name === 'ConflictError' || err.name === 'DuplicatedEmailError') {
    return res.status(StatusCodes.CONFLICT).send({
      message: err.message,
    });
  }

  if (err.name === 'UnauthorizedError') {
    return res.status(StatusCodes.UNAUTHORIZED).send({
      message: err.message,
    });
  }

  if (err.name === 'NotFoundError') {
    return res.status(StatusCodes.NOT_FOUND).send({
      message: err.message,
    });
  }

  if (err.name === 'NotAccessKey') {
    return res.status(StatusCodes.NOT_FOUND).send({
      message: err.message,
    });
  }

  if (err.name === 'InvalidAccessKey') {
    return res.status(StatusCodes.NOT_FOUND).send({
      message: err.message,
    });
  }

  if (err.name === 'BadRequestError') {
    return res.status(StatusCodes.BAD_REQUEST).send({
      message: err.message,
    });
  }

  if (err.name === 'ForbiddenError') {
    return res.status(StatusCodes.FORBIDDEN).send({
      message: err.message,
    });
  }

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
    error: 'InternalServerError',
    message: 'Internal Server Error',
  });
}
