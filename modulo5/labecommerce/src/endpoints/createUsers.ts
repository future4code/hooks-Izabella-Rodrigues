import { Request, Response } from "express";
import insertUsers from "../data/queries/insertUsers";
import { v4 as uuid } from "uuid";
import { User } from "../types";
import { getUserByEmail } from "../data/queries/selectUser";

export const createUser = async (
    req: Request,
    res: Response
): Promise <void> => {
    try {

        const name = req.body.name
        const email = req.body.email
        const password = req.body.password

        if(!name || !email || !password) {
            throw new Error ("Você precisa enviar um nome, email e senha!")
        }

        const user  = await getUserByEmail(email)

        if(user) {
            throw new Error("Esse email já esta cadastrado!");
        }

        
        if(!email.includes("@") || !email.includes(".com")) {
            throw new Error("O campo do email deve conter um '@' e um '.com'");
        }

        if(password.length < 6) {
            throw new Error("A senha deve conter no mínimo seis caracteres!");  
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
