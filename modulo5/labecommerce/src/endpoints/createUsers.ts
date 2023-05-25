import { Request, Response } from "express";
import insertUsers from "../data/queries/insertUsers";
import { v4 as uuid } from "uuid";
import { User } from "../types";

export const createUser = async (
    req: Request,
    res: Response
): Promise <void> => {
    try {

        if(!req.body.name || !req.body.email || !req.body.password) {
            throw new Error ("Você precisa enviar um nome, email e senha!")
        }

        const newUser: User = {
            id: uuid(),
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        await insertUsers(newUser)

        res.status(200).send("Usuário criado com sucesso!")
        
    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}
