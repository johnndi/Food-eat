import { Router } from "express";
import {
  createorder,
  getAllorders,
  getSpecificorder,
} from "../controllers/orders.controllers.js";
import verifyToken from "../middlewares/token.middleware.js";
const router = Router();

router
  .post("/", verifyToken, createorder)
  .get("/", getAllorders)
  .get("/:id", verifyToken, getSpecificorder);

export default router;
