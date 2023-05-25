import { Request, Response } from "express";
import insertPurchase from "../data/queries/insertPurchases";
import { v4 as uuid } from "uuid";
import { Purchase } from "../types";
import { selectProductById } from "../data/queries/selectProducts";



export const createPurchase = async (
    req: Request,
    res: Response
) => {
    try {

        const userId = req.body
        const productId = req.body
        const quantity = req.body


        if(!req.body.userId || !req.body.productId || !req.body.quantity) {
            throw new Error ("Você precisa enviar o id de usuário, o id do produto e a quantidade do produto!")
        }

        const product = await selectProductById(productId)

        const totalPrice = product.price * quantity
 
        const newPurchase: Purchase = {
            id: uuid(),
            userId,
            productId,
            quantity,
            totalPrice
        }

        await insertPurchase(newPurchase)

        res.status(200).send("Compra realizada com sucesso!")
        
    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}
