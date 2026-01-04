import mongoose from "mongoose";
// import dotenv from "dotenv";




async function connectdb(uri:string):Promise<void>{

    try{
        const conn =  await mongoose.connect(uri);
        console.log(`MongoDB Connected => ${conn.connection.host}`)
    }catch(err:unknown){

        if(err instanceof Error){
            console.error('Mongo db connection failed => ',err.message);
        }
        else{
            console.log('An unknown error occured');
        }
    }
}


export default connectdb;