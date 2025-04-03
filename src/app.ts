import express, { NextFunction } from "express";
import userRouter from "./modules/user/user.router";
import tourRouter from "./modules/tour/tour.route";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const app = express();

// middleware
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/tour", tourRouter);

// POST = /api/user/create-user

app.get("/", (req: Request, res: Response) => {
  res.send({
    status: true,
    message: "Server Live🎇",
  });
});

app.use((err: any, req:Request, res:Response, next: NextFunction) => {
  console.log("Error from App.ts", err);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err.message,
    error: err,
  });
});

export default app;
