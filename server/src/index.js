import userrouter from "./Routes/users.routers.js";
import orderrouter from "./Routes/orders.router.js";
import menurouter from "./Routes/menu.routers.js";
import express from "express"

const app =express();
app.use(express.json());
app.use("/user",userrouter)
app.use("/order", orderrouter)
app.use("/menu", menurouter)
app.listen(3000,()=>{
    console.log("port running 3000...")
})