import dotenv from "dotenv"
dotenv.config()
import type { Request,Response ,NextFunction } from "express";
import jwt,{JwtPayload} from "jsonwebtoken"

interface customJwtPayload extends JwtPayload{
    id:string,
    role: 'USER' | 'ADMIN'
}

export const authorize = async(req:Request,res:Response,next:NextFunction):Promise<void>=>{

    try{

        const token = req.cookies.token;
        if(!token)throw new Error('Empty token');

        const decoded = jwt.verify(token,process.env.JWT_SECRET) as customJwtPayload;


        if(!decoded)throw new Error('Unauthorized, nikal')
    
            req.user = {
                id: decoded.id,
                role: decoded.role
            }
        
        next();
    }catch(err:unknown){
        res.status(500).json({message:"unauthorized"})
    }
}