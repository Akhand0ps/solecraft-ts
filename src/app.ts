import express from "express";
const app = express();
import UserR from "./routes/user.routes.js";
import ProR from "./routes/product.routes.js"
import cookieParser from "cookie-parser";

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended:true}))



app.use((req, res, next) => {
    // console.log('Body:', req.body);
    console.log('Content-Type:', req.headers['content-type']);
    next();
});


app.use("/api/v1/auth",UserR);
app.use("/api/v1/product",ProR);


export default app;