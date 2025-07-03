import { creatUser } from "../controller/user/create-user";
import express from "express";
const userRouter = express.Router();
userRouter.post("/", creatUser);
export default userRouter;
