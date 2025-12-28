import dotenv from "dotenv";
dotenv.config();
import {User} from "../models/user.model.js"
import express,{Request,Response} from "express"
import { hashPass } from "../utils/Hashpass.js";
import {compare} from "bcrypt-ts";
import jwt from "jsonwebtoken";


export const register = async(req:Request,res:Response):Promise<any>=>{

        

    try{
 
        const {name,email,password} = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields required" });
        }
        const user = await User.findOne({email});
        if(user) return res.status(409).json({message:'user already exist in our db'});


        let hashedpass = await hashPass(password);


        const newUser = new User({
            name:name,
            email:email,
            password:hashedpass
        })

        await newUser.save();

        return res.status(201).json({succes:true,message:'User creaetd successfully',newUser});

    }catch(err:any){

        console.error(err.message);
        res.status(500).json({success:false,message:err.message});
        

    }

}


export const login = async(req:Request,res:Response):Promise<any>=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user)return res.status(401).json({success:false,message:'Invalid credentials'});
        const passCompare = await compare(password,user.password);
        if(!passCompare) return res.status(401).json({success:false,message:'Invalid credentials'});

        const token = jwt.sign({userId:user._id, role:user.role},process.env.JWT_SECRET as string, { expiresIn: "7d" })

        user.Token = token;
        // console.log("token: ",token);
        res.cookie('token',token,{
            httpOnly:true,
            secure:process.env.NODE_ENV==='production',
            sameSite:"strict",
            maxAge:7*24*60*60*1000
        });
        await user.save();
        res.status(200).json({success:true,message:'Logged in successfully'});

    }catch(err:any){
        console.error(err.message);
        return res.status(500).json({success:false,message:err.message});
    }
}