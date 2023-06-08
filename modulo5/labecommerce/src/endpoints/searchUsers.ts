import { Request, Response } from "express";
import { selectUsers } from "../data/queries/selectUser";

export const searchUsers = async (
    req: Request,
    res: Response
): Promise <void> => {
    try {

        const users = await selectUsers()

        if(users.length < 1) {
            throw new Error("Não existem usuários!");
        }
    
        res.status(200).send(users)
        
    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}

