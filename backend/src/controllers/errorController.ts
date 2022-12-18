import { NextFunction, Request, Response } from "express";
import AppError from "../utils/AppError";

export default function globalErrorHandler(
  err: AppError | Error,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const { statusCode } = err as AppError;
  if (statusCode === undefined) Object.defineProperty(err, "statusCode", 500);

  // For development only
  res.status(statusCode).json({
    status: statusCode,
    message: err.message,
    error: err,
    stack: err.stack,
  });
}
