import { Request, Response } from "express";
import {selectPurchases}  from "../data/queries/selectPurchases";

export const searchUsers = async (
    req: Request,
    res: Response
): Promise <void> => {
    try {

        const {userId} = req.params

        const purchases = await selectPurchases(userId)

        if(!purchases) {
            throw new Error("Esse usuário nunca realizou nenhuma compra!")
        }

        res.status(200).send(purchases)
        
    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}
