import express from "express";
import { createFoodCategory } from "../controller/foodCategory/create-food-category";
import { deleteFoodCategory } from "../controller/foodCategory/delete-food-category";
import { updateFoodCategory } from "../controller/foodCategory/update-food-category";
import { getFoodAllCategory } from "../controller/foodCategory/get-food-all-category";
import { getFoodCategory } from "../controller/foodCategory/get-food-category";

const foodCategoryRouter = express.Router();

foodCategoryRouter.post("/", createFoodCategory);
foodCategoryRouter.get("/", getFoodAllCategory);
foodCategoryRouter.get("/categoryId", getFoodCategory);
foodCategoryRouter.delete("/categoryId", deleteFoodCategory);
foodCategoryRouter.put("/categoryId", updateFoodCategory);
export default foodCategoryRouter;
