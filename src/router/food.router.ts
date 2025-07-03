import express, { Request, Response } from "express";
import { createFood } from "../controller/food/create-food";
import { getFood } from "../controller/food/get-food";
import { FoodsWithCategories } from "../controller/food/gets-food";
const foodRouter = express.Router();

foodRouter.post("/", createFood);
foodRouter.get("/:foodId", getFood);
foodRouter.get("/", FoodsWithCategories);
export default foodRouter;
