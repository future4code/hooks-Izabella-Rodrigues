import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { user, users } from './data';

const app: Express = express();

app.use(express.json());
app.use(cors());

// 1)

app.get ("/users", (req, res) => {
   let errorCode = 400
   try {
      res.send (users)
   } catch (error: any) {
      res.status(errorCode).send(error.message)
   }
})

// a) vamos usar o método get, pois é ele que usamos para buscar informações.

// b) A entidade Manipulada é o "users"


// 2) 

app.get ("/users", (req, res) => {
   let errorCode = 400
    try {
        let typeUser: string = req.query.type as string

        const userList: user [] | undefined = users.filter((user) => user.type === typeUser)

        if (!userList) {
            errorCode = 404 
            throw new Error("Type invalido!")
        }

        if (typeUser !== "ADMIN" && typeUser !== "NORMAL") {
         errorCode = 404
         throw new Error("Insira uma entrada valida!")
      }

        res.send(userList)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

//a) Vou passar usando QueryParams pois é uma busca dentro do mesmo conjunto de informações.

//b) Sim, fazendo uma validação dos types inseridos.

// 3)

app.get("/users", (req, res) => {
   let errorCode = 400
   try {
       const name: string = req.query.name as string

       const user: user | undefined = users.find((user) => user.name === name)

       if (!user) {
           errorCode = 404 //not found
           throw new Error("Usuário não encontrado")
       }

       res.send(user)

   } catch (error: any) {
       res.status(errorCode).send(error.message)
   }
})


// a) é utilizado path params


// 4)


app.post("/users", (req, res) => {
    let errorCode = 400
    try {
        const { id, name, email, type, age }: user = req.body
        
        if (!id || !name || !email || !type || !age) {
            errorCode = 422
            throw new Error("Um ou mais campos estão vazios")
        }
        const newUser: user = {
            id,
            name,
            email,
            type,
            age
        }

        users.push(newUser)
        res.send("Usuário criado")

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

// a) Nada mudou, apenas o método, mas a funcionalidade continua igual.
app.put("/users", (req, res) => {
    let errorCode = 400
    try {
        const { id, name, email, type, age }: user = req.body
        
        if (!id || !name || !email || !type || !age) {
            errorCode = 422
            throw new Error("Um ou mais campos estão vazios")
        }
        const newUser: user = {
            id,
            name,
            email,
            type,
            age
        }

        users.push(newUser)
        res.send("Usuário criado")

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})
//b) acho que não é a correta, pois ela serve para modificar completamente um unico recurso existente e o que endpoint que serve para adicionar é o Post.




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});