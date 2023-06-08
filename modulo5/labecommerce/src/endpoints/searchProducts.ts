import { Request, Response } from "express";
import { searchAndOrder } from "../data/queries/selectProducts";

export const searchProducts = async (
    req: Request,
    res: Response
): Promise <void> => {
    try {

        let name = req.query.name as string
        let sort = req.query.sort as string
        let order = req.query.sort as string

        if (!name){
            name = "%"
        }

        if (!sort){
            sort = "name"
        }

        if (sort !== "name" && sort !== "price"){
            sort = "name"
        }

        const searchResults = await searchAndOrder(name, sort, order);

        if(searchResults.length < 1) {
            throw new Error("Nenhum produto encontrado");
        }
    
        res.status(200).send(searchResults)
        
    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}


