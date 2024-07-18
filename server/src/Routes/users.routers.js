import {Router} from "express"
import { createUser, loginUser,  } from "../controllers/users.conrollers.js";
const router = Router();


router.post("/register", validateInformation, createUser);

router.post("/login", loginUser);





export default router