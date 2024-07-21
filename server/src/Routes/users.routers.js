import { Router } from "express";
import {
  createUser,
  loginUser,
  getall,
} from "../controllers/users.conrollers.js";
const router = Router();

router.post("/", createUser).get("/", getall);

router.post("/login", loginUser);

export default router;
