import { Request, Response } from "express";
import Food from "../../model/food";
export const deleteFood = async (req: Request, res: Response) => {
  const { foodId } = req.params;

  try {
    const deleteFood = await Food.findByIdAndDelete(foodId);

    res.status(200).send({ success: true, deleteFood });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
