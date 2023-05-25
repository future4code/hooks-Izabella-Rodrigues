import { Request, Response } from "express";
import { selectProducts } from "../data/queries/selectProducts";

export const searchUsers = async (
    req: Request,
    res: Response
): Promise <void> => {
    try {

        const products = await selectProducts()
    
        res.status(200).send(products)
        
    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}
