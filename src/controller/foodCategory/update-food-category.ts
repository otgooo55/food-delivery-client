import { Request, Response } from "express";
import FoodCategory from "../../model/foodCategory";

export const updateFoodCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  const { categoryName } = req.body;

  try {
    const updatedCategory = await FoodCategory.findByIdAndUpdate(
      categoryId,
      { categoryName },
      { new: true }
    );
    res.status(200).send({ success: true, updatedCategory });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
