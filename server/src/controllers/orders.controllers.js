import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createorder = async (req, res) => {
  const user = req.users;
  const {  location, phoneNumber } = req.body;
  const userid = user.id;
  const   dateTime=orders.time
  try {
    const neworder = await prisma.orders.create({
      data: {
        dateTime: dateTime,
        location: location,
        phoneNumber: phoneNumber,
        userid: userid,
      },
    });
    res.status(201).json({ success: true, data: neworder });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getSpecificorder = async (req, res) => {
  const user = req.users;
  const userid = user.id;
  try {
    const getorder = await prisma.orders.findMany({
      where: { userid: users.id },
      select: {
        dateTime: true,
        location: true,
        number: true,
        userId: true,
      },
    });
    res.status(200).json({ success: true, data: getorder });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllorders = async (req, res) => {
  try {
    const allorders = await prisma.orders.findMany();
    res.status(200).json({ success: true, message: allorders });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: error.message /*"An error occured"*/ });
  }
};
