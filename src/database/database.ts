import mongoose from "mongoose";
import "dotenv/config";
export const connectDb = async () => {
  try {
    mongoose
      .connect(process.env.MONGO_URI!)
      .then(() => console.log("Database connected"));
  } catch (error) {
    return error;
  }
};
