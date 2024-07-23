import { Router } from "express";
import {
  getall,
  getone,
  updates,
  deletes,
  posts,
} from "../controllers/menu.controllers.js";
const router = Router();

router
  .post("/", posts)
  .get("/", getall)
  .get("/:id", getone)
  .patch("/:id", updates)
  .delete("/:id", deletes);

export default router;
