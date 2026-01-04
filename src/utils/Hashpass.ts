import bcrypt from "bcrypt";



export const hashPass = async(password:string):Promise<String>=>{

    const saltRound =10;
    return await bcrypt.hash(password,saltRound);
}

