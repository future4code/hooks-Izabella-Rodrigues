import { Request, Response } from "express";
import insertProduct from "../data/queries/insertProducts";
import { v4 as uuid } from "uuid";
import { Product } from "../types";
import { getProductByName } from "../data/queries/selectProducts";

export const createProduct = async (
    req: Request,
    res: Response
): Promise <void> => {
    try {

        if(!req.body.name || !req.body.price || !req.body.imageUrl) {
            throw new Error ("Você precisa enviar um nome, preço e a URL da imagem do produto!")
        }

        const nameProduct = await getProductByName(req.body.name)

       
        if (nameProduct.length > 0) {
            throw new Error("Esse produto já está cadastrado!");
        }


        const newProduct: Product = {
            id: uuid(),
            name: req.body.name,
            price: req.body.price,
            imageUrl: req.body.imageUrl
        }

        await insertProduct(newProduct)

        res.status(200).send("Produto adicionado com sucesso!")
        
    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}

