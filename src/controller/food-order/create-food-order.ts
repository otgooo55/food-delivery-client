import { Request, Response } from "express";
import FoodOrder from "../../model/foodOrder";

export const createdFood = async (req: Request, res: Response) => {
  const { user, totalPrice, foodOrderItems } = req.body;
  try {
    const foodOrder = await new FoodOrder({
      user,
      totalPrice,
      foodOrderItems,
    }).save();
    res.status(200).send({ success: true, foodOrder });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
