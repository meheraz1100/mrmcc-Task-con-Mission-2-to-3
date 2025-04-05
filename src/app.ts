import express, { NextFunction } from "express";
import userRouter from "./modules/user/user.route";
import tourRouter from "./modules/tour/tour.route";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import bookingRouter from "./modules/booking/booking.route";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";

const app = express()

// middleware
app.use(express.json())

app.use('/api/user', userRouter)
app.use('/api/tour', tourRouter)
app.use('/api/booking', bookingRouter)

// POST: /api/user/create-user

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live ⚡',
  })
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use(globalErrorHandler)

app.use("*", (req: Request, res: Response) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: "Route not found",
  })
})

export default app

// express -> workflow -> 
// train -> []-[]-[] -> 
