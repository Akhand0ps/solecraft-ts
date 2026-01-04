import type { Request,Response,NextFunction } from "express"


export const onlyAdmin = async(req:Request,res:Response,next:NextFunction):Promise<void>=>{

    if(req.user.role !== 'ADMIN'){
        res.status(403).json({success:false,message:'You are not allowed'});
        // console.log(req.user.role ,"you are not allowed bro")
        return;
    }
    next();
}
