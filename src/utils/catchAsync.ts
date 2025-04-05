import { NextFunction, Request, Response, RequestHandler } from "express";
import { userService } from "../modules/user/user.service";
import { StatusCodes } from "http-status-codes";
import sendResponse from "./sendResponse";


const catchAsync = (func: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(func(req, res, next)).catch((error) => next(error))
  }
}

export default catchAsync

// catchAsync(async (req, res) => {
//   const result = await userService.getUser();

//   sendResponse(res, {
//     statusCode: StatusCodes.OK,
//     message: "Users getting Successfully",
//     data: result,
//   });
// });

// function createOperation(func:(a: number, b: number) => number) {
//     return func
// }

// const add = createOperation((a, b) => a + b)
// const multiply = createOperation((a, b) => a * b)

// console.log(add(5, 2));
// console.log(multiply(5, 2));
