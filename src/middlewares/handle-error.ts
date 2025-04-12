import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { AppError } from "@/utils/AppError";

const handleErrors = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    res.status(error.statusCode).json({
      message: error.message,
    });
    return;
  }

  if (error instanceof ZodError) {
    res.status(400).json({
      message: "Validation error",
      issues: error.format(),
    });
    return;
  }

  res.status(500).json({
    message: error.message,
  });
};

export { handleErrors };
