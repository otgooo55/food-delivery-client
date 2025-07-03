import express from "express";
import { createdFood } from "../controller/food-order/create-food-order";
const foodOrderRouter = express.Router();

foodOrderRouter.post("/", createdFood);
export default foodOrderRouter;
