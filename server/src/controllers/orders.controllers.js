import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createorder = async (req, res) => {
  try {
    const user = req.user;
    const userid = user.id;
   const fullName = user.fullName;
    const { foodImg, foodTitle, foodDescription, location, phoneNumber ,price , numberOfOrders } =
      req.body;
if(user.role==="user"){
  await prisma.orders.create({
    data: {
      foodImg,
      foodTitle,
      foodDescription,
      location,
      userid,
      phoneNumber,
      fullName,
      price,
      numberOfOrders
    },
  });
}

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
    console.log(error.message)
    res.status(500).json({ success: false, message: error.message });
  }
 
};

export const deleteone = async (req, res) => {
const {id}= req.body;
  try {
     const deleteOrder = await prisma.orders.delete({
      where :{id: id},
     });
    res.status(200).json({ success: true, message: "delete successfully", deleteOrder });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};