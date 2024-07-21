import userrouter from "./Routes/users.routers.js";
import orderrouter from "./Routes/orders.router.js";
import menurouter from "./Routes/menu.routers.js";
import cookieParser from "cookie-parser";
import express from "express";
import { config } from "dotenv";
import cors from "cors";
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET", "PATCH", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());
config();
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use("/user", userrouter);
app.use("/order", orderrouter);
app.use("/menu", menurouter);
app.listen(3000, () => {
  console.log("port running 3000...");
});
