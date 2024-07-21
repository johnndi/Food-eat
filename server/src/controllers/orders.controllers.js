import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createorder = async (req, res) => {
  try {
    const user = req.user;
    const userid = user.id;
    const { foodImg, foodTitle, foodDescription, location, phoneNumber } =
      req.body;

    await prisma.orders.create({
      data: {
        foodImg,
        foodTitle,
        foodDescription,
        location,
        userid,
        phoneNumber,
      },
    });
    res.status(201).json({ success: true, message: "created" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getSpecificorder = async (req, res) => {
  const user = req.user;
  const userid = user.id;
  try {
    const getorder = await prisma.orders.findMany({
      where: { userid: userid },
      // select: {
      //   time: true,
      //   location: true,
      //   phoneNumber: true,
      //   userId: true,
      // },
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
    res.status(500).json({ success: false, message: error.message });
  }
};
