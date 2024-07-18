import {Router} from "express"
import { createorder, getAllorders, getSpecificorder } from "../controllers/orders.controllers.js";
const router = Router();


router.post("/", createorder).get("/", getAllorders).get("/:id",getSpecificorder);







export default router