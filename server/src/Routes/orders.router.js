import { Router } from "express";
import {
  createorder,
  getAllorders,
  getSpecificorder,
  deleteone
} from "../controllers/orders.controllers.js";
import verifyToken from "../middlewares/token.middleware.js";
const router = Router();

router
  .post("/", verifyToken, createorder)
  .get("/getall", getAllorders)
  .get("/:id", verifyToken, getSpecificorder)
.delete("/:id",verifyToken,deleteone);
export default router;
