import { Request, Response } from "express";
import FoodOrder from "../../model/foodOrder";

export const getFoodOrders = async (req: Request, res: Response) => {
  try {
    const foodOrder = await FoodOrder.find();
    res.status(200).send({ success: true, foodOrder });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
