import { model, Schema } from "mongoose";
import Food from "./food";

enum FoodOrderStatusEnum {
  PENDING = "PENDING",
  CANCELED = "CANCELED",
  DELIVERED = "DELIVERED",
}
const foodOrderItemSchema = new Schema({
  food: { type: Schema.Types.ObjectId, required: true, ref: "Food" },
  quantity: { type: Number, required: true },
  price: { type: String, required: true },
});

const foodOrderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "user", required: true },
  totalPrice: { type: Number, required: true },
  foodOrderItems: { type: foodOrderItemSchema, required: true },
  status: {
    type: String,
    required: true,
    default: FoodOrderStatusEnum.PENDING,
    enum: Object.values(FoodOrderStatusEnum),
  },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});
const FoodOrder = model("foodOrder", foodOrderSchema);
export default FoodOrder;
