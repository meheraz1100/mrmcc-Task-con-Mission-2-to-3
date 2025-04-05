import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.log("error from app.ts", err);
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ success: false, message: err.message, error: err });
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