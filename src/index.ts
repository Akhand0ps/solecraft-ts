import {Request,Response} from "express";
import dotenv from "dotenv";
dotenv.config();
import app from "./app.js"
import connectdb from "./config/db.js";



const PORT:Number = 3000;
const uri:string = process.env.uri ??' ';

// console.log("uri:",uri);

app.get("/",(req:Request,res:Response)=>{

    res.send("ALL IS WELL");
})

app.get("/health",(req:Request,res:Response)=>{
    res.send('all good');
})

connectdb(uri)
    .then(()=>{
        app.listen(PORT,()=>{
        console.log(`server running on ${PORT}`)
        })
    })
    .catch((err:unknown)=>{

        if(err instanceof Error) console.error(err.message)
        else console.error('Error came connecting db and starting server');
    })



