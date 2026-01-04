import { Schema, Types,model } from "mongoose";


type ObjectId = Types.ObjectId;

interface Iimage{
    url:string,
}

type ShoeSize = 6 | 7 | 8 | 9 | 10 | 11;

interface Ivariant{
    sku:string,
    size:ShoeSize,
    stock:number,
    price:number
}

interface Ioption{
    name:string
}

interface ICustomizations{
    colors:Ioption[],
    materials:Ioption[]
}



interface IProduct{
    title:string,
    description:string,
    brand:string 
    imageUrl:Iimage[],
    slug:string,
    category:ObjectId,
    originalPrice:Number,
    isPublic:boolean,
    variants:Ivariant[],
    customizationOptions:ICustomizations,
    createdAt:Date
}

const productSchema = new Schema<IProduct>({
    

    title:{
        type:String,
        trim:true,
        required:true,
        index:true,
        minLength:3,
        maxLength:100
    },

    description:{
        type:String,
        trim:true,
        required:true,
        minLength:10,
        maxLength:200
    },
    brand:{
        type:String,
        required:true,
        index:true,
        lowercase:true,
        trim:true
    },
    imageUrl:{
        type:[String],
        required:true,
        validate:{
            validator: (v:string[]) => v.length > 0,
            message: 'At least one image is required'
        }
    },

    slug:{
        type:String,
        unique:true,
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:"Category",
        required:true,
    },

    originalPrice:{
        type:Number,
        required:true,
        min:0
    },
    isPublic:{
        type:Boolean,
        default:false
    },
    variants:{
        type:[
            
            {
                sku:{
                    type:String,
                    required:true,
                },
                size:{
                    type:Number,
                    enum:[6,7,8,9,10,11],
                    required:true
                },
                stock:{
                    type:Number,
                    required:true,
                    min:0
                },
                price:{
                    type:Number,
                    required:true,
                    min:0 
                }
            }
        ],

        validate:{
            validator: (v:{
                sku:string,
                size:number;
                stock:number,
                price:number
            }[])=> v.length>0,
            message:"At least one variant is required",
        }
    }


},{timestamps:true})




export const Product = model<IProduct>('Product',productSchema);



