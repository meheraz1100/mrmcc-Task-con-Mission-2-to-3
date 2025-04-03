// req and res manage

import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";

const createUser = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const payload = req.body;

    const result = await userService.createUser(payload);

    // res.json({
    //     status: true,
    //   message: "User Created Successfully",
    //   data: result,
    // });

    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      message: "User Created Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
    
    // res.json({
    //   status: false,
    //   message: "Something went wrong",
    //   error,
    // });
  }
};

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userService.getUser();

    // res.json({
    //   status: true,
    //   message: "Users getting Successfully",
    //   result,
    // });

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: "Users getting Successfully",
      data: result,
    });
  } catch (error) {
    // res.json({
    //   status: false,
    //   message: "Something went wrong",
    //   error,
    // });

    next(error);
  }
};

const getSingleUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const result = await userService.getSingleUser(id);

    // res.json({
    //   status: true,
    //   message: "User getting Successfully",
    //   result,
    // });

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: "User getting Successfully",
      data: result,
    });
  } catch (error) {
    // res.json({
    //   status: false,
    //   message: "Something went wrong",
    //   error,
    // });

    next(error);
  }
};
const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const result = await userService.updateUser(id, body);

    // res.json({
    //   status: true,
    //   message: "User updated Successfully",
    //   result,
    // });

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: "User updated Successfully",
      data: result,
    });
  } catch (error) {
    // res.json({
    //   status: false,
    //   message: "Something went wrong",
    //   error,
    // });

    next(error);
  }
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;

    const result = await userService.deleteUser(id);

    // res.json({
    //   status: true,
    //   message: "User deleted Successfully",
    // });

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: "User deleted Successfully",
      data: result,
    });
  } catch (error) {
    // res.json({
    //   status: false,
    //   message: "Something went wrong",
    //   error,
    // });

    next(error);
  }
};

export const userController = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
