import express from "express";
import { addUser } from "../controller/auth/addUser.controller";
import { login } from "../controller/auth/login.controller";

const userRouter = express.Router();

userRouter.post("/", addUser);
userRouter.post("/login", login);

export default userRouter;
