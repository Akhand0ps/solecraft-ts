import mongoose,{Types,Schema,model} from "mongoose";

type ObjectId = Types.ObjectId;

interface Address{

    label:string | null,
    line1:string,
    city:string,
    zip:string

}

type Role = "ADMIN"|"USER";

interface IUser{
    name:string,
    email:string,
    password:string,
    createdAt:Date,
    cart?:ObjectId,
    orders?:ObjectId[],
    role:Role,
    addresses: Address[],
    token:string
}



const addressesSchema = new Schema(
    {
        label:{
            type:String,
            default:null,
        },
        line1:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        zip:{
            type:String,
            required:true,
            minLength:6
        }
    },
    {_id:false}
);


const UserSchema = new Schema<IUser>({
    name:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    cart:{
        type:Schema.Types.ObjectId,
        ref:"Cart",
    },
    orders:[
        {
            type:Schema.Types.ObjectId,
            ref:"Order"
        }
    ],
    token:{
        type:String,
    },

    role:{
        type:String,
        enum:['USER','ADMIN'],
        default:'USER'
    },
    addresses:{
        type:[addressesSchema],
        default:[]
    }

},{timestamps:true})

export const User = model<IUser>('User',UserSchema);


