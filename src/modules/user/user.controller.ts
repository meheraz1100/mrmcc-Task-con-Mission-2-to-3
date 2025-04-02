// req and res manage

import User from "./user.model";

import { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const result = await userService.createUser(payload);

    res.json({
        status: true,
      message: "User Created Successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Something went wrong",
      error,
    });
  }
};

const getUser = async (req: Request, res: Response) => {

  try {

  const result = await userService.getUser();

  res.json({
    status: true,
    message: "Users getting Successfully",
    result,
  });
  } catch (error) {
    res.json({
        status: false,
        message: "Something went wrong",
        error,
      });
  }
};


const getSingleUser = async (req: Request, res: Response) => {

  try {

    console.log(req.params);
  const id = req.params.id;

  const result = await userService.getSingleUser(id);

  res.json({
    status: true,
    message: "User getting Successfully",
    result,
  });
  } catch (error) {
    res.json({
        status: false,
        message: "Something went wrong",
        error,
      });
  }
};
const updateUser = async (req: Request, res: Response) => {

  try {

  const id = req.params.id;
  const body = req.body;

  const result = await userService.updateUser(id, body);

  res.json({
    status: true,
    message: "User updated Successfully",
    result,
  });
  } catch (error) {
    res.json({
        status: false,
        message: "Something went wrong",
        error,
      });
  }
};


const deleteUser = async (req: Request, res: Response) => {

  try {
  const id = req.params.id;

  const result = await userService.deleteUser(id);

  res.json({
    status: true,
    message: "User deleted Successfully",
  });
  } catch (error) {
    res.json({
        status: false,
        message: "Something went wrong",
        error,
      });
  }
};

export const userController = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
