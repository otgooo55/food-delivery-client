import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../../model/user";
export const addUser = async (req: Request, res: Response) => {
  const { email, password, phoneNumber, address, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({
      email,
      password: hashedPassword,
      address,
      phoneNumber,
      isVerified: false,
      role: role,
    });

    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
