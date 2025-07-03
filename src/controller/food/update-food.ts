import { Request, Response } from "express";
import Food from "../../model/food";
export const updateFood = async (req: Request, res: Response) => {
  const { foodId } = req.params;
  const { foodName, price, image, ingredients, category } = req.body;
  try {
    const updateFood = await Food.findByIdAndUpdate(
      foodId,
      {
        foodName: foodName,
        price: price,
        image: image,
        ingredients: ingredients,
        category: category,
      },
      { new: true }
    );
    console.log(foodName);

    res.status(200).send({ success: true, updateFood });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
