import {hash,genSalt}from "bcrypt-ts";

const salt = await genSalt(10);


export const hashPass = async(password:string):Promise<String>=>{

    const result = await hash(password,salt);

    return result;
}

