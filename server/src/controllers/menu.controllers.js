import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getall = async (req, res) => {
  try {
    const menu = await prisma.menu.findMany();
    res.status(200).json({ menu });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getone = async (req, res) => {
  const id = req.params.id;
  try {
    const menu1 = await prisma.menu.findFirst({
      where: { id: id },
    });
    res.status(200).json({ success: true, menu1 });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
export const posts = async (req, res) => {
  user=req.user;
  
  try {
    const { foodImg, foodTitle, foodDescription, special, price } = req.body;
    if(user.role==="admin"){

      await prisma.menu.create({
        data: {
          foodImg,
          foodTitle,
          foodDescription,
          special,
          price,
        },
  });
    }

    res.status(201).json({ success: true, message: "created" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updates = async (req, res) => {
  const id = req.params.id;
  try {
    const { foodImg, foodTitle, foodDescription, special, price } = req.body;

    const updatemenu = await prisma.menu.update({
      where: { id: id },
      data: {
        foodImg,
        foodTitle,
        foodDescription,
        special,
        price,
      },
    });
    res.status(200).json(updatemenu);
  } catch (error) {
    res.status(500).json({ message: "error in the server" });
  }
};

export const deletes = async (req, res) => {
  const {id} = req.body;
  try {
      await prisma.menu.delete({
      where: { id: id },
    });
    res.status(200).json({  message: "delete successful" });
  } catch (err) {
    res.status(500).json({ message: err.message});
  }
};
