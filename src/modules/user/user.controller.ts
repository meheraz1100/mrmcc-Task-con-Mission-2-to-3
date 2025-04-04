// req and res manage

import { userService } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";

const createUser = catchAsync(async (req, res) => {

    const payload = req.body;

    const result = await userService.createUser(payload);

    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      message: "User Created Successfully",
      data: result,
    });
}) 

const getUser = catchAsync(async (req, res) => {

    const result = await userService.getUser();


    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: "Users getting Successfully",
      data: result,
    });
}) 

const getSingleUser = catchAsync(async (req, res) => {

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
}) 
const updateUser = catchAsync(async (req, res) => {

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
}) 

const deleteUser = catchAsync(async (req, res) => {
    const id = req.params.id;

    const result = await userService.deleteUser(id);

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: "User deleted Successfully",
      data: result,
    });
}) 

export const userController = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
