import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";

export const getall = async (req, res) => {
  try {
    const user = await prisma.users.findMany();
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
export const createUser = async (req, res) => {
  try {
    const { fullName,  email, password, role } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

     await prisma.users.create({
      data: {
        fullName: fullName,
        email: email,
        password: hashedPassword,
        role:role
      },
    });
    res
      .status(201)
      .json({ success: true, message: "User  successfully created" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const loginUser = await prisma.users.findFirst({ where: { email } });

    if (loginUser) {
      const isPasswordValid = bcrypt.compareSync(password, loginUser.password);
      if (isPasswordValid) {
        

        const payload = {
          id: loginUser.id,
          fullName: loginUser.fullName,
          email: loginUser.email,
          role:loginUser.role,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        res.cookie("access_token", token);
        res.status(200).json({ success: true, data: loginUser });
      } else {
        res
          .status(400)
          .json({ success: false, message: "Wrong User Credentials" });
      }
    } else {
      res
        .status(400)
        .json({ success: false, message: "Wrong User Credentials" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
