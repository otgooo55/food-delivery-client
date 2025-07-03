import { Request, Response } from "express";
import FoodCategory from "../../model/foodCategory";

export const getFoodCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  try {
    const food = await FoodCategory.findById(categoryId);
    res.status(200).send({ success: true, food });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
