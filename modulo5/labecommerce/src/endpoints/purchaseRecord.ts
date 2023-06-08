import { Request, Response } from "express";
import insertPurchase from "../data/queries/insertPurchases";
import { v4 as uuid } from "uuid";
import { Purchase } from "../types";
import { selectProductById } from "../data/queries/selectProducts";
import { getUserById } from "../data/queries/selectUser";


export const createPurchase = async (
    req: Request,
    res: Response
) => {
    try {

        const { userId, productId, quantity } =  req.body

        if(!userId || !productId || !quantity) {
            throw new Error ("Você precisa enviar o id de usuário, o id do produto e a quantidade do produto!")
        }

        const user = await getUserById(userId)

        if(!user) {
            throw new Error("Usuario não encontrado!");
        }

        const product = await selectProductById(productId)

        if(!product) {
            throw new Error("Produto não encontrado!");
        }

        const totalPrice = product.price * quantity
 
        const purchase: Purchase = {
            id: uuid(),
            userId: userId,
            productId: productId,
            quantity: quantity,
            totalPrice: totalPrice
        }

        await insertPurchase(purchase)

        res.status(200).send("Compra realizada com sucesso!")
        
    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}


