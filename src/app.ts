import express from "express";
const app = express();
import UserR from "./routes/user.routes.js";


app.use(express.json());

app.use("/api/v1/auth",UserR);



export default app;