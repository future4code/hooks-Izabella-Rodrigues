import express, {Express, Request, Response} from "express";
import cors from "cors";
import connection from "./database/connection";

const app = express();

app.use(express.json());
app.use(cors());


app.get("/user", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const search = req.query.search

    if(search) {
      const result = await connection.raw(`
        SELECT * FROM Funcionarios
        WHERE nome = "%${search}%";
      `)
      return res.status(200).send(result[0])
    }
    
    const result = await connection.raw(`
        SELECT * FROM Funcionarios;
    `)

    res.status(200).send(result[0])

  } catch (error:any) {
    res.status(errorCode).send(error.message)
  }
})

app.post("/user/new", async (req: Request, res: Response) => {
 let errorCode = 400
 try {
    const name = req.body.name
    const email = req.body.email

    if (!name || !email){
      throw new Error ("É necessário informar um valor válido!!")
    }

    if (name && email === String) {
      throw new Error ("Name e Email precisal ser uma String!!")
    }

    if (!email.includes("@")) {
      throw new Error ("Email inválido!")
    }

    const newUser = {
      id: Number(Date.now()),
      name: name,
      email: email
    }

    await connection.raw(`
      INSERT INTO Funcionarios(id, nome, email)
      VALUES (${newUser.id}, "${newUser.name}", "${newUser.email}")
    `);

    res.status(200).send(`O usuario ${newUser.name} foi adicionado com sucesso!`)
  
 } catch (error: any) {
    res.status(errorCode).send(error.message)
 }
})


app.put("/user/edit/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)
    const {email} = req.body

    if (!id || id === null) {
      throw new Error ("Id inválido ou inexistente")
    }

    if (email.length === 0) {
      throw new Error ("Email em braco, você precisa informar um email!")
    }

    if(typeof email !== "string"){
      throw new Error('Tipo invalido')
    }

    if (!email.includes("@")) {
      throw new Error ("Email inválido!")
    }

    const users = await connection.raw(`
      SELECT * FROM Funcionarios
      WHERE id = ${id};
    `)

    const searchUsers = users[0]

    if (!searchUsers) {
      errorCode = 400
      throw new Error("O id não existe no banco de dados!")
    }

    await connection.raw(`
      UPDATE Funcionarios
      SET email = "${email}"
      WHERE Id = ${id};
    `)

    res.status(200).send(`O email foi alterado para ${email}`)

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

app.delete("/user/delete/:id", async(req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)

    const user = await connection.raw(`
      SELECT * FROM Funcionarios
      WHERE id = ${id};
    `)

    if (user[0].length === 0) {
      throw new Error("Usuario não encontrado no banco de dados!")
    }

    await connection.raw(`
      DELETE FROM Funcionarios
      WHERE id = ${id};
    `)

    res.status(200).send("Usuário deletado com Sucesso!")
    
  } catch (error:any) {
    res.status(errorCode).send(error.message)
  }  
})




app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});