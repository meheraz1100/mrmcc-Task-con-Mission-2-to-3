import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import { handleGenericError } from "../helpers/handleGenericError";
import { handleDuplicateError } from "../helpers/handleDuplicateError";
import { handleCastError } from "../helpers/handleCastError";
import { handleValidationError } from "../helpers/handleValidationError";
import { handleZodError } from "../helpers/handleZodError";

// Error
/**
 * Generic Error Handler
 * Duplicate
 * validation
 * cast error - type casting error
 * Zod Error/ Joi Error
 */

type TErrorResponse = {
  success: boolean;
  message: string;
  error: any;
};

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err.name && err.name === "ZodError") {
    handleZodError(err, res);
  } else if (err instanceof mongoose.Error.CastError) {
    handleCastError(err, res);
  } else if (err instanceof mongoose.Error.ValidationError) {
    handleValidationError(err, res);
  } else if (err.code && err.code === 11000) {
    handleDuplicateError(err, res);
  } else if (err instanceof Error) {
    handleGenericError(err, res);
  }

  console.log(err);
};

// Error - string = err.message
// Error - Customize - Array, Object, String

/*
 * JS Code
 * error - js error -> customize -> new pattern of error
 *
 * any error is a instance of error of js
 *
 */
