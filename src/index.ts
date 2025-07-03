import express, { Request, Response } from "express";
import { connectDb } from "./database/database";
import foodCategoryRouter from "./router/foodCategory.router";
import foodRouter from "./router/food.router";
import foodOrderRouter from "./router/food.order";
import userRouter from "./router/user.router";
import cors from "cors";
const app = express();
const port = 4200;
app.use(express.json());
app.use(cors());
app.use("/category", foodCategoryRouter);
app.use("/food", foodRouter);
app.use("/food-order", foodOrderRouter);
app.use("/user", userRouter);

app.listen(port, async () => {
  await connectDb();
  console.log(`Example app listening on port http://localhost:${port}`);
});
