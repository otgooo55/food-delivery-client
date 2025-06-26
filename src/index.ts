import express, { Request, Response } from "express";
import { connectDb } from "./database/database";
import foodCategoryRouter from "./router/foodCategory.router";
import foodRouter from "./router/food.router";

const app = express();
app.use(express.json());
const port = 4202;

app.use("/", foodCategoryRouter);
app.use("/food", foodRouter);
app.listen(port, async () => {
  await connectDb();
  console.log(`Example app listening on port http://localhost:${port}`);
});
