import { Request, Response } from "express";
import FoodCategory from "../../model/foodCategory";

export const getFoodAllCategory = async (req: Request, res: Response) => {
  try {
    const allCategory = await FoodCategory.find();
    res.status(200).send({ success: true, allCategory });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
