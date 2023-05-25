import { Request, Response } from "express";
import { selectUsers } from "../data/queries/selectUser";

export const searchUsers = async (
    req: Request,
    res: Response
): Promise <void> => {
    try {

        const users = await selectUsers()
    
        res.status(200).send(users)
        
    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}

