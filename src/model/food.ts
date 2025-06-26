import { model, Schema } from "mongoose";

const foodSchema = new Schema({
  foodName: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "FoodCategory", require: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
  ingredients: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});
const Food = model("Food", foodSchema);
export default Food;
