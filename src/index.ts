import {Request,Response} from "express";
import app from "./app.js"



const PORT:Number = 3000;


app.get("/",(req:Request,res:Response)=>{

    res.send("ALL IS WELL");
})

app.get("/health",(req:Request,res:Response)=>{
    res.send('all good');
})


app.listen(PORT,()=>{

    console.log(`server running on ${PORT}`)
})
