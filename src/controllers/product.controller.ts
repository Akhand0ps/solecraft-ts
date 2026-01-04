import type { Request,Response } from "express"




export const createProduct = async(req:Request,res:Response):Promise<void>=>{

    try{

        const {title,description} = req.body;
        const data = {title,description};
        // console.log("data: ",data);
        // const a = 122;

         res.status(201).json({success:true,message:'Product created',data});
         return;

    }catch(err:unknown){

        if(err instanceof Error){
            res.status(500).json({message:err.message});
            return;
        }
    }
}