import express from "express";
import userRouter from "./modules/user/user.router";

const app = express();

// middleware
app.use(express.json());

app.use("/api/user", userRouter);

// POST = /api/user/create-user

app.get("/", (req: Request, res: Response) => {
  res.send({
    status: true,
    message: "Server Live🎇",
  });
});

export default app;
