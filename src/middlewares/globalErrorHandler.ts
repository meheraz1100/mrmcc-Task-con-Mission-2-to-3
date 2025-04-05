import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";

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
  if (err instanceof mongoose.Error.CastError) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: err.message,
      error: err,
    });
  }
  else if( err instanceof mongoose.Error.ValidationError) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: err.message,
      error: err,
    });
  }
  else if (err.code && err.code === 11000) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: err.errorResponse.errmsg,
      error: err,
    });
  }
   else if (err instanceof Error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      name: err.name,
      message: `Any Error : ${err.message}`,
      error: err,
    });
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
