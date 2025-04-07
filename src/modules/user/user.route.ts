import { NextFunction, Request, Response, Router } from "express";
import { userController } from "./user.controller";
import { userValidation } from "./userValidation";

const userRouter = Router();

userRouter.post(
  "/create-user",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log({ body: req.body });
      const parsedBody = await userValidation.userValidationSchema.parseAsync(
        req.body
      );
      req.body = parsedBody;
      console.log({ parsedBody });
      next();
    } catch (error) {
      next(error);
    }
  },
  userController.createUser
);

// userRouter.post("/create-user", userController.createUser)
userRouter.get("/:id", userController.getSingleUser);
userRouter.put("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);
userRouter.get("/", userController.getUser);

export default userRouter;
