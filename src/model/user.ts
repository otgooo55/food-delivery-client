import { model, Schema } from "mongoose";

enum RoleStatusEnum {
  USER = "USER",
  ADMIN = "ADMIN",
}

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  role: { type: String, required: true, enum: Object.values(RoleStatusEnum) },
  isVerified: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});
const User = model("user", userSchema);
export default User;
